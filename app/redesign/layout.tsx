import type { Metadata } from "next";
import { ChromaticHeader } from "./_components/header";
import { ChromaticFooter } from "./_components/footer";
import { ChromaticMotion } from "./_components/motion";
import { DemoStrip } from "./_components/demo-strip";
import "./chromatic.css";
import "./tokens.css";
import "./v2.css";
import "./v3.css";

export const metadata: Metadata = {
  title: {
    default: "Packman · Demo no oficial",
    template: "%s · Packman / Demo no oficial",
  },
  description:
    "Packman: referencias, packaging e información. Catálogo visual de demostración, sin ventas ni pagos.",
};
export default function RedesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="chromatic-page cu-v2 cu-v3">
      <ChromaticMotion>
        <div className="cu-atmosphere" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="cu-site-content" id="inicio">
          <DemoStrip />
          <ChromaticHeader />
          <main id="contenido" tabIndex={-1}>
            {children}
          </main>
          <ChromaticFooter />
        </div>
      </ChromaticMotion>
    </div>
  );
}
