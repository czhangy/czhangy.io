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
    onSelect: (project: Project | null) => void;
};

const ProjectsMenu: React.FC<Props> = ({ onSelect }) => {
    // Menu state
    const [selected, setSelected] = useState<Project | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);

    const selectProject = (project: Project | null) => {
        setDisabled(true);
        setSelected(project);
        setTimeout(() => setDisabled(false), 800);
    };

    // Update image on project page
    useEffect(() => {
        onSelect(selected);
    }, [selected]);

    return (
        <ul
            className={`${styles["projects-menu"]} ${
                disabled ? styles.disabled : ""
            }`}
        >
            {projects.map((project: Project, i: number) => {
                return (
                    <li className={styles["projects-menu-card"]} key={i}>
                        <ProjectCard
                            onClick={selectProject}
                            project={project}
                            expanded={
                                selected !== null &&
                                project.slug === selected.slug
                            }
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsMenu;
