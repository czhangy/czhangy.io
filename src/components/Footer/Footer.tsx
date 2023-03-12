// Stylesheet
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles["footer-container"]}></div>
        </div>
    );
};

export default Footer;
