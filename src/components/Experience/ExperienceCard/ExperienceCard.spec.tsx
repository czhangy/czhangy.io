import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import mockExperiences from "@/mocks/experiences";

import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";

describe("ExperienceCard", () => {
    /**
     * Renders the component
     *
     * @param {ExperienceCardProps} props Props to pass to the component
     */
    const renderExperienceCard = (props: ExperienceCardProps): void => {
        render(<ExperienceCard experience={props.experience} />);
    };

    it("Renders correctly with no description", () => {
        renderExperienceCard({
            experience: mockExperiences.emptyDescription[0],
        });
    });

    it("Renders correctly with no end date", () => {
        renderExperienceCard({
            experience: mockExperiences.currentExperience[0],
        });
    });
});
