import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";
import { mockTool1 } from "@/mocks/tools";

import ProjectModal from "./ProjectModal";

describe("ProjectModal", () => {
    let overlay: HTMLDivElement | null;

    /**
     * A close handler for testing purposes
     */
    const mockCloseHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
     */
    const renderProjectModal = (): void => {
        render(
            <ProjectModal
                project={mockProject}
                tools={[mockTool1]}
                onClose={mockCloseHandler}
            />,
        );
        overlay = screen.queryByTestId("overlay");
    };

    it("Renders correctly", () => {
        renderProjectModal();
        expect(overlay).not.toHaveClass("closing");
        expect(screen.queryByTestId("project-info")).toBeInTheDocument();
    });

    it("Calls the close handler when the overlay is clicked", async () => {
        renderProjectModal();
        fireEvent.click(overlay!);
        await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
    });
});
