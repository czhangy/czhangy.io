import { ReactElement } from "react";
import Link from "next/link";
import { EntrySection } from "@prisma/client";

import { SECTION_TYPES } from "@/static/constants";
import { Entry } from "@/static/types";
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
     *
     * @returns {Object} The CSS styling
     */
    const getTagStyle = (slug: string): Object => {
        const color: string = SECTION_TYPES[slug].color;
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
                {props.entry.sections.map((section: EntrySection) => (
                    <li
                        className={styles.tag}
                        style={getTagStyle(section.type)}
                        key={section.type}
                    >
                        <strong>
                            {SECTION_TYPES[section.type].displayName}
                        </strong>
                    </li>
                ))}
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
            <p className={styles.preview}>
                {props.entry.sections[0].paragraphs[0]}
            </p>
        );
    };

    return (
        <Link
            className={styles["journal-entry"]}
            href={`/journals/${toKebabCase(props.entry.title)}`}
        >
            <section className={styles.header}>
                {renderEntryTitle()}
                <p className={styles.timestamp}>{props.entry.timestamp}</p>
            </section>
            <section>{renderEntryTags()}</section>
            <section>{renderPreview()}</section>
        </Link>
    );
};

export default JournalEntry;
