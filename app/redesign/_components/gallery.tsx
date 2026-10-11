"use client";
import { useId, useState } from "react";
import { catalogReferences as references } from "../_data/catalog";
import { ReferenceCard } from "./reference-card";
const filters = [
  "Todo",
  "Packman Live Resin",
  "packman 2g vape",
  "packman 2g disposable",
] as const;
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
export function ChromaticGallery() {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const items = references.filter(
    (item) =>
      (filter === "Todo" || item.category === filter) &&
      words.every((word) =>
        normalize(`${item.name} ${item.category}`).includes(word),
      ),
  );
  const reset = () => {
    setQuery("");
    setFilter("Todo");
  };
  return (
    <>
      <div className="cu-catalog-search">
        <label htmlFor={searchId}>Buscar referencias</label>
        <div>
          <input
            id={searchId}
            type="search"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre o categoría…"
            aria-controls={`${searchId}-results`}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Borrar búsqueda"
            >
              ×
            </button>
          )}
        </div>
      </div>
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
        <p role="status" aria-live="polite" aria-atomic="true">
          {items.length} {items.length === 1 ? "referencia" : "referencias"}
        </p>
      </div>
      <div id={`${searchId}-results`} className="cu-gallery-grid">
        {items.map((item) => (
          <ReferenceCard item={item} key={item.slug} />
        ))}
      </div>
      {items.length === 0 && (
        <div className="cu-catalog-empty">
          <h3>No se han encontrado referencias</h3>
          <p>Prueba con otro nombre o consulta todas las categorías.</p>
          <button
            type="button"
            className="cu-button cu-button-primary"
            onClick={reset}
          >
            Restablecer búsqueda y filtros
          </button>
        </div>
      )}
    </>
  );
}
