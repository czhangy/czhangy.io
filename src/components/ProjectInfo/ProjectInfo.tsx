// Stylesheet
import styles from "./ProjectInfo.module.scss";
// Next
import Image from "next/image";
// TS
import Project from "@/models/Project";

type Props = {
    currentProject: Project | null;
};

const ProjectInfo: React.FC<Props> = ({ currentProject }) => {
    return (
        <div className={styles["project-info"]}>
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
                <section
                    className={`${styles["project-section"]} ${styles["top-section"]}`}
                >
                    <h4 className={styles["section-header"]}>
                        {currentProject
                            ? currentProject.category
                            : "Placeholder"}
                    </h4>
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
                </section>
                <section className={styles["project-section"]}>
                    <h4 className={styles["section-header"]}>Summary</h4>
                </section>
                <section className={styles["project-section"]}>
                    <h4 className={styles["section-header"]}>Tools</h4>
                </section>
            </div>
        </div>
    );
};

export default ProjectInfo;
