import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { HEADING, IMAGE } from "@/static/constants";
import { QueriedHTMLElements } from "@/static/types";

import AboutPage from "./AboutPage";

describe("AboutPage", () => {
    /** The number of sections expected on the page */
    const NUM_SECTIONS: number = 3;

    /**
     * Renders the component
     */
    const renderAboutPage = (): void => {
        render(<AboutPage />);
    };

    it("Renders correctly", () => {
        renderAboutPage();

        // Check headings
        const headings: QueriedHTMLElements = screen.queryAllByRole(HEADING);
        expect(headings).toHaveLength(NUM_SECTIONS);
        expect(headings[0]).toHaveTextContent("My Story");
        expect(headings[1]).toHaveTextContent("My Work");
        expect(headings[2]).toHaveTextContent("My Interests");

        // Check images
        const images: QueriedHTMLElements = screen.queryAllByRole(IMAGE);
        expect(images).toHaveLength(NUM_SECTIONS);
    });
});
