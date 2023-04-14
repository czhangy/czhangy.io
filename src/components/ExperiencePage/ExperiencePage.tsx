// Stylesheet
import styles from "./ExperiencePage.module.scss";
// TS
import Experience from "@/models/Experience";
// Component
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
// Static data
import experience from "@/static/experience";

const ExperiencePage: React.FC = () => {
    return (
        <div className={styles["experience-page"]}>
            <ul className={styles.timeline}>
                <div className={styles.arrow} />
                {experience.map((e: Experience, i: number) => {
                    return (
                        <li
                            className={`${styles["timeline-el"]} ${
                                i % 2 === 0 ? styles.right : styles.left
                            }`}
                        >
                            <ExperienceCard experience={e} />
                            <p
                                className={`${styles.time} ${
                                    i % 2 === 0
                                        ? styles["right-time"]
                                        : styles["left-time"]
                                }`}
                            >{`${e.startDate} ${
                                e.endDate.length > 0 ? `- ${e.endDate}` : ""
                            }`}</p>
                        </li>
                    );
                })}
                <div
                    className={`${styles.endpoint} ${
                        experience.length % 2 === 0
                            ? styles["right-endpoint"]
                            : styles["left-endpoint"]
                    }`}
                />
            </ul>
        </div>
    );
};

export default ExperiencePage;
