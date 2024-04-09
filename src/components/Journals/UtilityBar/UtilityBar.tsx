import SearchBar from "@/components/Journals/SearchBar/SearchBar";
import UtilityMenu from "@/components/Journals/UtilityMenu/UtilityMenu";
import {
    ASC,
    CAREER_CHRONICLES,
    DESC,
    FILTER,
    GAMING_GRIND,
    LIFE_LOGS,
    NO_FILTER,
    RANDOM_RAVINGS,
    SORT,
} from "@/static/constants";
import { UtilityOptions } from "@/static/types";

import styles from "./UtilityBar.module.scss";

export type UtilityBarProps = {
    /** The current sort order */
    order: UtilityOptions;
    /** The current selected filter */
    filter: UtilityOptions;
    /** The function called when a sort option is selected */
    onSort: (order: UtilityOptions) => void;
    /** The function called when a filter option is selected */
    onFilter: (filter: UtilityOptions) => void;
    /** The function called as the the user types a query into the search bar */
    onSearch: (query: string) => void;
};

const UtilityBar: React.FC<UtilityBarProps> = (props: UtilityBarProps) => {
    /** The map of options for the sort menu */
    const SORT_OPTIONS: { [value: string]: string } = {
        [DESC]: "Latest First",
        [ASC]: "Oldest First",
    };
    /** The map of options for the filter menu */
    const FILTER_OPTIONS: { [value: string]: string } = {
        [NO_FILTER]: "No Filter",
        [LIFE_LOGS]: "Life Logs",
        [CAREER_CHRONICLES]: "Career Chronicles",
        [GAMING_GRIND]: "Gaming Grind",
        [RANDOM_RAVINGS]: "Random Ravings",
    };

    return (
        <div className={styles["utility-bar"]} data-testid="utility-bar">
            <div className={styles.menus}>
                <UtilityMenu
                    menuType={SORT}
                    current={props.order}
                    options={SORT_OPTIONS}
                    onSelect={(order: UtilityOptions) => props.onSort(order)}
                />
                <UtilityMenu
                    menuType={FILTER}
                    current={props.filter}
                    options={FILTER_OPTIONS}
                    onSelect={(filter: UtilityOptions) =>
                        props.onFilter(filter)
                    }
                />
            </div>
            <SearchBar onChange={(query: string) => props.onSearch(query)} />
        </div>
    );
};

export default UtilityBar;
