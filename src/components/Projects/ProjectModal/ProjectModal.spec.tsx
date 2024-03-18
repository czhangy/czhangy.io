import { render } from "@testing-library/react";

import mockProjects from "@/mocks/projects";

import ProjectModal from "./ProjectModal";

describe("ProjectInfo", () => {
    it("Renders", () => {
        render(<ProjectModal project={mockProjects[0]} onClose={() => null} />);
    });
});
