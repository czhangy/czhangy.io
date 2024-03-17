import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import HomePage from "@/components/Home/HomePage/HomePage";

import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div>
            <Head />
            <PageWrapper>
                <HomePage />
            </PageWrapper>
        </div>
    );
};

export default Home;
