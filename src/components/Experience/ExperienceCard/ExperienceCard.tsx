import Image from "next/image";

import Experience from "@/models/Experience";

import styles from "./ExperienceCard.module.scss";

type Props = {
    /** The Experience object being represented */
    experience: Experience;
};

const ExperienceCard: React.FC<Props> = (props: Props) => {
    /**
     * Returns the timeframe in {START_DATE} - {END_DATE} format, stripping out {END_DATE} if none exists
     *
     * @param {Experience} exp the current Experience object
     * @returns {string} the formatted timeframe
     * */
    const getTimeframe = (exp: Experience): string => {
        return `${exp.startDate} ${exp.endDate.length > 0 ? `- ${exp.endDate}` : ""}`;
    };

    return (
        <div className={styles["experience-card"]}>
            <div className={styles["card-header"]}>
                <div className={styles["card-img"]}>
                    <Image
                        src={`/assets/images/experience/${props.experience.logo}`}
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
                    <p className={styles.timeframe}>
                        {getTimeframe(props.experience)}
                    </p>
                </div>
            </div>
            {props.experience.desc.length > 0 ? (
                <ul className={styles["card-description"]}>
                    {props.experience.desc.map(
                        (description: string, idx: number) => {
                            return (
                                <li className={styles.bullet} key={idx}>
                                    {description}
                                </li>
                            );
                        },
                    )}
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};

export default ExperienceCard;
