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
    TAG_COLORS,
} from "@/static/constants";
import { QueriedHTMLElements } from "@/static/types";
import { toKebabCase } from "@/utils/helpers/helpers";

import JournalEntry, { JournalEntryProps } from "./JournalEntry";

describe("JournalEntry", () => {
    /** The minimum number of tags an entry can have */
    const MIN_TAGS: number = 1;
    /** The maximum number of tags an entry can have */
    const MAX_TAGS: number = 4;

    let tags: QueriedHTMLElements;

    /**
     * Renders the component
     *
     * @param {JournalEntryProps} props Props to pass to the component
     */
    const renderJournalEntry = (props: JournalEntryProps): void => {
        render(<JournalEntry entry={props.entry} filter={props.filter} />);
        tags = screen.queryAllByRole(LIST_ITEM);
    };

    it("Renders correctly", () => {
        renderJournalEntry({ entry: mockJournalEntry, filter: NO_FILTER });
        expect(screen.queryByRole(HEADING)).toHaveTextContent(
            mockJournalEntry.title,
        );
        expect(screen.queryByTestId("timestamp")).toHaveTextContent(
            mockJournalEntry.timestamp,
        );
        expect(screen.queryByRole(LIST)).toBeInTheDocument();
        expect(tags.length).toBe(MAX_TAGS);
        expect(screen.queryByTestId("preview")).toHaveTextContent(
            mockJournalEntry.lifeLogs[0],
        );
        expect(screen.queryByRole(LINK)).toHaveAttribute(
            HREF,
            `/journals/${toKebabCase(mockJournalEntry.title)}`,
        );
    });

    it("Renders correctly with missing tags", () => {
        renderJournalEntry({ entry: mockLifeLogsEntry, filter: NO_FILTER });
        expect(tags.length).toBe(MIN_TAGS);
    });

    it("Correctly highlights tags that are filtered for", () => {
        renderJournalEntry({ entry: mockJournalEntry, filter: LIFE_LOGS });
        const highlightedTag: HTMLElement = tags[0];
        const unhighlightedTag: HTMLElement = tags[1];
        expect(highlightedTag).toHaveTextContent("Life Logs");
        expect(highlightedTag).toHaveStyle({
            backgroundColor: TAG_COLORS[LIFE_LOGS],
        });
        expect(unhighlightedTag).not.toHaveTextContent("Life Logs");
        expect(unhighlightedTag).not.toHaveStyle({
            backgroundColor: TAG_COLORS[LIFE_LOGS],
        });
    });
});
