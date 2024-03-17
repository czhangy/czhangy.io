import ExperiencePage from "@/components/Experience/ExperiencePage/ExperiencePage";
import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";

import type { NextPage } from "next";

const Experience: NextPage = () => {
    return (
        <div>
            <Head page="Experience" />
            <PageWrapper>
                <ExperiencePage />
            </PageWrapper>
        </div>
    );
};

export default Experience;
