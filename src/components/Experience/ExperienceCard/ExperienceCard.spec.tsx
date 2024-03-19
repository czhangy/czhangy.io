import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    mockCurrentExperience,
    mockEmptyDescriptionExperience,
} from "@/mocks/experiences";

import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";

describe("ExperienceCard", () => {
    let image: HTMLImageElement | null;
    let company: HTMLHeadingElement | null;
    let title: HTMLParagraphElement | null;
    let description: HTMLUListElement | null;
    let bullet: HTMLLIElement | null;
    let timeframe: HTMLParagraphElement | null;

    /**
     * Renders the component and assigns local variables
     *
     * @param {ExperienceCardProps} props Props to pass to the component
     */
    const renderExperienceCard = (props: ExperienceCardProps): void => {
        render(<ExperienceCard experience={props.experience} />);

        image = screen.queryByRole("img");
        company = screen.queryByRole("heading");
        title = screen.queryByText(props.experience.title);
        description = screen.queryByRole("list");
        bullet = screen.queryByRole("listitem");
        timeframe = screen.queryByTestId("card-timeframe");
    };

    it("Renders correctly with no description", () => {
        renderExperienceCard({ experience: mockEmptyDescriptionExperience });

        expect(image).toBeInTheDocument();
        expect(company).toHaveTextContent(
            mockEmptyDescriptionExperience.company,
        );
        expect(title).toBeInTheDocument();
        expect(description).not.toBeInTheDocument();
        expect(timeframe).toHaveTextContent(
            `${mockEmptyDescriptionExperience.startDate} - ${mockEmptyDescriptionExperience.endDate}`,
        );
    });

    it("Renders correctly with no end date", () => {
        renderExperienceCard({ experience: mockCurrentExperience });

        expect(image).toBeInTheDocument();
        expect(company).toHaveTextContent(mockCurrentExperience.company);
        expect(title).toBeInTheDocument();
        expect(bullet).toHaveTextContent(mockCurrentExperience.desc[0]);
        expect(timeframe).toHaveTextContent(mockCurrentExperience.startDate);
    });
});
