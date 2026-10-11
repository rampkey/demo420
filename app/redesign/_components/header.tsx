"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { navigation, isActivePage } from "../_data/navigation";
export function ChromaticHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [enhanced, setEnhanced] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    setEnhanced(true);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        open &&
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1121px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", escape);
    window.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      window.removeEventListener("keydown", escape);
      window.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header
      ref={header}
      className="cu-header"
      data-enhanced={enhanced ? "true" : undefined}
    >
      <noscript>
        <style>{`@media(max-width:1120px){.chromatic-page.cu-v3 .cu-header:not([data-enhanced]){position:relative}.chromatic-page.cu-v3 .cu-header:not([data-enhanced]) .cu-navigation{display:flex;position:static;left:auto;right:auto;top:auto;margin-top:18px;box-shadow:none;border:0;max-height:none}}`}</style>
      </noscript>
      <div className="cu-nav-shell">
        <Link
          className="cu-brand"
          href="/redesign"
          aria-label="Packman Vape, inicio de la demo"
        >
          <BrandLogo />
          <span>
            PACKMAN
            <br />
            <b>VAPE</b>
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
          disabled={!enhanced}
        >
          <span>Menú</span>
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="chromatic-navigation"
          className={`site-navigation cu-navigation ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={
                isActivePage(pathname, item.href) ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
              <Icon name="arrow" />
            </Link>
          ))}
          <p className="cu-mobile-menu-note">
            PACKMAN / INFORMACIÓN Y REFERENCIAS
          </p>
        </nav>
      </div>
    </header>
  );
}
