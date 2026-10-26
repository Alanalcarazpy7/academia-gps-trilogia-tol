"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export function DisclosureLink({
  targetId,
  children,
  className,
}: {
  targetId: "perfil-profesional" | "condiciones-garantia";
  children: ReactNode;
  className?: string;
}) {
  function reveal() {
    const target = document.getElementById(targetId);
    if (target instanceof HTMLDetailsElement) target.open = true;
  }

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === `#${targetId}`) {
        const target = document.getElementById(targetId);
        if (target instanceof HTMLDetailsElement) target.open = true;
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [targetId]);

  return (
    <a href={`#${targetId}`} className={className} onClick={reveal}>
      {children}
    </a>
  );
}
