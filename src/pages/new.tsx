import { useEffect } from "react";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import NewPage from "@/components/New/NewPage/NewPage";
import { UNAUTHENTICATED } from "@/static/constants";

const Login: NextPage = () => {
    const { data: _, status } = useSession();

    useEffect(() => {
        if (status === UNAUTHENTICATED) {
            signIn(undefined, { callbackUrl: "/new" });
        }
    }, []);

    return (
        <div>
            <Head page="New Entry" />
            <PageWrapper>
                <NewPage />
            </PageWrapper>
        </div>
    );
};

export default Login;
