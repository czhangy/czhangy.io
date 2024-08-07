import { ChangeEvent, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import axios from "axios";
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
    const [typingTimeoutID, setTypingTimeoutID] = useState<
        NodeJS.Timeout | undefined
    >(undefined);

    // ------------------------------------------------------------------------
    // Listeners
    // ------------------------------------------------------------------------

    // The number of ms to wait before saving state to local storage
    const TYPING_DEBOUNCE_MS: number = 1000;

    // Try to retrieve saved state on page load
    useEffect(() => retrieveFromLocalStorage(), []);

    // Save to local storage when title changes
    useEffect(() => {
        if (title.length > 0) {
            // Debounce calls to local storage set
            clearTimeout(typingTimeoutID);

            setTypingTimeoutID(
                setTimeout(
                    () => localStorage.setItem("title", title),
                    TYPING_DEBOUNCE_MS,
                ),
            );
        }
    }, [title]);

    // Save to local storage when sections change
    useEffect(() => {
        if (sections.length > 0) {
            // Debounce calls to local storage set
            clearTimeout(typingTimeoutID);

            setTypingTimeoutID(
                setTimeout(
                    () =>
                        localStorage.setItem(
                            "sections",
                            JSON.stringify(sections),
                        ),
                    TYPING_DEBOUNCE_MS,
                ),
            );
        }
    }, [sections]);

    // ------------------------------------------------------------------------
    // Event handlers
    // ------------------------------------------------------------------------

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
        newSections[idx].body = e.target.value;
        setSections(newSections);
    };

    /**
     * Handles section selection, removing the section from the options and adding it to the page
     *
     * @param {string} type The slug of the section type
     */
    const handleSectionSelect = (type: string): void => {
        // Remove from section type from options
        setSectionOptions(
            sectionOptions.filter(
                ([slug, _]: [string, string]) => slug !== type,
            ),
        );

        // Add section to page
        const newSections: EntrySection[] = JSON.parse(
            JSON.stringify(sections),
        );
        newSections.push({ type: type, title: "", body: "" });
        setSections(newSections);
    };

    /**
     * Submits the entry, validating it before writing it to the DB and redirecting to /journals
     */
    const handleSubmit = async (): Promise<void> => {
        const errors = validateContent();

        if (errors.length > 0) {
            // Alert if there are validation errors
            alert(errors.join("\n"));

            setErrorState(true);
        } else {
            try {
                await axios.post("/api/entries", {
                    title: title,
                    sections: JSON.stringify(sections),
                });

                // Clear saved state on success
                clearLocalStorage();

                // Redirect to /journals on success
                router.push("/journals");
            } catch (err: any) {
                // Alert if there are API errors
                alert(err.response.data.message);

                setErrorState(true);
            }
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
                            value={sections[idx].title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleSectionTitleChange(e, idx)
                            }
                        />
                    </h3>
                    <textarea
                        className={styles["section-body"]}
                        value={sections[idx].body}
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
            if (section.body.length === 0) {
                errors.push("All sections must have a body");
            }
        });

        return [...new Set(errors)];
    };

    // ------------------------------------------------------------------------
    // Local storage logic
    // ------------------------------------------------------------------------

    /**
     * Retrieves existing state from local storage
     */
    const retrieveFromLocalStorage = (): void => {
        // Retrieve state from local storage
        const savedTitle: string | null = localStorage.getItem("title");
        const savedSections: string | null = localStorage.getItem("sections");

        // Set state if saved state exists
        if (savedTitle) {
            setTitle(savedTitle);
        }
        if (savedSections) {
            setSections(JSON.parse(savedSections));
        }
    };

    /**
     * Deletes state from local storage
     */
    const clearLocalStorage = (): void => {
        localStorage.removeItem("title");
        localStorage.removeItem("sections");
    };

    // ------------------------------------------------------------------------
    // Markup
    // ------------------------------------------------------------------------

    return (
        <div className={styles["new-page"]}>
            <section className={styles["top-bar"]}>
                <input
                    className={styles["journal-title-input"]}
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
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
