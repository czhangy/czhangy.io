import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage";

describe("HomePage", () => {
    /**
     * Renders the component
     */
    const renderHomePage = (): void => {
        render(<HomePage />);
    };

    it("Renders expected content", () => {
        renderHomePage();
        expect(screen.queryByText("About Me")).toBeInTheDocument();
        expect(screen.queryByText("My Projects")).toBeInTheDocument();
        expect(screen.queryByText("My Experience")).toBeInTheDocument();
        expect(screen.queryAllByRole("link").length).toBe(7);
        expect(screen.queryAllByRole("img").length).toBe(7);
    });
});
