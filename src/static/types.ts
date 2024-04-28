import {
    AdminUser,
    EntrySection,
    Project as ProjectModel,
} from "@prisma/client";

// -----------------------------------------------------------------------------
// MARKUP TYPES
// -----------------------------------------------------------------------------

/** JSX elements rendered conditionally */
export type ConditionalJSX = JSX.Element | "";

/** Social media sites used on the site */
export type Social = "github" | "linkedin" | "instagram" | "twitter";

/** Left/right side */
export type Side = "left" | "right";

/** The types of utility menus that can exist */
export type MenuType = "sort" | "filter" | "section";

/** The object representing identifying attributes of an entry section */
export type EntrySectionType = {
    /** The human-readable name of the section */
    displayName: string;
    /** The hex color used to identify the section */
    color: string;
    /** The emoji that annotates the section on the entry's page */
    emoji: string;
};

// -----------------------------------------------------------------------------
// TEST TYPES
// -----------------------------------------------------------------------------

/** HTML element that has been selected by a queryBy... method */
export type QueriedHTMLElement = HTMLElement | null;

/** HTML elements that have been selected by a queryAllBy... method */
export type QueriedHTMLElements = HTMLElement[];

// -----------------------------------------------------------------------------
// MODEL TYPES
// -----------------------------------------------------------------------------

/** Project object definition */
export type Project = Omit<ProjectModel, "id">;

/** Experience object definition */
export type Experience = {
    company: string;
    logo: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string[];
};

/** Entry object definition */
export type Entry = {
    title: string;
    timestamp: string;
    sections: EntrySection[];
};

/** User object definition */
export type User = Omit<AdminUser, "id">;

// -----------------------------------------------------------------------------
// API TYPES
// -----------------------------------------------------------------------------

export type APIQueryParam = string | string[] | undefined;
