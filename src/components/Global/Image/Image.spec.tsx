import { render } from "@testing-library/react";

import Image from "./Image";

describe("Image", () => {
    it("Renders", () => {
        render(<Image src="/assets/images/default.webp" alt="" />);
    });
});
