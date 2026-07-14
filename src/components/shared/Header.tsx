"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brand } from "@/config/brand";
import { navigationItems } from "@/config/navigation";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paymentCta = getPrimaryPaymentCta();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="header-premium-surface relative shadow-[0_14px_32px_rgba(0,20,35,0.28)]">
      <Container className="relative flex h-[4.1rem] items-center justify-between gap-4 lg:h-[4.35rem]">
        <div className="flex min-w-0 shrink-0 items-center">
          <a
            className="group relative flex min-w-0 shrink-0 items-center gap-1 overflow-hidden rounded-2xl border border-white/40 bg-white/94 px-2 py-1 shadow-[0_12px_30px_rgba(0,20,35,0.22),inset_0_1px_0_rgba(255,255,255,0.95)] transition-[box-shadow,transform,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-brand-yellow/45 hover:shadow-[0_16px_38px_rgba(0,20,35,0.28),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
            href="#inicio"
            aria-label="Ir al inicio de Academia GPS"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/65 to-transparent" />
            <span className="grid h-7 w-[4.7rem] shrink-0 place-items-center rounded-xl bg-white/85 px-1.5 shadow-[inset_0_0_0_1px_rgba(0,72,119,0.05)] transition-transform duration-300 group-hover:scale-[1.025] sm:w-[5rem] lg:h-8 lg:w-[5.4rem]">
              <Image
                src={brand.assets.academiaGpsLogo}
                alt="Academia GPS"
                width={1000}
                height={360}
                className="h-5 w-auto drop-shadow-[0_7px_12px_rgba(0,72,119,0.10)] lg:h-[1.4rem]"
              />
            </span>
            <span className="hidden h-5 w-px shrink-0 bg-gradient-to-b from-transparent via-brand-blue/16 to-transparent sm:block" aria-hidden="true" />
            <span className="hidden h-7 w-[5.3rem] shrink-0 place-items-center rounded-xl bg-white/70 px-1.5 shadow-[inset_0_0_0_1px_rgba(0,72,119,0.045)] transition-transform duration-300 group-hover:scale-[1.03] sm:grid lg:h-8 lg:w-[6rem]">
              <Image
                src={brand.assets.trilogiaTolLogo}
                alt="La Trilogia TOL"
                width={676}
                height={350}
                className="h-6 w-auto drop-shadow-[0_7px_12px_rgba(0,72,119,0.10)] lg:h-[1.65rem]"
              />
            </span>
          </a>
        </div>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-0.5 text-[12px] font-extrabold text-white/78 xl:flex"
        >
          {navigationItems.map((item, index) => {
            const isActive = index === 0;

            return (
              <a
                className={[
                  "group/nav relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 transition-[background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow",
                  isActive
                    ? "bg-gradient-to-b from-white to-[#f2eee4] text-brand-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,20,35,0.06),0_4px_10px_rgba(0,0,0,0.18)]"
                    : "hover:bg-white/10 hover:text-white",
                ].join(" ")}
                href={item.href}
                key={item.href}
              >
                {isActive ? (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow shadow-[0_0_6px_rgba(230,198,25,0.8)]" aria-hidden="true" />
                ) : null}
                <span>{item.label}</span>
                {!isActive ? (
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-brand-yellow transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/nav:scale-x-100" />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            className="btn-gold-glow group min-w-36 gap-2 px-4"
            href={paymentCta.href}
            isPlaceholder={paymentCta.isPlaceholder}
            size="sm"
          >
            <span>Reservar mi plaza</span>
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue/14 text-sm transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
            >
              →
            </span>
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="group grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/12 text-white shadow-[0_10px_24px_rgba(0,20,35,0.18)] backdrop-blur-md transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/18 active:scale-[0.98] lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="relative block h-4 w-5">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                isMenuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>

        {isMenuOpen ? (
          <div
            aria-hidden="true"
            className="fixed inset-0 z-10 bg-brand-blue/25 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : null}

        <div
          id="mobile-navigation"
          className={[
            "absolute left-4 right-4 top-[calc(100%+0.75rem)] z-20 origin-top rounded-[24px] border border-brand-blue/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,72,119,0.16)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden",
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="mb-2 flex items-center gap-3 rounded-[20px] bg-brand-cream px-3 py-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_8px_18px_rgba(0,72,119,0.08)]">
              <Image
                src={brand.assets.academiaGpsIcon}
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-teal">
                Academia GPS
              </span>
              <span className="mt-0.5 block text-sm font-extrabold text-brand-blue">
                Centro educativo
              </span>
            </span>
          </div>

          <nav aria-label="Navegación móvil" className="grid gap-1">
            {navigationItems.map((item, index) => (
              <a
                className={[
                  "rounded-2xl px-4 py-3 text-sm font-extrabold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
                  index === 0
                    ? "bg-brand-cream text-brand-blue"
                    : "text-brand-blue/74 hover:bg-brand-cream/70 hover:text-brand-teal",
                ].join(" ")}
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            className="btn-glow-primary group mt-2 w-full justify-center gap-2"
            href={paymentCta.href}
            isPlaceholder={paymentCta.isPlaceholder}
            size="md"
          >
            <span>Reservar mi plaza</span>
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-full bg-white/14 text-sm transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
            >
              →
            </span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
