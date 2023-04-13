// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Page components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";

const Projects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Charles Zhang | My Experience</title>
            </Head>
            <PageWrapper>
                <ExperiencePage />
            </PageWrapper>
        </div>
    );
};

export default Projects;
