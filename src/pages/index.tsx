// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <div id={styles.home}>
            <Head>
                <title>Charles Zhang's Portfolio</title>
            </Head>
        </div>
    );
};

export default Home;
