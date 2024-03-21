import Image from "@/components/Global/Image/Image";

import styles from "./SocialCard.module.scss";

export type SocialCardProps = {
    /** Name of the social */
    social: "github" | "linkedin" | "instagram" | "twitter";
    /** Link to profile on the social */
    link: string;
};

const SocialCard: React.FC<SocialCardProps> = (props: SocialCardProps) => {
    /**
     * Get the class corresponding to props.social
     *
     * @returns {string} The classes used to style the card for the specified social
     */
    const getCardClass = (): string => {
        return `${styles["social-card"]} ${styles[props.social]}`;
    };

    /**
     * Get the src of the social's icon
     *
     * @returns {string} The path to the src of the social icon SVG
     */
    const getIconSrc = (): string => {
        return `/assets/icons/${props.social}.svg`;
    };

    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className={getCardClass()}
        >
            <div className={styles["icon-container"]}>
                <Image src={getIconSrc()} alt={props.social} />
            </div>
        </a>
    );
};

export default SocialCard;
