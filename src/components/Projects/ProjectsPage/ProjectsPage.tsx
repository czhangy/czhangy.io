import { useState } from "react";

import ProjectDoor from "@/components/Projects/ProjectDoor/ProjectDoor";
import ProjectInfo from "@/components/Projects/ProjectInfo/ProjectInfo";
import ProjectModel from "@/components/Projects/ProjectModal/ProjectModal";
import ProjectsMenu from "@/components/Projects/ProjectsMenu/ProjectsMenu";
import Project from "@/models/Project";

import styles from "./ProjectsPage.module.scss";

const ProjectsPage: React.FC = () => {
    const [doorOpen, setDoorOpen] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const selectProject = (project: Project | null) => {
        const DOOR_CLOSE_DELAY = 500;
        const CONTENT_UPDATE_DELAY = 800;

        // Reset container
        document.getElementById("scroll-container")?.scrollTo(0, 0);
        if (doorOpen) {
            setDoorOpen(false);
            if (project && project !== currentProject) {
                // Wait for doors to close before changing project contents
                setTimeout(() => {
                    setCurrentProject(project);
                }, DOOR_CLOSE_DELAY);
                // Wait for contents to update/image to load
                setTimeout(() => {
                    setDoorOpen(true);
                }, CONTENT_UPDATE_DELAY);
            } else {
                setTimeout(() => {
                    setCurrentProject(null);
                }, DOOR_CLOSE_DELAY);
            }
        } else if (project) {
            setCurrentProject(project);
            setTimeout(() => {
                setDoorOpen(true);
            }, DOOR_CLOSE_DELAY);
        }
    };

    const deselectProject = () => {
        setDoorOpen(false);
        setCurrentProject(null);
    };

    return (
        <div className={styles["projects-page"]}>
            {currentProject ? (
                <ProjectModel
                    onClose={deselectProject}
                    project={currentProject}
                />
            ) : (
                ""
            )}
            <div
                id="scroll-container"
                className={`${styles["project-info-container"]} ${
                    doorOpen ? "" : styles.disabled
                }`}
            >
                <ProjectDoor content="</" open={doorOpen} side="left" />
                <ProjectDoor content="/>" open={doorOpen} side="right" />
                {currentProject ? <ProjectInfo project={currentProject} /> : ""}
            </div>
            <ProjectsMenu onSelect={selectProject} />
        </div>
    );
};

export default ProjectsPage;
