// Stylesheet
import styles from "./SocialCard.module.scss";
// Next
import Image from "next/image";

type Props = {
    social: string;
    link: string;
    alt: string;
};

const SocialCard: React.FC<Props> = ({ social, link, alt }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`${styles["social-card"]} ${styles[social]}`}
        >
            <div className={styles["icon-container"]}>
                <Image
                    src={`/assets/icons/${social}.svg`}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </a>
    );
};

export default SocialCard;
