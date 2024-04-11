import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ASC, DESC, INPUT, NO_FILTER, SECTION_TYPES } from "@/static/constants";
import {
    EntrySectionType,
    QueriedHTMLElement,
    QueriedHTMLElements,
} from "@/static/types";

import UtilityBar from "./UtilityBar";

describe("UtilityBar", () => {
    /** The menu button index of the sort menu */
    const SORT_IDX: number = 0;
    /** The menu button index of the filter menu */
    const FILTER_IDX: number = 1;
    /** The option index of Life Logs */
    const LIFE_LOGS_IDX: number = 3;

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
    };

    describe("Rendering", () => {
        it("Renders correctly with correct defaults", () => {
            renderUtilityBar();

            // Check sort menu
            const menuButtons: QueriedHTMLElements =
                screen.queryAllByTestId("menu-button");
            const sortMenu: QueriedHTMLElement =
                screen.queryByTestId("sort-menu");
            expect(sortMenu).toBeInTheDocument();
            expect(menuButtons[SORT_IDX]).toHaveTextContent("Latest First");

            // Check sort menu options
            const sortOptions: QueriedHTMLElements =
                screen.queryAllByTestId("sort-option");
            expect(sortOptions).toHaveLength(2); // Ascending + descending sort
            expect(sortOptions[0]).toHaveTextContent("Latest First");
            expect(sortOptions[1]).toHaveTextContent("Oldest First");

            // Check filter menu
            const filterMenu: QueriedHTMLElement =
                screen.queryByTestId("filter-menu");
            expect(filterMenu).toBeInTheDocument();
            expect(menuButtons[FILTER_IDX]).toHaveTextContent("No Filter");

            // Check filter menu options
            const filterOptions: QueriedHTMLElements =
                screen.queryAllByTestId("filter-option");
            expect(filterOptions).toHaveLength(
                Object.keys(SECTION_TYPES).length + 1, // Every section + No filter
            );
            expect(filterOptions[0]).toHaveTextContent("No Filter");
            Object.values(SECTION_TYPES).forEach(
                (sectionType: EntrySectionType, idx: number) => {
                    // Offset by 1 to account for no filter
                    expect(filterOptions[idx + 1]).toHaveTextContent(
                        sectionType.displayName,
                    );
                },
            );

            // Check search bar
            const searchBar: QueriedHTMLElement =
                screen.queryByTestId("search-bar");
            expect(searchBar).toBeInTheDocument();
        });
    });

    describe("Utilities", () => {
        it("Calls the correct sort handler on select", () => {
            renderUtilityBar();
            const sortOptions: HTMLElement[] =
                screen.getAllByTestId("sort-option");

            // Check descending sort
            fireEvent.click(sortOptions[0]);
            expect(mockSortHandler).toHaveBeenCalledWith(DESC);

            // Check ascending sort
            fireEvent.click(sortOptions[1]);
            expect(mockSortHandler).toHaveBeenCalledWith(ASC);
        });

        it("Calls the correct filter handler on select", () => {
            renderUtilityBar();
            const filterOptions: HTMLElement[] =
                screen.getAllByTestId("filter-option");

            // Check no filter
            fireEvent.click(filterOptions[0]);
            expect(mockFilterHandler).toHaveBeenCalledWith(NO_FILTER);

            // Check all sections
            Object.keys(SECTION_TYPES).forEach((slug: string, idx: number) => {
                fireEvent.click(filterOptions[idx + 1]);
                expect(mockFilterHandler).toHaveBeenCalledWith(slug);
            });
        });

        it("Calls the correct search handler on search", () => {
            renderUtilityBar();
            const query: string = "Test";

            const searchBar = screen.getByRole(INPUT);
            fireEvent.change(searchBar, { target: { value: query } });
            expect(mockSearchHandler).toHaveBeenCalledWith(query);
        });
    });
});
