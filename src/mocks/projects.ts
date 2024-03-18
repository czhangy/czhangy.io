import mockTools from "@/mocks/tools";
import Project from "@/models/Project";

/** An array of mock experiences for testing purposes */
const mockProjects: Project[] = [
    {
        name: "Test Project",
        slug: "test",
        category: "Testing",
        startDate: "Jan 2001",
        endDate: "Dec 2002",
        summary: "A basic test project.",
        tools: mockTools,
        link: "",
        git: "",
    },
];

export default mockProjects;
