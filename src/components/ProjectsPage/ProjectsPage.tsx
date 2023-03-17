// Stylesheet
import styles from "./ProjectsPage.module.scss";
// React
import { useState } from "react";

const ProjectsPage: React.FC = () => {
    // Page state
    const [currentProject, setCurrentProject] = useState<string>("");

    return <div className={styles["projects-page"]}>ProjectsPage</div>;
};

export default ProjectsPage;
