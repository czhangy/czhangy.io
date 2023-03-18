// Stylesheet
import styles from "./ProjectCard.module.scss";
// Next
import Image from "next/image";
// TS
import Project from "@/models/Project";
// React
import { useState } from "react";

type Props = {
    project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
    // Component state
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // Toggle component state
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <button
            onClick={toggleExpand}
            className={`${styles["project-card"]} ${
                isExpanded ? styles.expanded : ""
            }`}
        >
            <h3 className={styles["project-name"]}>{project.name}</h3>
            <div className={styles["project-info"]}>
                <div className={styles["project-text"]}>
                    <p className={styles["project-category"]}>
                        {project.category}
                    </p>
                    <p className={styles["project-timeline"]}>
                        {project.startDate} – {project.endDate}
                    </p>
                </div>
                <div className={styles["project-links"]}>
                    {project.git ? (
                        <a
                            href={project.git}
                            target="_blank"
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
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
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
