import { ReactElement } from "react";
import Link from "next/link";

import { SECTION_LIST } from "@/static/constants";
import { Entry, EntrySection } from "@/static/types";
import { toKebabCase } from "@/utils/helpers/helpers";

import styles from "./JournalEntry.module.scss";

export type JournalEntryProps = {
    /** The entry object to render */
    entry: Entry;
    /** The current filter */
    filter: string;
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
     * @param {string} slug The slug of the tag being styled
     * @param {string} color The color identifying the tag
     *
     * @returns {Object} The CSS styling
     */
    const getTagStyle = (slug: string, color: string): Object => {
        return slug === props.filter
            ? {
                  borderColor: color,
                  backgroundColor: color,
                  color: "var(--theme-accent)",
              }
            : {
                  borderColor: color,
                  color: color,
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
                {SECTION_LIST.map((section: EntrySection) =>
                    props.entry[section.slug as keyof typeof props.entry]
                        .length > 0 ? (
                        <li
                            className={styles.tag}
                            style={getTagStyle(section.slug, section.color)}
                            key={section.slug}
                            data-testid="entry-tag"
                        >
                            <strong>{section.displayName}</strong>
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
