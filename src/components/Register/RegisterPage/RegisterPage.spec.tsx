import "@testing-library/jest-dom";

import axios from "axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { mockUser } from "@/mocks/users";
import {
    BUTTON,
    FOR,
    GENERIC_FAILED_MSG,
    ID,
    INPUT,
    INTERNAL_SERVER_ERROR,
    OK,
} from "@/static/constants";
import { QueriedHTMLElement, QueriedHTMLElements } from "@/static/types";

import RegisterPage, { RegisterPageProps } from "./RegisterPage";

jest.mock("axios");
const mockedAxios: jest.Mocked<typeof axios> = axios as jest.Mocked<
    typeof axios
>;

describe("RegisterPage", () => {
    /**
     * Renders the component
     */
    const renderRegisterPage = (props: RegisterPageProps): void => {
        render(<RegisterPage registerEnabled={props.registerEnabled} />);
    };

    describe("Rendering", () => {
        it("Renders correctly", () => {
            renderRegisterPage({ registerEnabled: false });

            // Check for the warning
            const warning: QueriedHTMLElement = screen.queryByTestId("warning");
            expect(warning).toHaveTextContent("😡 Stop snooping! 😡");
        });

        it("Renders the register form when enabled", () => {
            renderRegisterPage({ registerEnabled: true });

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

            // Check for the buttons
            const button: QueriedHTMLElement = screen.queryByRole(BUTTON);
            expect(button).toHaveTextContent("Register!");
        });
    });

    describe("Registration", () => {
        const username: string = "Test User";
        const password: string = "Test Password";

        it("Registers correctly when the button is clicked", async () => {
            renderRegisterPage({ registerEnabled: true });
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
            renderRegisterPage({ registerEnabled: true });
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
});
