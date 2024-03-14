// TS

// Next
import Head from "next/head";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
// Page components
import PageWrapper from "@/components/PageWrapper/PageWrapper";

import type { NextPage } from "next";

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
