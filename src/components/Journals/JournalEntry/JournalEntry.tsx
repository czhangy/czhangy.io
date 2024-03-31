import { ReactElement } from "react";
import Link from "next/link";

import { TAG_COLORS } from "@/static/constants";
import { Entry } from "@/static/types";
import { toHumanReadable, toKebabCase } from "@/utils/helpers/helpers";

import styles from "./JournalEntry.module.scss";

export type JournalEntryProps = {
    entry: Entry;
};

const JournalEntry: React.FC<JournalEntryProps> = (
    props: JournalEntryProps,
) => {
    /**
     * Renders the list of tags associated with the entry
     *
     * @returns {ReactElement} The <ul> element representing the tag list
     */
    const renderEntryTags = (): ReactElement => {
        return (
            <ul className={styles.tags}>
                {Object.entries(props.entry).map(
                    ([key, value]: [string, string | string[]]) =>
                        Array.isArray(value) && value.length > 0 ? (
                            <li
                                className={styles.tag}
                                style={{
                                    borderColor: TAG_COLORS[key],
                                    color: TAG_COLORS[key],
                                }}
                                key={key}
                            >
                                <strong>{toHumanReadable(key)}</strong>
                            </li>
                        ) : (
                            ""
                        ),
                )}
            </ul>
        );
    };

    /**
     * Renders preview text for the entry
     *
     * @returns {ReactElement} The <p> element representing the preview
     */
    const renderPreview = (): ReactElement => {
        return (
            <p className={styles.preview} data-testid="preview">
                {
                    Object.values(props.entry).find(
                        (value: string | string[]) =>
                            Array.isArray(value) && value.length > 0,
                    )![0]
                }
            </p>
        );
    };

    return (
        <Link href={`/journals/${toKebabCase(props.entry.title)}`}>
            <a className={styles["journal-entry"]} data-testid="journal-entry">
                <section className={styles.header}>
                    <h5 className={styles.title}>{props.entry.title}</h5>
                    <p className={styles.timestamp} data-testid="timestamp">
                        {props.entry.timestamp}
                    </p>
                </section>
                <section>{renderEntryTags()}</section>
                <section>{renderPreview()}</section>
            </a>
        </Link>
    );
};

export default JournalEntry;
