import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { ALT, IMAGE, LIST, SORT } from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import UtilityMenu from "./UtilityMenu";

describe("UtilityMenu", () => {
    /** Mock options for testing purposes */
    const MOCK_OPTIONS: [string, string][] = [
        ["test1", "Test Option 1"],
        ["test2", "Test Option 2"],
    ];

    /**
     * A select handler for testing purposes
     */
    const mockSelectHandler = jest.fn().mockImplementation();

    /**
     * Checks that the menu is closed
     */
    const assertMenuClosed = (): void => {
        // Check overlay state
        const overlay: HTMLElement = screen.getByTestId("overlay");
        expect(overlay).toHaveClass("hide");

        // Check menu state
        const menu: HTMLElement = screen.getByTestId("sort-menu");
        expect(menu).toHaveClass("closed");
    };

    /**
     * Checks that the menu is open
     */
    const assertMenuOpen = (): void => {
        // Check overlay state
        const overlay: HTMLElement = screen.getByTestId("overlay");
        expect(overlay).toHaveClass("show");

        // Check menu state
        const menu: HTMLElement = screen.getByTestId("sort-menu");
        expect(menu).toHaveClass("open");
    };

    /**
     * Checks that the display is correct
     *
     * @param {Object} option The hash of options listed in the menu
     * @param {string} current The selected value
     */
    const assertDisplayCorrect = (expected: string): void => {
        const display: QueriedHTMLElement = screen.queryByTestId("display");
        expect(display).toHaveTextContent(expected);
    };

    /**
     * Renders the component and sets local variables
     */
    let menuButton: QueriedHTMLElement;
    const renderUtilityMenu = (hasIcon: boolean, value: string = ""): void => {
        render(
            <UtilityMenu
                menuType={SORT}
                current="test1"
                options={MOCK_OPTIONS}
                onSelect={mockSelectHandler}
                hasIcon={hasIcon}
                value={value}
            />,
        );
        menuButton = screen.queryByTestId("menu-button");
    };

    describe("Renders", () => {
        it("Renders correctly", () => {
            renderUtilityMenu(false);

            // Check for overlay
            const overlay: QueriedHTMLElement = screen.queryByTestId("overlay");
            expect(overlay).toBeInTheDocument();

            // Check for menu button
            const icon: QueriedHTMLElement = screen.queryByRole(IMAGE);
            expect(menuButton).toHaveTextContent("Test Option 1");
            expect(icon).not.toBeInTheDocument();

            // Check for menu
            const menu: QueriedHTMLElement = screen.queryByRole(LIST);
            const options: QueriedHTMLElements = screen.queryAllByTestId(
                `${SORT}-option`,
            );
            expect(menu).toBeInTheDocument();
            expect(options).toHaveLength(Object.keys(MOCK_OPTIONS).length);

            // Check for state
            assertMenuClosed();
            assertDisplayCorrect("Test Option 1");
        });

        it("Renders correctly with an icon", () => {
            renderUtilityMenu(true);

            // Check for menu button
            const icon: QueriedHTMLElement = screen.queryByRole(IMAGE);
            expect(icon).toHaveAttribute(ALT, SORT);
        });

        it("Renders correctly with a static value", () => {
            renderUtilityMenu(true, "Test");

            // Check for menu button value
            expect(menuButton).toHaveTextContent("Test");
        });
    });

    describe("Menu state", () => {
        it("Can be toggled open/closed by button press", () => {
            renderUtilityMenu(false);

            // Open menu
            fireEvent.click(menuButton!);
            assertMenuOpen();

            // Close menu again
            fireEvent.click(menuButton!);
            assertMenuClosed();
        });

        it("Closes menu on overlay click", () => {
            renderUtilityMenu(false);

            // Open menu
            fireEvent.click(menuButton!);

            // Click overlay to close menu
            const overlay: HTMLElement = screen.getByTestId("overlay");
            fireEvent.click(overlay);
            assertMenuClosed();
        });

        it("Closes menu on scroll", () => {
            renderUtilityMenu(false);

            // Open menu
            fireEvent.click(menuButton!);

            // Scroll to close menu
            fireEvent.scroll(window);
            assertMenuClosed();
        });
    });

    describe("Selects", () => {
        it("Handles option select correctly", async () => {
            renderUtilityMenu(false);

            // Open menu
            fireEvent.click(menuButton!);

            // Click and await select event
            const options: HTMLElement[] = screen.getAllByTestId(
                `${SORT}-option`,
            );
            fireEvent.click(options[1]);
            waitFor(() => assertDisplayCorrect("Test Option 2"));

            // Check menu closes
            assertMenuClosed();
        });
    });
});
