import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import Image, { ImageLoader } from 'next/image';

type ImageProps = DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> & {
    imageLoader?: ImageLoader;
}

const ImageComponent = (props: ImageProps) => {
    const { src = '', alt, imageLoader, width, height } = props;
    return (
        <Image
            loader={imageLoader}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
};


export default ImageComponent