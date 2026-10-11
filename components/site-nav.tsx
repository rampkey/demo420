"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand-image";
import { Icon } from "./icons";

export function SiteNav({ variant }: { variant: "original" | "redesign" }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const items =
    variant === "original"
      ? [
          ["Home", "#inicio"],
          ["Galería", "#galeria"],
          ["Sobre nosotros", "#identidad"],
          ["FAQ", "#faq"],
          ["Sobre esta demo", "#demo"],
        ]
      : [
          ["Identidad", "#identidad"],
          ["Galería visual", "#galeria"],
          ["Preguntas", "#faq"],
        ];
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className={`${variant}-header`}>
      <div className="nav-container">
        <Link
          href={`/${variant}`}
          className="logo-link"
          aria-label="Packman, inicio de la demo"
        >
          <BrandLogo />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={`${variant}-navigation`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
          ref={button}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id={`${variant}-navigation`}
          className={`site-navigation ${open ? "is-open" : ""}`}
          aria-label="Secciones de la portada"
        >
          {items.map(([title, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
        </nav>
        {variant === "redesign" && (
          <Link className="nav-compare" href="/original">
            Ver original <Icon name="arrow" />
          </Link>
        )}
      </div>
    </header>
  );
}
