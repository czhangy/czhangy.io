import { render } from "@testing-library/react";

import mockExperiences from "@/mocks/experiences";

import ExperienceCard from "./ExperienceCard";

describe("ExperienceCard", () => {
    it("Renders correctly with no description", () => {
        render(
            <ExperienceCard experience={mockExperiences.emptyDescription[0]} />,
        );
    });

    it("Renders with no end date", () => {
        render(
            <ExperienceCard
                experience={mockExperiences.currentExperience[0]}
            />,
        );
    });
});
