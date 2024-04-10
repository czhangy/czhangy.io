// -----------------------------------------------------------------------------
// ROLE CONSTANTS
// -----------------------------------------------------------------------------

import { EntrySection } from "./types";

/** The string constant for the button role */
export const BUTTON: string = "button";

/** The string constant for the heading role */
export const HEADING: string = "heading";

/** The string constant for the image role */
export const IMAGE: string = "img";

/** The string constant for the link role */
export const LINK: string = "link";

/** The string constant for the list role */
export const LIST: string = "list";

/** The string constant for the listitem role */
export const LIST_ITEM: string = "listitem";

/** The string constant for the textbox role */
export const INPUT: string = "textbox";

// -----------------------------------------------------------------------------
// ATTRIBUTE CONSTANTS
// -----------------------------------------------------------------------------

/** The string constant for the alt attribute */
export const ALT: string = "alt";

/** The string constant for the href attribute */
export const HREF: string = "href";

/** The string constant for the placeholder attribute */
export const PLACEHOLDER: string = "placeholder";

/** The string constant for scroll events */
export const SCROLL: string = "scroll";

// -----------------------------------------------------------------------------
// TYPE CONSTANTS
// -----------------------------------------------------------------------------

/** The string constant for the left value of the Side type */
export const LEFT = "left";

/** The string constant for the right value of the Side type */
export const RIGHT = "right";

/** The string constant for GitHub */
export const GITHUB = "github";

/** The string constant for LinkedIn */
export const LINKEDIN = "linkedin";

/** The string constant for Instagram */
export const INSTAGRAM = "instagram";

/** The string constant for Twitter */
export const TWITTER = "twitter";

/** The string constant for sort menu types */
export const SORT = "sort";

/** The string constant for filter menu types */
export const FILTER = "filter";

/** The string constant for ascending sort */
export const ASC = "asc";

/** The string constant for descending sort */
export const DESC = "desc";

/** The string constant for no filter */
export const NO_FILTER = "";

/** The string constant for the Life Logs section slug */
export const LIFE_LOGS = "lifeLogs";

/** The string constant for the Career Chronicles section slug */
export const CAREER_CHRONICLES = "careerChronicles";

/** The string constant for the Gaming Grind section slug */
export const WARRIORS_WATCH = "warriorsWatch";

/** The string constant for the Gaming Grind section slug */
export const GAMING_GRIND = "gamingGrind";

/** The string constant for the Random Ravings section slug */
export const RANDOM_RAVINGS = "randomRavings";

// -----------------------------------------------------------------------------
// OBJECT FIT CONSTANTS
// -----------------------------------------------------------------------------

/** The string constant for objectFit=cover on Images */
export const COVER = "cover";

// -----------------------------------------------------------------------------
// ALT CONSTANTS
// -----------------------------------------------------------------------------

/** The alt text for GitHub links */
export const GIT_LINK_ALT = "Git Repo";

/** The alt text for site links */
export const SITE_LINK_ALT = "Site Link";

// -----------------------------------------------------------------------------
// ENTRY SECTION CONSTANTS
// -----------------------------------------------------------------------------

/** A list of allowed section names and their corresponding attributes */
export const SECTION_LIST: EntrySection[] = [
    {
        displayName: "Life Logs",
        slug: LIFE_LOGS,
        color: "#349EEB",
        emoji: "🌱",
    },
    {
        displayName: "Career Chronicles",
        slug: CAREER_CHRONICLES,
        color: "#2EE68D",
        emoji: "🏢",
    },
    {
        displayName: "Warriors Watch",
        slug: WARRIORS_WATCH,
        color: "#FFC72C",
        emoji: "🏀",
    },
    {
        displayName: "Gaming Grind",
        slug: GAMING_GRIND,
        color: "#ED6868",
        emoji: "🕹️",
    },
    {
        displayName: "Random Ravings",
        slug: RANDOM_RAVINGS,
        color: "#AD7DFF",
        emoji: "✍️",
    },
];
