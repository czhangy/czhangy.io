import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import AboutPage from "./AboutPage";

describe("AboutPage", () => {
    /**
     * Renders the component
     */
    const renderAboutPage = (): void => {
        render(<AboutPage />);
    };

    it("Renders", () => {
        renderAboutPage();
    });
});
