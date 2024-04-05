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
    const [filterBy, setFilterBy] = useState<UtilityOptions>("");

    /**
     * Filters and sorts the list of entries according to the current settings
     *
     * @returns {Entry[]} The list of entries, sorted by date and filtered by tag
     */
    const getVisibleEntries = (): Entry[] => {
        let entries: Entry[] = props.entries.filter(
            (entry: Entry) =>
                filterBy === "" || entry[filterBy as keyof Entry].length > 0,
        );
        if (sortBy === ASC) {
            return entries.sort(
                (a: Entry, b: Entry) =>
                    new Date(a.timestamp).getTime() -
                    new Date(b.timestamp).getTime(),
            );
        } else {
            return entries.sort(
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
                {getVisibleEntries().map((entry: Entry) => {
                    return (
                        <li className={styles.entry} key={entry.title}>
                            <JournalEntry entry={entry} filter={filterBy} />
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
                filter={filterBy}
                onSort={(order: UtilityOptions) => setSortBy(order)}
                onFilter={(filter: UtilityOptions) => setFilterBy(filter)}
            />
            {renderJournalEntries()}
        </div>
    );
};

export default JournalsPage;
