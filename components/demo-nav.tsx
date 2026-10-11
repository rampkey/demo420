import Link from "next/link";
export function DemoNav({ current }: { current?: "original" | "redesign" }) {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <aside
        className="demo-bar"
        aria-label="Información y navegación de la demo"
      >
        <Link href="/" className="demo-label focus-visible:outline-brand-mint">
          <span className="demo-indicator" />
          <strong>DEMO NO OFICIAL</strong>
          <span className="demo-note"> · Estudio visual independiente</span>
        </Link>
        <nav aria-label="Versiones">
          <Link
            href="/original"
            aria-current={current === "original" ? "page" : undefined}
          >
            Original
          </Link>
          <Link
            href="/redesign"
            aria-current={current === "redesign" ? "page" : undefined}
          >
            Rediseño <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
