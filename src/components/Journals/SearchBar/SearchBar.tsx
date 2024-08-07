import { ChangeEvent } from "react";

import Image from "@/components/Global/Image/Image";

import styles from "./SearchBar.module.scss";

export type SearchBarProps = {
    /** The function called as the the user types a query into the search bar */
    onChange: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    /**
     * Passes the search query from the <input> to the parent component
     *
     * @param {ChangeEvent<HTMLInputElement>} evt The event object captured by onChange
     */
    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        props.onChange(evt.target.value);
    };

    return (
        <div className={styles["search-bar"]}>
            <div className={styles["icon-container"]}>
                <div className={styles.icon}>
                    <Image src="/assets/icons/search.svg" alt="Search" />
                </div>
            </div>
            <input
                id="query"
                className={styles.query}
                placeholder="Search..."
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    handleChange(evt)
                }
            />
        </div>
    );
};

export default SearchBar;
