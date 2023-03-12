// Stylesheet
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles["footer-container"]}>
                <small className={styles.copyright}>
                    &copy; Copyright {year}, Charles Zhang
                </small>
            </div>
        </footer>
    );
};

export default Footer;
