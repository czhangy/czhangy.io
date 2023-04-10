// Stylesheet
import styles from "./ProjectsMenu.module.scss";
// TS
import Project from "@/models/Project";
// Component
import ProjectCard from "@/components/ProjectCard/ProjectCard";
// Static data
import projects from "@/static/projects";

type Props = {
    onSelect: (project: string) => void;
};

const ProjectsMenu: React.FC<Props> = ({ onSelect }) => {
    return (
        <ul className={styles["projects-menu"]}>
            {projects.map((project: Project, i: number) => {
                return (
                    <li className={styles["projects-menu-card"]} key={i}>
                        <ProjectCard onClick={onSelect} project={project} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ProjectsMenu;
