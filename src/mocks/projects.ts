import { Project } from "@/static/types";

/** A basic mock project */
export const mockProject: Project = {
    name: "Test Project",
    thumbnail: "/assets/images/default.webp",
    category: "Testing",
    summary: "A basic test project.",
    toolIDs: ["test_id_1"],
    gitLink: "https://github.com",
    siteLink: "https://test.com",
};

/** A mock project with no tools */
export const mockNoToolsProject: Project = {
    name: "Tool-less Project",
    thumbnail: "/assets/images/default.webp",
    category: "Testing",
    summary: "A basic test project that uses no tools.",
    toolIDs: [],
    gitLink: "https://github.com",
    siteLink: "https://test.com",
};

/** A mock project with multiple tools */
export const mockMultiToolProject: Project = {
    name: "Many Tools Project",
    thumbnail: "/assets/images/default.webp",
    category: "Testing",
    summary: "A basic test project that uses many tools.",
    toolIDs: ["test_id_1", "test_id_2"],
    gitLink: "https://github.com",
    siteLink: "https://test.com",
};

/** A mock project with no site link */
export const mockNoLinkProject: Project = {
    name: "Link-less Project",
    thumbnail: "/assets/images/default.webp",
    category: "Testing",
    summary: "A basic test project that has no site link.",
    toolIDs: ["test_id_1"],
    gitLink: "https://github.com",
    siteLink: "",
};

/** A mock project with no GitHub link */
export const mockNoGitHubProject: Project = {
    name: "Git-less Project",
    thumbnail: "/assets/images/default.webp",
    category: "Testing",
    summary: "A basic test project that has no GitHub link.",
    toolIDs: ["test_id_1"],
    gitLink: "",
    siteLink: "https://test.com",
};

/** A mock project with no links */
export const mockNoLinksProject: Project = {
    name: "Links-less Project",
    thumbnail: "/assets/images/default.webp",
    category: "Testing",
    summary: "A basic test project that has no links.",
    toolIDs: ["test_id_1"],
    gitLink: "",
    siteLink: "",
};

/** The list of all mock projects */
export const mockProjects = [
    mockProject,
    mockNoToolsProject,
    mockMultiToolProject,
    mockNoLinkProject,
    mockNoGitHubProject,
    mockNoLinksProject,
];
