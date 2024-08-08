import { EntrySectionType } from "@/static/types";

// -----------------------------------------------------------------------------
// ATTRIBUTE CONSTANTS
// -----------------------------------------------------------------------------

/** The string constant for scroll events */
export const SCROLL: string = "scroll";

/** The string constant for NextAuth authenticated */
export const AUTHENTICATED = "authenticated";

/** The string constant for NextAuth unauthenticated */
export const UNAUTHENTICATED = "unauthenticated";

/** The string constant for objectFit=cover on Images */
export const COVER = "cover";

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

/** The alt text for GitHub links */
export const GIT_LINK_ALT = "Git Repo";

/** The alt text for site links */
export const SITE_LINK_ALT = "Site Link";

// -----------------------------------------------------------------------------
// ENTRY SECTION CONSTANTS
// -----------------------------------------------------------------------------

/** A map of section types to their attributes */
export const SECTION_TYPES: { [slug: string]: EntrySectionType } = {
    lifeLogs: {
        displayName: "Life Logs",
        color: "#349EEB",
        emoji: "🌱",
    },
    careerChronicles: {
        displayName: "Career Chronicles",
        color: "#2EE68D",
        emoji: "🏢",
    },
    warriorsWatch: {
        displayName: "Warriors Watch",
        color: "#FFC72C",
        emoji: "🏀",
    },
    gamingGrind: {
        displayName: "Gaming Grind",
        color: "#ED6868",
        emoji: "🕹️",
    },
    randomRavings: {
        displayName: "Random Ravings",
        color: "#AD7DFF",
        emoji: "✍️",
    },
};

// -----------------------------------------------------------------------------
// API CONSTANTS
// -----------------------------------------------------------------------------

/** The string constant for HTTP GET requests */
export const GET: string = "GET";

/** The string constant for HTTP POST requests */
export const POST: string = "POST";

/** The HTTP error code for OK */
export const OK: number = 200;

/** The HTTP error code for Created */
export const CREATED: number = 201;

/** The HTTP error code for Method Not Allowed */
export const METHOD_NOT_ALLOWED: number = 405;

/** The HTTP error code for Conflict */
export const CONFLICT: number = 409;

/** The HTTP error code for Internal Server Error */
export const INTERNAL_SERVER_ERROR: number = 500;

/** The HTTP error code for Unimplemented */
export const UNIMPLEMENTED: number = 501;

/** The Prisma error code for failed unique constraint */
export const PRISMA_DUPLICATE: string = "P2002";

// -----------------------------------------------------------------------------
// ERROR CONSTANTS
// -----------------------------------------------------------------------------

/** The error message for an existing username */
export const USERNAME_ALREADY_EXISTS_MSG: string =
    "That username already exists.";

/** The error message for an existing journal title */
export const TITLE_ALREADY_EXISTS_MSG: string = "That title already exists.";

/** The error message for an unknown failed register */
export const FAILED_REGISTER_MSG: string = "Failed to register.";

/** The error message for an invalid HTTP method */
export const INVALID_HTTP_METHOD_MSG: string =
    "That HTTP method is not allowed at this route.";

/** The error message for an unimplemented request */
export const UNIMPLEMENTED_MSG: string =
    "That feature has not been implemented yet.";

/** The error message for a generic unknown error */
export const GENERIC_FAILED_MSG: string = "Something went wrong.";
