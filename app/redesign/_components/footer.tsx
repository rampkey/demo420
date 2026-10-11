import Link from "next/link";
import { BrandLogo } from "@/components/brand-image";
import { navigation } from "../_data/navigation";
export function ChromaticFooter() {
  return (
    <footer className="cu-footer" id="demo">
      <div className="cu-container">
        <div className="cu-footer-top">
          <Link href="/redesign" aria-label="Packman, inicio de la demo">
            <BrandLogo />
          </Link>
          <p>
            Different frequency.
            <br />
            <span>Same identity.</span>
          </p>
          <a href="#inicio">
            Volver arriba <span aria-hidden="true">↑</span>
          </a>
        </div>
        <nav
          className="cu-footer-navigation"
          aria-label="Navegación del pie de página"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="cu-footer-word" aria-hidden="true">
          PACKMAN
        </div>
        <div className="cu-footer-bottom">
          <p>
            Demo no oficial · Sin afiliación comercial
            <br />
            Sin compras, pagos ni carrito.
          </p>
          <span>PACKMAN / CHROMATIC UNDERGROUND</span>
          <nav aria-label="Comparar versiones">
            <Link href="/">Comparativa</Link>
            <Link href="/original">
              Original <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
