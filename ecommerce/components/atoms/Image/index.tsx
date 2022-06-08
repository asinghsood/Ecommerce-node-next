import Image, { ImageLoader } from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  imageLoader?: ImageLoader;
  width: string;
  height: string;
}

const ImageComponent = (props: ImageProps) => {
  const { src, alt, imageLoader, width, height } = props;
  return (
    <Image
      loader={imageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
