// Stylesheet
import styles from "./ProjectsPage.module.scss";
// Next
import Image from "next/image";
// React
import { useState } from "react";
// TS
import Project from "@/models/Project";
// Component
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";
import projects from "@/static/projects";

const ProjectsPage: React.FC = () => {
    // Menu state
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    return (
        <div className={styles["projects-page"]}>
            <div className={styles["project-info"]}>
                <div className={styles["project-img"]}>
                    <Image
                        src={`/assets/images/projects/${
                            currentProject ? currentProject.slug : "default"
                        }.webp`}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                {currentProject ? (
                    <div className={styles["project-desc"]}>
                        <p className={styles["project-text"]}>
                            {currentProject.category}
                        </p>
                        <div className={styles["project-links"]}>
                            {currentProject.git ? (
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
                            {currentProject.link ? (
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
                ) : (
                    ""
                )}
            </div>
            <ProjectsMenu onSelect={setCurrentProject} />
        </div>
    );
};

export default ProjectsPage;
