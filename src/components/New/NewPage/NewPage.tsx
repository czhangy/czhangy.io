import { ChangeEvent, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { EntrySection } from "@prisma/client";

import UtilityMenu from "@/components/Global/UtilityMenu/UtilityMenu";
import { SECTION_TYPES } from "@/static/constants";
import { EntrySectionType } from "@/static/types";

import styles from "./NewPage.module.scss";

const NewPage: React.FC = () => {
    const router: NextRouter = useRouter();

    // ------------------------------------------------------------------------
    // State
    // ------------------------------------------------------------------------

    const [title, setTitle] = useState<string>("");
    const [sectionOptions, setSectionOptions] = useState<[string, string][]>(
        Object.entries(SECTION_TYPES).map(
            ([slug, sectionType]: [string, EntrySectionType]) => {
                return [slug, sectionType.displayName];
            },
        ),
    );
    const [sections, setSections] = useState<EntrySection[]>([]);
    const [isErrorState, setErrorState] = useState<boolean>(false);
    const [isSubmittingState, setSubmittingState] = useState<boolean>(false);

    // ------------------------------------------------------------------------
    // Event handlers
    // ------------------------------------------------------------------------

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
     * @param {number} idx The index of the section
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
     * Updates the section body of a section in the new entry
     *
     * @param {ChangeEvent<HTMLTextAreaElement>} e The event object captured by onChange
     * @param {number} idx The index of the section
     */
    const handleSectionBodyChange = (
        e: ChangeEvent<HTMLTextAreaElement>,
        idx: number,
    ): void => {
        const newSections: EntrySection[] = JSON.parse(
            JSON.stringify(sections),
        );
        // TODO: remove this array indexing once paragraphs => body
        newSections[idx].paragraphs[0] = e.target.value;
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
     * Submits the entry, validating it before writing it to the DB and redirecting to /journals
     */
    const handleSubmit = (): void => {
        const errors = validateContent();

        if (errors.length > 0) {
            // Alert if there are errors
            alert(errors.join("\n"));
            setSubmittingState(false);
            setErrorState(true);
        } else {
            // TODO: write to DB

            // Redirect to /journals on success
            router.push("/journals");
        }
    };

    // ------------------------------------------------------------------------
    // Renderers
    // ------------------------------------------------------------------------

    /**
     * Renders the sections that have been added to the journal entry
     *
     * @returns {JSX.Element[]} The <section> elements used to render the editable sections
     */
    const renderSections = (): JSX.Element[] => {
        return sections.map((section: EntrySection, idx: number) => {
            return (
                <section className={styles["new-section"]} key={section.type}>
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
                        />
                    </h3>
                    <textarea
                        className={styles["section-body"]}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            handleSectionBodyChange(e, idx)
                        }
                    />
                </section>
            );
        });
    };

    /**
     * Renders the content displayed on the submit button
     */
    const renderSubmitButtonContent = (): JSX.Element => {
        if (isErrorState) {
            return <strong>Retry</strong>;
        } else {
            return <strong>Submit</strong>;
        }
    };

    // ------------------------------------------------------------------------
    // Validation logic
    // ------------------------------------------------------------------------

    /**
     * Validates the journal submission, returning a list of errors
     *
     * @returns {String[]} The error strings that are present in the submitted content
     */
    const validateContent = (): String[] => {
        const errors: String[] = [];

        // Content must have a title
        if (title.length === 0) {
            errors.push("Journal entry must have a title");
        }

        // Content must have at least one section
        if (sections.length === 0) {
            errors.push("Journal entry must have at least one section");
        }

        sections.forEach((section: EntrySection) => {
            // Sections must have a title
            if (section.title.length === 0) {
                errors.push("All sections must have a title");
            }

            // Section titles must be <45 characters
            if (section.title.length > 45) {
                errors.push(
                    "All section titles must be at most 45 characters long",
                );
            }

            // Sections must have a body
            // TODO: replace this with body
            if (
                section.paragraphs.length === 0 ||
                section.paragraphs[0].length === 0
            ) {
                errors.push("All sections must have a body");
            }
        });

        return [...new Set(errors)];
    };

    return (
        <div className={styles["new-page"]}>
            <section className={styles["top-bar"]}>
                <input
                    className={styles["journal-title-input"]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleTitleChange(e)
                    }
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
                    onClick={handleSubmit}
                >
                    <strong>{renderSubmitButtonContent()}</strong>
                </button>
            </section>
            {renderSections()}
        </div>
    );
};

export default NewPage;
