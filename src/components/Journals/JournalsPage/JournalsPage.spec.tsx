import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import {
    mockJournalEntry,
    mockMissingSectionJournalEntry,
} from "@/mocks/entries";
import { Entry, QueriedHTMLElements } from "@/static/types";

import JournalsPage from "./JournalsPage";

describe("JournalsPage", () => {
    /** The mock entries used for testing */
    const MOCK_ENTRIES: Entry[] = [
        mockJournalEntry,
        mockMissingSectionJournalEntry,
    ];
    /** The button index of descending sort */
    const DESC_IDX: number = 0;
    /** The button index of ascending sort */
    const ASC_IDX: number = 1;

    let options: QueriedHTMLElements;

    /**
     * Renders the component and sets local variables
     */
    const renderJournalsPage = (): void => {
        render(<JournalsPage entries={MOCK_ENTRIES} />);
        options = screen.queryAllByTestId("option");
    };

    it("Renders correctly with defaults", () => {
        renderJournalsPage();
        expect(screen.queryByTestId("utility-bar")).toBeInTheDocument();
        expect(screen.queryAllByTestId("journal-entry").length).toBe(
            MOCK_ENTRIES.length,
        );
        expect(screen.queryAllByTestId("timestamp")[0]).toHaveTextContent(
            mockMissingSectionJournalEntry.timestamp,
        );
    });

    it("Sorts by descending correctly", () => {
        renderJournalsPage();
        fireEvent.click(options[DESC_IDX]);
        expect(screen.queryAllByTestId("timestamp")[0]).toHaveTextContent(
            mockMissingSectionJournalEntry.timestamp,
        );
    });

    it("Sorts by ascending correctly", () => {
        renderJournalsPage();
        fireEvent.click(options[ASC_IDX]);
        expect(screen.queryAllByTestId("timestamp")[0]).toHaveTextContent(
            mockJournalEntry.timestamp,
        );
    });
});
