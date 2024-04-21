import { useSession } from "next-auth/react";
import Link from "next/link";

import Menu from "@/components/Global/Menu/Menu";
import { ConditionalJSX } from "@/static/types";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    const { data: session } = useSession();

    /**
     * Renders an admin indicator if signed in
     *
     * @returns {ConditionalJSX} The JSX needed to render the admin tag if there's an active session
     */
    const maybeRenderAdminTag = (): ConditionalJSX => {
        return session ? (
            <p className={styles.admin} data-testid="admin">
                Admin
            </p>
        ) : (
            ""
        );
    };

    return (
        <header className={styles["navbar-container"]}>
            <div className={styles.navbar}>
                <div className={styles.title}>
                    <Link href="/">
                        <h1 className={styles.name}>CZhang</h1>
                    </Link>
                    {maybeRenderAdminTag()}
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Navbar;
