// Stylesheet
import "@/styles/globals.scss";
// TS
import type { AppProps } from "next/app";
// React
import { useEffect } from "react";
// Nav components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function App({ Component, pageProps }: AppProps) {
    // Check user preferences for theme
    const getTheme = () => {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            return "light";
        } else {
            return "dark";
        }
    };

    // Set site theme to given theme
    const setTheme = (theme: string) => {
        document.body.dataset.theme = theme;
    };

    // Set event listener for dynamic updates
    useEffect(() => {
        const updateTheme = () => {
            setTheme(getTheme());
        };
        let themeQuery = window.matchMedia("(prefers-color-scheme: light)");
        themeQuery.addEventListener("change", updateTheme);
        updateTheme();
        return () => {
            document.removeEventListener("change", updateTheme);
        };
    }, []);

    return (
        <div id="app">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default App;
