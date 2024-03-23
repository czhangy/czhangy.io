import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import AboutPage from "./AboutPage";

describe("AboutPage", () => {
    /**
     * Renders the component
     */
    const renderAboutPage = (): void => {
        render(<AboutPage />);
    };

    it("Renders correctly", () => {
        renderAboutPage();
        expect(screen.getAllByRole("heading").length).toBe(3);
        expect(screen.getAllByRole("img").length).toBe(3);
    });
});
