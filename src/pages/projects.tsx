import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import ProjectsPage from "@/components/Projects/ProjectsPage/ProjectsPage";

import type { NextPage } from "next";

const Projects: NextPage = () => {
    return (
        <div>
            <Head page="Projects" />
            <PageWrapper>
                <ProjectsPage />
            </PageWrapper>
        </div>
    );
};

export default Projects;
