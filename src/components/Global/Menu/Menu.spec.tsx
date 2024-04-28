import "@testing-library/jest-dom";

import { useSession } from "next-auth/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
    AUTHENTICATED,
    BUTTON,
    HREF,
    LINK,
    LIST,
    LIST_ITEM,
    UNAUTHENTICATED,
} from "@/static/constants";
import { QueriedHTMLElement } from "@/static/types";

import Menu from "./Menu";

jest.mock("next-auth/react");

describe("Menu", () => {
    let overlay: QueriedHTMLElement;
    let menu: QueriedHTMLElement;
    let button: QueriedHTMLElement;
    let bar: QueriedHTMLElement;

    /** The names of the pages displayed in the menu */
    const PAGES: string[] = ["About", "Projects", "Experience", "Journals"];

    /**
     * Checks that the menu is in a closed state
     */
    const assertMenuClosed = (): void => {
        expect(overlay).toHaveClass("hide");
        expect(menu).toHaveClass("closed");
        expect(bar).not.toHaveClass("cross");
    };

    /**
     * Renders the component and assigns local variables
     */
    const renderMenu = (authenticated: boolean): void => {
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

        render(<Menu />);

        overlay = screen.queryByTestId("menu-overlay");
        menu = screen.queryByRole(LIST);
        button = screen.queryByRole(BUTTON);
        bar = screen.queryByTestId("menu-bar");
    };

    describe("Navigates", () => {
        it("Navigates to other pages correctly", () => {
            renderMenu(false);

            // Check link count
            const links: HTMLElement[] = screen.queryAllByRole(LINK);
            expect(links).toHaveLength(PAGES.length);

            // Check link attributes
            PAGES.forEach((page: string, idx: number) => {
                expect(links[idx]).toHaveTextContent(page);
                expect(links[idx]).toHaveProperty(
                    HREF,
                    `http://localhost/${page.toLowerCase()}`,
                );
            });
        });

        it("Navigates to /new correctly", () => {
            renderMenu(true);

            // Check link count
            const links: HTMLElement[] = screen.getAllByRole(LINK);
            expect(links).toHaveLength(PAGES.length + 1);

            // Check link attributes
            const newLink: QueriedHTMLElement = screen.queryByText("New");
            expect(newLink).toHaveProperty(HREF, "http://localhost/new");
        });
    });

    describe("Closes", () => {
        it("Can be toggled open/closed by button press", async () => {
            renderMenu(false);
            expect(button).toBeInTheDocument();
            assertMenuClosed();
            fireEvent.click(button!);
            expect(overlay).toHaveClass("show");
            expect(menu).toHaveClass("open");
            expect(bar).toHaveClass("cross");
            fireEvent.click(button!);
            await waitFor(() => assertMenuClosed());
        });

        it("Closes menu on overlay click", async () => {
            renderMenu(false);
            fireEvent.click(button!);
            fireEvent.click(overlay!);
            await waitFor(() => assertMenuClosed());
        });

        it("Closes menu on nav click", async () => {
            renderMenu(false);
            fireEvent.click(button!);
            fireEvent.click(screen.getAllByRole(LIST_ITEM)[0]);
            await waitFor(() => assertMenuClosed());
        });

        it("Closes menu on scroll", async () => {
            renderMenu(false);
            fireEvent.click(button!);
            fireEvent.scroll(window);
            await waitFor(() => assertMenuClosed());
        });
    });
});
