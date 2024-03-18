import { render } from "@testing-library/react";

import mockExperiences from "@/mocks/experiences";

import ExperienceCard from "./ExperienceCard";

describe("ExperienceCard", () => {
    it("Renders", () => {
        render(<ExperienceCard experience={mockExperiences[0]} />);
    });
});
