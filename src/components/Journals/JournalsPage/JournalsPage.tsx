import { Entry } from "@/static/types";

import styles from "./JournalsPage.module.scss";

export type JournalsPageProps = {
    /** The list of entries to display */
    entries: Entry[];
};

const JournalsPage: React.FC<JournalsPageProps> = (
    props: JournalsPageProps,
) => {
    return <div className={styles["journals-page"]}></div>;
};

export default JournalsPage;
