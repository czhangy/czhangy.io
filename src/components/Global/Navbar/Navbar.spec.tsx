import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Navbar", () => {
    let links: HTMLAnchorElement[];
    let menuButton: HTMLButtonElement | null;

    /**
     * Renders the component and assigns local variables
     */
    const renderNavbar = (): void => {
        render(<Navbar />);
        links = screen.queryAllByRole("link");
        menuButton = screen.queryByRole("button");
    };

    it("Renders correctly", () => {
        renderNavbar();
        expect(links[0]).toHaveAttribute("href", "/");
        expect(menuButton).toBeInTheDocument();
    });
});
