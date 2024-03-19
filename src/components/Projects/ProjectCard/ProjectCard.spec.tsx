import { render } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";

import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
    it("Renders", () => {
        render(<ProjectCard project={mockProject} onClick={() => null} />);
    });
});
