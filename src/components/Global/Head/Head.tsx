import NextHead from "next/head";

export type HeadProps = {
    /** The suffix of the page title */
    page?: string;
};

const Head: React.FC<HeadProps> = (props: HeadProps) => {
    /**
     * Gets the value of the title of the site, based on current page
     *
     * @returns {string} the title of the site
     */
    const getSiteTitle = (): string => {
        return `Charles Zhang${props.page ? ` | ${props.page}` : ""}`;
    };

    return (
        <NextHead>
            <title>{getSiteTitle()}</title>
        </NextHead>
    );
};

export default Head;
