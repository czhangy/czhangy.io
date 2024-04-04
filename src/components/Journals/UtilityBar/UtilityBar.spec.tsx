import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ASC, DESC } from "@/static/constants";
import { QueriedHTMLElements } from "@/static/types";

import UtilityBar from "./UtilityBar";

describe("UtilityBar", () => {
    /** The number of menus being rendered in the bar */
    const NUM_MENUS: number = 1;
    /** The number of options being rendered in the menus */
    const NUM_OPTIONS: number = 2;
    /** The button index of descending sort */
    const DESC_IDX: number = 0;
    /** The button index of ascending sort */
    const ASC_IDX: number = 1;

    let options: QueriedHTMLElements;

    /**
     * A sort handler for testing purposes
     */
    const mockSortHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
     */
    const renderUtilityBar = (): void => {
        render(<UtilityBar order={DESC} onSort={mockSortHandler} />);
        options = screen.queryAllByTestId("option");
    };

    it("Renders correctly", () => {
        renderUtilityBar();
        expect(screen.queryAllByTestId("utility-menu").length).toBe(NUM_MENUS);
        expect(options.length).toBe(NUM_OPTIONS);
    });

    it("Calls the correct sort handler on select", () => {
        renderUtilityBar();
        fireEvent.click(options[DESC_IDX]);
        expect(mockSortHandler).toHaveBeenCalledWith(DESC);
        fireEvent.click(options[ASC_IDX]);
        expect(mockSortHandler).toHaveBeenCalledWith(ASC);
    });
});
