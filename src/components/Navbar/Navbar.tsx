// Stylesheet
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <h1 className={styles.name}>Charles Zhang</h1>
            </div>
        </header>
    );
};

export default Navbar;
