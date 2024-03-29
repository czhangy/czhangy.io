import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "@/components/Global/Image/Image";
import { SCROLL } from "@/static/constants";

import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    /** Delay between blur and menu close in ms */
    const DELAY: number = 200;

    /**
     * Gets the correct styling of the menu overlay, based on menu state
     *
     * @returns {string} the classes needed to style the menu icon in the correct state
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
     * @returns {string} the classes needed to style the menu icon in the correct state
     */
    const getBarClass = (): string => {
        return `${styles.bar} ${open ? styles.cross : ""}`;
    };

    /**
     * Gets the correct styling of the menu, based on menu state
     *
     * @returns {string} the classes needed to style the menu in the correct state
     */
    const getMenuClass = (): string => {
        return `${styles.menu} ${open ? styles.open : styles.closed}`;
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
                <ul className={getMenuClass()} onClick={handleClose}>
                    <li className={styles["menu-option"]}>
                        <Link href="/about">
                            <a className={styles["menu-link"]}>
                                <div className={styles["menu-icon"]}>
                                    <Image
                                        src="/assets/icons/about.svg"
                                        alt="About Me"
                                    />
                                </div>
                                About
                            </a>
                        </Link>
                    </li>
                    <li className={styles["menu-option"]}>
                        <Link href="/projects">
                            <a className={styles["menu-link"]}>
                                <div className={styles["menu-icon"]}>
                                    <Image
                                        src="/assets/icons/projects.svg"
                                        alt="My Projects"
                                    />
                                </div>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li className={styles["menu-option"]}>
                        <Link href="/experience">
                            <a className={styles["menu-link"]}>
                                <div className={styles["menu-icon"]}>
                                    <Image
                                        src="/assets/icons/experience.svg"
                                        alt="My Experience"
                                    />
                                </div>
                                Experience
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Menu;
