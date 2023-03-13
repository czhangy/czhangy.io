// Stylesheet
import styles from "./HomePage.module.scss";
// React
import { useEffect, useState } from "react";
// Component
import NavCard from "@/components/NavCard/NavCard";
import SocialCard from "@/components/SocialCard/SocialCard";

type Props = {
    onAbout: () => void;
    onProjects: () => void;
    onExperience: () => void;
    isHidden: boolean;
};

const HomePage: React.FC<Props> = (props) => {
    return (
        <div className={styles["home-page"]}>
            <div
                className={`${styles["home-grid"]} ${
                    props.isHidden ? "hide" : "show"
                }`}
            >
                <div
                    className={`${styles["nav-card-container"]} ${styles.about}`}
                >
                    <NavCard
                        bgUrl="/assets/images/home/about_me.webp"
                        title="About Me"
                        flipped={true}
                        onNav={props.onAbout}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/projects.webp"
                        title="My Projects"
                        flipped={false}
                        onNav={props.onProjects}
                    />
                </div>
                <div className={styles["nav-card-container"]}>
                    <NavCard
                        bgUrl="/assets/images/home/experience.webp"
                        title="My Experience"
                        flipped={false}
                        onNav={props.onExperience}
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
