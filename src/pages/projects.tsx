import Head from "next/head";

import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import ProjectsPage from "@/components/Projects/ProjectsPage/ProjectsPage";

import type { NextPage } from "next";

const Projects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Charles Zhang | My Projects</title>
            </Head>
            <PageWrapper>
                <ProjectsPage />
            </PageWrapper>
        </div>
    );
};

export default Projects;
