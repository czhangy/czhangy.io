// Stylesheet
import styles from "./Navbar.module.scss";
// Next
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <div className={styles["main-nav"]}>
                    <Link href="/">
                        <a>
                            <h1 className={styles.name}>Charles Zhang</h1>
                        </a>
                    </Link>
                </div>
                <ul className={styles["page-nav"]}>
                    <li
                        className={`${styles["nav-item"]} ${styles["home-link"]}`}
                    >
                        <Link href="/">
                            <a className={styles["nav-link"]}>Home</a>
                        </Link>
                    </li>
                    <span
                        className={`${styles["v-bar"]} ${styles["home-v-bar"]}`}
                    />
                    <li className={styles["nav-item"]}>
                        <Link href="/about">
                            <a className={styles["nav-link"]}>About</a>
                        </Link>
                    </li>
                    <span className={styles["v-bar"]} />
                    <li className={styles["nav-item"]}>
                        <Link href="/projects">
                            <a className={styles["nav-link"]}>Projects</a>
                        </Link>
                    </li>
                    <span className={styles["v-bar"]} />
                    <li className={styles["nav-item"]}>
                        <Link href="/experience">
                            <a className={styles["nav-link"]}>Experience</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
