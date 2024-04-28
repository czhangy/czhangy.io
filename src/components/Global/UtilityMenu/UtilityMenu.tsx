import { ReactElement, useEffect, useState } from "react";

import Image from "@/components/Global/Image/Image";
import { SCROLL } from "@/static/constants";
import { ConditionalJSX, MenuType } from "@/static/types";

import styles from "./UtilityMenu.module.scss";

export type UtilityMenuProps = {
    /** The type of menu to render */
    menuType: MenuType;
    /** The currently displayed value */
    current: string;
    /** A list of [slug, display] tuples representing the menu options  */
    options: [string, string][];
    /** The function to call when a menu option is selected */
    onSelect: (selection: string) => void;
    /** If the menu has an icon */
    hasIcon: boolean;
    /** Sets a static display for the menu */
    value?: string;
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
     * @param {string} value The value that has been selected and should be passed up
     */
    const handleSelect = (value: string): void => {
        closeMenu();
        props.onSelect(value);
    };

    /**
     * Checks the props to see if the menu button should have an icon
     *
     * @returns {ConditionalJSX} The JSX needed to render the icon if it is needed
     */
    const maybeRenderIcon = (): ConditionalJSX => {
        return props.hasIcon ? (
            <div className={styles.icon}>
                <Image
                    src={`/assets/icons/${props.menuType}.svg`}
                    alt={props.menuType}
                />
            </div>
        ) : (
            ""
        );
    };

    /**
     * Gets the value to display
     *
     * @returns {string} The value that should be displayed
     */
    const getDisplayValue = (): string => {
        return props.value
            ? props.value
            : props.options.find(
                  ([slug, value]: [string, string]) => slug === props.current,
              )![1];
    };

    /**
     * Renders the list of menu options that can be selected
     *
     * @returns {ReactElement} The <ul> element that contains the menu options
     */
    const renderMenu = (): ReactElement => {
        return (
            <ul className={styles.menu} data-testid="utility-menu">
                {props.options.map(([value, display]: [string, string]) => {
                    return (
                        <li className={styles.option} key={value}>
                            <button
                                className={styles.button}
                                onClick={() => handleSelect(value)}
                                data-testid={`${props.menuType}-option`}
                            >
                                {display}
                            </button>
                        </li>
                    );
                })}
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
                    {maybeRenderIcon()}
                    <strong className={styles.display} data-testid="display">
                        {getDisplayValue()}
                    </strong>
                </button>
                {renderMenu()}
            </div>
        </>
    );
};

export default UtilityMenu;
