"use client";
import { useState } from "react";
import { visuals } from "@/lib/brand";
import { BrandImage } from "./brand-image";
import { Icon } from "./icons";
const filters = ["Todo", "Packaging", "Gráfica"] as const;
export function VisualGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const items =
    filter === "Todo"
      ? visuals
      : visuals.filter((item) => item.category === filter);
  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filtrar referencias visuales"
        >
          {filters.map((name) => (
            <button
              type="button"
              key={name}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
              {name === "Todo" && <span>08</span>}
            </button>
          ))}
        </div>
        <p role="status" aria-live="polite">
          {items.length} referencias visuales
        </p>
      </div>
      <div className="modern-gallery">
        {items.map((item) => (
          <article className="visual-card" key={item.id}>
            <div
              className="visual-card-image"
              style={{ "--card-color": item.color } as React.CSSProperties}
            >
              <BrandImage
                src={item.image}
                width={300}
                height={300}
                alt={`Referencia gráfica: ${item.title}`}
                sizes="(max-width: 600px) 85vw, (max-width: 1000px) 45vw, 23vw"
              />
              <span className="visual-card-label">{item.category}</span>
            </div>
            <div className="visual-card-title">
              <h3>{item.title}</h3>
              <Icon name="spark" />
            </div>
            <p>{item.caption}</p>
          </article>
        ))}
      </div>
    </>
  );
}
