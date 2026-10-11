"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-image";
import { Icon } from "@/components/icons";
export function ChromaticHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="cu-header">
      <div className="cu-nav-shell">
        <Link
          className="cu-brand"
          href="/redesign"
          aria-label="Packman, inicio de la demo"
        >
          <BrandLogo />
          <span>
            CHROMATIC
            <br />
            <b>UNDERGROUND</b>
          </span>
        </Link>
        <button
          className="menu-toggle cu-menu-toggle"
          ref={button}
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="chromatic-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="chromatic-navigation"
          className={`site-navigation cu-navigation ${open ? "is-open" : ""}`}
          aria-label="Secciones de la portada"
        >
          {[
            ["El universo", "#identidad"],
            ["Archivo visual", "#galeria"],
            ["El contexto", "#faq"],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <Link href="/original" className="cu-nav-reference">
          Ver original <Icon name="arrow" />
        </Link>
      </div>
    </header>
  );
}
