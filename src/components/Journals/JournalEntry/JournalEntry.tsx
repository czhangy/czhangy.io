import { ReactElement } from "react";
import Link from "next/link";

import { TAG_COLORS } from "@/static/constants";
import { Entry, UtilityOptions } from "@/static/types";
import { toHumanReadable, toKebabCase } from "@/utils/helpers/helpers";

import styles from "./JournalEntry.module.scss";

export type JournalEntryProps = {
    /** The entry object to render */
    entry: Entry;
    /** The current filter */
    filter: UtilityOptions;
    /** The current search query */
    query: string;
};

const JournalEntry: React.FC<JournalEntryProps> = (
    props: JournalEntryProps,
) => {
    const renderEntryTitle = (): ReactElement => {
        const begin: number = props.entry.title
            .toLowerCase()
            .indexOf(props.query.toLowerCase());
        const end: number = begin + props.query.length;
        return (
            <h5 className={styles.title}>
                {props.entry.title.substring(0, begin)}
                <span className={styles.highlight}>
                    {props.entry.title.substring(begin, end)}
                </span>
                {props.entry.title.substring(end)}
            </h5>
        );
    };

    /**
     * Styles tags to highlight them when filtered for
     *
     * @returns {Object} The CSS styling
     */
    const getTagStyle = (tag: string): Object => {
        return tag === props.filter
            ? {
                  borderColor: TAG_COLORS[tag],
                  backgroundColor: TAG_COLORS[tag],
                  color: "var(--theme-accent)",
              }
            : {
                  borderColor: TAG_COLORS[tag],
                  color: TAG_COLORS[tag],
              };
    };
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
                                style={getTagStyle(key)}
                                key={key}
                                data-testid="entry-tag"
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
                    {renderEntryTitle()}
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
