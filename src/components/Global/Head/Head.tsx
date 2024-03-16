import NextHead from "next/head";

type Props = {
    page?: string;
};

const Head: React.FC<Props> = (props: Props) => {
    return (
        <NextHead>
            <title>Charles Zhang{props.page ? ` | ${props.page}` : ""}</title>
        </NextHead>
    );
};

export default Head;
