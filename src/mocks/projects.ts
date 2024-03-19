import { mockTool } from "@/mocks/tools";
import Project from "@/models/Project";

/** A basic mock project */
export const mockProject: Project = {
    name: "Test Project",
    slug: "test",
    category: "Testing",
    startDate: "Jan 2001",
    endDate: "Dec 2002",
    summary: "A basic test project.",
    tools: [mockTool],
    link: "https://test.com",
    git: "https://github.com",
};
