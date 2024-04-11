import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    GITHUB,
    IMAGE,
    INSTAGRAM,
    LINK,
    LINKEDIN,
    TWITTER,
} from "@/static/constants";

import HomePage from "./HomePage";

describe("HomePage", () => {
    /** A list of the titles of each page on the site */
    const PAGE_TITLES: string[] = [
        "About Me",
        "My Projects",
        "My Experience",
        "Journals",
    ];
    /** A list of the socials being linked to on the page */
    const SOCIALS: string[] = [GITHUB, LINKEDIN, INSTAGRAM, TWITTER];

    /**
     * Renders the component
     */
    const renderHomePage = (): void => {
        render(<HomePage />);
    };

    it("Renders expected content", () => {
        renderHomePage();
        const numCards: number = PAGE_TITLES.length + SOCIALS.length;
        PAGE_TITLES.forEach((title: string) => {
            expect(screen.queryByText(title)).toBeInTheDocument();
        });
        SOCIALS.forEach((social: string) => {
            expect(screen.queryByAltText(social)).toBeInTheDocument();
        });
        expect(screen.queryAllByRole(LINK)).toHaveLength(numCards);
        expect(screen.queryAllByRole(IMAGE)).toHaveLength(numCards);
    });
});
