import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Image, { ImageProps } from "./Image";

describe("Image", () => {
    let img: HTMLImageElement | null;
    /**
     * Renders the component and assigns local variable
     */
    const renderImage = (props: ImageProps): void => {
        render(<Image src={props.src} alt={props.alt} />);
        img = screen.queryByRole("img");
    };

    it("Renders with the correct attributes", () => {
        renderImage({ src: "/assets/images/default.webp", alt: "Test" });
        expect(img).toHaveAttribute("alt", "Test");
    });
});
