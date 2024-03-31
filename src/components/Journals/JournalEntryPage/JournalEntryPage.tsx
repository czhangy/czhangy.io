import { ReactElement } from "react";

import { Entry } from "@/static/types";
import { toHumanReadable } from "@/utils/helpers/helpers";

import styles from "./JournalEntryPage.module.scss";

export type JournalEntryPageProps = {
    entry: Entry;
};

const JournalEntryPage: React.FC<JournalEntryPageProps> = (
    props: JournalEntryPageProps,
) => {
    /**
     * Gets an emoji used to annotate a section title
     *
     * @param {string} key The section's key
     * @returns {string} The emoji used to annotate the section
     */
    const getSectionEmoji = (key: string): string => {
        switch (key) {
            case "lifeLogs":
                return "🌱";
            case "careerChronicles":
                return "🏢";
            case "gamingGrind":
                return "🕹️";
            default:
                return "✍️";
        }
    };

    /** Renders any sections in the journal entry that have content
     *
     * @returns {ReactElement[]} A list of <section> elements that render content for each section
     */
    const renderEntrySections = (): ReactElement[] => {
        return Object.entries(props.entry)
            .filter(
                ([_, value]: [string, string | string[]]) =>
                    Array.isArray(value) && value.length > 0,
            )
            .map(([key, value]: [string, string | string[]]) => {
                return (
                    <section>
                        <h3 className={styles["section-title"]}>
                            {getSectionEmoji(key)} {toHumanReadable(key)}
                        </h3>
                        {(value as string[]).map((paragraph: string) => (
                            <p
                                className={styles.paragraph}
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
