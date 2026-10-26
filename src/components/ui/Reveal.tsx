"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealVariant =
  | "up"
  | "up-strong"
  | "left"
  | "right"
  | "scale"
  | "pop"
  | "tilt";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  variant?: RevealVariant;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver | undefined;
    // Browser measurements and state updates run at the next animation frame.
    // This also keeps the server-rendered content readable before enhancement.
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
      const rect = node.getBoundingClientRect();
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        (rect.top < window.innerHeight && rect.bottom > 0) ||
        !("IntersectionObserver" in window)
      ) {
        setIsVisible(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -10px 0px" },
      );
      observer.observe(node);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  const Component = as;

  const revealStateClass = isVisible
    ? "is-visible"
    : isReady
      ? "is-waiting"
      : "";
  const variantClass = variant === "up" ? "" : `reveal-${variant}`;

  return (
    <Component
      ref={ref as never}
      className={["reveal-on-scroll", variantClass, revealStateClass, className]
        .join(" ")
        .trim()}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Component>
  );
}
