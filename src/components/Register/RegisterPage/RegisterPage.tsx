import { ChangeEvent, useState } from "react";
import axios from "axios";

import { ConditionalJSX } from "@/static/types";

import styles from "./RegisterPage.module.scss";

export type RegisterPageProps = {
    registerEnabled: boolean;
};

const RegisterPage: React.FC<RegisterPageProps> = (
    props: RegisterPageProps,
) => {
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
    const maybeRenderRegisterForm = (): ConditionalJSX => {
        return props.registerEnabled ? (
            <>
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
                <button
                    className={styles.button}
                    type="button"
                    onClick={handleRegister}
                >
                    Register!
                </button>
            </>
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

    return (
        <div className={styles["register-page"]}>
            <form className={styles.form}>
                <div className={styles.warning} data-testid="warning">
                    <strong className={styles.text}>
                        😡 Stop snooping! 😡
                    </strong>
                </div>
                {maybeRenderRegisterForm()}
            </form>
        </div>
    );
};

export default RegisterPage;
