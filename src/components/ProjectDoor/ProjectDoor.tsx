// Stylesheet
import styles from "./ProjectDoor.module.scss";

type Props = {
    open: boolean;
};

const ProjectDoor: React.FC<Props> = ({ open }) => {
    return (
        <div className={styles["project-door"]}>
            <div
                className={`${styles.door} ${styles.left} ${
                    open ? "" : styles.closed
                }`}
            >
                <span className={styles.decal}>&lt;/</span>
            </div>
            <div
                className={`${styles.door} ${styles.right} ${
                    open ? "" : styles.closed
                }`}
            >
                <span className={styles.decal}>/&gt;</span>
            </div>
        </div>
    );
};

export default ProjectDoor;
