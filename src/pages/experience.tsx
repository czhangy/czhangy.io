import ExperiencePage from "@/components/Experience/ExperiencePage/ExperiencePage";
import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import experiences from "@/static/experiences";

import type { NextPage } from "next";

const Experience: NextPage = () => {
    return (
        <div>
            <Head page="Experience" />
            <PageWrapper>
                <ExperiencePage experiences={experiences} />
            </PageWrapper>
        </div>
    );
};

export default Experience;
