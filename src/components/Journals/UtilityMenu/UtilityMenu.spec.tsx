import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { ALT, IMAGE, LIST, LIST_ITEM } from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import UtilityMenu from "./UtilityMenu";

describe("UtilityMenu", () => {
    let overlay: QueriedHTMLElement;
    let menuButton: QueriedHTMLElement;
    let menu: QueriedHTMLElement;
    let optionButtons: QueriedHTMLElements;

    /** Mock options for testing purposes */
    const MOCK_OPTIONS: { [value: string]: string } = {
        test1: "Test Option 1",
        test2: "Test Option 2",
    };
    /** The index of the unselected option button */
    const OTHER_OPTION_IDX: number = 1;

    /**
     * A select handler for testing purposes
     */
    const mockSelectHandler = jest.fn().mockImplementation();

    /**
     * Checks that the menu is closed
     */
    const assertMenuClosed = (): void => {
        expect(overlay).toHaveClass("hide");
        expect(menu).toHaveClass("closed");
    };

    /**
     * Checks that the menu is open
     */
    const assertMenuOpen = (): void => {
        expect(overlay).toHaveClass("show");
        expect(menu).toHaveClass("open");
    };

    /**
     * Checks that the display is correct
     *
     * @param {Object} option The hash of options listed in the menu
     * @param {string} current The selected value
     */
    const assertDisplayCorrect = (
        option: { [value: string]: string },
        current: string,
    ): void => {
        expect(screen.queryByRole(IMAGE)).toHaveAttribute(ALT, option[current]);
        expect(screen.queryByTestId("display")).toHaveTextContent(
            option[current],
        );
    };

    /**
     * Renders the component and sets local variables
     */
    const renderUtilityMenu = (): void => {
        render(
            <UtilityMenu
                current="test1"
                options={MOCK_OPTIONS}
                onSelect={mockSelectHandler}
            />,
        );
        overlay = screen.queryByTestId("overlay");
        menuButton = screen.queryByTestId("menu-button");
        menu = screen.queryByRole(LIST);
        optionButtons = screen.queryAllByTestId("option");
    };

    it("Renders correctly", () => {
        renderUtilityMenu();
        expect(overlay).toBeInTheDocument();
        expect(menuButton).toBeInTheDocument();
        expect(menu).toBeInTheDocument();
        expect(screen.queryAllByRole(LIST_ITEM).length).toBe(
            Object.keys(MOCK_OPTIONS).length,
        );
        expect(optionButtons.length).toBe(Object.keys(MOCK_OPTIONS).length);
        assertMenuClosed();
        assertDisplayCorrect(MOCK_OPTIONS, "test1");
    });

    it("Can be toggled open/closed by button press", () => {
        renderUtilityMenu();
        fireEvent.click(menuButton!);
        assertMenuOpen();
        fireEvent.click(menuButton!);
        assertMenuClosed();
    });

    it("Closes menu on overlay click", () => {
        renderUtilityMenu();
        fireEvent.click(menuButton!);
        fireEvent.click(overlay!);
        assertMenuClosed();
    });

    it("Closes menu on scroll", () => {
        renderUtilityMenu();
        fireEvent.click(menuButton!);
        fireEvent.scroll(window);
        assertMenuClosed();
    });

    it("Handles option select correctly", async () => {
        renderUtilityMenu();
        fireEvent.click(menuButton!);
        fireEvent.click(optionButtons[OTHER_OPTION_IDX]);
        console.log(optionButtons[OTHER_OPTION_IDX]);
        assertMenuClosed();
        waitFor(() => assertDisplayCorrect(MOCK_OPTIONS, "test2"));
    });
});
