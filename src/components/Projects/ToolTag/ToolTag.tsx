import { Tool } from "@prisma/client";

import styles from "./ToolTag.module.scss";

export type ToolTagProps = {
    /** The Tool object */
    tool: Tool;
};

const ToolTag: React.FC<ToolTagProps> = (props: ToolTagProps) => {
    return (
        <li
            className={styles["tool-tag"]}
            style={{ backgroundColor: props.tool.color }}
        >
            <p className={styles["tag-text"]}>{props.tool.name}</p>
        </li>
    );
};

export default ToolTag;
