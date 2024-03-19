import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import mockExperiences from "@/mocks/experiences";

import ExperiencePage, { ExperiencePageProps } from "./ExperiencePage";

describe("ExperiencePage", () => {
    let endpoint: HTMLDivElement;

    /**
     * Renders the component and assigns local variables
     *
     * @param {ExperiencePageProps} experiences Props to pass to the component
     */
    const renderExperiencePage = (props: ExperiencePageProps): void => {
        render(<ExperiencePage experiences={props.experiences} />);
        endpoint = screen.getByTestId("endpoint");
    };

    it("Renders correctly with odd length", () => {
        renderExperiencePage({ experiences: mockExperiences.oddLength });
        expect(endpoint).toHaveClass("left-endpoint");
    });

    it("Renders correctly with even length", () => {
        renderExperiencePage({ experiences: mockExperiences.evenLength });
        expect(endpoint).toHaveClass("right-endpoint");
    });

    it("Timeframe strips out end date", () => {
        renderExperiencePage({
            experiences: mockExperiences.currentExperience,
        });
    });
});
