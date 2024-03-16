import Tool from "@/models/Tool";

import styles from "./ToolTag.module.scss";

type Props = {
    tool: Tool;
};

const ToolTag: React.FC<Props> = (props: Props) => {
    return (
        <li className={`${styles["tool-tag"]} ${styles[props.tool.slug]}`}>
            <p className={styles["tag-text"]}>{props.tool.name}</p>
        </li>
    );
};

export default ToolTag;
