// Stylesheet
import styles from "./ProjectsPage.module.scss";
// Component
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";

const ProjectsPage: React.FC = () => {
    return (
        <div className={styles["projects-page"]}>
            <ProjectsMenu />
        </div>
    );
};

export default ProjectsPage;
