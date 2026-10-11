export const navigation = [
  { label: "Home", href: "/redesign" },
  { label: "Shop", href: "/redesign/shop" },
  { label: "Sobre nosotros", href: "/redesign/sobre-nosotros" },
  { label: "FAQ", href: "/redesign/faq" },
  { label: "Contacta con nosotros", href: "/redesign/contacta-con-nosotros" },
] as const;

export function isActivePage(pathname: string, href: string) {
  return href === "/redesign"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}
