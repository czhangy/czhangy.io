import { ReactElement, useState } from "react";
import { EntrySection } from "@prisma/client";

import JournalEntry from "@/components/Journals/JournalEntry/JournalEntry";
import UtilityBar from "@/components/Journals/UtilityBar/UtilityBar";
import { ASC, DESC } from "@/static/constants";
import { Entry } from "@/static/types";

import styles from "./JournalsPage.module.scss";

export type JournalsPageProps = {
    /** The list of entries to display */
    entries: Entry[];
};

const JournalsPage: React.FC<JournalsPageProps> = (
    props: JournalsPageProps,
) => {
    const [sortBy, setSortBy] = useState<string>(DESC);
    const [filterBy, setFilterBy] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");

    /**
     * Filters and sorts the list of entries according to the current settings
     *
     * @returns {Entry[]} The list of entries, sorted by date and filtered by tag
     */
    const getVisibleEntries = (): Entry[] => {
        // Apply filters
        let entries: Entry[] = props.entries.filter(
            (entry: Entry) =>
                filterBy === "" ||
                entry.sections.find(
                    (section: EntrySection) => section.type === filterBy,
                ),
        );

        // Apply search query
        entries = entries.filter((entry: Entry) =>
            entry.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );

        // Sort and return
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
        const visibleEntries: Entry[] = getVisibleEntries();
        return visibleEntries.length > 0 ? (
            <ul className={styles["entry-list"]}>
                {visibleEntries.map((entry: Entry) => {
                    return (
                        <li className={styles.entry} key={entry.title}>
                            <JournalEntry
                                entry={entry}
                                filter={filterBy}
                                query={searchQuery}
                            />
                        </li>
                    );
                })}
            </ul>
        ) : (
            <p className={styles["no-matches"]}>No matches!</p>
        );
    };

    return (
        <div className={styles["journals-page"]}>
            <UtilityBar
                order={sortBy}
                filter={filterBy}
                onSort={(order: string) => setSortBy(order)}
                onFilter={(filter: string) => setFilterBy(filter)}
                onSearch={(query: string) => setSearchQuery(query)}
            />
            {renderJournalEntries()}
        </div>
    );
};

export default JournalsPage;
