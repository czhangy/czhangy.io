import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    // Delay in ms
    const DELAY: number = 100;

    // Click handler to make menu closable using same button
    const handleClick: () => void = () => {
        if (open) {
            (
                document.querySelector("#menu-button") as HTMLButtonElement
            ).blur();
        } else {
            (
                document.querySelector("#menu-button") as HTMLButtonElement
            ).focus();
        }
    };

    // Delay close a little to allow nav to fire
    const handleClose: () => void = () => {
        setTimeout(() => setOpen(false), DELAY);
    };

    return (
        <div className={styles["menu-container"]}>
            <button
                id="menu-button"
                className={styles["menu-button"]}
                onClick={() => setOpen(!open)}
                onBlur={handleClose}
            >
                <span className={`${styles.bar} ${open ? styles.cross : ""}`} />
                <span className={`${styles.bar} ${open ? styles.cross : ""}`} />
                <span className={`${styles.bar} ${open ? styles.cross : ""}`} />
            </button>
            <ul
                className={`${styles.menu} ${open ? styles.open : styles.closed}`}
            >
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
    );
};

export default Menu;
