import styles from "./ProjectDoor.module.scss";

type Props = {
    content: string;
    open: boolean;
    side: string;
};

const ProjectDoor: React.FC<Props> = (props: Props) => {
    return (
        <div
            className={`${styles["project-door"]} ${styles[props.side]} ${
                props.open ? "" : styles.closed
            }`}
        >
            <span className={styles.decal}>{props.content}</span>
        </div>
    );
};

export default ProjectDoor;
