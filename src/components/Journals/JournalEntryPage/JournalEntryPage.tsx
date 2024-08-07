import { ReactElement } from "react";
import { EntrySection } from "@prisma/client";

import { SECTION_TYPES } from "@/static/constants";
import { Entry } from "@/static/types";

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
        return props.entry.sections.map(
            (section: EntrySection, idx: number) => {
                return (
                    <section key={idx}>
                        <h3 className={styles["section-title"]}>
                            {SECTION_TYPES[section.type].emoji}{" "}
                            <strong>
                                {SECTION_TYPES[section.type].displayName}:{" "}
                            </strong>
                            {section.title}
                        </h3>
                        {section.body
                            .split("\n")
                            .map((paragraph: string, idx: number) => (
                                <p className={styles.paragraph} key={idx}>
                                    {paragraph}
                                </p>
                            ))}
                    </section>
                );
            },
        );
    };

    return (
        <div className={styles["journal-entry-page"]}>
            <section className={styles.header}>
                <h2 className={styles.title}>{props.entry.title}</h2>
                <p className={styles.timestamp}>{props.entry.timestamp}</p>
            </section>
            {renderEntrySections()}
        </div>
    );
};

export default JournalEntryPage;
