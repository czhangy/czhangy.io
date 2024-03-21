import NavCard from "@/components/Home/NavCard/NavCard";
import SocialCard from "@/components/Home/SocialCard/SocialCard";

import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-grid"]}>
                <div
                    className={`${styles["nav-card"]} ${styles["vertical-card"]}`}
                >
                    <NavCard title="About Me" path="/about" align="left" />
                </div>
                <div className={styles["nav-card"]}>
                    <NavCard
                        title="My Projects"
                        path="/projects"
                        align="right"
                    />
                </div>
                <div className={styles["nav-card"]}>
                    <NavCard
                        title="My Experience"
                        path="/experience"
                        align="right"
                    />
                </div>
                <SocialCard social="github" link="https://github.com/czhangy" />
                <SocialCard
                    social="linkedin"
                    link="https://www.linkedin.com/in/czhangy/"
                />
                <SocialCard
                    social="instagram"
                    link="https://www.instagram.com/c.zhangg/"
                />
                <SocialCard
                    social="twitter"
                    link="https://twitter.com/czhangy_"
                />
            </div>
        </div>
    );
};

export default HomePage;
