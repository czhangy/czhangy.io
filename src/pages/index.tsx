// TS

// Next
import Head from "next/head";
import HomePage from "@/components/HomePage/HomePage";
// Page components
import PageWrapper from "@/components/PageWrapper/PageWrapper";

import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <PageWrapper>
                <HomePage />
            </PageWrapper>
        </div>
    );
};

export default Home;
