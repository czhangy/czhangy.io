import { useState } from "react";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import Project from "@/models/Project";
import projects from "@/static/projects";

import styles from "./ProjectsMenu.module.scss";

type Props = {
    onSelect: (project: Project | null) => void;
};

const ProjectsMenu: React.FC<Props> = (props: Props) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    const selectProject = (project: Project | null) => {
        setDisabled(true);
        props.onSelect(project);
        setTimeout(() => setDisabled(false), 800);
    };

    return (
        <ul
            className={`${styles["projects-menu"]} ${
                disabled ? styles.disabled : ""
            }`}
        >
            {projects.map((project: Project, i: number) => {
                return (
                    <li className={styles["projects-menu-card"]} key={i}>
                        <ProjectCard
                            onClick={selectProject}
                            project={project}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsMenu;
