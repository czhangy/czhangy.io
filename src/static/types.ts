import { Project as ProjectModel } from "@prisma/client";

/** JSX elements rendered conditionally */
export type ConditionalJSX = JSX.Element | "";

/** Left/right side */
export type Side = "left" | "right";

/** Social media sites used on the site */
export type Social = "github" | "linkedin" | "instagram" | "twitter";

/** Project object definition */
export type Project = Omit<ProjectModel, "id">;
