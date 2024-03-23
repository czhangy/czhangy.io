import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";

import ProjectModal, { ProjectModalProps } from "./ProjectModal";

describe("ProjectModal", () => {
    let overlay: HTMLDivElement | null;

    /**
     * A close handler for testing purposes
     */
    const mockCloseHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
     *
     * @param {ProjectModalProps} props Props to pass to the component
     */
    const renderProjectModal = (props: ProjectModalProps): void => {
        render(
            <ProjectModal project={props.project} onClose={props.onClose} />,
        );
        overlay = screen.queryByTestId("overlay");
    };

    it("Renders correctly", () => {
        renderProjectModal({ project: mockProject, onClose: mockCloseHandler });
        expect(overlay).not.toHaveClass("closing");
        expect(screen.queryByTestId("project-info")).toBeInTheDocument();
    });

    it("Calls the close handler when the overlay is clicked", async () => {
        renderProjectModal({ project: mockProject, onClose: mockCloseHandler });
        fireEvent.click(overlay!);
        await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
    });
});
