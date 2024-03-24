import Image from "next/image";

import Experience from "@/models/Experience";
import { ConditionalJSX } from "@/static/types";

import styles from "./ExperienceCard.module.scss";

export type ExperienceCardProps = {
    /** The Experience object being represented */
    experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (
    props: ExperienceCardProps,
) => {
    /**
     * Returns the timeframe in {START_DATE} - {END_DATE} format, stripping out {END_DATE} if none exists
     *
     * @param {Experience} exp The Experience object
     * @returns {string} The formatted timeframe
     * */
    const getTimeframe = (exp: Experience): string => {
        return `${exp.startDate} ${exp.endDate.length > 0 ? `- ${exp.endDate}` : ""}`;
    };

    /**
     * Gets the markup for card bullets
     *
     * @returns {ConditionalJSX} The JSX needed to render bullets if they exist
     */
    const getCardDescription = (): ConditionalJSX => {
        return props.experience.desc.length > 0 ? (
            <ul className={styles["card-description"]}>
                {props.experience.desc.map((bullet: string, idx: number) => {
                    return (
                        <li className={styles.bullet} key={idx}>
                            {bullet}
                        </li>
                    );
                })}
            </ul>
        ) : (
            ""
        );
    };

    return (
        <div className={styles["experience-card"]}>
            <div className={styles["card-header"]}>
                <div className={styles["card-img"]}>
                    <Image
                        src={props.experience.logo}
                        alt={props.experience.company}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={styles["header-text"]}>
                    <h3 className={styles.company}>
                        {props.experience.company}
                    </h3>
                    <strong className={styles.title}>
                        {props.experience.title}
                    </strong>
                    <p
                        className={styles.timeframe}
                        data-testid="card-timeframe"
                    >
                        {getTimeframe(props.experience)}
                    </p>
                </div>
            </div>
            {getCardDescription()}
        </div>
    );
};

export default ExperienceCard;
