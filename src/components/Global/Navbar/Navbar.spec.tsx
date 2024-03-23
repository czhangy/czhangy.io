import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Navbar", () => {
    /**
     * Renders the component
     */
    const renderNavbar = (): void => {
        render(<Navbar />);
    };

    it("Renders correctly", () => {
        renderNavbar();
        expect(screen.queryAllByRole("link")[0]).toHaveAttribute("href", "/");
        expect(screen.queryByTestId("menu")).toBeInTheDocument();
    });
});
