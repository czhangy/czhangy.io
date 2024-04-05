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
    order: UtilityOptions;
    filter: UtilityOptions;
    onSort: (order: UtilityOptions) => void;
    onFilter: (filter: UtilityOptions) => void;
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
        </div>
    );
};

export default UtilityBar;
