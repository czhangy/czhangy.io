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

    return (
        <div>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <HomePage
                onAbout={() => setCurrentPage("about")}
                onProjects={() => setCurrentPage("projects")}
                onExperience={() => setCurrentPage("experience")}
                isHidden={currentPage !== "home"}
            />
        </div>
    );
};

export default Home;
