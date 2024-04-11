import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import JournalEntryPage from "@/components/Journals/JournalEntryPage/JournalEntryPage";
import { journalEntry_04_10 } from "@/static/journal_entries";

import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: { entry: journalEntry_04_10 } };
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
