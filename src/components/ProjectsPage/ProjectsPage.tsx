// Stylesheet

// React
import { useState } from "react";
// Components
import ProjectDoor from "@/components/ProjectDoor/ProjectDoor";
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo";
import ProjectModel from "@/components/ProjectModal/ProjectModal";
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";

import styles from "./ProjectsPage.module.scss";
// TS
import Project from "@/models/Project";

const ProjectsPage: React.FC = () => {
    // Door state
    const [doorOpen, setDoorOpen] = useState<boolean>(false);
    // Menu state
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
