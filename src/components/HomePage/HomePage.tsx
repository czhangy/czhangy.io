// Stylesheet
import styles from "./HomePage.module.scss";
// Component
import NavCard from "@/components/NavCard/NavCard";
import SocialCard from "@/components/SocialCard/SocialCard";

const HomePage: React.FC = () => {
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-grid"]}>
                <div
                    className={`${styles["nav-card-container"]} ${styles["main-card"]}`}
                >
                    <NavCard flipped={true} title="About Me" url="about" />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        flipped={false}
                        title="My Projects"
                        url="projects"
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        title="My Experience"
                        flipped={false}
                        url="experience"
                    />
                </div>
                <SocialCard
                    social="github"
                    link="https://github.com/czhangy"
                    alt="GitHub"
                />
                <SocialCard
                    social="linkedin"
                    link="https://www.linkedin.com/in/czhangy/"
                    alt="LinkedIn"
                />
                <SocialCard
                    social="instagram"
                    link="https://www.instagram.com/c.zhangg/"
                    alt="Instagram"
                />
                <SocialCard
                    social="twitter"
                    link="https://twitter.com/czhangy_"
                    alt="Twitter"
                />
            </div>
        </div>
    );
};

export default HomePage;
