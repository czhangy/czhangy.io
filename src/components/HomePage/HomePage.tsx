// Stylesheet
import styles from "./HomePage.module.scss";
// React
import { useEffect, useState } from "react";
// Component
import NavCard from "@/components/NavCard/NavCard";
import SocialCard from "@/components/SocialCard/SocialCard";

type Props = {
    onNav: (newPage: string) => void;
};

const HomePage: React.FC<Props> = (props) => {
    // Page state
    const [isHidden, setIsHidden] = useState<boolean>(true);

    // Trigger fade out and nav
    const handleNav = (newPage: string) => {
        // Fade out
        setIsHidden(true);
        // Navigate to new page
        props.onNav(newPage);
    };

    // Trigger fade in on load
    useEffect(() => {
        setIsHidden(false);
    }, []);

    return (
        <div className={styles["home-page"]}>
            <div
                className={`${styles["home-grid"]} ${
                    isHidden ? "hide" : "show"
                }`}
            >
                <div
                    className={`${styles["nav-card-container"]} ${styles.about}`}
                >
                    <NavCard
                        bgUrl="/assets/images/home/about_me.webp"
                        title="About Me"
                        flipped={true}
                        onNav={() => handleNav("about")}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/projects.webp"
                        title="My Projects"
                        flipped={false}
                        onNav={() => handleNav("projects")}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/experience.webp"
                        title="My Experience"
                        flipped={false}
                        onNav={() => handleNav("experience")}
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
