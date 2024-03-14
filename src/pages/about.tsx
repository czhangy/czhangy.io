import Head from "next/head";
import AboutPage from "@/components/AboutPage/AboutPage";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

import type { NextPage } from "next";

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
