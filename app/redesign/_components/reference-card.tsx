import Link from "next/link";
import type { CSSProperties } from "react";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import type { Reference } from "../_data/catalog";

export function ReferenceCard({
  item,
  featured = false,
}: {
  item: Reference;
  featured?: boolean;
}) {
  return (
    <article
      className={`cu-card ${featured ? "cu-featured-card" : "visual-card"}`}
      style={{ "--variant": item.color } as CSSProperties}
    >
      <Link
        href={`/redesign/shop/${item.slug}`}
        className="cu-card-link"
        aria-label={`Ver ficha de ${item.name}`}
      >
        <div className="cu-card-top">
          <span>
            {item.code} / {item.category}
          </span>
          <Icon name="spark" />
        </div>
        <div className="cu-card-art">
          <div className="cu-card-halo" aria-hidden="true" />
          <BrandImage
            src={item.image}
            width={item.width}
            height={item.height}
            alt={`Packman ${item.name}: fotografía de referencia del packaging`}
            sizes={
              featured
                ? "(max-width:600px) 90vw, 30vw"
                : "(max-width:600px) 43vw, (max-width:1100px) 45vw, 24vw"
            }
          />
          <span className="cu-card-orbit" aria-hidden="true" />
        </div>
        <div className="cu-card-caption">
          <p>{item.tone}</p>
          <h3>{item.name}</h3>
          <span>{item.description}</span>
        </div>
        <div className="cu-card-bottom">
          <span>Ver ficha informativa</span>
          <Icon name="arrow" />
        </div>
      </Link>
    </article>
  );
}
