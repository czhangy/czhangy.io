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
                <div className={styles["page-nav"]}>
                    <Link href="/">
                        <a className={styles["home-link"]}>
                            <h2 className={styles["nav-link"]}>Home</h2>
                        </a>
                    </Link>
                    <span
                        className={`${styles["v-bar"]} ${styles["home-v-bar"]}`}
                    />
                    <Link href="/about">
                        <a>
                            <h2 className={styles["nav-link"]}>About</h2>
                        </a>
                    </Link>
                    <span className={styles["v-bar"]} />
                    <Link href="/projects">
                        <a>
                            <h2 className={styles["nav-link"]}>Projects</h2>
                        </a>
                    </Link>
                    <span className={styles["v-bar"]} />
                    <Link href="/experience">
                        <a>
                            <h2 className={styles["nav-link"]}>Experience</h2>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
