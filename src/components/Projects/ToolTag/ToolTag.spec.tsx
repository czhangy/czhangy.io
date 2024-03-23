import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { mockTool1 } from "@/mocks/tools";

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

    it("Renders", () => {
        renderToolTag({ tool: mockTool1 });
        const tag: HTMLLIElement | null = screen.queryByRole("listitem");
        expect(tag).toHaveClass(mockTool1.slug);
        expect(tag).toHaveTextContent(mockTool1.name);
    });
});
