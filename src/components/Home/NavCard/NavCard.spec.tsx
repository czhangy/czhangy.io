import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Side } from "@/static/types";

import NavCard, { NavCardProps } from "./NavCard";

describe("NavCard", () => {
    const TEST_TITLE: string = "Test";
    const TEST_PATH: string = "/test";

    /**
     * Checks if the card is rendered properly
     *
     * @param {Side} side The alignment of the card being tested
     */
    const assertCardRenders = (side: Side): void => {
        const title: HTMLHeadingElement | null = screen.queryByRole("heading");
        expect(title).toHaveTextContent(TEST_TITLE);
        expect(title).toHaveClass(`${side}-title`);
        expect(screen.queryByAltText(TEST_TITLE)).toBeInTheDocument();
        expect(screen.queryByRole("link")).toHaveAttribute("href", TEST_PATH);
    };

    /**
     * Renders the component
     *
     * @param {NavCardProps} props Props to pass to the component
     */
    const renderNavCard = (props: NavCardProps): void => {
        render(
            <NavCard
                title={props.title}
                path={props.path}
                align={props.align}
            />,
        );
    };

    it("Renders correctly when aligned left", () => {
        renderNavCard({ title: TEST_TITLE, path: TEST_PATH, align: "left" });
        assertCardRenders("left");
    });

    it("Renders correctly when aligned right", () => {
        renderNavCard({ title: TEST_TITLE, path: TEST_PATH, align: "right" });
        assertCardRenders("right");
    });
});
