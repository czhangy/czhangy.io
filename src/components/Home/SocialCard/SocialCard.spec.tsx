import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import SocialCard, { SocialCardProps } from "./SocialCard";

describe("SocialCard", () => {
    const GITHUB = "github";
    const LINKEDIN = "linkedin";
    const INSTAGRAM = "instagram";
    const TWITTER = "twitter";

    let link: HTMLAnchorElement | null;
    let image: HTMLImageElement | null;

    /**
     * Renders the component and assigns local variables
     */
    const renderSocialCard = (props: SocialCardProps): void => {
        render(<SocialCard social={props.social} link={props.link} />);
        link = screen.queryByRole("link");
        image = screen.queryByAltText(props.social);
    };

    it("Renders GitHub card correctly", () => {
        renderSocialCard({ social: GITHUB, link: `https://${GITHUB}.com` });
        expect(link).toHaveAttribute("href", `https://${GITHUB}.com`);
        expect(link).toHaveClass(GITHUB);
        expect(image).toBeInTheDocument();
    });

    it("Renders LinkedIn card correctly", () => {
        renderSocialCard({ social: LINKEDIN, link: `https://${LINKEDIN}.com` });
        expect(link).toHaveAttribute("href", `https://${LINKEDIN}.com`);
        expect(link).toHaveClass(LINKEDIN);
        expect(image).toBeInTheDocument();
    });

    it("Renders Instagram card correctly", () => {
        renderSocialCard({
            social: INSTAGRAM,
            link: `https://${INSTAGRAM}.com`,
        });
        expect(link).toHaveAttribute("href", `https://${INSTAGRAM}.com`);
        expect(link).toHaveClass(INSTAGRAM);
        expect(image).toBeInTheDocument();
    });

    it("Renders Twitter card correctly", () => {
        renderSocialCard({ social: TWITTER, link: `https://${TWITTER}.com` });
        expect(link).toHaveAttribute("href", `https://${TWITTER}.com`);
        expect(link).toHaveClass(TWITTER);
        expect(image).toBeInTheDocument();
    });
});
