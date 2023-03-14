// Stylesheet
import styles from "./NavCard.module.scss";
// Next
import Image from "next/image";

type Props = {
    flipped: boolean;
    title: string;
    url: string;
};

const NavCard: React.FC<Props> = (props) => {
    return (
        <a href={`/${props.url}`} className={styles["nav-card"]}>
            <Image
                src={`/assets/images/home/${props.url}.webp`}
                alt=""
                layout="fill"
                objectFit="cover"
            />
            <div
                className={`${styles["card-title"]} ${
                    props.flipped ? styles["left-title"] : styles["right-title"]
                }`}
            >
                <div className={styles["title-bg"]} />
                <h2 className={styles.title}>{props.title}</h2>
            </div>
        </a>
    );
};

export default NavCard;
