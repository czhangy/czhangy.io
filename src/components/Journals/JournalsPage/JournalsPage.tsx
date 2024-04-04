import { ReactElement, useState } from "react";

import JournalEntry from "@/components/Journals/JournalEntry/JournalEntry";
import UtilityBar from "@/components/Journals/UtilityBar/UtilityBar";
import { ASC, DESC } from "@/static/constants";
import { Entry, UtilityOptions } from "@/static/types";

import styles from "./JournalsPage.module.scss";

export type JournalsPageProps = {
    /** The list of entries to display */
    entries: Entry[];
};

const JournalsPage: React.FC<JournalsPageProps> = (
    props: JournalsPageProps,
) => {
    const [sortBy, setSortBy] = useState<UtilityOptions>(DESC);

    /**
     * Sorts the list of entries according to the current sort settings
     *
     * @returns {Entry[]} The list of entries, sorted by date
     */
    const getSortedEntries = (): Entry[] => {
        if (sortBy === ASC) {
            return props.entries.sort(
                (a: Entry, b: Entry) =>
                    new Date(a.timestamp).getTime() -
                    new Date(b.timestamp).getTime(),
            );
        } else {
            return props.entries.sort(
                (a: Entry, b: Entry) =>
                    new Date(b.timestamp).getTime() -
                    new Date(a.timestamp).getTime(),
            );
        }
    };

    /**
     * Renders the list of fetched journal entries
     *
     * @returns {ReactElement} A <ul> of JournalEntry components
     */
    const renderJournalEntries = (): ReactElement => {
        return (
            <ul className={styles["entry-list"]}>
                {getSortedEntries().map((entry: Entry) => {
                    return (
                        <li className={styles.entry} key={entry.title}>
                            <JournalEntry entry={entry} />
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className={styles["journals-page"]}>
            <UtilityBar
                order={sortBy}
                onSort={(order: UtilityOptions) => setSortBy(order)}
            />
            {renderJournalEntries()}
        </div>
    );
};

export default JournalsPage;
