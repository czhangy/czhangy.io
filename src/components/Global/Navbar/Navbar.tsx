import Link from "next/link";

import Menu from "@/components/Global/Menu/Menu";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <header className={styles["navbar-container"]}>
            <div className={styles.navbar}>
                <div className={styles.title}>
                    <Link href="/">
                        <h1 className={styles.name}>CZhang</h1>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Navbar;
