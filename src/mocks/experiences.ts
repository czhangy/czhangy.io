import { Experience } from "@/static/types";

/** A basic mock experience */
export const mockExperience: Experience = {
    company: "Test Inc.",
    logo: "/assets/images/default.webp",
    title: "Test Engineer",
    startDate: "Jan 2001",
    endDate: "Dec 2002",
    description: ["Did impactful things"],
};

/** A mock experience with no description */
export const mockEmptyDescriptionExperience: Experience = {
    company: "Nothing LLC",
    logo: "/assets/images/default.webp",
    title: "None",
    startDate: "Jan 2001",
    endDate: "Dec 2002",
    description: [],
};

/** A mock experience with no end date */
export const mockCurrentExperience: Experience = {
    company: "Current Corp.",
    logo: "/assets/images/default.webp",
    title: "CEO",
    startDate: "March 2024",
    endDate: "",
    description: ["Doing impactful things"],
};
