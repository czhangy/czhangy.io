// Stylesheet
import styles from "./ProjectsPage.module.scss";
// React
import { useState } from "react";
// TS
import Project from "@/models/Project";
// Components
import ProjectDoor from "@/components/ProjectDoor/ProjectDoor";
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo";
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";

const ProjectsPage: React.FC = () => {
    // Door state
    const [doorOpen, setDoorOpen] = useState<boolean>(false);
    // Menu state
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const selectProject = (project: Project | null) => {
        // Reset container
        document.getElementById("scroll-container")?.scrollTo(0, 0);
        if (doorOpen) {
            setDoorOpen(false);
            // Wait for doors to close before changing project contents
            setTimeout(() => {
                setCurrentProject(project);
            }, 500);
            // Wait for contents to update/image to load
            setTimeout(() => {
                if (project) setDoorOpen(true);
            }, 800);
        } else if (project) {
            setCurrentProject(project);
            setTimeout(() => {
                setDoorOpen(true);
            }, 400);
        }
    };

    return (
        <div className={styles["projects-page"]}>
            <div
                id="scroll-container"
                className={`${styles["project-info-container"]} ${
                    doorOpen ? "" : styles.disabled
                }`}
            >
                <ProjectDoor content="</" open={doorOpen} side="left" />
                <ProjectDoor content="/>" open={doorOpen} side="right" />
                <ProjectInfo currentProject={currentProject} />
            </div>
            <ProjectsMenu onSelect={selectProject} />
        </div>
    );
};

export default ProjectsPage;
