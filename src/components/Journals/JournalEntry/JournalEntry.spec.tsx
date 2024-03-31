import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    mockJournalEntry,
    mockMissingSectionJournalEntry,
} from "@/mocks/entries";
import { HEADING, HREF, LINK, LIST, LIST_ITEM } from "@/static/constants";
import { QueriedHTMLElements } from "@/static/types";
import { toKebabCase } from "@/utils/helpers/helpers";

import JournalEntry, { JournalEntryProps } from "./JournalEntry";

describe("JournalEntry", () => {
    /** The maximum number of tags an entry can have */
    const MAX_TAGS: number = 4;

    let tags: QueriedHTMLElements;

    /**
     * Renders the component
     *
     * @param {JournalEntryProps} props Props to pass to the component
     */
    const renderJournalEntry = (props: JournalEntryProps): void => {
        render(<JournalEntry entry={props.entry} />);
        tags = screen.queryAllByRole(LIST_ITEM);
    };

    it("Renders correctly", () => {
        renderJournalEntry({ entry: mockJournalEntry });
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
        renderJournalEntry({ entry: mockMissingSectionJournalEntry });
        expect(tags.length).toBe(MAX_TAGS - 1);
    });
});
