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
    SECTION_LIST,
} from "@/static/constants";
import { Entry, EntrySection, QueriedHTMLElements } from "@/static/types";
import { capitalizeWord, toKebabCase } from "@/utils/helpers/helpers";

import JournalEntry, { JournalEntryProps } from "./JournalEntry";

describe("JournalEntry", () => {
    /** The minimum number of tags an entry can have */
    const MIN_TAGS: number = 1;
    /** The maximum number of tags an entry can have */
    const MAX_TAGS: number = 4;
    /** The class name of the span used to highlight the title */
    const HIGHLIGHT_CLASS: string = "highlight";

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

    it("Renders correctly", () => {
        renderJournalEntry({
            entry: mockJournalEntry,
            filter: NO_FILTER,
            query: "",
        });
        expect(screen.queryByRole(HEADING)).toHaveTextContent(
            mockJournalEntry.title,
        );
        expect(screen.queryByTestId("timestamp")).toHaveTextContent(
            mockJournalEntry.timestamp,
        );
        expect(screen.queryByRole(LIST)).toBeInTheDocument();
        expect(tags.length).toBe(MAX_TAGS);
        expect(screen.queryByTestId("preview")).toHaveTextContent(
            mockJournalEntry[
                SECTION_LIST.find(
                    (section: EntrySection) =>
                        mockJournalEntry[section.slug as keyof Entry].length >
                        0,
                )!.slug as keyof Entry
            ][0],
        );
        expect(screen.queryByRole(LINK)).toHaveAttribute(
            HREF,
            `/journals/${toKebabCase(mockJournalEntry.title)}`,
        );
    });

    it("Renders correctly with missing tags", () => {
        renderJournalEntry({
            entry: mockLifeLogsEntry,
            filter: NO_FILTER,
            query: "",
        });
        expect(tags.length).toBe(MIN_TAGS);
    });

    it("Correctly highlights tags that are filtered for", () => {
        const lifeLogsSection: EntrySection = SECTION_LIST.find(
            (section: EntrySection) => section.slug === LIFE_LOGS,
        )!;
        renderJournalEntry({
            entry: mockJournalEntry,
            filter: lifeLogsSection.slug,
            query: "",
        });
        const highlightedTag: HTMLElement = tags[0];
        const unhighlightedTag: HTMLElement = tags[1];
        expect(highlightedTag).toHaveTextContent(lifeLogsSection.displayName);
        expect(highlightedTag).toHaveStyle({
            backgroundColor: lifeLogsSection.color,
        });
        expect(unhighlightedTag).not.toHaveTextContent(
            lifeLogsSection.displayName,
        );
        expect(unhighlightedTag).not.toHaveStyle({
            backgroundColor: lifeLogsSection.color,
        });
    });

    it("Correctly highlights substrings at the start of the title that are searched for", () => {
        const query: string = "Test";
        renderJournalEntry({
            entry: mockJournalEntry,
            filter: NO_FILTER,
            query: query,
        });
        expect(screen.getByText(query)).toHaveClass(HIGHLIGHT_CLASS);
    });

    it("Correctly highlights substrings in the middle of the title that are searched for", () => {
        const query: string = "est En";
        renderJournalEntry({
            entry: mockJournalEntry,
            filter: NO_FILTER,
            query: query,
        });
        expect(screen.getByText(query)).toHaveClass(HIGHLIGHT_CLASS);
    });

    it("Correctly highlights substrings at the end of the title that are searched for", () => {
        const query: string = "Entry";
        renderJournalEntry({
            entry: mockJournalEntry,
            filter: NO_FILTER,
            query: query,
        });
        expect(screen.getByText(query)).toHaveClass(HIGHLIGHT_CLASS);
    });

    it("Correctly highlights substrings with a case mismatch that are searched for", () => {
        const query: string = "test";
        renderJournalEntry({
            entry: mockJournalEntry,
            filter: NO_FILTER,
            query: query,
        });
        expect(screen.getByText(capitalizeWord(query))).toHaveClass(
            HIGHLIGHT_CLASS,
        );
    });
});
