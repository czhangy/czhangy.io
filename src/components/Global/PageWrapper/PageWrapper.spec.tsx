import { render } from "@testing-library/react";

import PageWrapper from "./PageWrapper";

describe("PageWrapper", () => {
    it("Renders", () => {
        render(
            <PageWrapper>
                <></>
            </PageWrapper>,
        );
    });
});
