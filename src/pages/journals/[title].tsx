import { Entry as EntryModel } from "@prisma/client";

import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import JournalEntryPage from "@/components/Journals/JournalEntryPage/JournalEntryPage";
import prisma from "@/lib/prisma";
import { Entry } from "@/static/types";

import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const entryModel: EntryModel | null = await prisma.entry.findUnique({
        where: { slug: context.params!.title as string },
    });

    if (entryModel) {
        // Make the Entry model serializable before sending it as a prop
        const entry: Entry = {
            title: entryModel!.title,
            timestamp: entryModel!.timestamp.toLocaleDateString("es-pa"),
            sections: entryModel!.sections,
        };
        return {
            props: {
                entry,
            },
        };
    } else {
        // If the slug is invalid, silently redirect to /journals
        return {
            redirect: {
                permanent: false,
                destination: "/journals",
            },
        };
    }
};

const Projects: NextPage = ({
    entry,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <Head page={entry.title} />
            <PageWrapper>
                <JournalEntryPage entry={entry} />
            </PageWrapper>
        </div>
    );
};

export default Projects;
