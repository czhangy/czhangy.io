import Image from "next/image";

import Experience from "@/models/Experience";

import styles from "./ExperienceCard.module.scss";

type Props = {
    experience: Experience;
};

const ExperienceCard: React.FC<Props> = ({ experience }) => {
    return (
        <div className={styles["experience-card"]}>
            <div className={styles["card-header"]}>
                <div className={styles["card-img"]}>
                    <Image
                        src={`/assets/images/experience/${experience.logo}`}
                        alt={experience.company}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={styles["header-text"]}>
                    <h3 className={styles.company}>{experience.company}</h3>
                    <p className={styles.title}>{experience.title}</p>
                    <p className={styles.time}>{`${experience.startDate} ${
                        experience.endDate.length > 0
                            ? `- ${experience.endDate}`
                            : ""
                    }`}</p>
                </div>
            </div>
            {experience.desc.length > 0 ? (
                <ul className={styles["card-desc"]}>
                    {experience.desc.map((d: string, i: number) => {
                        return (
                            <li className={styles["desc-line"]} key={i}>
                                {d}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};

export default ExperienceCard;
