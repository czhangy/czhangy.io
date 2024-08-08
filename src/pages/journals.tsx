import { Entry as EntryModel } from "@prisma/client";

import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import JournalsPage from "@/components/Journals/JournalsPage/JournalsPage";
import prisma from "@/lib/prisma";
import { Entry } from "@/static/types";
import { getEntryFromEntryModel } from "@/utils/helpers";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const entries: Entry[] = (await prisma.entry.findMany({})).map(
        // Convert Entry models into Entry objects before passing as prop
        (entry: EntryModel) => getEntryFromEntryModel(entry),
    );

    return {
        props: {
            entries,
        },
    };
};

const Journals: NextPage = ({
    entries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Head page="Journals" />
            <PageWrapper>
                <JournalsPage entries={entries} />
            </PageWrapper>
        </div>
    );
};

export default Journals;
