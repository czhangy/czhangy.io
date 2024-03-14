import "@/styles/globals.scss";

import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    const CHANGE_EVENT: string = "change";
    const DARK: string = "dark";
    const LIGHT: string = "light";

    // Set event listener for dynamic updates on theme
    useEffect(() => {
        // Check user's theme
        const getDefaultTheme: () => MediaQueryList = () =>
            window.matchMedia(`(prefers-color-scheme: ${LIGHT})`);

        const updateTheme = () => {
            document.body.dataset.theme = getDefaultTheme().matches
                ? LIGHT
                : DARK;
        };

        const themeQuery: MediaQueryList = getDefaultTheme();
        themeQuery.addEventListener(CHANGE_EVENT, updateTheme);
        updateTheme();

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
