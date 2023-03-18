// Stylesheet
import styles from "./ProjectCard.module.scss";
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
        </button>
    );
};

export default ProjectCard;
