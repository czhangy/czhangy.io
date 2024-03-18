import { useState } from "react";

import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import Project from "@/models/Project";
import projects from "@/static/projects";

import styles from "./ProjectsMenu.module.scss";

export type ProjectsMenuProps = {
    onSelect: (project: Project) => void;
};

const ProjectsMenu: React.FC<ProjectsMenuProps> = (
    props: ProjectsMenuProps,
) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    /** The amount of time in ms that the menu is disabled to allow for a clean animation */
    const CLICK_DELAY: number = 800;

    /**
     * Get the classes needed to style the menu
     *
     * @returns {string} The classes needed to style and disable the menu
     */
    const getMenuClass = (): string => {
        return `${styles["projects-menu"]} ${disabled ? styles.disabled : ""}`;
    };

    /**
     * Selects a project by disabling the menu temporarily and passing the selection up
     *
     * @param {Project} project The Project object that is being selected
     */
    const selectProject = (project: Project): void => {
        setDisabled(true);
        props.onSelect(project);
        setTimeout(() => setDisabled(false), CLICK_DELAY);
    };

    return (
        <ul className={getMenuClass()}>
            {projects.map((project: Project, idx: number) => {
                return (
                    <li className={styles["projects-menu-card"]} key={idx}>
                        <ProjectCard
                            project={project}
                            onClick={selectProject}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsMenu;
