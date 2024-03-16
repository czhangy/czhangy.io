import ProjectInfo from "@/components/Projects/ProjectInfo/ProjectInfo";

import styles from "./ProjectModal.module.scss";
import Project from "@/models/Project";

type Props = {
    onClose: () => void;
    project: Project;
};

const ProjectModal: React.FC<Props> = (props: Props) => {
    const closeModal = () => {
        document.getElementById("modal")?.classList.add(styles["closing"]);
        setTimeout(props.onClose, 350);
    };

    return (
        <div
            id="modal"
            className={styles["project-modal-bg"]}
            onClick={closeModal}
        >
            <div className={styles["project-modal"]}>
                <ProjectInfo project={props.project} />
            </div>
        </div>
    );
};

export default ProjectModal;
