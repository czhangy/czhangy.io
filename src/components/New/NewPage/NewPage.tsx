import { ChangeEvent, useState } from "react";
import { EntrySection } from "@prisma/client";

import UtilityMenu from "@/components/Global/UtilityMenu/UtilityMenu";
import { SECTION_TYPES } from "@/static/constants";
import { EntrySectionType } from "@/static/types";

import styles from "./NewPage.module.scss";

const NewPage: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [sectionOptions, setSectionOptions] = useState<[string, string][]>(
        Object.entries(SECTION_TYPES).map(
            ([slug, sectionType]: [string, EntrySectionType]) => {
                return [slug, sectionType.displayName];
            },
        ),
    );
    const [sections, setSections] = useState<EntrySection[]>([]);

    /**
     * Updates the title of the new entry
     *
     * @param {ChangeEvent<HTMLInputElement>} e The event object captured by onChange
     */
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    };

    /**
     * Updates the section title of a section in the new entry
     *
     * @param {ChangeEvent<HTMLInputElement>} e The event object captured by onChange
     */
    const handleSectionTitleChange = (
        e: ChangeEvent<HTMLInputElement>,
        idx: number,
    ): void => {
        const newSections: EntrySection[] = JSON.parse(
            JSON.stringify(sections),
        );
        newSections[idx].title = e.target.value;
        setSections(newSections);
    };

    /**
     * Adds/removes the section from the entry
     *
     * @param {string} type The slug of the section type
     */
    const handleSectionSelect = (type: string): void => {
        // Update options state
        setSectionOptions(
            sectionOptions.filter(
                ([slug, _]: [string, string]) => slug !== type,
            ),
        );

        // Add section to page
        const newSections: EntrySection[] = JSON.parse(
            JSON.stringify(sections),
        );
        newSections.push({ type: type, title: "", paragraphs: [] });
        setSections(newSections);
    };

    /**
     * Renders the sections that have been added to the journal entry
     *
     * @returns {JSX.Element[]} The <section> elements used to render the editable sections
     */
    const renderSections = (): JSX.Element[] => {
        return sections.map((section: EntrySection, idx: number) => {
            return (
                <section
                    className={styles["new-section"]}
                    key={section.type}
                    data-testid="new-section"
                >
                    <h3 className={styles["section-title"]}>
                        {SECTION_TYPES[section.type].emoji}{" "}
                        <strong>
                            {SECTION_TYPES[section.type].displayName}:{" "}
                        </strong>
                        <input
                            className={styles["section-title-input"]}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleSectionTitleChange(e, idx)
                            }
                            placeholder={`${SECTION_TYPES[section.type].displayName} Title`}
                            data-testid="section-title-input"
                        />
                    </h3>
                </section>
            );
        });
    };

    return (
        <div className={styles["new-page"]}>
            <section className={styles["top-bar"]}>
                <input
                    className={styles["journal-title-input"]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleTitleChange(e)
                    }
                    placeholder="Title"
                    data-testid="journal-title-input"
                />
                <UtilityMenu
                    menuType="section"
                    current=""
                    options={sectionOptions}
                    onSelect={(type: string) => handleSectionSelect(type)}
                    hasIcon={false}
                    value="New Section"
                />
                <button
                    className={styles["submit-button"]}
                    data-testid="submit-button"
                >
                    <strong>Submit</strong>
                </button>
            </section>
            {renderSections()}
        </div>
    );
};

export default NewPage;