import { NextPage } from "next";

import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";
import RegisterPage from "@/components/Register/RegisterPage/RegisterPage";

const Admin: NextPage = () => {
    /** Boolean that can be toggled to enable registration */
    const REGISTER_ENABLED: boolean = true;

    return (
        <div>
            <Head page="Admin" />
            <PageWrapper>
                <RegisterPage registerEnabled={REGISTER_ENABLED} />
            </PageWrapper>
        </div>
    );
};

export default Admin;
