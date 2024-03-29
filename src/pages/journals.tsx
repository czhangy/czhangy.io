import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import JournalsPage from "@/components/Journals/JournalsPage/JournalsPage";

import type { NextPage } from "next";

const Journals: NextPage = () => {
    return (
        <div>
            <Head page="Journals" />
            <PageWrapper>
                <JournalsPage />
            </PageWrapper>
        </div>
    );
};

export default Journals;
