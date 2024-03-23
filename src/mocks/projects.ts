import { mockTool1, mockTool2 } from "@/mocks/tools";
import Project from "@/models/Project";

/** A basic mock project */
export const mockProject: Project = {
    name: "Test Project",
    slug: "test",
    category: "Testing",
    summary: "A basic test project.",
    tools: [mockTool1],
    link: "https://test.com",
    git: "https://github.com",
};

/** A mock project with no tools */
export const mockNoToolsProject: Project = {
    name: "Tool-less Project",
    slug: "tool-less",
    category: "Testing",
    summary: "A basic test project that uses no tools.",
    tools: [],
    link: "https://test.com",
    git: "https://github.com",
};

/** A mock project with multiple tools */
export const mockMultiToolProject: Project = {
    name: "Many Tools Project",
    slug: "multi-tool",
    category: "Testing",
    summary: "A basic test project that uses many tools.",
    tools: [mockTool1, mockTool2],
    link: "https://test.com",
    git: "https://github.com",
};

/** A mock project with no site link */
export const mockNoLinkProject: Project = {
    name: "Link-less Project",
    slug: "link-less",
    category: "Testing",
    summary: "A basic test project that has no site link.",
    tools: [mockTool1],
    link: "",
    git: "https://github.com",
};

/** A mock project with no GitHub link */
export const mockNoGitHubProject: Project = {
    name: "Git-less Project",
    slug: "git-less",
    category: "Testing",
    summary: "A basic test project that has no GitHub link.",
    tools: [mockTool1],
    link: "https://test.com",
    git: "",
};

/** A mock project with no links */
export const mockNoLinksProject: Project = {
    name: "Links-less Project",
    slug: "links-less",
    category: "Testing",
    summary: "A basic test project that has no links.",
    tools: [mockTool1],
    link: "",
    git: "",
};
