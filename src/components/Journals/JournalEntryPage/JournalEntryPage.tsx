import { ReactElement } from "react";

import { SECTION_LIST } from "@/static/constants";
import { Entry, EntrySection } from "@/static/types";

import styles from "./JournalEntryPage.module.scss";

export type JournalEntryPageProps = {
    entry: Entry;
};

const JournalEntryPage: React.FC<JournalEntryPageProps> = (
    props: JournalEntryPageProps,
) => {
    /** Renders any sections in the journal entry that have content
     *
     * @returns {ReactElement[]} A list of <section> elements that render content for each section
     */
    const renderEntrySections = (): ReactElement[] => {
        return SECTION_LIST.filter(
            (section: EntrySection) =>
                props.entry[section.slug as keyof typeof props.entry].length >
                0,
        ).map((section: EntrySection) => {
            return (
                <section key={section.slug}>
                    <h3 className={styles["section-title"]}>
                        {section.emoji} {section.displayName}
                    </h3>
                    {(
                        props.entry[
                            section.slug as keyof typeof props.entry
                        ] as string[]
                    ).map((paragraph: string, idx: number) => (
                        <p
                            className={styles.paragraph}
                            key={idx}
                            data-testid="paragraph"
                        >
                            {paragraph}
                        </p>
                    ))}
                </section>
            );
        });
    };

    return (
        <div className={styles["journal-entry-page"]}>
            <section className={styles.header}>
                <h2 className={styles.title}>{props.entry.title}</h2>
                <p className={styles.timestamp} data-testid="timestamp">
                    {props.entry.timestamp}
                </p>
            </section>
            {renderEntrySections()}
        </div>
    );
};

export default JournalEntryPage;
