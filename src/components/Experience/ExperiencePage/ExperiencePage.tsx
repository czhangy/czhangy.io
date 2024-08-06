import { ReactElement } from "react";

import ExperienceCard from "@/components/Experience/ExperienceCard/ExperienceCard";
import { Experience } from "@/static/types";

import styles from "./ExperiencePage.module.scss";

export type ExperiencePageProps = {
    /** The list of Experience objects to display */
    experiences: Experience[];
};

const ExperiencePage: React.FC<ExperiencePageProps> = (
    props: ExperiencePageProps,
) => {
    /**
     * Renders the experience at a given timeline index
     *
     * @returns {ReactElement[]} The timeline entries
     */
    const renderExperiences = (): ReactElement[] => {
        return props.experiences.map((experience: Experience, idx: number) => {
            return (
                <li className={getExperienceClass(idx)} key={idx}>
                    <ExperienceCard experience={experience} />
                    <p className={styles.timeframe}>
                        {getTimeframe(experience)}
                    </p>
                </li>
            );
        });
    };

    /**
     * Gets the correct styling of the experience, based on index
     *
     * @param {number} idx The index of the experience element
     * @returns {string} The classes needed to style the experience in the current index
     * */
    const getExperienceClass = (idx: number): string => {
        return `${styles.experience} ${idx % 2 === 0 ? styles.right : styles.left}`;
    };

    /**
     * Returns the timeframe in {START_DATE} - {END_DATE} format, stripping out {END_DATE} if none exists
     *
     * @param {Experience} exp The current Experience object
     * @returns {string} The formatted timeframe
     * */
    const getTimeframe = (exp: Experience): string => {
        return `${exp.startDate} ${exp.endDate.length > 0 ? `- ${exp.endDate}` : ""}`;
    };

    /**
     * Gets the correct styling of the endpoint, based on number of experiences
     *
     * @returns {string} The classes needed to style the endpoint with the current number of experiences
     */
    const getEndpointClass = (): string => {
        return `${styles.endpoint} ${
            props.experiences.length % 2 === 0
                ? styles["right-endpoint"]
                : styles["left-endpoint"]
        }`;
    };

    return (
        <div className={styles["experience-page"]}>
            <ul className={styles.timeline}>
                <div className={styles.arrow} />
                {renderExperiences()}
                <div className={getEndpointClass()} />
            </ul>
        </div>
    );
};

export default ExperiencePage;
