// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// React
import { useEffect, useState } from "react";
// Page components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import HomePage from "@/components/HomePage/HomePage";
import AboutPage from "@/components/AboutPage/AboutPage";

const Home: NextPage = () => {
    // Page state
    const [currentPage, setCurrentPage] = useState<string>("home");

    // Wrapper state
    const [fade, setFade] = useState<boolean>(true);

    // Page navigation controller
    const changePage = (newPage: string) => {
        setFade(true);
        setTimeout(() => setCurrentPage(newPage), 1200);
    };

    // Page loader
    const loadPage = () => {
        if (currentPage === "home") {
            return (
                <HomePage onNav={(newPage: string) => changePage(newPage)} />
            );
        } else return <AboutPage />;
    };

    // Trigger fade on load
    useEffect(() => {
        setFade(false);
    }, [currentPage]);

    return (
        <div>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <PageWrapper fade={fade}>{loadPage()}</PageWrapper>
        </div>
    );
};

export default Home;
