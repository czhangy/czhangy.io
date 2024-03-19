import { render } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";

import ProjectInfo from "./ProjectInfo";

describe("ProjectInfo", () => {
    it("Renders", () => {
        render(<ProjectInfo project={mockProject} />);
    });
});
