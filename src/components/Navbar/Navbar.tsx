// Stylesheet
import styles from "./Navbar.module.scss";
// Next
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles["navbar-container"]}>
                    <Link href="/">
                        <a>
                            <h1 className={styles.name}>Charles Zhang</h1>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={`${styles["navbar-bg"]} bg`} />
        </>
    );
};

export default Navbar;
