// Stylesheet
import styles from "./ProjectsMenu.module.scss";
// TS
import Project from "@/models/Project";
// React
import { useEffect, useState } from "react";
// Component
import ProjectCard from "@/components/ProjectCard/ProjectCard";
// Static data
import projects from "@/static/projects";

type Props = {
    onSelect: (project: string) => void;
};

const ProjectsMenu: React.FC<Props> = ({ onSelect }) => {
    // Menu state
    const [selected, setSelected] = useState<string>("default");

    // Update image on project page
    useEffect(() => {
        onSelect(selected);
    }, [selected]);

    return (
        <ul className={styles["projects-menu"]}>
            {projects.map((project: Project, i: number) => {
                return (
                    <li className={styles["projects-menu-card"]} key={i}>
                        <ProjectCard
                            onClick={setSelected}
                            project={project}
                            expanded={project.slug === selected}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsMenu;
