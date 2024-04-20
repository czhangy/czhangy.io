import { ChangeEvent, useState } from "react";
import axios from "axios";

import { ConditionalJSX } from "@/static/types";

import styles from "./AdminPage.module.scss";

export type AdminPageProps = {
    registerEnabled: boolean;
};

const AdminPage: React.FC<AdminPageProps> = (props: AdminPageProps) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<string>("");

    /**
     * Saves the username to the component state on input
     *
     * @param {ChangeEvent<HTMLInputElement>} evt The event object captured by onChange
     */
    const handleUsernameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        setUsername(evt.target.value);
    };

    /**
     * Saves the password to the component state on input
     *
     * @param {ChangeEvent<HTMLInputElement>} evt The event object captured by onChange
     */
    const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        setPassword(evt.target.value);
    };

    /**
     * Renders a response to indicate activity when the user makes an input
     *
     * @returns {ConditionalJSX} The response to show the user
     */
    const maybeRenderStatus = (): ConditionalJSX => {
        if (error !== "") {
            return <p className={styles.error}>{error}</p>;
        } else if (loading !== "") {
            return <p className={styles.loading}>{loading}</p>;
        } else {
            return "";
        }
    };

    /**
     * Renders the register button if the sign up feature is enabled
     *
     * @returns {ConditionalJSX} The JSX needed to render the register button if enabled
     */
    const maybeRenderRegisterButton = (): ConditionalJSX => {
        return props.registerEnabled ? (
            <button
                className={styles.button}
                type="button"
                onClick={handleRegister}
            >
                Register!
            </button>
        ) : (
            ""
        );
    };

    /**
     * Tries to register a new account
     */
    const handleRegister = async (): Promise<void> => {
        // Reset state
        setError("");
        setLoading("Creating account...");

        // API request to register
        try {
            await axios.post("/api/users", {
                username: username,
                password: password,
            });
        } catch (err: any) {
            setError(err.response.data.error);
        } finally {
            setLoading("");
        }
    };

    /**
     * Checks if the username/password are correct when the login button is clicked, setting error state when needed
     */
    const handleLogin = async (): Promise<void> => {
        // Reset state
        setError("");
        setLoading("Logging in...");

        // API request to login
        try {
            await axios.get("/api/users", {
                params: {
                    username: username,
                    password: password,
                },
            });
        } catch (err: any) {
            setError(err.response.data.error);
        } finally {
            setLoading("");
        }
    };

    return (
        <div className={styles["admin-page"]}>
            <form className={styles.form}>
                <div className={styles.warning} data-testid="warning">
                    <strong className={styles.text}>
                        😡 Stop snooping! 😡
                    </strong>
                </div>
                <div className={styles.field}>
                    <label
                        className={styles.label}
                        htmlFor="username"
                        data-testid="label"
                    >
                        Username:
                    </label>
                    <input
                        id="username"
                        className={styles.input}
                        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                            handleUsernameChange(evt)
                        }
                    />
                </div>
                <div className={styles.field}>
                    <label
                        className={styles.label}
                        htmlFor="password"
                        data-testid="label"
                    >
                        Password:
                    </label>
                    <input
                        id="password"
                        className={styles.input}
                        type="password"
                        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                            handlePasswordChange(evt)
                        }
                        data-testid="password"
                    />
                </div>
                <div className={styles.status} data-testid="status">
                    {maybeRenderStatus()}
                </div>
                <div className={styles.buttons}>
                    {maybeRenderRegisterButton()}
                    <button
                        className={styles.button}
                        type="button"
                        onClick={handleLogin}
                    >
                        Login!
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPage;
