// Stylesheet
import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-grid"]}>
                <div className={`${styles["nav-card"]} ${styles.about}`}></div>
                <div className={styles["nav-card"]}></div>
                <div className={styles["nav-card"]}></div>
                <div className={styles["social-card"]}></div>
                <div className={styles["social-card"]}></div>
                <div className={styles["social-card"]}></div>
                <div className={styles["social-card"]}></div>
            </div>
        </div>
    );
};

export default HomePage;
