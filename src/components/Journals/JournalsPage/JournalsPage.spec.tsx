import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import JournalsPage from "./JournalsPage";

describe("JournalsPage", () => {
    /**
     * Renders the component
     */
    const renderJournalsPage = (): void => {
        render(<JournalsPage />);
    };

    it("Renders correctly", () => {
        renderJournalsPage();
    });
});
