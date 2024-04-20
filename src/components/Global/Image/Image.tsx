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
            style={{ objectFit: props.objectFit || "contain" }}
            src={props.src}
            alt={props.alt}
            fill
        />
    );
};

export default Image;
