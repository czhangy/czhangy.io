import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import {
    ASC,
    CAREER_CHRONICLES,
    DESC,
    GAMING_GRIND,
    INPUT,
    LIFE_LOGS,
    NO_FILTER,
    RANDOM_RAVINGS,
} from "@/static/constants";
import { QueriedHTMLElements } from "@/static/types";

import UtilityBar from "./UtilityBar";

describe("UtilityBar", () => {
    /** The number of options being rendered in the menus */
    const NUM_OPTIONS: number = 7;
    /** The menu button index of the sort menu */
    const SORT_IDX: number = 0;
    /** The menu button index of the filter menu */
    const FILTER_IDX: number = 1;
    /** The option index of descending sort */
    const DESC_IDX: number = 0;
    /** The option index of ascending sort */
    const ASC_IDX: number = 1;
    /** The option index of no filter */
    const NO_FILTER_IDX: number = 2;
    /** The option index of Life Logs */
    const LIFE_LOGS_IDX: number = 3;
    /** The option index of Career Chronicles */
    const CAREER_CHRONICLES_IDX: number = 4;
    /** The option index of Gaming Grind */
    const GAMING_GRIND_IDX: number = 5;
    /** The option index of Random Ravings */
    const RANDOM_RAVINGS_IDX: number = 6;

    let options: QueriedHTMLElements;

    /**
     * A sort handler for testing purposes
     */
    const mockSortHandler = jest.fn().mockImplementation();

    /**
     * A filter handler for testing purposes
     */
    const mockFilterHandler = jest.fn().mockImplementation();

    /**
     * A search handler for testing purposes
     */
    const mockSearchHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
     */
    const renderUtilityBar = (): void => {
        render(
            <UtilityBar
                order={DESC}
                filter={NO_FILTER}
                onSort={mockSortHandler}
                onFilter={mockFilterHandler}
                onSearch={mockSearchHandler}
            />,
        );
        options = screen.queryAllByTestId("option");
    };

    it("Renders correctly with correct defaults", () => {
        renderUtilityBar();
        const menuButtons: QueriedHTMLElements =
            screen.queryAllByTestId("menu-button");
        expect(screen.queryByTestId("sort-menu")).toBeInTheDocument();
        expect(menuButtons[SORT_IDX]).toHaveTextContent("Latest First");
        expect(screen.queryByTestId("filter-menu")).toBeInTheDocument();
        expect(menuButtons[FILTER_IDX]).toHaveTextContent("No Filter");
        expect(options.length).toBe(NUM_OPTIONS);
        expect(screen.queryByTestId("search-bar")).toBeInTheDocument();
    });

    it("Calls the correct sort handler on select", () => {
        renderUtilityBar();
        fireEvent.click(options[DESC_IDX]);
        expect(mockSortHandler).toHaveBeenCalledWith(DESC);
        fireEvent.click(options[ASC_IDX]);
        expect(mockSortHandler).toHaveBeenCalledWith(ASC);
    });

    it("Calls the correct filter handler on select", () => {
        renderUtilityBar();
        fireEvent.click(options[NO_FILTER_IDX]);
        expect(mockFilterHandler).toHaveBeenCalledWith(NO_FILTER);
        fireEvent.click(options[LIFE_LOGS_IDX]);
        expect(mockFilterHandler).toHaveBeenCalledWith(LIFE_LOGS);
        fireEvent.click(options[CAREER_CHRONICLES_IDX]);
        expect(mockFilterHandler).toHaveBeenCalledWith(CAREER_CHRONICLES);
        fireEvent.click(options[GAMING_GRIND_IDX]);
        expect(mockFilterHandler).toHaveBeenCalledWith(GAMING_GRIND);
        fireEvent.click(options[RANDOM_RAVINGS_IDX]);
        expect(mockFilterHandler).toHaveBeenCalledWith(RANDOM_RAVINGS);
    });

    it("Calls the correct search handler on search", () => {
        renderUtilityBar();
        const query: string = "Test";
        fireEvent.change(screen.getByRole(INPUT), { target: { value: query } });
        expect(mockSearchHandler).toHaveBeenCalledWith(query);
    });
});
