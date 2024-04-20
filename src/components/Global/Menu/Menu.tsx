import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

import Image from "@/components/Global/Image/Image";
import { SCROLL } from "@/static/constants";

import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
    type PageData = {
        /** The name of the page (the page icon should be saved at /assets/icons/{name}.svg) */
        name: string;
        /** Alt text for the page icon */
        alt: string;
    };

    const [open, setOpen] = useState<boolean>(false);

    /** Delay between blur and menu close in ms */
    const DELAY: number = 200;
    /** A list of pages that can be linked to */
    const PAGES: PageData[] = [
        {
            name: "About",
            alt: "About Me",
        },
        {
            name: "Projects",
            alt: "My Projects",
        },
        {
            name: "Experience",
            alt: "My Experience",
        },
        {
            name: "Journals",
            alt: "Journals",
        },
    ];

    /**
     * Gets the correct styling of the menu overlay, based on menu state
     *
     * @returns {string} The classes needed to style the menu icon in the correct state
     */
    const getOverlayClass = (): string => {
        return `${styles["menu-overlay"]} ${open ? styles.show : styles.hide}`;
    };

    /**
     * Closes the menu without any delay
     */
    const closeMenu = (): void => {
        setOpen(false);
    };

    /**
     * Toggles the state of the menu
     */
    const toggleMenu = (): void => {
        setOpen(!open);
    };

    /**
     * Closes the menu after some delay to allow for nav
     */
    const handleClose = (): void => {
        setTimeout(closeMenu, DELAY);
    };

    /**
     * Gets the correct styling of the menu icon, based on menu state
     *
     * @returns {string} The classes needed to style the menu icon in the correct state
     */
    const getBarClass = (): string => {
        return `${styles.bar} ${open ? styles.cross : ""}`;
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
     * Renders the list of menu options that can be navigated to
     *
     * @returns {ReactElement} The <ul> element that contains links to each page
     */
    const renderMenuOptions = (): ReactElement => {
        return (
            <ul className={getMenuClass()} onClick={handleClose}>
                {PAGES.map((page: PageData) => {
                    const slug: string = page.name.toLowerCase();
                    return (
                        <li className={styles["menu-option"]} key={slug}>
                            <Link
                                href={`/${slug}`}
                                className={styles["menu-link"]}
                            >
                                <div className={styles["menu-icon"]}>
                                    <Image
                                        src={`/assets/icons/${slug}.svg`}
                                        alt={page.alt}
                                    />
                                </div>
                                {page.name}
                            </Link>
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
                data-testid="menu-overlay"
            />
            <div className={styles["menu-container"]} data-testid="menu">
                <button
                    id="menu-button"
                    className={styles["menu-button"]}
                    onClick={toggleMenu}
                >
                    <span className={getBarClass()} data-testid="menu-bar" />
                    <span className={getBarClass()} />
                    <span className={getBarClass()} />
                </button>
                {renderMenuOptions()}
            </div>
        </>
    );
};

export default Menu;
