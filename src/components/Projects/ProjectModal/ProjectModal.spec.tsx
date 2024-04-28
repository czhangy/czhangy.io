import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";
import { mockTool1 } from "@/mocks/tools";
import { QueriedHTMLElement } from "@/static/types";

import ProjectModal from "./ProjectModal";

describe("ProjectModal", () => {
    /**
     * A close handler for testing purposes
     */
    const mockCloseHandler = jest.fn().mockImplementation();

    /**
     * Renders the component
     */
    const renderProjectModal = (): void => {
        render(
            <ProjectModal
                project={mockProject}
                tools={[mockTool1]}
                onClose={mockCloseHandler}
            />,
        );
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderProjectModal();

            // Check overlay
            const modalOverlay: QueriedHTMLElement =
                screen.queryByTestId("modal-overlay");
            expect(modalOverlay).not.toHaveClass("closing");

            // Check project info component
            const projectInfo: QueriedHTMLElement =
                screen.queryByTestId("project-info");
            expect(projectInfo).toBeInTheDocument();
        });
    });

    describe("Clicking", () => {
        it("Calls the close handler when the overlay is clicked", async () => {
            renderProjectModal();

            // Click overlay
            const modalOverlay: HTMLDivElement =
                screen.getByTestId("modal-overlay");
            fireEvent.click(modalOverlay);

            // Check that close handler is called
            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });

        it("Doesn't call the close handler when the contents are clicked", async () => {
            renderProjectModal();

            // Click overlay
            const projectInfo: HTMLDivElement =
                screen.getByTestId("project-info");
            fireEvent.click(projectInfo);

            // Check that close handler is called
            await expect(
                waitFor(
                    () => {
                        expect(mockCloseHandler).toHaveBeenCalled();
                    },
                    { timeout: 500 },
                ),
            ).rejects.toThrow();
        });
    });
});
