import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import mockExperiences from "@/mocks/experiences";
import Experience from "@/models/Experience";

import ExperiencePage from "./ExperiencePage";

describe("ExperiencePage", () => {
    let endpoint: HTMLDivElement;

    /**
     * Renders the component and assigns local variables
     *
     * @param {Experience[]} experiences An array of experience objects to render on the page
     */
    const renderExperiencePage = (experiences: Experience[]): void => {
        render(<ExperiencePage experiences={experiences} />);
        endpoint = screen.getByTestId("endpoint");
    };

    it("Renders correctly with odd length", () => {
        renderExperiencePage(mockExperiences.oddLength);
        expect(endpoint).toHaveClass("left-endpoint");
    });

    it("Renders correctly with even length", () => {
        renderExperiencePage(mockExperiences.evenLength);
        expect(endpoint).toHaveClass("right-endpoint");
    });

    it("Timeframe strips out end date", () => {
        renderExperiencePage(mockExperiences.currentExperience);
    });
});
