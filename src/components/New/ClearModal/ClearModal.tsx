import Modal from "@/components/Global/Modal/Modal";
import modalStyles from "@/components/Global/Modal/Modal.module.scss";

import styles from "./ClearModal.module.scss";

type Props = {
    /** The callback method called when the modal is closed */
    onClose: () => void;
    /** The callback method called when yes is clicked */
    onConfirm: () => void;
};

const ClearModal: React.FC<Props> = (props: Props) => {
    /** The amount of time in ms that is waited before hiding the modal to allow for smoother transition, synced with Modal.tsx */
    const MODAL_CLOSE_DELAY: number = 350;

    // ------------------------------------------------------------------------
    // Event handlers
    // ------------------------------------------------------------------------

    /**
     * Confirms the state clear, closing the modal
     */
    const handleYes = (): void => {
        props.onConfirm();
        closeModal();
    };

    /**
     * Closes the modal using the same logic as in Modal.tsx's closeModal() function
     */
    const closeModal = (): void => {
        document.getElementById("modal")!.classList.add(modalStyles.closing);
        setTimeout(props.onClose, MODAL_CLOSE_DELAY);
    };

    return (
        <Modal onClose={props.onClose}>
            <h4 className={styles.header}>
                <strong>Are you sure?</strong>
            </h4>
            <section className={styles.buttons}>
                <button
                    className={`${styles.button} ${styles.yes}`}
                    onClick={handleYes}
                >
                    <strong>Yes</strong>
                </button>
                <button
                    className={`${styles.button} ${styles.no}`}
                    onClick={closeModal}
                >
                    <strong>No</strong>
                </button>
            </section>
        </Modal>
    );
};

export default ClearModal;
