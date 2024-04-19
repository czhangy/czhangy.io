import { ChangeEvent, useState } from "react";

import Image from "@/components/Global/Image/Image";
import { ConditionalJSX } from "@/static/types";

import styles from "./AdminPage.module.scss";

export type AdminPageProps = {
    registerEnabled: boolean;
};

const AdminPage: React.FC<AdminPageProps> = (props: AdminPageProps) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

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
     * Returns the message to display depending on error state
     *
     * @returns {string} The classes needed to style the error message
     */
    const getErrorMessage = (): string => {
        return error ? "That username or password is incorrect." : "";
    };

    /**
     * Renders the register button if the sign up feature is enabled
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
    const handleRegister = (): void => {};

    /**
     * Checks if the username/password are correct when the login button is clicked, setting error state when needed
     */
    const handleSubmit = (): void => {
        // Reset error state
        setError(false);

        // Set error if incorrect
        if (username !== "charles" || password !== "hi") {
            setError(true);
        }
    };

    return (
        <div className={styles["admin-page"]}>
            <form className={styles.form}>
                <div className={styles.warning} data-testid="warning">
                    <div className={styles.icon}>
                        <Image src="/assets/icons/warning.svg" alt="Warning" />
                    </div>
                    <strong className={styles.text}>
                        Stop snooping &gt;:(
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
                <p className={styles.error}>{getErrorMessage()}</p>
                <div className={styles.buttons}>
                    {maybeRenderRegisterButton()}
                    <button
                        className={styles.button}
                        type="button"
                        onClick={handleSubmit}
                    >
                        Login!
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPage;
