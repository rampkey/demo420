"use client";
import { useState, type CSSProperties } from "react";
import { visuals } from "@/lib/brand";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
const colors: Record<string, { color: string; name: string; code: string }> = {
  "box-10": { color: "#ff9b57", name: "AMBER / COMPOSITION", code: "01" },
  "box-50": { color: "#be9aff", name: "VIOLET / COMPOSITION", code: "02" },
  "box-100": { color: "#b7e765", name: "ACID / COMPOSITION", code: "03" },
  mystery: { color: "#93bfff", name: "ICE / GRAPHIC STUDY", code: "04" },
  granddaddy: { color: "#e495ff", name: "PURPLE / GRAPHIC STUDY", code: "05" },
  cereal: { color: "#b8e876", name: "LIME / GRAPHIC STUDY", code: "06" },
  berry: { color: "#ff89bd", name: "MAGENTA / GRAPHIC STUDY", code: "07" },
  mango: { color: "#ffbd65", name: "ORANGE / GRAPHIC STUDY", code: "08" },
};
const filters = ["Todo", "Packaging", "Gráfica"] as const;
export function ChromaticGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const items =
    filter === "Todo"
      ? visuals
      : visuals.filter((item) => item.category === filter);
  return (
    <>
      <div className="cu-gallery-toolbar">
        <div
          className="cu-filters"
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
              <span aria-hidden="true">
                {name === "Todo" ? "08" : name === "Packaging" ? "03" : "05"}
              </span>
            </button>
          ))}
        </div>
        <p role="status" aria-live="polite">
          {items.length} referencias visuales
        </p>
      </div>
      <div className="cu-gallery-grid">
        {items.map((item) => {
          const tone = colors[item.id];
          return (
            <article
              className="visual-card cu-card"
              key={item.id}
              style={{ "--variant": tone.color } as CSSProperties}
            >
              <div className="cu-card-top">
                <span>
                  {tone.code} / {item.category}
                </span>
                <Icon name="spark" />
              </div>
              <div className="cu-card-art">
                <div className="cu-card-halo" />
                <BrandImage
                  src={item.image}
                  width={300}
                  height={300}
                  alt={`Referencia gráfica: ${item.title}`}
                  sizes="(max-width:600px) 42vw, (max-width:1000px) 45vw, 25vw"
                />
                <span className="cu-card-orbit" aria-hidden="true" />
              </div>
              <div className="cu-card-caption">
                <p>{tone.name}</p>
                <h3>{item.title}</h3>
                <span>{item.caption}</span>
              </div>
              <div className="cu-card-bottom">
                <span>ARCHIVO VISUAL</span>
                <i aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
