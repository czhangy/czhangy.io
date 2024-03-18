import { render } from "@testing-library/react";

import Head from "./Head";

describe("Head", () => {
    it("Renders with no page", () => {
        render(<Head />);
    });

    it("Renders with a page", () => {
        render(<Head page="Test" />);
    });
});
