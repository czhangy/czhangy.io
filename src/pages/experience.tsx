import Head from "next/head";

import ExperiencePage from "@/components/Experience/ExperiencePage/ExperiencePage";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";

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
