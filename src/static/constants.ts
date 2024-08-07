import { EntrySectionType } from "@/static/types";

// -----------------------------------------------------------------------------
// ATTRIBUTE CONSTANTS
// -----------------------------------------------------------------------------

/** The string constant for the alt attribute */
export const ALT: string = "alt";

/** The string constant for the href attribute */
export const HREF: string = "href";

/** The string constant for the placeholder attribute */
export const PLACEHOLDER: string = "placeholder";

/** The string constant for the key attribute */
export const KEY: string = "key";

/** The string constant for the id attribute */
export const ID: string = "id";

/** The string constant for the for attribute */
export const FOR: string = "for";

/** The string constant for scroll events */
export const SCROLL: string = "scroll";

/** The string constant for NextAuth authenticated */
export const AUTHENTICATED = "authenticated";

/** The string constant for NextAuth unauthenticated */
export const UNAUTHENTICATED = "unauthenticated";

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

/** The string constant for the string type */
export const STRING = "string";

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

/** A map of section types to their attributes */
export const SECTION_TYPES: { [slug: string]: EntrySectionType } = {
    [LIFE_LOGS]: {
        displayName: "Life Logs",
        color: "#349EEB",
        emoji: "🌱",
    },
    [CAREER_CHRONICLES]: {
        displayName: "Career Chronicles",
        color: "#2EE68D",
        emoji: "🏢",
    },
    [WARRIORS_WATCH]: {
        displayName: "Warriors Watch",
        color: "#FFC72C",
        emoji: "🏀",
    },
    [GAMING_GRIND]: {
        displayName: "Gaming Grind",
        color: "#ED6868",
        emoji: "🕹️",
    },
    [RANDOM_RAVINGS]: {
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

/** The HTTP error code for Bad Request */
export const BAD_REQUEST: number = 400;

/** The HTTP error code for Unauthorized */
export const UNAUTHORIZED: number = 401;

/** The HTTP error code for Not Found */
export const NOT_FOUND: number = 404;

/** The HTTP error code for Method Not Allowed */
export const METHOD_NOT_ALLOWED: number = 405;

/** The HTTP error code for Conflict */
export const CONFLICT: number = 409;

/** The HTTP error code for Internal Server Error */
export const INTERNAL_SERVER_ERROR: number = 500;

/** The HTTP error code for Unimplemented */
export const UNIMPLEMENTED: number = 501;

// -----------------------------------------------------------------------------
// ERROR CONSTANTS
// -----------------------------------------------------------------------------

/** The error message for badly-typed inputs */
export const VALIDATION_ERROR_MSG: string =
    "Username or password is of invalid type.";

/** The error message for an existing username */
export const USERNAME_ALREADY_EXISTS_MSG: string =
    "That username already exists.";

/** The error message for a username that doesn't exist */
export const USER_NOT_FOUND_MSG: string = "That username does not exist.";

/** The error message for an incorrect password */
export const INCORRECT_PASSWORD_MSG: string = "That password is incorrect.";

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
