import { useState } from "react";

import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles["menu-container"]}>
            <div
                className={styles["menu-button"]}
                onClick={() => setOpen(!open)}
            >
                <span className={`${styles.bar} ${open ? "" : styles.cross}`} />
                <span className={`${styles.bar} ${open ? "" : styles.cross}`} />
                <span className={`${styles.bar} ${open ? "" : styles.cross}`} />
            </div>
            <ul className={styles.menu}></ul>
        </div>
    );
};

export default Menu;
