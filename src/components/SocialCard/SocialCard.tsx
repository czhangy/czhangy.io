// Stylesheet

// Next
import Image from "next/image";

import styles from "./SocialCard.module.scss";

type Props = {
    social: string;
    link: string;
    alt: string;
};

const SocialCard: React.FC<Props> = (props) => {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className={`${styles["social-card"]} ${styles[props.social]}`}
        >
            <div className={styles["icon-container"]}>
                <Image
                    src={`/assets/icons/${props.social}.svg`}
                    alt={props.alt}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </a>
    );
};

export default SocialCard;
