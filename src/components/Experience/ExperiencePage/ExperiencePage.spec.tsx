import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    mockCurrentExperience,
    mockEmptyDescriptionExperience,
} from "@/mocks/experiences";

import ExperiencePage, { ExperiencePageProps } from "./ExperiencePage";

describe("ExperiencePage", () => {
    let experiences: HTMLLIElement[];
    let timeframes: HTMLParagraphElement[];
    let endpoint: HTMLDivElement | null;

    /**
     * Renders the component and assigns local variables
     *
     * @param {ExperiencePageProps} props Props to pass to the component
     */
    const renderExperiencePage = (props: ExperiencePageProps): void => {
        render(<ExperiencePage experiences={props.experiences} />);

        experiences = screen.queryAllByRole("listitem");
        timeframes = screen.queryAllByTestId("page-timeframe");
        endpoint = screen.queryByTestId("endpoint");
    };

    it("Renders correctly with odd length", () => {
        renderExperiencePage({ experiences: [mockEmptyDescriptionExperience] });

        expect(experiences.length).toBe(1);
        expect(timeframes.length).toBe(1);
        expect(timeframes[0]).toHaveTextContent(
            `${mockEmptyDescriptionExperience.startDate} - ${mockEmptyDescriptionExperience.endDate}`,
        );
        expect(endpoint).toHaveClass("left-endpoint");
    });

    it("Renders correctly with even length", () => {
        renderExperiencePage({
            experiences: [
                mockEmptyDescriptionExperience,
                mockEmptyDescriptionExperience,
            ],
        });

        expect(experiences.length).toBe(2);
        expect(timeframes.length).toBe(2);
        expect(timeframes[0]).toHaveTextContent(
            `${mockEmptyDescriptionExperience.startDate} - ${mockEmptyDescriptionExperience.endDate}`,
        );
        expect(timeframes[1]).toHaveTextContent(
            `${mockEmptyDescriptionExperience.startDate} - ${mockEmptyDescriptionExperience.endDate}`,
        );
        expect(endpoint).toHaveClass("right-endpoint");
    });

    it("Timeframe strips out end date", () => {
        renderExperiencePage({ experiences: [mockCurrentExperience] });

        expect(timeframes.length).toBe(1);
        expect(timeframes[0]).toHaveTextContent(
            mockCurrentExperience.startDate,
        );
    });
});
