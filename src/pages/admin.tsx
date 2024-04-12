import { NextPage } from "next";

import AdminPage from "@/components/Admin/AdminPage/AdminPage";
import Head from "@/components/Global/Head/Head";
import PageWrapper from "@/components/Global/PageWrapper/PageWrapper";

const Admin: NextPage = () => {
    return (
        <div>
            <Head page="Admin" />
            <PageWrapper>
                <AdminPage />
            </PageWrapper>
        </div>
    );
};

export default Admin;
