import { NextPage } from "next";

import AdminPage from "@/components/Admin/AdminPage/AdminPage";
import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";

const Admin: NextPage = () => {
    /** Boolean that can be toggled to enable registration */
    const REGISTER_ENABLED: boolean = true;

    return (
        <div>
            <Head page="Admin" />
            <PageWrapper>
                <AdminPage registerEnabled={REGISTER_ENABLED} />
            </PageWrapper>
        </div>
    );
};

export default Admin;
