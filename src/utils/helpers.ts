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

/** Converts a date object into a Mon YYYY format
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
 *
 * @param {string} word An uncapitalized word
 * @returns The word with the first letter capitalized
 */
export const capitalizeWord = (word: string): string => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
};
