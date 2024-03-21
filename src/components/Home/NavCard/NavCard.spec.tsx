import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import NavCard, { NavCardProps } from "./NavCard";

describe("NavCard", () => {
    const TEST_TITLE: string = "Test";
    const TEST_PATH: string = "/test";

    let title: HTMLHeadingElement | null;
    let image: HTMLImageElement | null;
    let link: HTMLAnchorElement | null;

    /**
     * Renders the component and assign local variables
     */
    const renderNavCard = (props: NavCardProps): void => {
        render(
            <NavCard
                title={props.title}
                path={props.path}
                align={props.align}
            />,
        );
        title = screen.queryByRole("heading");
        image = screen.queryByAltText(TEST_TITLE);
        link = screen.queryByRole("link");
    };

    it("Renders correctly when aligned left", () => {
        renderNavCard({ title: TEST_TITLE, path: TEST_PATH, align: "left" });
        expect(title).toHaveTextContent(TEST_TITLE);
        expect(title).toHaveClass("left-title");
        expect(image).toBeInTheDocument();
        expect(link).toHaveAttribute("href", TEST_PATH);
    });

    it("Renders correctly when aligned right", () => {
        renderNavCard({ title: TEST_TITLE, path: TEST_PATH, align: "right" });
        expect(title).toHaveTextContent(TEST_TITLE);
        expect(title).toHaveClass("right-title");
        expect(image).toBeInTheDocument();
        expect(link).toHaveAttribute("href", TEST_PATH);
    });
});
