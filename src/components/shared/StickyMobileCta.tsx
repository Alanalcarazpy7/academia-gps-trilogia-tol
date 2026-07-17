"use client";

import { useEffect, useState } from "react";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const paymentCta = getPrimaryPaymentCta();

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const footer = document.querySelector("footer");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      rootMargin: "-10% 0px 0px 0px",
    });
    heroObserver.observe(hero);

    let footerObserver: IntersectionObserver | undefined;
    if (footer) {
      footerObserver = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
        rootMargin: "0px",
      });
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  const visible = pastHero && !nearFooter;

  return (
    <div
      className={`sticky-mobile-cta${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="sticky-mobile-cta-price">
        <span>50% OFF</span>
        <strong>
          <span className="sticky-price-full">Pre-lanzamiento</span>
          <span className="sticky-price-short">Pre-lanz.</span>
        </strong>
      </div>
      <Button
        className="btn-glow-primary group min-h-12 w-full gap-2 whitespace-normal! px-4 text-[0.86rem]"
        href={paymentCta.href}
        isPlaceholder={paymentCta.isPlaceholder}
      >
        <span className="sticky-cta-label-full">{siteConfig.heroPrimaryCtaLabel}</span>
        <span className="sticky-cta-label-short">Reservar plaza</span>
        <span
          aria-hidden="true"
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/14 text-base leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </Button>
    </div>
  );
}
