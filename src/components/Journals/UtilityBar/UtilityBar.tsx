import { ASC, DESC } from "@/static/constants";
import { UtilityOptions } from "@/static/types";

import UtilityMenu from "../UtilityMenu/UtilityMenu";
import styles from "./UtilityBar.module.scss";

export type UtilityBarProps = {
    order: UtilityOptions;
    onSort: (order: UtilityOptions) => void;
};

const UtilityBar: React.FC<UtilityBarProps> = (props: UtilityBarProps) => {
    const SORT_OPTIONS: { [value: string]: string } = {
        [DESC]: "Latest First",
        [ASC]: "Oldest First",
    };

    return (
        <div className={styles["utility-bar"]} data-testid="utility-bar">
            <UtilityMenu
                current={props.order}
                options={SORT_OPTIONS}
                onSelect={(order: UtilityOptions) => props.onSort(order)}
            />
        </div>
    );
};

export default UtilityBar;
