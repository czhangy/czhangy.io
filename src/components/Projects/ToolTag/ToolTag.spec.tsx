import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { mockTool1 } from "@/mocks/tools";
import { QueriedHTMLElement } from "@/static/types";

import ToolTag, { ToolTagProps } from "./ToolTag";

describe("ToolTag", () => {
    /**
     * Renders the component
     *
     * @param {ToolTagProps} props Props to pass to the component
     */
    const renderToolTag = (props: ToolTagProps): void => {
        render(<ToolTag tool={props.tool} />);
    };

    it("Renders correctly", () => {
        renderToolTag({ tool: mockTool1 });
        const tag: QueriedHTMLElement = screen.queryByRole("listitem");
        expect(tag).toHaveStyle({ backgroundColor: mockTool1.color });
        expect(tag).toHaveTextContent(mockTool1.name);
    });
});
