// Stylesheet
import styles from "./HomePage.module.scss";
// Component
import NavCard from "@/components/NavCard/NavCard";
import SocialCard from "@/components/SocialCard/SocialCard";

type Props = {
    onNav: (newPage: string) => void;
};

const HomePage: React.FC<Props> = (props) => {
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-grid"]}>
                <div
                    className={`${styles["nav-card-container"]} ${styles["main-card"]}`}
                >
                    <NavCard
                        bgUrl="/assets/images/home/about_me.webp"
                        title="About Me"
                        flipped={true}
                        onNav={() => props.onNav("about")}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/projects.webp"
                        title="My Projects"
                        flipped={false}
                        onNav={() => props.onNav("projects")}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/experience.webp"
                        title="My Experience"
                        flipped={false}
                        onNav={() => props.onNav("experience")}
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
