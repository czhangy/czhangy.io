import "@testing-library/jest-dom";

import { useSession } from "next-auth/react";
import { render, screen } from "@testing-library/react";

import { AUTHENTICATED, HREF, LINK, UNAUTHENTICATED } from "@/static/constants";
import { QueriedHTMLElement } from "@/static/types";

import Navbar from "./Navbar";

jest.mock("next-auth/react");

describe("Navbar", () => {
    /**
     * Renders the component
     */
    const renderNavbar = (authenticated: boolean): void => {
        (useSession as jest.Mock).mockReturnValue(
            authenticated
                ? {
                      data: {},
                      status: AUTHENTICATED,
                  }
                : {
                      data: null,
                      status: UNAUTHENTICATED,
                  },
        );

        render(<Navbar />);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderNavbar(false);

            // Check title
            const title: QueriedHTMLElement = screen.queryAllByRole(LINK)[0];
            expect(title).toHaveAttribute(HREF, "/");
            expect(title).toHaveTextContent("CZhang");

            // Check menu
            const menu: QueriedHTMLElement = screen.queryByTestId("menu");
            expect(menu).toBeInTheDocument();
        });

        it("Renders correctly when logged in", () => {
            renderNavbar(true);

            // Check for admin tag
            const tag: QueriedHTMLElement = screen.queryByTestId("admin");
            expect(tag).toBeInTheDocument();
        });
    });
});
