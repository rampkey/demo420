import Image from "next/image";
import { referenceAssetsAuthorized } from "@/lib/brand";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};
export function BrandImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: Props) {
  if (!referenceAssetsAuthorized)
    return (
      <div
        className={`asset-placeholder ${className ?? ""}`}
        role="img"
        aria-label={`${alt}. Recurso pendiente de autorización.`}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <span>PACKMAN</span>
        <small>Recurso pendiente de autorización</small>
      </div>
    );
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes ?? "(max-width: 600px) 100vw, 50vw"}
    />
  );
}
export function BrandLogo() {
  if (!referenceAssetsAuthorized)
    return <span className="brand-wordmark">PACKMAN</span>;
  return (
    <Image
      src="/reference/logo.webp"
      width={512}
      height={512}
      alt="Packman"
      className="brand-logo"
      sizes="64px"
      priority
    />
  );
}
