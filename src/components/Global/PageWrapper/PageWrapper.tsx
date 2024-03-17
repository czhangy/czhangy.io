import { ReactNode } from "react";

import styles from "./PageWrapper.module.scss";

type Props = {
    /** The page component */
    children: ReactNode;
};

const PageWrapper: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles["page-wrapper"]}>
            <div className={styles["page-container"]}>{props.children}</div>
        </div>
    );
};

export default PageWrapper;
