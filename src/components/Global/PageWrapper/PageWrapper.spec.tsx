import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import PageWrapper, { PageWrapperProps } from "./PageWrapper";

describe("PageWrapper", () => {
    /**
     * Renders the component
     */
    const renderPageWrapper = (props: PageWrapperProps): void => {
        render(<PageWrapper>{props.children}</PageWrapper>);
    };

    it("Renders", () => {
        renderPageWrapper({ children: <></> });
    });
});
