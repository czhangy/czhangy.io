import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import PageWrapper, { PageWrapperProps } from "./PageWrapper";

describe("PageWrapper", () => {
    /**
     * Renders the component
     *
     * @param {PageWrapperProps} props Props to pass to the component
     */
    const renderPageWrapper = (props: PageWrapperProps): void => {
        render(<PageWrapper>{props.children}</PageWrapper>);
    };

    it("Renders correctly", () => {
        renderPageWrapper({ children: <div data-testid="test"></div> });
        expect(screen.queryByTestId("test")).toBeInTheDocument;
    });
});
