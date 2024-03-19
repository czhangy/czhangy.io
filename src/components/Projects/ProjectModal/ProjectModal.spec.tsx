import { render } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";

import ProjectModal from "./ProjectModal";

describe("ProjectInfo", () => {
    it("Renders", () => {
        render(<ProjectModal project={mockProject} onClose={() => null} />);
    });
});
