import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ALT, BUTTON, FOR, ID, IMAGE, INPUT } from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import AdminPage, { AdminPageProps } from "./AdminPage";

describe("AdminPage", () => {
    /** The error message shown for an incorrect username/password */
    const ERROR_MSG: string = "That username or password is incorrect.";

    /**
     * Renders the component
     */
    const renderAdminPage = (props: AdminPageProps): void => {
        render(<AdminPage registerEnabled={props.registerEnabled} />);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderAdminPage({ registerEnabled: false });

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
            renderAdminPage({ registerEnabled: false });

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
            renderAdminPage({ registerEnabled: false });

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

    describe("Registration", () => {
        it("Renders the register button when enabled", () => {
            renderAdminPage({ registerEnabled: true });

            // Check for the buttons
            const buttons: QueriedHTMLElements = screen.queryAllByRole(BUTTON);
            expect(buttons).toHaveLength(2);
            expect(buttons[0]).toHaveTextContent("Register!");
            expect(buttons[1]).toHaveTextContent("Login!");
        });

        it("Registers correctly when the button is clicked", () => {
            renderAdminPage({ registerEnabled: true });

            // Click the register button
            const registerButton: HTMLElement = screen.getByText("Register!");
            fireEvent.click(registerButton);
        });
    });

    describe("Login", () => {
        it("Logs in correctly", () => {
            renderAdminPage({ registerEnabled: false });

            // Click the submit button
            const submitButton: HTMLElement = screen.getByRole(BUTTON);
            fireEvent.click(submitButton);
        });
    });
});
