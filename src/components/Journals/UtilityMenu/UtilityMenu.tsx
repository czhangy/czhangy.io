import { ReactElement, useEffect, useState } from "react";

import Image from "@/components/Global/Image/Image";
import { SCROLL } from "@/static/constants";
import { UtilityOptions } from "@/static/types";

import styles from "./UtilityMenu.module.scss";

export type UtilityMenuProps = {
    current: string;
    options: { [value: string]: string };
    onSelect: (selection: UtilityOptions) => void;
};

const UtilityMenu: React.FC<UtilityMenuProps> = (props: UtilityMenuProps) => {
    const [open, setOpen] = useState<boolean>(false);

    /**
     * Gets the correct styling of the menu overlay, based on menu state
     *
     * @returns {string} The classes needed to style the overlay in the correct state
     */
    const getOverlayClass = (): string => {
        return `${styles.overlay} ${open ? styles.show : styles.hide}`;
    };

    /**
     * Closes the menu
     */
    const closeMenu = (): void => {
        setOpen(false);
    };

    /**
     * Closes/opens the menu
     */
    const toggleMenu = (): void => {
        setOpen(!open);
    };

    /**
     * Gets the correct styling of the menu, based on menu state
     *
     * @returns {string} The classes needed to style the menu in the correct state
     */
    const getMenuClass = (): string => {
        return `${styles.menu} ${open ? styles.open : styles.closed}`;
    };

    /**
     * Closes the menu and propagates the value to the page
     *
     * @param {UtilityOptions} value The value that has been selected and should be passed up
     */
    const handleSelect = (value: UtilityOptions): void => {
        closeMenu();
        props.onSelect(value);
    };

    /**
     * Renders the list of menu options that can be selected
     *
     * @returns {ReactElement} The <ul> element that contains the menu options
     */
    const renderMenu = (): ReactElement => {
        return (
            <ul className={getMenuClass()} data-testid="utility-menu">
                {Object.entries(props.options).map(
                    ([value, display]: [string, string]) => {
                        return (
                            <li className={styles.option} key={value}>
                                <button
                                    className={styles.button}
                                    onClick={() =>
                                        handleSelect(value as UtilityOptions)
                                    }
                                    data-testid="option"
                                >
                                    {display}
                                </button>
                            </li>
                        );
                    },
                )}
            </ul>
        );
    };

    useEffect(() => {
        window.addEventListener(SCROLL, closeMenu);

        return () => {
            window.removeEventListener(SCROLL, closeMenu);
        };
    }, []);

    return (
        <>
            <div
                className={getOverlayClass()}
                onClick={closeMenu}
                data-testid="overlay"
            />
            <div className={styles["menu-container"]}>
                <button
                    className={styles["menu-button"]}
                    onClick={toggleMenu}
                    data-testid="menu-button"
                >
                    <div className={styles.icon}>
                        <Image
                            src={`/assets/icons/${props.current}.svg`}
                            alt={props.options[props.current]}
                        />
                    </div>
                    <strong className={styles.display} data-testid="display">
                        {props.options[props.current]}
                    </strong>
                </button>
                {renderMenu()}
            </div>
        </>
    );
};

export default UtilityMenu;
