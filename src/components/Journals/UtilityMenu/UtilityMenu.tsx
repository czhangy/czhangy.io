import { ReactElement, useEffect, useState } from "react";

import Image from "@/components/Global/Image/Image";
import { SCROLL } from "@/static/constants";
import { MenuType, UtilityOptions } from "@/static/types";

import styles from "./UtilityMenu.module.scss";

export type UtilityMenuProps = {
    /** The type of menu to render */
    menuType: MenuType;
    /** The currently selected value */
    current: string;
    /** A map of values mapped to their display strings */
    options: { [value: string]: string };
    /** The function to call when a menu option is selected */
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
        return `${styles["menu-container"]} ${open ? styles.open : styles.closed}`;
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
            <ul className={styles.menu} data-testid="utility-menu">
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
            <div
                className={getMenuClass()}
                data-testid={`${props.menuType}-menu`}
            >
                <button
                    className={styles["menu-button"]}
                    onClick={toggleMenu}
                    data-testid="menu-button"
                >
                    <div className={styles.icon}>
                        <Image
                            src={`/assets/icons/${props.menuType}.svg`}
                            alt={props.menuType}
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
