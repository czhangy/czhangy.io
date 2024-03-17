import Image from "@/components/Global/Image/Image";
import ToolTag from "@/components/Projects/ToolTag/ToolTag";
import Project from "@/models/Project";
import Tool from "@/models/Tool";
import { ConditionalJSX } from "@/static/types";

import styles from "./ProjectInfo.module.scss";

type Props = {
    /** The project object */
    project: Project;
};

const ProjectInfo: React.FC<Props> = (props: Props) => {
    /**
     * Gets the src of the project's image
     *
     * @returns {string} The path to the project's image
     */
    const getProjectImg = (): string => {
        return `/assets/images/projects/${props.project.slug}.webp`;
    };

    /**
     * Renders an external link for the project
     *
     * @param {('git'|'link')} type The type of the external link
     * @param {string} alt The alt text used for the link icon
     * @returns {ConditionalJSX} The JSX needed to render the external link
     */
    const renderExternalLink = (
        type: "git" | "link",
        alt: string,
    ): ConditionalJSX => {
        return props.project[type] ? (
            <a
                href={props.project[type] as string}
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
        return props.project.tools.length > 0 ? (
            <section className={styles["project-section"]}>
                <h5 className={styles["section-header"]}>Tools</h5>
                <ul className={styles["tool-list"]}>
                    {props.project.tools.map((tool: Tool, idx: number) => {
                        return <ToolTag tool={tool} key={idx} />;
                    })}
                </ul>
            </section>
        ) : (
            ""
        );
    };

    return (
        <div className={styles["project-info"]}>
            <section className={styles["project-section"]}>
                <div className={styles["project-img"]}>
                    <Image src={getProjectImg()} alt="" objectFit="cover" />
                </div>
            </section>
            <section
                className={`${styles["project-section"]} ${styles["row-section"]}`}
            >
                <h5 className={styles["section-header"]}>
                    {props.project.category}
                </h5>
                <div className={styles["project-links"]}>
                    {renderExternalLink("git", "Git Repo")}
                    {renderExternalLink("link", "Site Link")}
                </div>
            </section>
            <section className={styles["project-section"]}>
                <h5 className={styles["section-header"]}>Summary</h5>
                <p className={styles["section-body"]}>
                    {props.project.summary}
                </p>
            </section>
            {renderToolsSection()}
        </div>
    );
};

export default ProjectInfo;
