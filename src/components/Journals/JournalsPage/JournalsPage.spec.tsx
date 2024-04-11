import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { EntrySection } from "@prisma/client";

import {
    mockCareerChroniclesEntry,
    mockGamingGrindEntry,
    mockLifeLogsEntry,
    mockRandomRavingsEntry,
    mockWarriorsWatchEntry,
} from "@/mocks/entries";
import {
    HEADING,
    INPUT,
    LIFE_LOGS,
    NO_FILTER,
    SECTION_TYPES,
} from "@/static/constants";
import {
    Entry,
    EntrySectionType,
    QueriedHTMLElement,
    QueriedHTMLElements,
} from "@/static/types";
import { capitalizeWord } from "@/utils/helpers/helpers";

import JournalsPage from "./JournalsPage";

describe("JournalsPage", () => {
    /** The mock entries used for testing */
    const MOCK_ENTRIES: Entry[] = [
        mockLifeLogsEntry,
        mockCareerChroniclesEntry,
        mockWarriorsWatchEntry,
        mockGamingGrindEntry,
        mockRandomRavingsEntry,
    ];

    /**
     * Checks that the correct entries are displayed when searching
     *
     * @param {number} numEntries The number of entries that should be expected
     * @param {string} filter The current filter setting to test
     */
    const assertEntriesFilter = (filter: string): void => {
        // Check only entries with a matching tag are rendered
        const entries: HTMLElement[] = screen.getAllByTestId("journal-entry");
        if (filter === NO_FILTER) {
            // No entries should be filtered out
            expect(entries).toHaveLength(MOCK_ENTRIES.length);
        } else {
            // Entries without this tag should be filtered out
            expect(entries).toHaveLength(
                MOCK_ENTRIES.filter((entry: Entry) => {
                    return entry.sections.find(
                        (section: EntrySection) => section.type === filter,
                    );
                }).length,
            );
        }
    };

    /**
     * Checks that the correct entries are displayed when filtering
     *
     * @param {string} query The string used as the search query
     */
    const assertEntriesSearch = (query: string): void => {
        // Check for entry count
        const entries: HTMLElement[] = screen.getAllByTestId("journal-entry");
        expect(entries).toHaveLength(
            MOCK_ENTRIES.filter((entry: Entry) => entry.title.includes(query))
                .length,
        );

        // Check entry titles
        const heading: HTMLElement = screen.getByRole(HEADING);
        expect(heading.textContent).toContain(query);
    };

    /**
     * Renders the component
     */
    const renderJournalsPage = (): void => {
        render(<JournalsPage entries={MOCK_ENTRIES} />);
    };

    describe("Rendering", () => {
        it("Renders correctly with defaults", () => {
            renderJournalsPage();

            // Check for utility bar
            const utilityBar: QueriedHTMLElement =
                screen.queryByTestId("utility-bar");
            expect(utilityBar).toBeInTheDocument();

            // Check for entries
            const entries: QueriedHTMLElements =
                screen.queryAllByTestId("journal-entry");
            expect(entries).toHaveLength(MOCK_ENTRIES.length);

            // Check that entries are sorted in descending order
            const timestamps: QueriedHTMLElements =
                screen.queryAllByTestId("timestamp");
            expect(timestamps[0]).toHaveTextContent(
                mockRandomRavingsEntry.timestamp,
            );
        });
    });

    describe("Sorting", () => {
        it("Sorts by descending correctly", () => {
            renderJournalsPage();

            // Sort by descending
            const sortOptions: HTMLElement[] =
                screen.getAllByTestId("sort-option");
            fireEvent.click(sortOptions[0]);

            // Check first timestamp
            const timestamps: HTMLElement[] =
                screen.getAllByTestId("timestamp");
            expect(timestamps[0]).toHaveTextContent(
                MOCK_ENTRIES.map((entry: Entry) => entry.timestamp).sort(
                    (t1: string, t2: string) => {
                        return new Date(t2).getTime() - new Date(t1).getTime();
                    },
                )[0],
            );
        });

        it("Sorts by ascending correctly", () => {
            renderJournalsPage();

            // Sort by ascending
            const sortOptions: HTMLElement[] =
                screen.getAllByTestId("sort-option");
            fireEvent.click(sortOptions[1]);

            // Check first timestamp
            const timestamps: HTMLElement[] =
                screen.getAllByTestId("timestamp");
            expect(timestamps[0]).toHaveTextContent(
                MOCK_ENTRIES.map((entry: Entry) => entry.timestamp).sort(
                    (t1: string, t2: string) => {
                        return new Date(t1).getTime() - new Date(t2).getTime();
                    },
                )[0],
            );
        });
    });

    describe("Filtering", () => {
        it("Filters with no filter correctly", () => {
            renderJournalsPage();

            // Select no filter
            const filterOptions: HTMLElement[] =
                screen.getAllByTestId("filter-option");
            fireEvent.click(filterOptions[0]);

            // Check filtered entries
            assertEntriesFilter(NO_FILTER);
        });

        Object.entries(SECTION_TYPES).forEach(
            ([slug, entryType]: [string, EntrySectionType], idx: number) => {
                it(`Filters with ${entryType.displayName} correctly`, () => {
                    renderJournalsPage();

                    // Click corresponding filter and check
                    const filterOptions: HTMLElement[] =
                        screen.getAllByTestId("filter-option");
                    fireEvent.click(filterOptions[idx + 1]); // Account for offset of no filter
                    assertEntriesFilter(slug);
                });
            },
        );

        it("Filters highlight matching tags", () => {
            renderJournalsPage();

            // Filter by Life Logs
            const filterOptions: HTMLElement[] =
                screen.getAllByTestId("filter-option");
            fireEvent.click(filterOptions[1]);

            // Check tag (expect only 1 tag on page)
            const tag: QueriedHTMLElement = screen.getByTestId("entry-tag");
            expect(tag).toHaveTextContent(SECTION_TYPES[LIFE_LOGS].displayName);
            expect(tag).toHaveStyle({
                backgroundColor: SECTION_TYPES[LIFE_LOGS].color,
            });
        });
    });

    describe("Searching", () => {
        it("Searches correctly with a full query", () => {
            renderJournalsPage();

            // Search for full title
            const query: string = "Life Logs Test Entry";
            const searchBar: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(searchBar!, { target: { value: query } });

            // Check for entries to be filtered
            assertEntriesSearch(query);
        });

        it("Searches correctly with a partial query", () => {
            renderJournalsPage();

            // Search for partial title
            const query: string = "Life Logs Test";
            const searchBar: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(searchBar!, { target: { value: query } });

            // Check for entries to be filtered
            assertEntriesSearch(query);
        });

        it("Searches correctly with a case mismatch", () => {
            renderJournalsPage();

            // Search for partial title with wrong case
            const query: string = "life";
            const searchBar: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(searchBar!, { target: { value: query } });

            // Check for entries to be filtered
            assertEntriesSearch(capitalizeWord(query));
        });

        it("Shows an error message when no entries match the selected filters", () => {
            renderJournalsPage();

            // Search for a query that matches 0 titles
            const searchBar: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(searchBar!, {
                target: { value: "Blah Blah Blah" },
            });

            // Check that no entries are shown
            const entries: HTMLElement[] =
                screen.queryAllByTestId("journal-entry");
            expect(entries).toHaveLength(0);

            // Check that the error message shows
            const errorMessage: QueriedHTMLElement =
                screen.queryByText("No matches!");
            expect(errorMessage).toBeInTheDocument();
        });

        it("Searches highlight matching substrings", () => {
            renderJournalsPage();

            // Make a search query
            const query: string = "Logs Test Entry";
            const searchBar: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(searchBar!, { target: { value: query } });

            // Check that the substring is highlighted
            const match: QueriedHTMLElement = screen.queryByText(query);
            expect(match).toHaveClass("highlight");
        });
    });
});
