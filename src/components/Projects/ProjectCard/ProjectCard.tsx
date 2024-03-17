import Project from "@/models/Project";

import styles from "./ProjectCard.module.scss";

type Props = {
    /** The Project object that is represented by this card */
    project: Project;
    /** The function that is called when a project is clicked */
    onClick: (project: Project) => void;
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
