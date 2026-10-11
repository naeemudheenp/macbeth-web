import Image from "next/image";

/**
 * A real bckup Studio screenshot in a light browser frame. The source files
 * are 2400×1500 JPEGs captured from the local dev stack (see public/screens/).
 */
export default function Screenshot({
  src,
  alt,
  priority = false,
  width = 2400,
  height = 1500,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  /** Pixel size of the source image. */
  width?: number;
  height?: number;
}) {
  return (
    <figure className="shot">
      <div className="shot-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 900px) 100vw, 1150px"
        priority={priority}
      />
    </figure>
  );
}
