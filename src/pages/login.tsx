import { useEffect } from "react";
import { NextPage } from "next";
import { signIn } from "next-auth/react";

const Login: NextPage = () => {
    useEffect(() => {
        signIn(undefined, { callbackUrl: "/" });
    }, []);

    return <></>;
};

export default Login;
