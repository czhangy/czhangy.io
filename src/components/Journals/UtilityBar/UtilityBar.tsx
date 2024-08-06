import UtilityMenu from "@/components/Global/UtilityMenu/UtilityMenu";
import SearchBar from "@/components/Journals/SearchBar/SearchBar";
import {
    ASC,
    DESC,
    FILTER,
    NO_FILTER,
    SECTION_TYPES,
    SORT,
} from "@/static/constants";
import { EntrySectionType } from "@/static/types";

import styles from "./UtilityBar.module.scss";

export type UtilityBarProps = {
    /** The current sort order */
    order: string;
    /** The current selected filter */
    filter: string;
    /** The function called when a sort option is selected */
    onSort: (order: string) => void;
    /** The function called when a filter option is selected */
    onFilter: (filter: string) => void;
    /** The function called as the the user types a query into the search bar */
    onSearch: (query: string) => void;
};

const UtilityBar: React.FC<UtilityBarProps> = (props: UtilityBarProps) => {
    /** The map of options for the sort menu */
    const SORT_OPTIONS: [string, string][] = [
        [DESC, "Latest First"],
        [ASC, "Oldest First"],
    ];

    /**
     * Retrieves all valid options for the filter menu
     *
     * @returns {Object} The map of filter values to their display strings
     */
    const getFilterOptions = (): [string, string][] => {
        const options: [string, string][] = [[NO_FILTER, "No Filter"]];

        // Dynamically map sections to their menu options
        Object.entries(SECTION_TYPES).forEach(
            ([slug, entrySection]: [string, EntrySectionType]) => {
                options.push([slug, entrySection.displayName]);
            },
        );

        return options;
    };

    return (
        <div className={styles["utility-bar"]}>
            <div className={styles.menus}>
                <UtilityMenu
                    menuType={SORT}
                    current={props.order}
                    options={SORT_OPTIONS}
                    onSelect={(order: string) => props.onSort(order)}
                    hasIcon={true}
                />
                <UtilityMenu
                    menuType={FILTER}
                    current={props.filter}
                    options={getFilterOptions()}
                    onSelect={(filter: string) => props.onFilter(filter)}
                    hasIcon={true}
                />
            </div>
            <SearchBar onChange={(query: string) => props.onSearch(query)} />
        </div>
    );
};

export default UtilityBar;
