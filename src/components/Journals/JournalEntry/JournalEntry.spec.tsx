import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { mockJournalEntry, mockLifeLogsEntry } from "@/mocks/entries";
import {
    HEADING,
    HREF,
    LIFE_LOGS,
    LINK,
    LIST,
    LIST_ITEM,
    NO_FILTER,
    SECTION_TYPES,
} from "@/static/constants";
import {
    EntrySectionType,
    QueriedHTMLElement,
    QueriedHTMLElements,
} from "@/static/types";
import { capitalizeWord, toKebabCase } from "@/utils/helpers/helpers";

import JournalEntry, { JournalEntryProps } from "./JournalEntry";

describe("JournalEntry", () => {
    let tags: QueriedHTMLElements;

    /**
     * Renders the component
     *
     * @param {JournalEntryProps} props Props to pass to the component
     */
    const renderJournalEntry = (props: JournalEntryProps): void => {
        render(
            <JournalEntry
                entry={props.entry}
                filter={props.filter}
                query={props.query}
            />,
        );
        tags = screen.queryAllByRole(LIST_ITEM);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderJournalEntry({
                entry: mockJournalEntry,
                filter: NO_FILTER,
                query: "",
            });

            // Check the heading
            const title: QueriedHTMLElement = screen.queryByRole(HEADING);
            const timestamp: QueriedHTMLElement =
                screen.queryByTestId("timestamp");
            expect(title).toHaveTextContent(mockJournalEntry.title);
            expect(timestamp).toHaveTextContent(mockJournalEntry.timestamp);

            // Check the tags list
            const tagList: QueriedHTMLElement = screen.queryByRole(LIST);
            expect(tagList).toBeInTheDocument();
            expect(tags).toHaveLength(mockJournalEntry.sections.length);

            // Check the preview
            const preview: QueriedHTMLElement = screen.queryByTestId("preview");
            expect(preview).toHaveTextContent(
                mockJournalEntry.sections[0].paragraphs[0],
            );

            // Check the body link
            const link: QueriedHTMLElement = screen.queryByRole(LINK);
            expect(link).toHaveAttribute(
                HREF,
                `/journals/${toKebabCase(mockJournalEntry.title)}`,
            );
        });

        it("Renders correctly with less tags", () => {
            renderJournalEntry({
                entry: mockLifeLogsEntry,
                filter: NO_FILTER,
                query: "",
            });
            expect(tags).toHaveLength(mockLifeLogsEntry.sections.length);
        });
    });

    describe("Filtering", () => {
        it("Correctly highlights tags that are filtered for", () => {
            renderJournalEntry({
                entry: mockJournalEntry,
                filter: LIFE_LOGS,
                query: "",
            });

            // Check matching tags highlight
            const lifeLogsTag: HTMLElement | undefined = screen
                .getAllByRole(LIST_ITEM)
                .find(
                    (tag: HTMLElement) =>
                        tag.textContent ===
                        SECTION_TYPES[LIFE_LOGS].displayName,
                );
            expect(lifeLogsTag).toHaveStyle({
                backgroundColor: SECTION_TYPES[LIFE_LOGS].color,
            });

            // Check non-matching tags do not highlight
            tags.forEach((tag: HTMLElement) => {
                // Ignore the highlighted tag
                if (tag.textContent !== SECTION_TYPES[LIFE_LOGS].displayName) {
                    const slug: string = Object.entries(SECTION_TYPES).find(
                        ([_, entrySectionType]: [string, EntrySectionType]) => {
                            return (
                                entrySectionType.displayName === tag.textContent
                            );
                        },
                    )![0];
                    expect(tag).not.toHaveStyle({
                        backgroundColor: SECTION_TYPES[slug].color,
                    });
                }
            });
        });
    });

    describe("Searches", () => {
        const assertTextHighlighted = (query: string) => {
            const matchingText: QueriedHTMLElement = screen.getByText(query);
            expect(matchingText).toHaveClass("highlight");
        };

        it("Correctly highlights substrings at the start of the title that are searched for", () => {
            const query: string = "Test";
            renderJournalEntry({
                entry: mockJournalEntry,
                filter: NO_FILTER,
                query: query,
            });

            assertTextHighlighted(query);
        });

        it("Correctly highlights substrings in the middle of the title that are searched for", () => {
            const query: string = "est En";
            renderJournalEntry({
                entry: mockJournalEntry,
                filter: NO_FILTER,
                query: query,
            });

            assertTextHighlighted(query);
        });

        it("Correctly highlights substrings at the end of the title that are searched for", () => {
            const query: string = "Entry";
            renderJournalEntry({
                entry: mockJournalEntry,
                filter: NO_FILTER,
                query: query,
            });

            assertTextHighlighted(query);
        });

        it("Correctly highlights substrings with a case mismatch that are searched for", () => {
            const query: string = "test";
            renderJournalEntry({
                entry: mockJournalEntry,
                filter: NO_FILTER,
                query: query,
            });

            assertTextHighlighted(capitalizeWord(query));
        });
    });
});
