// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// React
import { useState } from "react";
// Page components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import HomePage from "@/components/HomePage/HomePage";
import AboutPage from "@/components/AboutPage/AboutPage";

const Home: NextPage = () => {
    // Page state
    const [currentPage, setCurrentPage] = useState<string>("home");

    // Page navigation controller
    const changePage = (newPage: string) => {
        setTimeout(() => setCurrentPage(newPage), 1200);
    };

    // Page loader
    const loadPage = () => {
        if (currentPage === "home") {
            return (
                <HomePage onNav={(newPage: string) => changePage(newPage)} />
                // <AboutPage />
            );
        } else return "";
    };

    return (
        <div>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <PageWrapper>{loadPage()}</PageWrapper>
        </div>
    );
};

export default Home;
