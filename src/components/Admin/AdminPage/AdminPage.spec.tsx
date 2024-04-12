import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ALT, BUTTON, FOR, ID, IMAGE, INPUT } from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import AdminPage from "./AdminPage";

describe("AdminPage", () => {
    /** The error message shown for an incorrect username/password */
    const ERROR_MSG: string = "That username or password is incorrect.";

    /**
     * Renders the component
     */
    const renderAdminPage = (): void => {
        render(<AdminPage />);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderAdminPage();

            // Check for the warning
            const warning: QueriedHTMLElement = screen.queryByTestId("warning");
            const warningIcon: QueriedHTMLElement = screen.queryByRole(IMAGE);
            expect(warning).toHaveTextContent("Stop snooping >:(");
            expect(warningIcon).toHaveAttribute(ALT, "Warning");

            // Check for labels
            const labels: QueriedHTMLElements =
                screen.queryAllByTestId("label");
            expect(labels).toHaveLength(2);
            expect(labels[0]).toHaveTextContent("Username:");
            expect(labels[0]).toHaveAttribute(FOR, "username");
            expect(labels[1]).toHaveTextContent("Password:");
            expect(labels[1]).toHaveAttribute(FOR, "password");

            // Check for inputs
            const usernameInput: QueriedHTMLElement = screen.queryByRole(INPUT);
            const passwordInput: QueriedHTMLElement =
                screen.queryByTestId("password");
            expect(usernameInput).toHaveAttribute(ID, "username");
            expect(passwordInput).toHaveAttribute(ID, "password");

            // Check that error message is hidden
            const error: QueriedHTMLElement = screen.queryByText(ERROR_MSG);
            expect(error).not.toBeInTheDocument();

            // Check for the submit button
            const submitButton: QueriedHTMLElement = screen.queryByRole(BUTTON);
            expect(submitButton).toHaveTextContent("Login!");
        });
    });

    describe("Validation", () => {
        it("Errors correctly on wrong username", () => {
            renderAdminPage();

            // Enter incorrect username
            const usernameInput: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(usernameInput, {
                target: { value: "Wrong Username" },
            });

            // Submit
            const submitButton: HTMLElement = screen.getByRole(BUTTON);
            fireEvent.click(submitButton);

            // Check for error message
            const error: QueriedHTMLElement = screen.queryByText(ERROR_MSG);
            expect(error).toBeInTheDocument();
        });

        it("Errors correctly on wrong password", () => {
            renderAdminPage();

            // Enter correct username
            const usernameInput: HTMLElement = screen.getByRole(INPUT);
            fireEvent.change(usernameInput, {
                target: { value: "charles" },
            });

            // Enter incorrect username
            const passwordInput: HTMLElement = screen.getByTestId("password");
            fireEvent.change(passwordInput, {
                target: { value: "Wrong Password" },
            });

            // Submit
            const submitButton: HTMLElement = screen.getByRole(BUTTON);
            fireEvent.click(submitButton);

            // Check for error message
            const error: QueriedHTMLElement = screen.queryByText(ERROR_MSG);
            expect(error).toBeInTheDocument();
        });
    });

    describe("Submission", () => {
        it("Submits form correctly", () => {
            renderAdminPage();

            // Click the submit button
            const submitButton: HTMLElement = screen.getByRole(BUTTON);
            fireEvent.click(submitButton);
        });
    });
});
