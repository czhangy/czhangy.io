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

    it("Renders", () => {
        renderAboutPage();

        const headings: HTMLHeadingElement[] = screen.getAllByRole("heading");
        expect(headings.length).toBe(3);
    });
});
