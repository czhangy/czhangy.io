// Stylesheet
import styles from "./ProjectsPage.module.scss";
// Next
import Image from "next/image";
// React
import { useState } from "react";
// TS
import Project from "@/models/Project";
// Components
import ProjectDoor from "@/components/ProjectDoor/ProjectDoor";
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";

const ProjectsPage: React.FC = () => {
    // Door state
    const [doorOpen, setDoorOpen] = useState<boolean>(false);
    // Menu state
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const selectProject = (project: Project | null) => {
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
            <div className={styles["project-info"]}>
                <ProjectDoor open={doorOpen} />
                <div className={styles["project-img"]}>
                    <Image
                        src={`/assets/images/projects/${
                            currentProject ? currentProject.slug : "default"
                        }.webp`}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/assets/images/projects/default.webp"
                    />
                </div>

                <div className={styles["project-desc"]}>
                    <p className={styles["project-text"]}>
                        {currentProject
                            ? currentProject.category
                            : "Placeholder"}
                    </p>
                    <div className={styles["project-links"]}>
                        {currentProject?.git ? (
                            <a
                                href={currentProject.git}
                                target="_blank"
                                rel="noreferrer"
                                className={styles["icon-container"]}
                            >
                                <Image
                                    src="/assets/icons/git.svg"
                                    alt="Git Repo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        ) : (
                            ""
                        )}
                        {currentProject?.link ? (
                            <a
                                href={currentProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className={styles["icon-container"]}
                            >
                                <Image
                                    src="/assets/icons/link.svg"
                                    alt="Site Link"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
            <ProjectsMenu onSelect={selectProject} />
        </div>
    );
};

export default ProjectsPage;
