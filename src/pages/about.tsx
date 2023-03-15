// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Page components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import AboutPage from "@/components/AboutPage/AboutPage";

const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Charles Zhang | About Me</title>
            </Head>
            <PageWrapper>
                <AboutPage />
            </PageWrapper>
        </div>
    );
};

export default About;
