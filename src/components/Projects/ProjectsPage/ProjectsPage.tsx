import { useState } from "react";
import { Tool } from "@prisma/client";

import ProjectDoor from "@/components/Projects/ProjectDoor/ProjectDoor";
import ProjectInfo from "@/components/Projects/ProjectInfo/ProjectInfo";
import ProjectModal from "@/components/Projects/ProjectModal/ProjectModal";
import ProjectsMenu from "@/components/Projects/ProjectsMenu/ProjectsMenu";
import { LEFT, RIGHT } from "@/static/constants";
import { ConditionalJSX, Project } from "@/static/types";

import styles from "./ProjectsPage.module.scss";

type ProjectsPageProps = {
    /** The list of all project objects */
    projects: Project[];
    /** The list of all tools that are used by a project */
    tools: Tool[];
};

const ProjectsPage: React.FC<ProjectsPageProps> = (
    props: ProjectsPageProps,
) => {
    const [doorOpen, setDoorOpen] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    /** The amount of time in ms that the doors should remain closed between project switches to hide transitions */
    const CONTENT_UPDATE_DELAY: number = 800;
    /** The amount of time in ms that the doors take to close, before it's safe to change content */
    const DOOR_CLOSE_DELAY: number = 500;
    /** The ID of the scroll container element */
    const SCROLL_CONTAINER_ID: string = "scroll-container";

    /**
     * Returns the list of tools being used by the current project
     */
    const getUsedTools = (): Tool[] => {
        return props.tools.filter((tool: Tool) =>
            currentProject!.toolIDs.includes(tool.id),
        );
    };

    /**
     * Renders the ProjectModal component when a project is selected
     *
     * @returns {ConditionalJSX} The JSX needed to render the project's modal for tablet/mobile displays
     */
    const renderProjectModal = (): ConditionalJSX => {
        return currentProject ? (
            <ProjectModal
                project={currentProject}
                tools={getUsedTools()}
                onClose={unsetProject}
            />
        ) : (
            ""
        );
    };

    /**
     * Updates the page state when a project is unselected
     */
    const unsetProject = (): void => {
        setDoorOpen(false);
        setCurrentProject(null);
    };

    /**
     * Gets the classes needed to style the project container as state changes
     *
     * @returns {string} The classes needed to disable the scroll container when no project is set
     */
    const getContainerClass = (): string => {
        return `${styles["scroll-container"]} ${doorOpen ? "" : styles.disabled}`;
    };

    /**
     * Renders the ProjectInfo component when a project is selected
     *
     * @returns {ConditionalJSX} The JSX needed to render the project's info for desktop displays
     */
    const renderProjectInfo = (): ConditionalJSX => {
        return currentProject ? (
            <ProjectInfo project={currentProject} tools={getUsedTools()} />
        ) : (
            ""
        );
    };

    /**
     * Initiates the transition between projects by modifying the state of the page and its components
     *
     * @param {Project} newProject The object representing the new project that is being transitioned to
     */
    const setProject = (newProject: Project): void => {
        // Reset container to top
        document.getElementById(SCROLL_CONTAINER_ID)!.scrollTo(0, 0);

        if (doorOpen) {
            // Close doors to hide transition to new project
            setDoorOpen(false);

            if (newProject !== currentProject) {
                // Wait for doors to close before changing project contents
                setTimeout(
                    () => setCurrentProject(newProject),
                    DOOR_CLOSE_DELAY,
                );

                // Wait for contents to update/image to load
                setTimeout(() => setDoorOpen(true), CONTENT_UPDATE_DELAY);
            } else {
                // Same project was clicked => close doors
                setTimeout(() => setCurrentProject(null), DOOR_CLOSE_DELAY);
            }
        } else {
            // Skip delays if doors are already closed
            setCurrentProject(newProject);
            setTimeout(() => setDoorOpen(true), DOOR_CLOSE_DELAY);
        }
    };

    return (
        <div className={styles["projects-page"]}>
            {renderProjectModal()}
            <div
                id={SCROLL_CONTAINER_ID}
                className={getContainerClass()}
                data-testid="scroll-container"
            >
                <ProjectDoor side={LEFT} open={doorOpen} />
                <ProjectDoor side={RIGHT} open={doorOpen} />
                {renderProjectInfo()}
            </div>
            <ProjectsMenu projects={props.projects} onSelect={setProject} />
        </div>
    );
};

export default ProjectsPage;
