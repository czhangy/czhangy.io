import { Project as ProjectModel, Tool } from "@prisma/client";

import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import ProjectsPage from "@/components/Projects/ProjectsPage/ProjectsPage";
import prisma from "@/lib/prisma";
import { Project } from "@/static/types";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const projects: Project[] = (await prisma.project.findMany({})).map(
        (project: ProjectModel) => {
            const { id: _, ...p } = project;
            return p;
        },
    );
    const tools: Tool[] = await prisma.tool.findMany({
        where: {
            projectIDs: {
                isEmpty: false,
            },
        },
    });
    return {
        props: {
            projects,
            tools,
        },
    };
};

const Projects: NextPage = ({
    projects,
    tools,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Head page="Projects" />
            <PageWrapper>
                <ProjectsPage projects={projects} tools={tools} />
            </PageWrapper>
        </div>
    );
};

export default Projects;
