// Stylesheet

// React
import { useState } from "react";
// Component
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import styles from "./ProjectsMenu.module.scss";
// TS
import Project from "@/models/Project";
// Static data
import projects from "@/static/projects";

type Props = {
    onSelect: (project: Project | null) => void;
};

const ProjectsMenu: React.FC<Props> = ({ onSelect }) => {
    // Menu state
    const [disabled, setDisabled] = useState<boolean>(false);

    const selectProject = (project: Project | null) => {
        setDisabled(true);
        onSelect(project);
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
