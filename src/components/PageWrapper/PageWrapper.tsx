// Stylesheet
import styles from "./PageWrapper.module.scss";
// TS
import { ReactNode } from "react";
// React
import { useEffect, useState } from "react";

type Props = {
    children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
    // Wrapper state
    const [fade, setFade] = useState<boolean>(true);

    // Trigger fade on load
    useEffect(() => {
        setFade(false);
    }, []);

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
