// Stylesheet
import styles from "./PageWrapper.module.scss";
// TS
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    fade: boolean;
};

const PageWrapper: React.FC<Props> = ({ children, fade }) => {
    return (
        <div
            className={`${styles["page-wrapper"]} ${
                fade ? styles.hide : styles.show
            }`}
        >
            <div className={styles["page-container"]}>{children}</div>
        </div>
    );
};

export default PageWrapper;
