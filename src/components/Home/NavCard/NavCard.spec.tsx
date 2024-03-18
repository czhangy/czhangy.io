import { render } from "@testing-library/react";

import NavCard from "./NavCard";

describe("NavCard", () => {
    it("Renders", () => {
        render(<NavCard title="Test" path="/" align="left" />);
    });
});
