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
                    className={`${styles["nav-card-container"]} ${styles.about}`}
                >
                    <NavCard
                        bgUrl="/assets/images/home/about_me.webp"
                        title="About Me"
                        flipped={true}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/projects.webp"
                        title="My Projects"
                        flipped={false}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/experience.webp"
                        title="My Experience"
                        flipped={false}
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
