import NextImage from "next/image";

export type ImageProps = {
    /** The src of the image */
    src: string;
    /** The alt text of the image */
    alt: string;
    /** The object fit setting for next/image, defaulted to "contain" */
    objectFit?: "cover" | "";
};

const Image: React.FC<ImageProps> = (props: ImageProps) => {
    return (
        <NextImage
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit={props.objectFit || "contain"}
        />
    );
};

export default Image;
