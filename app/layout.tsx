import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Packman — Demo visual no oficial",
  description:
    "Exploración visual independiente. Sin compras, pagos ni carrito.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
