// Stylesheet
import styles from "./ProjectsPage.module.scss";
// Next
import Image from "next/image";
// React
import { useState } from "react";
// Component
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";

const ProjectsPage: React.FC = () => {
    // Menu state
    const [currentProject, setCurrentProject] = useState<string>("");

    return (
        <div className={styles["projects-page"]}>
            {currentProject !== "" ? (
                <div className={styles["project-img"]}>
                    <Image
                        src={`/assets/images/home/about.webp`}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            ) : (
                ""
            )}
            <ProjectsMenu onSelect={setCurrentProject} />
        </div>
    );
};

export default ProjectsPage;
