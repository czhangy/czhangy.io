import { Tool } from "@prisma/client";

import Modal from "@/components/Global/Modal/Modal";
import ProjectInfo from "@/components/Projects/ProjectInfo/ProjectInfo";
import { Project } from "@/static/types";

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
        <Modal onClose={props.onClose}>
            <ProjectInfo project={props.project} tools={props.tools} />
        </Modal>
    );
};

export default ProjectModal;
