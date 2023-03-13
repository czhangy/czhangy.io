// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// React
import { useState } from "react";
// Page component
import HomePage from "@/components/HomePage/HomePage";

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
            );
        } else return "";
    };

    return (
        <div>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            {loadPage()}
        </div>
    );
};

export default Home;
