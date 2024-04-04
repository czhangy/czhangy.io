import { Project as ProjectModel } from "@prisma/client";

// -----------------------------------------------------------------------------
// MARKUP TYPES
// -----------------------------------------------------------------------------

/** JSX elements rendered conditionally */
export type ConditionalJSX = JSX.Element | "";

/** Social media sites used on the site */
export type Social = "github" | "linkedin" | "instagram" | "twitter";

/** Left/right side */
export type Side = "left" | "right";

/** Options for utility menus on Journals page */
export type UtilityOptions = "asc" | "desc";

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
    lifeLogs: string[];
    careerChronicles: string[];
    gamingGrind: string[];
    randomRavings: string[];
};
