import Experience from "@/models/Experience";

const experiences: Experience[] = [
    {
        company: "Stripe",
        logo: "stripe.svg",
        title: "Software Engineer",
        startDate: "Dec 2023",
        endDate: "",
        desc: [],
    },
    {
        company: "Capital One",
        logo: "capital-one.webp",
        title: "Software Engineering Intern",
        startDate: "Jun 2022",
        endDate: "Aug 2022",
        desc: [
            "Developed a note-taking service, cross-window communication, and UI elements using Angular for an internal loan processing platform used by ~1,000 agents across multiple divisions, working with a QA team to release into production.",
            "Used WASM and LitElement to develop, optimize, and test a document viewer micro-frontend that outperforms previous builds and the PDF.js library by ~30%, while incorporating new functionality such as grab and drag and image rendering.",
            "Researched WASM, shared web workers, and internal APIs to drive innovation on newer products.",
        ],
    },
    {
        company: "Bruinshack",
        logo: "bruinshack.webp",
        title: "Front-End Lead",
        startDate: "Nov 2021",
        endDate: "Jun 2022",
        desc: [
            "Led a redesign of multiple static pages and the apartment manager portal in an effort to improve brand visibility and quality-of-life for the userbase.",
            "Spearheaded the design and development of a user dashboard and dorm review feature in an effort to improve students' experience on the site, contributing to an increase of ~40% user acquisition.",
            "Led a refactoring effort from Vue.js to Next.js to improve SEO and codebase clarity for future hires, and implemented/enforced new code standards using Prettier, reducing codebase size by over 30%.",
        ],
    },
    {
        company: "Bruinshack",
        logo: "bruinshack.webp",
        title: "Full-Stack Development Intern",
        startDate: "Feb 2021",
        endDate: "Nov 2021",
        desc: [
            "Designed and developed a responsive review system using Vue.js and the Vuex library that facilitates ratings and reviews from approximately 2,000 weekly active users looking for apartments in the Westwood area.",
            "Worked with design team to establish communication channels to improve inter-team efficiency and reduce unnecessary development.",
        ],
    },
    {
        company: "The Amplification Project",
        logo: "the-amplification-project.webp",
        title: "Front-End Developer",
        startDate: "May 2021",
        endDate: "Sep 2021",
        desc: [
            "Worked to implement a responsive design of the organization's main website using Vue.js while coordinating with a backend developer to raise awareness of forced migration through the preservation of related art and activism.",
        ],
    },
];

export default experiences;
