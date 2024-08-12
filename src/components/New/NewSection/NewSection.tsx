import { ChangeEvent } from "react";
import { EntrySection } from "@prisma/client";

import { SECTION_TYPES } from "@/static/constants";

import styles from "./NewSection.module.scss";

type Props = {
    /** The section object */
    section: EntrySection;
    /** The callback function that title changes will call */
    onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    /** The callback function that body changes will call */
    onBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const NewSection: React.FC<Props> = (props: Props) => {
    return (
        <section className={styles["new-section"]} key={props.section.type}>
            <h3 className={styles.title}>
                {SECTION_TYPES[props.section.type].emoji}{" "}
                <strong>
                    {SECTION_TYPES[props.section.type].displayName}:{" "}
                </strong>
                <input
                    className={styles["title-input"]}
                    value={props.section.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        props.onTitleChange(e)
                    }
                />
            </h3>
            <textarea
                className={styles.body}
                value={props.section.body}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    props.onBodyChange(e)
                }
            />
        </section>
    );
};

export default NewSection;
