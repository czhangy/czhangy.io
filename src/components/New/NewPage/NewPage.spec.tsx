import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { PLACEHOLDER, SECTION_TYPES } from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import NewPage from "./NewPage";

describe("NewPage", () => {
    /**
     * Renders the component
     */
    const renderNewPage = (): void => {
        render(<NewPage />);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderNewPage();

            // Check for title input
            const titleInput: QueriedHTMLElement =
                screen.queryByTestId("title-input");
            expect(titleInput).toHaveAttribute(PLACEHOLDER, "Title");

            // Check for section menu
            const sectionMenu: QueriedHTMLElement =
                screen.queryByTestId("section-menu");
            const sectionOptions: QueriedHTMLElements =
                screen.queryAllByTestId("section-option");
            expect(sectionMenu).toBeInTheDocument();
            expect(sectionOptions).toHaveLength(
                Object.keys(SECTION_TYPES).length,
            );

            // Check for submit button
            const submitButton: QueriedHTMLElement =
                screen.queryByTestId("submit-button");
            expect(submitButton).toBeInTheDocument();
        });
    });

    describe("Sections", () => {
        it("Adds new sections correctly", () => {
            renderNewPage();

            // Add new section
            let sectionOptions: HTMLButtonElement[] =
                screen.getAllByTestId("section-option");
            fireEvent.click(sectionOptions[0]);

            // Check for new section
            let newSections: QueriedHTMLElements =
                screen.queryAllByTestId("new-section");
            expect(newSections).toHaveLength(1);

            // Check that selected section was deleted from options
            sectionOptions = screen.getAllByTestId("section-option");
            const selectedOption: QueriedHTMLElement = screen.queryByText(
                Object.values(SECTION_TYPES)[0].displayName,
            );
            expect(sectionOptions).toHaveLength(
                Object.keys(SECTION_TYPES).length - 1,
            );
            expect(selectedOption).not.toBeInTheDocument();

            // Add another section
            fireEvent.click(sectionOptions[0]);

            // Check new section is appended
            newSections = screen.queryAllByTestId("new-section");
            expect(newSections).toHaveLength(2);
        });
    });

    describe("Submitting", () => {
        it("Submits correctly", () => {
            renderNewPage();

            // Enter a title
            const titleInput: HTMLInputElement =
                screen.getByTestId("title-input");
            fireEvent.change(titleInput, { target: { value: "Test Title" } });
        });
    });
});
