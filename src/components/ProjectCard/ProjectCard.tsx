// Stylesheet
import styles from "./ProjectCard.module.scss";
// Next
import Image from "next/image";
// TS
import Project from "@/models/Project";

type Props = {
    onClick: (project: string) => void;
    project: Project;
    expanded: boolean;
};

const ProjectCard: React.FC<Props> = (props: Props) => {
    // Toggle component state
    const toggleExpand = () => {
        props.onClick(props.expanded ? "default" : props.project.slug);
    };

    return (
        <button
            onClick={toggleExpand}
            className={`${styles["project-card"]} ${
                props.expanded ? styles.expanded : ""
            }`}
        >
            <h3 className={styles["project-name"]}>{props.project.name}</h3>
            <div className={styles["project-info"]}>
                <div className={styles["project-text"]}>
                    <p className={styles["project-category"]}>
                        {props.project.category}
                    </p>
                    <p className={styles["project-timeline"]}>
                        {props.project.startDate} – {props.project.endDate}
                    </p>
                </div>
                <div className={styles["project-links"]}>
                    {props.project.git ? (
                        <a
                            href={props.project.git}
                            target="_blank"
                            rel="noreferrer"
                            className={styles["icon-container"]}
                        >
                            <Image
                                src="/assets/icons/git.svg"
                                alt="Git Repo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    ) : (
                        ""
                    )}
                    {props.project.link ? (
                        <a
                            href={props.project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={styles["icon-container"]}
                        >
                            <Image
                                src="/assets/icons/link.svg"
                                alt="Site Link"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className={styles.arrow}>
                <Image
                    src="/assets/icons/chevron.svg"
                    alt="Arrow indicator"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </button>
    );
};

export default ProjectCard;
