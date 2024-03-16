import "@/styles/globals.scss";

import { useEffect } from "react";
import Navbar from "@/components/Global/Navbar/Navbar";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    /** The string constant denoting a change event */
    const CHANGE_EVENT: string = "change";
    /** The string constant denoting a dark theme */
    const DARK: string = "dark";
    /** The string constant denoting a light theme */
    const LIGHT: string = "light";

    useEffect(() => {
        /**
         * Gets the default theme from the user's browser settings
         *
         * @returns the object that can be listened to for theme changes
         */
        const getDefaultTheme = (): MediaQueryList =>
            window.matchMedia(`(prefers-color-scheme: ${LIGHT})`);

        /**
         * Updates the site's theme from the user's browser settings
         */
        const updateTheme = (): void => {
            document.body.dataset.theme = getDefaultTheme().matches
                ? LIGHT
                : DARK;
        };

        // Set up event listener for dynamic theme changes
        const themeQuery: MediaQueryList = getDefaultTheme();
        themeQuery.addEventListener(CHANGE_EVENT, updateTheme);

        // Grab theme initially
        updateTheme();

        // Clean up event listener
        return () => {
            document.removeEventListener(CHANGE_EVENT, updateTheme);
        };
    }, []);

    return (
        <div id="app">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default App;
