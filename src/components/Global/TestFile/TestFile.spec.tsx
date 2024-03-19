import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import TestFile, { TestFileProps } from "./TestFile";

describe("TestFile", () => {
    /**
     * Renders the component
     *
     * @param {TestFileProps} props Props to pass to the component
     */
    const renderTestFile = (props: TestFileProps): void => {
        render(<TestFile />);
    };

    it("Renders", () => {
        renderTestFile();
    });
});
