/**
 * Converts a human-readable string into a kebab-case string
 *
 * @param name The human-readable string to convert
 * @returns The string in kebab-case
 */
export const toKebabCase = (name: string): string => {
    return name
        .trim()
        .replace(/[^a-zA-Z0-9\s+]+/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
};
