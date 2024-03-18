import { render } from "@testing-library/react";

import SocialCard from "./SocialCard";

describe("SocialCard", () => {
    it("Renders", () => {
        render(<SocialCard social="github" link="https://test.com" alt="" />);
    });
});
