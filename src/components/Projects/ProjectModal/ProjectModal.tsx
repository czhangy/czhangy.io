import ProjectInfo from "@/components/Projects/ProjectInfo/ProjectInfo";
import Project from "@/models/Project";

import styles from "./ProjectModal.module.scss";

type Props = {
    /** The Project object displayed on the modal */
    project: Project;
    /** The function called when the modal is closed */
    onClose: () => void;
};

const ProjectModal: React.FC<Props> = (props: Props) => {
    /** The amount of time in ms that is waited before hiding the modal to allow for smoother transition */
    const MODAL_CLOSE_DELAY: number = 350;
    /** The ID of the modal component */
    const MODAL_ID: string = "modal";

    /**
     * Closes the modal, initiating the animation and updating state
     */
    const closeModal = (): void => {
        document.getElementById(MODAL_ID)!.classList.add(styles.closing);
        setTimeout(props.onClose, MODAL_CLOSE_DELAY);
    };

    return (
        <div
            id={MODAL_ID}
            className={styles["project-modal-overlay"]}
            onClick={closeModal}
        >
            <div className={styles["project-modal"]}>
                <ProjectInfo project={props.project} />
            </div>
        </div>
    );
};

export default ProjectModal;
