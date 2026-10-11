"use client";
import { useState } from "react";
import { references } from "../_data/catalog";
import { ReferenceCard } from "./reference-card";
const filters = ["Todo", "Referencias", "Packaging"] as const;
export function ChromaticGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const items =
    filter === "Todo"
      ? references
      : references.filter((item) => item.category === filter);
  return (
    <>
      <div className="cu-gallery-toolbar">
        <div
          className="cu-filters"
          role="group"
          aria-label="Filtrar catálogo informativo"
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
                {String(
                  name === "Todo"
                    ? references.length
                    : references.filter((item) => item.category === name)
                        .length,
                ).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <p role="status" aria-live="polite">
          {items.length} referencias
        </p>
      </div>
      <div className="cu-gallery-grid">
        {items.map((item) => (
          <ReferenceCard item={item} key={item.slug} />
        ))}
      </div>
    </>
  );
}
