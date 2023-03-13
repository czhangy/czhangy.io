// Stylesheet
import styles from "./NavCard.module.scss";
// Next
import Image from "next/image";

type Props = {
    bgUrl: string;
    title: string;
    flipped: boolean;
};

const NavCard: React.FC<Props> = ({ bgUrl, title, flipped }) => {
    return (
        <button className={styles["nav-card"]}>
            <Image src={bgUrl} alt="" layout="fill" objectFit="cover" />
            <div
                className={`${styles["card-title"]} ${
                    flipped ? styles["left-title"] : styles["right-title"]
                }`}
            >
                <div className={styles["title-bg"]} />
                <h2 className={styles.title}>{title}</h2>
            </div>
        </button>
    );
};

export default NavCard;
