import NavCard from "@/components/Home/NavCard/NavCard";
import SocialCard from "@/components/Home/SocialCard/SocialCard";
import {
    GITHUB,
    INSTAGRAM,
    LEFT,
    LINKEDIN,
    RIGHT,
    TWITTER,
} from "@/static/constants";

import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-grid"]}>
                <div
                    className={`${styles["nav-card"]} ${styles["vertical-card"]}`}
                >
                    <NavCard title="About Me" path="/about" align={LEFT} />
                </div>
                <div className={styles["nav-card"]}>
                    <NavCard
                        title="My Projects"
                        path="/projects"
                        align={RIGHT}
                    />
                </div>
                <div className={styles["nav-card"]}>
                    <NavCard
                        title="My Experience"
                        path="/experience"
                        align={RIGHT}
                    />
                </div>
                <SocialCard social={GITHUB} link="https://github.com/czhangy" />
                <SocialCard
                    social={LINKEDIN}
                    link="https://www.linkedin.com/in/czhangy/"
                />
                <SocialCard
                    social={INSTAGRAM}
                    link="https://www.instagram.com/c.zhangg/"
                />
                <SocialCard
                    social={TWITTER}
                    link="https://twitter.com/czhangy_"
                />
            </div>
        </div>
    );
};

export default HomePage;
