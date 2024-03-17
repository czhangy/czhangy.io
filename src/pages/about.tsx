import AboutPage from "@/components/About/AboutPage/AboutPage";
import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";

import type { NextPage } from "next";

const About: NextPage = () => {
    return (
        <div>
            <Head page="About" />
            <PageWrapper>
                <AboutPage />
            </PageWrapper>
        </div>
    );
};

export default About;
