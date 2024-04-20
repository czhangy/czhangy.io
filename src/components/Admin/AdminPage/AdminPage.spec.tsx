import "@testing-library/jest-dom";

import axios from "axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { mockUser } from "@/mocks/users";
import {
    BUTTON,
    CREATED,
    FOR,
    GENERIC_FAILED_MSG,
    ID,
    INPUT,
    INTERNAL_SERVER_ERROR,
    OK,
} from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import AdminPage, { AdminPageProps } from "./AdminPage";

jest.mock("axios");
const mockedAxios: jest.Mocked<typeof axios> = axios as jest.Mocked<
    typeof axios
>;

describe("AdminPage", () => {
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
            expect(warning).toHaveTextContent("😡 Stop snooping! 😡");

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

            // Check that response message is hidden
            const status: QueriedHTMLElement = screen.queryByTestId("status");
            expect(status).toHaveTextContent("");

            // Check for the submit button
            const submitButton: QueriedHTMLElement = screen.queryByRole(BUTTON);
            expect(submitButton).toHaveTextContent("Login!");
        });

        it("Renders the register button when enabled", () => {
            renderAdminPage({ registerEnabled: true });

            // Check for the buttons
            const buttons: QueriedHTMLElements = screen.queryAllByRole(BUTTON);
            expect(buttons).toHaveLength(2);
            expect(buttons[0]).toHaveTextContent("Register!");
            expect(buttons[1]).toHaveTextContent("Login!");
        });
    });

    describe("Registration", () => {
        const username: string = "Test User";
        const password: string = "Test Password";

        it("Registers correctly when the button is clicked", async () => {
            renderAdminPage({ registerEnabled: true });
            mockedAxios.post.mockResolvedValue({
                status: OK,
                data: mockUser,
            });

            // Click the register button
            const registerButton: HTMLElement = screen.getByText("Register!");
            fireEvent.click(registerButton);

            // Check for status message
            const status: HTMLElement = screen.getByTestId("status");
            expect(status).toHaveTextContent("Creating account...");

            // TODO: Check for success

            // Check that status clears
            await waitFor(() => expect(status).toHaveTextContent(""));
        });

        it("Sets the status correctly on error", async () => {
            renderAdminPage({ registerEnabled: true });
            mockedAxios.post.mockRejectedValue({
                status: INTERNAL_SERVER_ERROR,
                response: { data: { error: GENERIC_FAILED_MSG } },
            });

            // Set inputs
            const usernameInput: HTMLElement = screen.getByRole(INPUT);
            const passwordInput: HTMLElement = screen.getByTestId("password");
            fireEvent.change(usernameInput, { target: { value: username } });
            fireEvent.change(passwordInput, {
                target: { value: password },
            });

            // Click the register button
            const registerButton: HTMLElement = screen.getByText("Register!");
            fireEvent.click(registerButton);
            expect(mockedAxios.post).toHaveBeenCalledWith("/api/users", {
                username: username,
                password: password,
            });

            // Check for error
            await waitFor(() => {
                const error: QueriedHTMLElement =
                    screen.queryByText(GENERIC_FAILED_MSG);
                expect(error).toHaveClass("error");
            });
        });
    });

    describe("Login", () => {
        const username: string = "Test User";
        const password: string = "Test Password";

        it("Logs in correctly when the button is clicked", async () => {
            renderAdminPage({ registerEnabled: false });
            mockedAxios.get.mockResolvedValue({ status: CREATED });

            // Click the login button
            const loginButton: HTMLElement = screen.getByText("Login!");
            fireEvent.click(loginButton);

            // Check for loading
            const status: HTMLElement = screen.getByTestId("status");
            expect(status).toHaveTextContent("Logging in...");

            // TODO: Check for success

            // Check that status clears
            await waitFor(() => expect(status).toHaveTextContent(""));
        });

        it("Sets the status correctly on error", async () => {
            renderAdminPage({ registerEnabled: false });
            mockedAxios.get.mockRejectedValue({
                status: INTERNAL_SERVER_ERROR,
                response: { data: { error: GENERIC_FAILED_MSG } },
            });

            // Set inputs
            const usernameInput: HTMLElement = screen.getByRole(INPUT);
            const passwordInput: HTMLElement = screen.getByTestId("password");
            fireEvent.change(usernameInput, { target: { value: username } });
            fireEvent.change(passwordInput, {
                target: { value: password },
            });

            // Click the login button
            const loginButton: HTMLElement = screen.getByText("Login!");
            fireEvent.click(loginButton);
            expect(mockedAxios.get).toHaveBeenCalledWith("/api/users", {
                params: {
                    username: username,
                    password: password,
                },
            });

            // Check for error
            await waitFor(() => {
                const error: QueriedHTMLElement =
                    screen.queryByText(GENERIC_FAILED_MSG);
                expect(error).toHaveClass("error");
            });
        });
    });
});
