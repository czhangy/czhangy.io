import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Project from "@/models/Project";
import projects from "@/static/projects";

import ProjectsMenu, { ProjectsMenuProps } from "./ProjectsMenu";

describe("ProjectsMenu", () => {
    let menu: HTMLUListElement | null;
    let buttons: HTMLButtonElement[];

    /**
     * A select handler for testing purposes
     */
    const mockSelectHandler = jest.fn().mockImplementation();

    /**
     * Renders the component and assigns local variables
     *
     * @param {ProjectsMenuProps} props Props to pass to the component
     */
    const renderProjectsMenu = (props: ProjectsMenuProps): void => {
        render(<ProjectsMenu onSelect={props.onSelect} />);
        menu = screen.queryByRole("list");
        buttons = screen.queryAllByRole("button");
    };

    it("Renders correctly", () => {
        renderProjectsMenu({ onSelect: mockSelectHandler });
        const cards: HTMLLIElement[] = screen.queryAllByRole("listitem");
        expect(menu).not.toHaveClass("disabled");
        expect(cards.length).toBe(projects.length);
        expect(buttons.length).toBe(projects.length);
        projects.forEach((project: Project, idx: number) =>
            expect(cards[idx]).toHaveTextContent(project.name),
        );
    });

    it("Calls the select handler on card click", () => {
        renderProjectsMenu({ onSelect: mockSelectHandler });
        projects.forEach((project: Project, idx: number) => {
            fireEvent.click(buttons[idx]);
            expect(mockSelectHandler).toHaveBeenCalledWith(project);
        });
    });

    it("Disables and re-enables on card click", async () => {
        renderProjectsMenu({ onSelect: mockSelectHandler });
        fireEvent.click(buttons[0]);
        expect(menu).toHaveClass("disabled");
        await waitFor(() => expect(menu).not.toHaveClass("disabled"));
    });
});
