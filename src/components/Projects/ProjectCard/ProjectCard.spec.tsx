import { render } from "@testing-library/react";

import mockProjects from "@/mocks/projects";

import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
    it("Renders", () => {
        render(<ProjectCard project={mockProjects[0]} onClick={() => null} />);
    });
});
