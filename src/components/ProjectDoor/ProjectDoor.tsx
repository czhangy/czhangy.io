// Stylesheet
import styles from "./ProjectDoor.module.scss";

type Props = {
    content: string;
    open: boolean;
    side: string;
};

const ProjectDoor: React.FC<Props> = ({ content, open, side }) => {
    return (
        <div
            className={`${styles["project-door"]} ${styles[side]} ${
                open ? "" : styles.closed
            }`}
        >
            <span className={styles.decal}>{content}</span>
        </div>
    );
};

export default ProjectDoor;
