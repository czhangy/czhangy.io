import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { mockProjects } from "@/mocks/projects";
import { mockTools } from "@/mocks/tools";

import ProjectsPage from "./ProjectsPage";

describe("ProjectsPage", () => {
    let projectDoors: HTMLDivElement[];
    let projectButtons: HTMLButtonElement[];

    /**
     * A mock of Element.scrollTo for testing purposes
     */
    const mockScrollTo = jest.fn().mockImplementation();

    /**
     * Checks to see if the component is in a state where no project is set
     */
    const assertProjectUnset = (): void => {
        expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
        expect(screen.queryByTestId("project-info")).not.toBeInTheDocument();
        expect(projectDoors[0]).toHaveClass("closed");
        expect(projectDoors[1]).toHaveClass("closed");
        expect(screen.queryByTestId("scroll-container")).toHaveClass(
            "disabled",
        );
    };

    /**
     * Checks to see if the component is in a state where a project has been set
     *
     * @param {string} projectName The name of the project that is being set
     */
    const assertProjectSet = (projectName: string): void => {
        expect(screen.queryByTestId("overlay")).toBeInTheDocument();
        expect(screen.queryAllByTestId("project-info").length).toBe(2);
        expect(projectDoors[0]).not.toHaveClass("closed");
        expect(projectDoors[1]).not.toHaveClass("closed");
        expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
        expect(screen.queryByTestId("scroll-container")).not.toHaveClass(
            "disabled",
        );
        expect(screen.queryAllByAltText(projectName).length).toBe(2);
    };

    /**
     * Renders the component and assigns local variables
     */
    const renderProjectsPage = (): void => {
        render(<ProjectsPage projects={mockProjects} tools={mockTools} />);
        Element.prototype.scrollTo = mockScrollTo;
        projectDoors = screen.queryAllByTestId("door");
        projectButtons = screen.queryAllByRole("button");
    };

    it("Renders correctly", () => {
        renderProjectsPage();
        expect(projectDoors.length).toBe(2);
        expect(projectDoors[0]).toHaveClass("left");
        expect(projectDoors[1]).toHaveClass("right");
        expect(screen.queryByTestId("projects-menu")).toBeInTheDocument();
        assertProjectUnset();
    });

    it("Renders components correctly when a project is selected", async () => {
        renderProjectsPage();
        expect(projectButtons[0]).toHaveTextContent(mockProjects[0].name);
        fireEvent.click(projectButtons[0]);
        await waitFor(() => assertProjectSet(mockProjects[0].name));
    });

    it("Renders components correctly when a project is unselected from the menu", async () => {
        renderProjectsPage();
        expect(projectButtons[0]).toHaveTextContent(mockProjects[0].name);
        fireEvent.click(projectButtons[0]);
        await waitFor(() => assertProjectSet(mockProjects[0].name));
        fireEvent.click(projectButtons[0]);
        await waitFor(assertProjectUnset);
    });

    it("Renders components correctly when a project is unselected from the modal", async () => {
        renderProjectsPage();
        expect(projectButtons[0]).toHaveTextContent(mockProjects[0].name);
        fireEvent.click(projectButtons[0]);
        await waitFor(() => assertProjectSet(mockProjects[0].name));
        fireEvent.click(screen.getByTestId("overlay"));
        await waitFor(assertProjectUnset);
    });

    it("Renders components correctly when a different project is selected", async () => {
        renderProjectsPage();
        expect(projectButtons[0]).toHaveTextContent(mockProjects[0].name);
        fireEvent.click(projectButtons[0]);
        await waitFor(() => assertProjectSet(mockProjects[0].name));
        fireEvent.click(projectButtons[1]);
        await waitFor(() => {
            expect(projectDoors[0]).toHaveClass("closed");
            expect(projectDoors[1]).toHaveClass("closed");
            expect(screen.queryByTestId("scroll-container")).toHaveClass(
                "disabled",
            );
        });
        await waitFor(() => assertProjectSet(mockProjects[1].name));
    });
});
