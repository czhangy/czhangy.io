import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { EntrySection } from "@prisma/client";

import { mockJournalEntry, mockLifeLogsEntry } from "@/mocks/entries";
import { HEADING, SECTION_TYPES } from "@/static/constants";
import { Entry, QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import JournalEntryPage, { JournalEntryPageProps } from "./JournalEntryPage";

describe("JournalEntryPage", () => {
    /**
     * Checks to make sure text content is rendered correctly
     *
     * @param {Entry} entry The entry object being checked
     */
    const assertTextRenders = (entry: Entry): void => {
        // Check title line
        const headings: QueriedHTMLElements = screen.queryAllByRole(HEADING);
        const title: HTMLElement = headings[0];
        const timestamp: QueriedHTMLElement = screen.queryByTestId("timestamp");
        expect(title).toHaveTextContent(entry.title);
        expect(timestamp).toHaveTextContent(entry.timestamp);

        // Check section titles
        expect(headings).toHaveLength(entry.sections.length + 1);
        entry.sections.forEach((section: EntrySection, idx: number) => {
            expect(headings[idx + 1]).toHaveTextContent(
                `${SECTION_TYPES[section.type].emoji} ${SECTION_TYPES[section.type].displayName}: ${section.title}`,
            );
        });

        // Check paragraph contents
        const paragraphs: QueriedHTMLElements =
            screen.queryAllByTestId("paragraph");
        const paragraphContents: string[] = entry.sections
            .map((section: EntrySection) => section.paragraphs)
            .flat();
        expect(paragraphs).toHaveLength(paragraphContents.length);
        paragraphs.forEach((paragraph: HTMLElement, idx: number) => {
            expect(paragraph).toHaveTextContent(paragraphContents[idx]);
        });
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

    it("Renders correctly with a single section", () => {
        renderJournalEntryPage({ entry: mockLifeLogsEntry });
        assertTextRenders(mockLifeLogsEntry);
    });
});
