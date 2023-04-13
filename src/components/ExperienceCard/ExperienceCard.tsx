// Stylesheet
import styles from "./ExperienceCard.module.scss";
// Next
import Image from "next/image";
// TS
import Experience from "@/models/Experience";

type Props = {
    experience: Experience;
};

const ExperienceCard: React.FC<Props> = ({ experience }) => {
    return (
        <div className={styles["experience-card"]}>
            <div className={styles["card-header"]}>
                <div className={styles["card-img"]}>
                    <Image
                        src={`/assets/images/experience/${experience.slug}.webp`}
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
                        return <li className={styles["desc-line"]}>{d}</li>;
                    })}
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};

export default ExperienceCard;
