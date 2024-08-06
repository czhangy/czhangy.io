import { ReactElement, useState } from "react";

import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import { Project } from "@/static/types";

import styles from "./ProjectsMenu.module.scss";

export type ProjectsMenuProps = {
    /** The list of all project objects */
    projects: Project[];
    /** The function that is called when a menu option is selected */
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
     * Get the list of project cards
     *
     * @returns {ReactElement[]} The list of react elements used to render the project options
     */
    const getProjectOptions = (): ReactElement[] => {
        return props.projects.map((project: Project, idx: number) => {
            return (
                <li className={styles["projects-menu-card"]} key={idx}>
                    <ProjectCard project={project} onClick={selectProject} />
                </li>
            );
        });
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

    return <ul className={getMenuClass()}>{getProjectOptions()}</ul>;
};

export default ProjectsMenu;
