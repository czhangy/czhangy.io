import Head from "next/head";

import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import HomePage from "@/components/Home/HomePage/HomePage";

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
