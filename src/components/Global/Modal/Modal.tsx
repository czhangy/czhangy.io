import { MouseEvent, ReactNode } from "react";

import styles from "./Modal.module.scss";

type ModalProps = {
    /** The modal contents */
    children: ReactNode;
    /** The function called when the modal is closed */
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    // ------------------------------------------------------------------------
    // Constant
    // ------------------------------------------------------------------------

    /** The amount of time in ms that is waited before hiding the modal to allow for smoother transition */
    const MODAL_CLOSE_DELAY: number = 350;

    // ------------------------------------------------------------------------
    // Event handler
    // ------------------------------------------------------------------------

    /**
     * Closes the modal, initiating the animation and updating state
     */
    const closeModal = (): void => {
        document.getElementById("modal")!.classList.add(styles.closing);
        setTimeout(props.onClose, MODAL_CLOSE_DELAY);
    };

    return (
        <div id="modal" className={styles.overlay} onClick={closeModal}>
            <div
                className={styles.modal}
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
