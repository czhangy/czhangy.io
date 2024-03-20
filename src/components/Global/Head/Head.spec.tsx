import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Head, { HeadProps } from "./Head";

describe("Head", () => {
    /**
     * Renders the component
     */
    const renderHead = (props?: HeadProps): void => {
        if (props) {
            render(<Head page={props.page} />);
        } else {
            render(<Head />);
        }
    };

    it("Renders with no page", () => {
        renderHead();
    });

    it("Renders with a page", () => {
        renderHead({ page: "Test" });
    });
});
