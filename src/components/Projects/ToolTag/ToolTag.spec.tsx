import { render } from "@testing-library/react";

import { mockTool } from "@/mocks/tools";

import ToolTag from "./ToolTag";

describe("ToolTag", () => {
    it("Renders", () => {
        render(<ToolTag tool={mockTool} />);
    });
});
