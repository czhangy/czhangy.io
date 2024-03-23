import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Image, { ImageProps } from "./Image";

describe("Image", () => {
    /**
     * Renders the component
     *
     * @param {ImageProps} props Props to pass to the component
     */
    const renderImage = (props: ImageProps): void => {
        render(<Image src={props.src} alt={props.alt} />);
    };

    it("Renders with the correct attributes", () => {
        renderImage({ src: "/assets/images/default.webp", alt: "Test" });
        expect(screen.queryByRole("img")).toHaveAttribute("alt", "Test");
    });
});
