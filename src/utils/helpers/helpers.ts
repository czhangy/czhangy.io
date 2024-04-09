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
 * Converts a camel-case string into a human-readable string
 *
 * @param {string} str The camel-case string to convert
 * @returns {string} The human-readable string
 */
export const toHumanReadable = (str: string): string => {
    return str
        .split(/(?<![A-Z])(?=[A-Z])/)
        .map((word: string) => word[0].toUpperCase() + word.substring(1))
        .join(" ");
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

export const capitalizeWord = (word: string): string => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
};
