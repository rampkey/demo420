import Link from "next/link";
export function DemoStrip() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <aside className="cu-demo-strip" aria-label="Información de la demo">
        <p>
          <i aria-hidden="true" />
          <strong>DEMO NO OFICIAL</strong>
          <span> · Catálogo informativo, sin venta</span>
        </p>
        <nav aria-label="Versiones">
          <Link href="/original">Original</Link>
          <Link href="/">
            Comparativa <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
