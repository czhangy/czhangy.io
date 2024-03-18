export default interface Experience {
    /** The name of the company */
    company: string;
    /** A URL for the logo of the company */
    logo: string;
    /** The position title */
    title: string;
    /** The start date in Mon YYYY format */
    startDate: string;
    /** The end date in Mon YYYY format */
    endDate: string;
    /** An array of bullet points for what was accomplished */
    desc: string[];
}
