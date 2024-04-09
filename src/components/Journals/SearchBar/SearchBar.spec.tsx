import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ALT, BUTTON, IMAGE, INPUT, PLACEHOLDER } from "@/static/constants";
import { QueriedHTMLElement } from "@/static/types";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
    /** The alt text of the icon */
    const ICON_ALT: string = "Search";
    /** The placeholder text of the input */
    const PLACEHOLDER_TEXT: string = "Search...";

    let button: QueriedHTMLElement;
    let input: QueriedHTMLElement;

    /**
     * A change handler for testing purposes
     */
    const mockChangeHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
s     */
    const renderSearchBar = (): void => {
        render(<SearchBar onChange={mockChangeHandler} />);
        button = screen.queryByRole(BUTTON);
        input = screen.queryByRole(INPUT);
    };

    it("Renders correctly", () => {
        renderSearchBar();
        expect(button).toBeInTheDocument();
        expect(screen.queryByRole(IMAGE)).toHaveAttribute(ALT, ICON_ALT);
        expect(input).toHaveAttribute(PLACEHOLDER, PLACEHOLDER_TEXT);
    });

    it("Calls the change handler correctly", () => {
        renderSearchBar();
        const query: string = "Test";
        fireEvent.change(input!, { target: { value: query } });
        expect(mockChangeHandler).toHaveBeenCalledWith(query);
    });

    it("Focuses on the input when the button is clicked", () => {
        renderSearchBar();
        fireEvent.click(button!);
        expect(input).toHaveFocus();
    });
});
