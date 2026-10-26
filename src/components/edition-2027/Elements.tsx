import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export type IconName =
  | "finance"
  | "marketing"
  | "team"
  | "calendar"
  | "plan"
  | "growth"
  | "heart"
  | "shield"
  | "book"
  | "gift"
  | "arrow"
  | "check"
  | "play";

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    finance: (
      <>
        <ellipse cx="8" cy="6" rx="5" ry="2.5" />
        <path d="M3 6v9c0 1.4 2.2 2.5 5 2.5M3 10c0 1.4 2.2 2.5 5 2.5M13 6v3M3 14c0 1.4 2.2 2.5 5 2.5" />
        <ellipse cx="16" cy="13" rx="5" ry="2.5" />
        <path d="M11 13v6c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-6M11 16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5" />
      </>
    ),
    marketing: (
      <>
        <path d="M4 10v5h4l12 5V5L8 10H4ZM8 10v5M5 15l2 6h3l-2-6M21 10l2-1M21 15l2 1" />
        <path d="M1 11v3" />
      </>
    ),
    team: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-3a6 6 0 0 1 12 0v3H6ZM4 4a3 3 0 0 0 0 6M20 4a3 3 0 0 1 0 6M2 19v-3a4 4 0 0 1 3-4M22 19v-3a4 4 0 0 0-3-4" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v5M17 3v5M3 11h18M7 15h2M15 15h2M7 18h2" />
      </>
    ),
    plan: (
      <>
        <path d="M6 3h9l4 4v14H6V3ZM15 3v5h4M9 11h7M9 15h7M9 18h4M3 6v16" />
      </>
    ),
    growth: (
      <>
        <path d="M3 21h18M5 18v-5h3v5M11 18V9h3v9M17 18V4h3v14M3 9l6-4 4 1 7-5M16 1h4v4" />
      </>
    ),
    heart: (
      <path d="M12 21 3.5 13A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 8.5 7L12 21Z" />
    ),
    shield: (
      <>
        <path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6l9-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v16M3 3c4-1 6 0 9 2 3-2 5-3 9-2v16c-4-1-6 0-9 2-3-2-5-3-9-2V3Z" />
      </>
    ),
    gift: (
      <>
        <path d="M3 11h18v10H3V11ZM2 7h20v4H2V7ZM12 7v14" />
        <path d="M12 7C3 7 5 0 9 3l3 4c9 0 7-7 3-4l-3 4Z" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m9 5 11 7-11 7V5Z" />,
  };
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`gps-eyebrow${light ? " gps-eyebrow--light" : ""}`}>
      {children}
    </p>
  );
}

export function Cta({
  children,
  href = "#inversion",
  gold = false,
  className = "",
  external = false,
}: {
  children: ReactNode;
  href?: string;
  gold?: boolean;
  className?: string;
  external?: boolean;
}) {
  return (
    <Button
      href={href}
      className={`gps-button ${gold ? "gps-button--gold" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <Icon name="arrow" />
    </Button>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="gps-check-list">
      {items.map((item) => (
        <li key={item}>
          <span>
            <Icon name="check" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
