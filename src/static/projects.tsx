// TS
import Project from "@/models/Project";
// Static data
import tools from "@/static//tools";

const projects: Project[] = [
    {
        name: "More or Less",
        slug: "more-or-less",
        category: "Full-Stack Development",
        startDate: "Dec 2022",
        endDate: "Jan 2023",
        summary:
            "More or Less is a game inspired by the popular game Higher or Lower. Instead of revolving around Google search statistics, More or Less tests the player's knowledge of NBA box score stats by having the player guess whether a given player is averaging more or less of a random stat than another player.",
        tools: [
            tools["Jest"],
            tools["NextJS"],
            tools["Postgres"],
            tools["Prisma"],
            tools["SASS"],
            tools["Testing Library"],
            tools["TypeScript"],
        ],
        link: "https://nba-more-or-less.vercel.app/",
        git: "https://github.com/czhangy/more-or-less",
    },
    {
        name: "Minroll",
        slug: "minroll",
        category: "Full-Stack Development",
        startDate: "Jan 2022",
        endDate: "Jul 2022",
        summary:
            "Minroll is a web app inspired by the popular ARPG website Maxroll. Minroll aims to provide a more targeted set of utilities for the Diablo III console community, featuring user profiles, a build planner and metagame-relevant build guides.",
        tools: [
            tools["NextJS"],
            tools["Postgres"],
            tools["Prisma"],
            tools["SASS"],
            tools["TypeScript"],
        ],
        link: "https://minroll.vercel.app/",
        git: "https://github.com/czhangy/Minroll",
    },
    {
        name: "Squirdle",
        slug: "squirdle",
        category: "Full-Stack Development",
        startDate: "Feb 2022",
        endDate: "Jun 2022",
        summary:
            "Squirdle was a Wordle-style game with a Pokémon theme. Players would have 8 guesses to a random target Pokémon from generations I-IV, with each wrong guess revealing more information about the target Pokémon, such as generation or typing. The app also included miscellaneous features, such as a progress tracker, achievements, and custom difficulties.",
        tools: [
            tools["ExpressJS"],
            tools["NodeJS"],
            tools["MongoDB"],
            tools["SASS"],
            tools["Vue"],
        ],
        link: null,
        git: "https://github.com/czhangy/Squirdle",
    },
    {
        name: "DARS++",
        slug: "darspp",
        category: "Full-Stack Development",
        startDate: "Jun 2021",
        endDate: "Aug 2021",
        summary:
            "DARS++ was a web app intended to improve the course planning experience for students at UCLA. The application allowed students to input the courses they had taken, and would then use topological sorting to provide them with classes they could take to make progress in their major. In addition, the website included a GPA calculator and links to course reviews.",
        tools: [
            tools["ExpressJS"],
            tools["NodeJS"],
            tools["MongoDB"],
            tools["SASS"],
            tools["Vue"],
        ],
        link: null,
        git: "https://github.com/czhangy/darsplusplus",
    },
    {
        name: "Splekbot",
        slug: "splekbot",
        category: "Game Development",
        startDate: "Mar 2020",
        endDate: "Jun 2021",
        summary:
            "Splekbot is a tennis-style action game that follows the adventure of Zorb as he battles Splek champions from around the galaxy. The game features 3 levels in which players play against a variety of AI-controlled enemies in different arenas and was developed as a part of ACM Studio.",
        tools: [tools["Unity"]],
        link: "https://aaisara12.itch.io/splekbot",
        git: null,
    },
    {
        name: "Survival Guides",
        slug: "survival-guides",
        category: "Academic",
        startDate: "May 2020",
        endDate: "Mar 2021",
        summary:
            "The Survival Guides were an effort to provide a study resource to incoming UCLA students. For each class I took, I made a write-up that summarized the course's content, providing example problems and diagrams to help students learn. My goal was to provide a student's perspective of the course, hoping that it could be a more effective way to communicate the content.",
        tools: [],
        link: "https://czhangy-survival-guides.netlify.app/",
        git: null,
    },
    {
        name: "BruinByte",
        slug: "bruinbyte",
        category: "Front-End Development",
        startDate: "Oct 2020",
        endDate: "Dec 2020",
        summary:
            "BruinByte was a school project developed as an introduction to web development. The goal of the project was to create a Yelp!-like resource for UCLA students to discover eating options in the Westwood area, and features custom profiles, user authentication, and dynamic reviews.",
        tools: [tools["Firebase"], tools["NodeJS"], tools["React"]],
        link: "https://bruinbyte.netlify.app/",
        git: "https://github.com/czhangy/bruinbyte",
    },
];

export default projects;
