import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
     * Toggles the state of the menu
     */
    const toggleMenu = (): void => {
        setOpen(!open);
    };

    /**
     * Closes the menu after some delay to allow for nav
     */
    const handleClose = (): void => {
        setTimeout(() => setOpen(false), DELAY);
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

    return (
        <>
            <div
                className={getOverlayClass()}
                onClick={() => setOpen(false)}
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
                                        layout="fill"
                                        objectFit="contain"
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
                                        layout="fill"
                                        objectFit="contain"
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
                                        layout="fill"
                                        objectFit="contain"
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
