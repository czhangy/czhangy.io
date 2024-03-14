// Stylesheet

// Component
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo";

import styles from "./ProjectModal.module.scss";
// TS
import Project from "@/models/Project";

type Props = {
    onClose: () => void;
    project: Project;
};

const ProjectModal: React.FC<Props> = ({ onClose, project }) => {
    const closeModal = () => {
        document.getElementById("modal")?.classList.add(styles["closing"]);
        setTimeout(() => onClose(), 350);
    };

    return (
        <div
            id="modal"
            className={styles["project-modal-bg"]}
            onClick={closeModal}
        >
            <div className={styles["project-modal"]}>
                <ProjectInfo project={project} />
            </div>
        </div>
    );
};

export default ProjectModal;
