// Stylesheet
import styles from "./AboutPage.module.scss";
// Next
import Image from "next/image";

const AboutPage: React.FC = () => {
    return (
        <div className={styles["about-page"]}>
            <h2 className={styles["about-header"]}>My Story</h2>
            <div className={styles["about-content"]}>
                <p className={styles["about-text"]}>
                    Hi there, my name is Charles Zhang! I was born and raised in
                    the LA area of California and am currently a senior studying
                    computer science at UCLA. I was practically raised on video
                    games and the countless hours I&apos;ve poured into them are
                    what sparked my interest in CS in the first place, and have
                    played a massive role in shaping who I am today. I&apos;ve
                    been lucky enough to live a fairly drama-free life, so here
                    are fun facts about me to fill space: I played one year of
                    JV tennis in high school, I am the self-proclaimed least
                    competent Eagle Scout in the world, my greatest fear is
                    heights, I don&apos;t know how to ride a bike, I think
                    I&apos;m a very funny person, my girlfriend does not.
                </p>
                <div className={styles["about-img"]}>
                    <Image
                        src="/assets/images/about/story.webp"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <h2
                className={`${styles["about-header"]} ${styles["right-align"]}`}
            >
                My Work
            </h2>
            <div className={styles["about-content"]}>
                <div className={styles["about-img"]}>
                    <Image
                        src="/assets/images/about/work.webp"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p
                    className={`${styles["about-text"]} ${styles["right-align"]}`}
                >
                    A lot of my early experience has come from working on
                    full-stack development for small organizations or personal
                    projects. This time has allowed me to help raise awareness
                    for social issues, improve the student experience at UCLA,
                    and give back to online communities. This past summer, I
                    interned with Capital One&apos;s Auto Refinance team, where
                    I used web development and machine learning to develop and
                    optimize a loan-processing platform. This upcoming summer
                    (assuming I don&apos;t get laid off), I&apos;ll be joining
                    Amazon in San Diego as a Software Development Engineer. If
                    for some reason you want more details on my work, check out
                    the projects and experience pages!
                </p>
            </div>
            <h2 className={styles["about-header"]}>My Interests</h2>
            <div className={styles["about-content"]}>
                <p className={styles["about-text"]}>
                    Outside of work and school I&apos;m, shockingly, still a
                    massive nerd. As I&apos;ve mentioned, I have a strong
                    passion for video games and have a special place in my heart
                    for the Pokémon, Diablo, and Call of Duty franchises, but
                    I&apos;ve spent plenty of hours across all sorts of games.
                    When it&apos;s basketball season, I also enjoy feeding my
                    obsession for the NBA, and am a huge Warriors fan (not a
                    bandwagon, I swear) and analytics nerd.
                </p>
                <div className={styles["about-img"]}>
                    <Image
                        src="/assets/images/about/interests.webp"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
