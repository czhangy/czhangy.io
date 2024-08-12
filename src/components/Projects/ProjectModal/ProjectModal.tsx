import { Tool } from "@prisma/client";

import Modal from "@/components/Global/Modal/Modal";
import ProjectInfo from "@/components/Projects/ProjectInfo/ProjectInfo";
import { Project } from "@/static/types";

import styles from "./ProjectModal.module.scss";

export type ProjectModalProps = {
    /** The Project object displayed on the modal */
    project: Project;
    /** The tools objects used by the project */
    tools: Tool[];
    /** The function called when the modal is closed */
    onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = (
    props: ProjectModalProps,
) => {
    return (
        <div className={styles["modal-container"]}>
            <Modal onClose={props.onClose} height="85%" width="90%">
                <ProjectInfo project={props.project} tools={props.tools} />
            </Modal>
        </div>
    );
};

export default ProjectModal;
