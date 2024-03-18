import { render } from "@testing-library/react";

import mockTools from "@/mocks/tools";

import ToolTag from "./ToolTag";

describe("ToolTag", () => {
    it("Renders", () => {
        render(<ToolTag tool={mockTools[0]} />);
    });
});
