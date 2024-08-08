import { Entry as EntryModel } from "@prisma/client";

import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import JournalsPage from "@/components/Journals/JournalsPage/JournalsPage";
import prisma from "@/lib/prisma";
import { Entry } from "@/static/types";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const entries: Entry[] = (await prisma.entry.findMany({})).map(
        (entry: EntryModel) => {
            const { id: _, ...e } = entry;
            const en: Entry = {
                ...e,
                timestamp: e.timestamp.toLocaleDateString("es-pa"),
            };
            return en;
        },
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
