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
                {experience.map((e: Experience, i: number) => {
                    return (
                        <li className={styles["timeline-el"]} key={i}>
                            <ExperienceCard experience={e} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ExperiencePage;
