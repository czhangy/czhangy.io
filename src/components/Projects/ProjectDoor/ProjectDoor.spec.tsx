import { render } from "@testing-library/react";

import ProjectDoor from "./ProjectDoor";

describe("ProjectDoor", () => {
    it("Renders", () => {
        render(<ProjectDoor side="left" open={true} />);
    });
});
