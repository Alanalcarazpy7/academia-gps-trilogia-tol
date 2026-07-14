"use client";

import Image from "next/image";
import { useState } from "react";
import { brand } from "@/config/brand";
import { navigationItems } from "@/config/navigation";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paymentCta = getPrimaryPaymentCta();

  return (
    <header className="sticky top-9 z-30 border-b border-brand-blue/10 bg-white/95 shadow-[0_10px_26px_rgba(0,72,119,0.065)] backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between gap-3">
        <a
          className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-full bg-white px-2.5 py-1.5 shadow-[0_8px_22px_rgba(0,72,119,0.07)] transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,72,119,0.11)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          href="#inicio"
          aria-label="Ir al inicio de Academia GPS"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={brand.assets.academiaGpsLogo}
            alt="Academia GPS"
            width={154}
            height={56}
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 text-[12px] font-extrabold text-brand-blue/74 xl:flex"
        >
          {navigationItems.map((item, index) => {
            const isActive = index === 0;

            return (
              <a
                className={[
                  "group/nav relative whitespace-nowrap rounded-full px-3.5 py-2 transition-[background-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal",
                  isActive
                    ? "bg-brand-cream text-brand-blue"
                    : "hover:bg-brand-cream/70 hover:text-brand-teal",
                ].join(" ")}
                href={item.href}
                key={item.href}
              >
                <span>{item.label}</span>
                {!isActive ? (
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-brand-teal transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/nav:scale-x-100" />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            className="group min-w-40 gap-2 px-5 shadow-[0_14px_30px_rgba(0,72,119,0.16)]"
            href={paymentCta.href}
            isPlaceholder={paymentCta.isPlaceholder}
            size="sm"
          >
            <span>Reservar mi plaza</span>
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-full bg-white/12 text-sm transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
            >
              →
            </span>
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="group grid h-11 w-11 place-items-center rounded-full border border-brand-blue/12 bg-white text-brand-blue shadow-[0_10px_24px_rgba(0,72,119,0.08)] transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] lg:hidden"
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

        <div
          id="mobile-navigation"
          className={[
            "absolute left-4 right-4 top-[calc(100%+0.75rem)] origin-top rounded-[24px] border border-brand-blue/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,72,119,0.16)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden",
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="mb-2 flex items-center gap-3 rounded-[20px] bg-brand-cream px-3 py-2">
            <Image
              src={brand.assets.academiaGpsIcon}
              alt=""
              width={40}
              height={40}
              className="h-8 w-8"
            />
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
            className="mt-2 w-full justify-center"
            href={paymentCta.href}
            isPlaceholder={paymentCta.isPlaceholder}
            size="md"
          >
            Reservar mi plaza
          </Button>
        </div>
      </Container>
    </header>
  );
}
