import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import {
    mockCareerChroniclesEntry,
    mockGamingGrindEntry,
    mockLifeLogsEntry,
    mockRandomRavingsEntry,
} from "@/mocks/entries";
import {
    HEADING,
    INPUT,
    LIFE_LOGS,
    NO_FILTER,
    SECTION_LIST,
} from "@/static/constants";
import {
    Entry,
    EntrySection,
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
        mockGamingGrindEntry,
        mockRandomRavingsEntry,
    ];
    /** The number of instances of text that should show up when filtered (Menu + Title + Tag) */
    const FILTERED_COUNT: number = 3;
    /** The number of instances of text that should show up when searched (Title) */
    const SEARCHED_COUNT: number = 1;
    /** The option index of descending sort */
    const DESC_IDX: number = 0;
    /** The option index of ascending sort */
    const ASC_IDX: number = 1;
    /** The option index of no filter */
    const NO_FILTER_IDX: number = 2;
    /** The option index of Life Logs */
    const LIFE_LOGS_IDX: number = 3;

    let options: QueriedHTMLElements;
    let searchBar: QueriedHTMLElement;

    /**
     * Checks that the correct entries are displayed when filtering
     *
     * @param {string} query The string used as the search query
     */
    const assertEntriesSearch = (query: string): void => {
        expect(screen.queryAllByTestId("journal-entry").length).toBe(
            SEARCHED_COUNT,
        );
        expect(screen.getByRole(HEADING).textContent).toContain(query);
    };

    /**
     * Checks that the correct entries are displayed when searching
     *
     * @param {number} numEntries The number of entries that should be expected
     * @param {string} filter The current filter setting to test
     */
    const assertEntriesFilter = (
        numEntries: number,
        filter: string,
        displayName?: string,
    ): void => {
        expect(screen.queryAllByTestId("journal-entry").length).toBe(
            numEntries,
        );
        if (!displayName) {
            return;
        }
        expect(screen.queryAllByText(displayName).length).toBe(FILTERED_COUNT);
        SECTION_LIST.forEach((section: EntrySection) => {
            if (filter !== section.slug) {
                expect(screen.queryAllByText(section.displayName).length).toBe(
                    1,
                );
            }
        });
    };

    /**
     * Renders the component and sets local variables
     */
    const renderJournalsPage = (): void => {
        render(<JournalsPage entries={MOCK_ENTRIES} />);
        options = screen.queryAllByTestId("option");
        searchBar = screen.queryByRole(INPUT);
    };

    it("Renders correctly with defaults", () => {
        renderJournalsPage();
        expect(screen.queryByTestId("utility-bar")).toBeInTheDocument();
        expect(screen.queryAllByTestId("journal-entry").length).toBe(
            MOCK_ENTRIES.length,
        );
        expect(screen.queryAllByTestId("timestamp")[0]).toHaveTextContent(
            mockRandomRavingsEntry.timestamp,
        );
    });

    it("Sorts by descending correctly", () => {
        renderJournalsPage();
        fireEvent.click(options[DESC_IDX]);
        expect(screen.queryAllByTestId("timestamp")[0]).toHaveTextContent(
            mockRandomRavingsEntry.timestamp,
        );
    });

    it("Sorts by ascending correctly", () => {
        renderJournalsPage();
        fireEvent.click(options[ASC_IDX]);
        expect(screen.queryAllByTestId("timestamp")[0]).toHaveTextContent(
            mockLifeLogsEntry.timestamp,
        );
    });

    it("Filters with no filter correctly", () => {
        renderJournalsPage();
        fireEvent.click(options[NO_FILTER_IDX]);
        assertEntriesFilter(MOCK_ENTRIES.length, NO_FILTER);
    });

    SECTION_LIST.forEach((section: EntrySection, idx: number) => {
        it(`Filters with ${section.displayName} correctly`, () => {
            renderJournalsPage();
            // Account for offset of other options
            fireEvent.click(options[idx + LIFE_LOGS_IDX]);
            assertEntriesFilter(1, section.slug, section.displayName);
        });
    });

    it("Filters highlight matching tags", () => {
        const lifeLogsSection: EntrySection = SECTION_LIST.find(
            (section: EntrySection) => section.slug === LIFE_LOGS,
        )!;
        renderJournalsPage();
        fireEvent.click(options[LIFE_LOGS_IDX]);
        const tag: QueriedHTMLElement = screen.queryByTestId("entry-tag");
        expect(tag).toHaveTextContent(lifeLogsSection.displayName);
        expect(tag).toHaveStyle({
            backgroundColor: lifeLogsSection.color,
        });
    });

    it("Searches correctly with a full query", () => {
        renderJournalsPage();
        const query: string = "Life Logs Test Entry";
        fireEvent.change(searchBar!, { target: { value: query } });
        assertEntriesSearch(query);
    });

    it("Searches correctly with a partial query", () => {
        renderJournalsPage();
        const query: string = "Life Logs Test";
        fireEvent.change(searchBar!, { target: { value: query } });
        assertEntriesSearch(query);
    });

    it("Searches correctly with a case mismatch", () => {
        renderJournalsPage();
        const query: string = "life";
        fireEvent.change(searchBar!, { target: { value: query } });
        assertEntriesSearch(capitalizeWord(query));
    });

    it("Shows an error message when no entries match the selected filters", () => {
        renderJournalsPage();
        fireEvent.change(searchBar!, { target: { value: "Blah Blah Blah" } });
        expect(screen.queryAllByTestId("journal-entry").length).toBe(0);
        expect(screen.queryByText("No matches!")).toBeInTheDocument();
    });

    it("Searches highlight matching substrings", () => {
        renderJournalsPage();
        const query: string = "Logs Test Entry";
        fireEvent.change(searchBar!, { target: { value: query } });
        expect(screen.queryByText(query)).toHaveClass("highlight");
    });
});
