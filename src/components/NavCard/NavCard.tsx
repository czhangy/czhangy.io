// Stylesheet
import styles from "./NavCard.module.scss";
// Next
import Image from "next/image";

type Props = {
    bgUrl: string;
    title: string;
    flipped: boolean;
    onNav: () => void;
};

const NavCard: React.FC<Props> = (props) => {
    return (
        <button className={styles["nav-card"]} onClick={props.onNav}>
            <Image src={props.bgUrl} alt="" layout="fill" objectFit="cover" />
            <div
                className={`${styles["card-title"]} ${
                    props.flipped ? styles["left-title"] : styles["right-title"]
                }`}
            >
                <div className={styles["title-bg"]} />
                <h2 className={styles.title}>{props.title}</h2>
            </div>
        </button>
    );
};

export default NavCard;
