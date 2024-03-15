import Project from "@/models/Project";

import styles from "./ProjectCard.module.scss";

type Props = {
    onClick: (project: Project | null) => void;
    project: Project;
};

const ProjectCard: React.FC<Props> = (props: Props) => {
    return (
        <button
            onClick={() => props.onClick(props.project)}
            className={styles["project-card"]}
        >
            <h3 className={styles["project-name"]}>{props.project.name}</h3>
        </button>
    );
};

export default ProjectCard;
