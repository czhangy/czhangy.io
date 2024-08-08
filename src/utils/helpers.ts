import { Entry as EntryModel } from "@prisma/client";

import { Entry } from "@/static/types";

/**
 * Converts a human-readable string into a kebab-case string
 *
 * @param {string} str The human-readable string to convert
 * @returns {string} The string in kebab-case
 */
export const toKebabCase = (str: string): string => {
    return str
        .trim()
        .replace(/[^a-zA-Z0-9\s+]+/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
};

/**
 * Converts a date object into a Mon YYYY format
 *
 * @param {Date|null} date The date object to convert
 * @returns {string} The date in Mon YYYY format
 */
export const convertDate = (date: Date | null): string => {
    if (!date) {
        return "";
    }
    return `${date.toLocaleString("en-us", { month: "short" })} ${date.getFullYear()}`;
};

/**
 * Capitalizes a word
 *
 * @param {string} word An uncapitalized word
 * @returns The word with the first letter capitalized
 */
export const capitalizeWord = (word: string): string => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
};

/**
 * Converts an Entry model into an Entry object
 *
 * @param model The Entry model fetched from the DB
 * @returns A custom Entry object with the id and slug fields removed and timestamp in a serializable state
 */
export const getEntryFromEntryModel = (model: EntryModel): Entry => {
    return {
        title: model.title,
        timestamp: model.timestamp.toLocaleDateString("es-pa"),
        sections: model.sections,
    };
};
