import { Tool } from "@prisma/client";

import Image from "@/components/Global/Image/Image";
import ToolTag from "@/components/Projects/ToolTag/ToolTag";
import { COVER, GIT_LINK_ALT, SITE_LINK_ALT } from "@/static/constants";
import { ConditionalJSX, Project } from "@/static/types";

import styles from "./ProjectInfo.module.scss";

export type ProjectInfoProps = {
    /** The project object */
    project: Project;
    /** The tools objects used by this project */
    tools: Tool[];
};

const ProjectInfo: React.FC<ProjectInfoProps> = (props: ProjectInfoProps) => {
    /**
     * Renders an external link for the project
     *
     * @param {('git'|'link')} type The type of the external link
     * @param {string} alt The alt text used for the link icon
     * @returns {ConditionalJSX} The JSX needed to render the external link
     */
    const renderExternalLink = (
        type: "git" | "site",
        alt: "Git Repo" | "Site Link",
    ): ConditionalJSX => {
        return props.project[`${type}Link`] ? (
            <a
                href={props.project[`${type}Link`]}
                target="_blank"
                rel="noreferrer"
                className={styles["icon-container"]}
            >
                <Image src={`/assets/icons/${type}.svg`} alt={alt} />
            </a>
        ) : (
            ""
        );
    };

    /**
     * Renders the list of tools used for the project
     *
     * @returns {ConditionalJSX} The JSX rendering the tools section of the project if it exists
     */
    const renderToolsSection = (): ConditionalJSX => {
        return props.tools && props.tools.length > 0 ? (
            <section className={styles["project-section"]}>
                <h5 className={styles["section-header"]}>Tools</h5>
                <ul className={styles["tool-list"]}>
                    {props.tools.map((tool: Tool, idx: number) => {
                        return <ToolTag tool={tool} key={idx} />;
                    })}
                </ul>
            </section>
        ) : (
            ""
        );
    };

    return (
        <div className={styles["project-info"]} data-testid="project-info">
            <section className={styles["project-section"]}>
                <div className={styles["project-img"]}>
                    <Image
                        src={props.project.thumbnail}
                        alt={props.project.name}
                        objectFit={COVER}
                    />
                </div>
            </section>
            <section
                className={`${styles["project-section"]} ${styles["row-section"]}`}
            >
                <h5 className={styles["section-header"]}>
                    {props.project.category}
                </h5>
                <div className={styles["project-links"]}>
                    {renderExternalLink("git", GIT_LINK_ALT)}
                    {renderExternalLink("site", SITE_LINK_ALT)}
                </div>
            </section>
            <section className={styles["project-section"]}>
                <h5 className={styles["section-header"]}>Summary</h5>
                <p
                    className={styles["section-body"]}
                    data-testid="project-summary"
                >
                    {props.project.summary}
                </p>
            </section>
            {renderToolsSection()}
        </div>
    );
};

export default ProjectInfo;
