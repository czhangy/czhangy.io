import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Menu from "./Menu";

describe("Menu", () => {
    let menu: HTMLUListElement;
    let menuButton: HTMLButtonElement;
    let aboutLink: HTMLAnchorElement;
    let projectsLink: HTMLAnchorElement;
    let experienceLink: HTMLAnchorElement;

    /**
     * Renders the component and assigns local variables
     */
    const renderMenu = (): void => {
        render(<Menu />);
        menu = screen.getByRole("list");
        menuButton = screen.getByRole("button");
        aboutLink = screen.getByText("About");
        projectsLink = screen.getByText("Projects");
        experienceLink = screen.getByText("Experience");
    };

    it("Can be toggled by button press", async () => {
        renderMenu();
        expect(menu).toHaveClass("closed");
        fireEvent.click(menuButton);
        expect(menu).toHaveClass("open");
        fireEvent.click(menuButton);
        await waitFor(() => expect(menu).toHaveClass("closed"));
    });

    it("Closes menu on blur", async () => {
        renderMenu();
        fireEvent.click(menuButton);
        expect(menu).toHaveClass("open");
        fireEvent.blur(menuButton);
        await waitFor(() => expect(menu).toHaveClass("closed"));
    });

    it("Navigates to other pages correctly", async () => {
        renderMenu();
        expect(aboutLink).toHaveProperty("href", "http://localhost/about");
        expect(projectsLink).toHaveProperty(
            "href",
            "http://localhost/projects",
        );
        expect(experienceLink).toHaveProperty(
            "href",
            "http://localhost/experience",
        );
    });
});
