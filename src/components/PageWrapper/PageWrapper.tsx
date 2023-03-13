// Stylesheet
import styles from "./PageWrapper.module.scss";
// TS
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles["page-wrapper"]}>
            <div className={styles["page-container"]}>{children}</div>
        </div>
    );
};

export default PageWrapper;
