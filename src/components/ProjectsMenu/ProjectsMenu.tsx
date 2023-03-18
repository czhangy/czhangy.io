// Stylesheet
import styles from "./ProjectsMenu.module.scss";
// TS
import Project from "@/models/Project";
// Component
import ProjectCard from "@/components/ProjectCard/ProjectCard";
// Static data
import projects from "@/static/projects";

const ProjectsMenu: React.FC = () => {
    return (
        <ul className={styles["projects-menu"]}>
            {projects.map((project: Project, i: number) => {
                return (
                    <li className={styles["project-menu-card"]} key={i}>
                        <ProjectCard project={project} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsMenu;
