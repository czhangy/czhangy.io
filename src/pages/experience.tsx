import { Experience as ExperienceModel } from "@prisma/client";

import ExperiencePage from "@/components/Experience/ExperiencePage/ExperiencePage";
import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import prisma from "@/lib/prisma";
import { Experience } from "@/static/types";
import { convertDate } from "@/utils/helpers/helpers";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const experiences: Experience[] = (
        await prisma.experience.findMany({})
    ).map((experience: ExperienceModel) => {
        const { id: _, ...e } = experience;
        const exp: Experience = {
            ...e,
            startDate: convertDate(e.startDate),
            endDate: convertDate(e.endDate),
        };
        return exp;
    });
    return {
        props: {
            experiences,
        },
    };
};

const Experiences: NextPage = ({
    experiences,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Head page="Experience" />
            <PageWrapper>
                <ExperiencePage experiences={experiences} />
            </PageWrapper>
        </div>
    );
};

export default Experiences;
