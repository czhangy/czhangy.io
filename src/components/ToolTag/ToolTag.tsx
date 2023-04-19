// Stylesheet
import styles from "./ToolTag.module.scss";
// TS
import Tool from "@/models/Tool";

type Props = {
    tool: Tool;
};

const ToolTag: React.FC<Props> = ({ tool }) => {
    return (
        <li className={`${styles["tool-tag"]} ${styles[tool.slug]}`}>
            <p className={styles["tag-text"]}>{tool.name}</p>
        </li>
    );
};

export default ToolTag;
