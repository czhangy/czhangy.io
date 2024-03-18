import { render } from "@testing-library/react";

import mockProjects from "@/mocks/projects";

import ProjectInfo from "./ProjectInfo";

describe("ProjectInfo", () => {
    it("Renders", () => {
        render(<ProjectInfo project={mockProjects[0]} />);
    });
});
