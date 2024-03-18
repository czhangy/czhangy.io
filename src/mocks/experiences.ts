import Experience from "@/models/Experience";

/** A key-value map containing arrays of Experience objects for testing purposes */
const mockExperiences: { [mock: string]: Experience[] } = {
    /** An odd-length array of mock experiences for testing purposes */
    oddLength: [
        {
            company: "Test Inc.",
            logo: "/assets/images/default.webp",
            title: "Test Engineer",
            startDate: "Jan 2001",
            endDate: "Dec 2002",
            desc: ["Did impactful things"],
        },
    ],
    /** An even-length array of mock experiences for testing purposes */
    evenLength: [
        {
            company: "Test Inc.",
            logo: "/assets/images/default.webp",
            title: "Test Engineer",
            startDate: "Jan 2001",
            endDate: "Dec 2002",
            desc: ["Did impactful things"],
        },
        {
            company: "Test Corp.",
            logo: "/assets/images/default.webp",
            title: "Test Engineer",
            startDate: "Feb 2000",
            endDate: "Jan 2001",
            desc: ["Did other impactful things"],
        },
    ],
    /** A 1-length array containing a mock experience with no description */
    emptyDescription: [
        {
            company: "Nothing LLC",
            logo: "/assets/images/default.webp",
            title: "None",
            startDate: "Jan 2001",
            endDate: "Dec 2002",
            desc: [],
        },
    ],
    /** A 1-length array containing a mock experience with no end date */
    currentExperience: [
        {
            company: "Current Company",
            logo: "/assets/images/default.webp",
            title: "CEO",
            startDate: "March 2024",
            endDate: "",
            desc: [],
        },
    ],
};

export default mockExperiences;
