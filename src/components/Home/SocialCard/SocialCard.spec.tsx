import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Social } from "@/static/types";

import SocialCard, { SocialCardProps } from "./SocialCard";

describe("SocialCard", () => {
    const GITHUB = "github";
    const LINKEDIN = "linkedin";
    const INSTAGRAM = "instagram";
    const TWITTER = "twitter";

    /**
     * Checks if the card is rendered properly
     *
     * @param {Social} social The social media the card represents
     */
    const assertCardRenders = (social: Social): void => {
        const link: HTMLAnchorElement | null = screen.queryByRole("link");
        expect(link).toHaveAttribute("href", `https://${social}.com`);
        expect(link).toHaveClass(social);
        expect(screen.queryByAltText(social)).toBeInTheDocument();
    };

    /**
     * Renders the component
     *
     * @param {SocialCardProps} props Props to pass to the component
     */
    const renderSocialCard = (props: SocialCardProps): void => {
        render(<SocialCard social={props.social} link={props.link} />);
    };

    it("Renders GitHub card correctly", () => {
        renderSocialCard({ social: GITHUB, link: `https://${GITHUB}.com` });
        assertCardRenders(GITHUB);
    });

    it("Renders LinkedIn card correctly", () => {
        renderSocialCard({ social: LINKEDIN, link: `https://${LINKEDIN}.com` });
        assertCardRenders(LINKEDIN);
    });

    it("Renders Instagram card correctly", () => {
        renderSocialCard({
            social: INSTAGRAM,
            link: `https://${INSTAGRAM}.com`,
        });
        assertCardRenders(INSTAGRAM);
    });

    it("Renders Twitter card correctly", () => {
        renderSocialCard({ social: TWITTER, link: `https://${TWITTER}.com` });
        assertCardRenders(TWITTER);
    });
});
