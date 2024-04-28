import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ALT, IMAGE, INPUT, PLACEHOLDER } from "@/static/constants";
import { QueriedHTMLElement } from "@/static/types";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
    /**
     * A change handler for testing purposes
     */
    const mockChangeHandler = jest.fn().mockImplementation();

    /**
     * Renders the componen
     */
    const renderSearchBar = (): void => {
        render(<SearchBar onChange={mockChangeHandler} />);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderSearchBar();

            // Check for icon
            const searchIcon: QueriedHTMLElement = screen.queryByRole(IMAGE);
            expect(searchIcon).toHaveAttribute(ALT, "Search");

            // Check for input
            const queryInput: QueriedHTMLElement = screen.queryByRole(INPUT);
            expect(queryInput).toHaveAttribute(PLACEHOLDER, "Search...");
        });
    });

    describe("Inputs", () => {
        it("Calls the change handler correctly", () => {
            renderSearchBar();

            // Input a query
            const query: string = "Test";
            const queryInput: HTMLInputElement = screen.getByRole(INPUT);
            fireEvent.change(queryInput, { target: { value: query } });

            // Check for call
            expect(mockChangeHandler).toHaveBeenCalledWith(query);
        });
    });
});
