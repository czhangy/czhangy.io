import { ReactNode } from "react";

import styles from "./PageWrapper.module.scss";

export type PageWrapperProps = {
    /** The page component */
    children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = (props: PageWrapperProps) => {
    return (
        <div className={styles["page-wrapper"]}>
            <div className={styles["page-container"]}>{props.children}</div>
        </div>
    );
};

export default PageWrapper;
