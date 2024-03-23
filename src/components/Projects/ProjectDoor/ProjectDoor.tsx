import { Side } from "@/static/types";

import styles from "./ProjectDoor.module.scss";

export type ProjectDoorProps = {
    /** The side that the door is on */
    side: Side;
    /** Whether or not the doors are open */
    open: boolean;
};

const ProjectDoor: React.FC<ProjectDoorProps> = (props: ProjectDoorProps) => {
    /**
     * Gets the class of the door component
     *
     * @returns {string} The classes used to style the door based on the given props
     */
    const getDoorClass = (): string => {
        return `${styles["project-door"]} ${styles[props.side]} ${props.open ? "" : styles.closed}`;
    };

    /**
     * Gets the decal of the door based on which side it's on
     *
     * @returns {string} The string used as the decal of the door
     */
    const getDecal = (): string => {
        return props.side === "left" ? "</" : "/>";
    };

    return (
        <div className={getDoorClass()} data-testid="door">
            <span className={styles.decal}>{getDecal()}</span>
        </div>
    );
};

export default ProjectDoor;
