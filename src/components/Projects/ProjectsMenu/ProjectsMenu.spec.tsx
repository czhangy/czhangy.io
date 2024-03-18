import { render } from "@testing-library/react";

import ProjectsMenu from "./ProjectsMenu";

describe("ProjectsMenu", () => {
    it("Renders", () => {
        render(<ProjectsMenu onSelect={() => null} />);
    });
});
