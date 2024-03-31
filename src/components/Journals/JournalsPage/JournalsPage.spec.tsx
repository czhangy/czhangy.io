import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    mockJournalEntry,
    mockMissingSectionJournalEntry,
} from "@/mocks/entries";
import { Entry, QueriedHTMLElements } from "@/static/types";

import JournalsPage, { JournalsPageProps } from "./JournalsPage";

describe("JournalsPage", () => {
    /**
     * Renders the component
     */
    const renderJournalsPage = (props: JournalsPageProps): void => {
        render(<JournalsPage entries={props.entries} />);
    };

    it("Renders correctly", () => {
        const entries: Entry[] = [
            mockJournalEntry,
            mockMissingSectionJournalEntry,
        ];
        renderJournalsPage({
            entries: entries,
        });
        const cards: QueriedHTMLElements =
            screen.queryAllByTestId("journal-entry");
        expect(cards.length).toBe(entries.length);
    });
});
