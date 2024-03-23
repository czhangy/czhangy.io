import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { mockProject } from "@/mocks/projects";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";

describe("ProjectCard", () => {
    let button: HTMLButtonElement | null;

    /**
     * A click handler for testing purposes
     */
    const mockClickHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
     *
     * @param {ProjectCardProps} props Props to pass to the component
     */
    const renderProjectCard = (props: ProjectCardProps): void => {
        render(<ProjectCard project={props.project} onClick={props.onClick} />);
        button = screen.queryByRole("button");
    };

    it("Renders correctly", () => {
        renderProjectCard({ project: mockProject, onClick: mockClickHandler });
        expect(button).toBeInTheDocument();
        expect(screen.queryByRole("heading")).toHaveTextContent(
            mockProject.name,
        );
    });

    it("Calls the click handler when clicked", () => {
        renderProjectCard({ project: mockProject, onClick: mockClickHandler });
        expect(button).toBeInTheDocument();
        fireEvent.click(button!);
        expect(mockClickHandler).toHaveBeenCalled();
    });
});
