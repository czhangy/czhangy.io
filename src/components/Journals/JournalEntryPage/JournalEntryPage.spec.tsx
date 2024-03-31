import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    mockJournalEntry,
    mockMissingSectionJournalEntry,
} from "@/mocks/entries";
import { HEADING } from "@/static/constants";
import { Entry, QueriedHTMLElements } from "@/static/types";

import JournalEntryPage, { JournalEntryPageProps } from "./JournalEntryPage";

describe("JournalEntryPage", () => {
    /**
     * Checks to make sure text content is rendered correctly
     *
     * @param {Entry} entry The entry object being checked
     */
    const assertTextRenders = (entry: Entry): void => {
        const headings: QueriedHTMLElements = screen.queryAllByRole(HEADING);
        expect(screen.queryByTestId("timestamp")).toHaveTextContent(
            entry.timestamp,
        );
        expect(headings[0]).toHaveTextContent(entry.title);
        expect(headings.length).toBe(
            Object.values(entry).filter(
                (value: string | string[]) =>
                    Array.isArray(value) && value.length > 0,
            ).length + 1,
        );
        expect(screen.queryAllByTestId("paragraph").length).toBe(
            Object.values(entry)
                .filter((value: string | string[]) => Array.isArray(value))
                .flat().length,
        );
    };

    /**
     * Renders the component and sets local variables
     *
     * @param {JournalEntryPageProps} props Props to pass to the component
     */
    const renderJournalEntryPage = (props: JournalEntryPageProps): void => {
        render(<JournalEntryPage entry={props.entry} />);
    };

    it("Renders correctly", () => {
        renderJournalEntryPage({ entry: mockJournalEntry });
        assertTextRenders(mockJournalEntry);
    });

    it("Renders correctly with a missing section", () => {
        renderJournalEntryPage({ entry: mockMissingSectionJournalEntry });
        assertTextRenders(mockMissingSectionJournalEntry);
    });
});
