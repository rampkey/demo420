import type { CSSProperties } from "react";
export type IconName =
  | "arrow"
  | "menu"
  | "close"
  | "layers"
  | "type"
  | "screen"
  | "spark"
  | "message"
  | "pin"
  | "mail";
const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" />
    </>
  ),
  type: (
    <>
      <path d="M4 5h16M12 5v15M8 20h8M4 8V5m16 3V5" />
    </>
  ),
  screen: (
    <>
      <rect x="2" y="4" width="14" height="12" rx="2" />
      <path d="M6 20h6M9 16v4" />
      <rect x="17" y="10" width="5" height="10" rx="1" />
    </>
  ),
  spark: (
    <>
      <path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z" />
    </>
  ),
  message: (
    <>
      <path d="M21 11a8 8 0 0 1-8 8H6l-4 3V11a9 9 0 0 1 19 0Z" />
      <path d="M7 10h9M7 14h6" />
    </>
  ),
  pin: (
    <>
      <path d="M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="9" r="2" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7L22 6" />
    </>
  ),
};
export function Icon({
  name,
  className,
  style,
}: {
  name: IconName;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
