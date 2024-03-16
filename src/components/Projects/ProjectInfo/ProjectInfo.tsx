import Image from "next/image";
import ToolTag from "@/components/Projects/ToolTag/ToolTag";

import styles from "./ProjectInfo.module.scss";
import Project from "@/models/Project";
import Tool from "@/models/Tool";

type Props = {
    project: Project;
};

const ProjectInfo: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles["project-info"]}>
            <div className={styles["project-img"]}>
                <Image
                    src={`/assets/images/projects/${props.project.slug}.webp`}
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
                        {props.project.category}
                    </h4>
                    <div className={styles["project-links"]}>
                        {props.project.git ? (
                            <a
                                href={props.project.git}
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
                        {props.project.link ? (
                            <a
                                href={props.project.link}
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
                    <p className={styles["section-text"]}>
                        {props.project.summary}
                    </p>
                </section>
                {props.project.tools.length > 0 ? (
                    <section className={styles["project-section"]}>
                        <h4 className={styles["section-header"]}>Tools</h4>
                        <ul className={styles["tool-list"]}>
                            {props.project.tools.map(
                                (tool: Tool, i: number) => {
                                    return <ToolTag tool={tool} key={i} />;
                                },
                            )}
                        </ul>
                    </section>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default ProjectInfo;
