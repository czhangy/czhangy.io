import { ReactElement } from "react";

import JournalEntry from "@/components/Journals/JournalEntry/JournalEntry";
import {
    mockJournalEntry,
    mockMissingSectionJournalEntry,
} from "@/mocks/entries";
import { Entry } from "@/static/types";

import styles from "./JournalsPage.module.scss";

export type JournalsPageProps = {
    /** The list of entries to display */
    entries: Entry[];
};

/**
 * Renders the list of fetched journal entries
 *
 * @returns {ReactElement} A <ul> of JournalEntry components
 */
const renderJournalEntries = (): ReactElement => {
    const mockEntries: Entry[] = [
        mockJournalEntry,
        mockMissingSectionJournalEntry,
    ];
    return (
        <ul className={styles["entry-list"]}>
            {mockEntries.map((entry: Entry) => {
                return (
                    <li className={styles.entry} key={entry.title}>
                        <JournalEntry entry={entry} />
                    </li>
                );
            })}
        </ul>
    );
};

const JournalsPage: React.FC<JournalsPageProps> = (
    props: JournalsPageProps,
) => {
    return (
        <div className={styles["journals-page"]}>{renderJournalEntries()}</div>
    );
};

export default JournalsPage;
