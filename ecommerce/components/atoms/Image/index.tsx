import Image, { ImageLoader } from "next/image";
import { shimmer } from "../Icons";

interface ImageProps {
  src: string;
  alt: string;
  imageLoader?: ImageLoader;
  width: string;
  height: string;
}

const ImageComponent = (props: ImageProps) => {
  const { src, alt, imageLoader, width, height } = props;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const widthNumber = Number(width.split("px").join(""));
  const heightNumber = Number(height.split("px").join(""));

  return (
    <Image
      loader={imageLoader}
      src={src}
      alt={alt}
      placeholder="blur"
      loading="lazy"
      width={width}
      height={height}
      lazyBoundary={'900px'}
      quality={100}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer({ w: widthNumber, h: heightNumber })
      )}`}
    />
  );
};

export default ImageComponent;
