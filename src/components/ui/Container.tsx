import type { ReactNode } from "react";

type ContainerElement = "div" | "section" | "main" | "header" | "footer" | "nav";

type ContainerProps = {
  as?: ContainerElement;
  children: ReactNode;
  className?: string;
};

export function Container({
  as,
  children,
  className = "",
}: ContainerProps) {
  const Component = as || "div";

  return (
    <Component
      className={[
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
