"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { academy } from "@/config/academy";
import { navigationItems } from "@/config/navigation";
import { Cta } from "@/components/edition-2027/Elements";
import { Container } from "@/components/ui/Container";

type NavigationHref = (typeof navigationItems)[number]["href"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<NavigationHref>(
    navigationItems[0].href,
  );
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => ({
        href: item.href,
        element: document.querySelector<HTMLElement>(item.href),
      }))
      .filter(
        (section): section is { href: NavigationHref; element: HTMLElement } =>
          Boolean(section.element),
      );

    if (!sections.length) return;

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;

      const readingLine =
        window.scrollY + Math.min(window.innerHeight * 0.42, 360);
      let currentHref = sections[0].href;

      const ranges = sections.map((section, index) => {
        const top =
          section.element.getBoundingClientRect().top + window.scrollY;
        const nextSection = sections[index + 1];
        const bottom = nextSection
          ? nextSection.element.getBoundingClientRect().top + window.scrollY
          : Number.POSITIVE_INFINITY;

        return {
          href: section.href,
          top,
          bottom,
        };
      });

      for (const section of ranges) {
        if (readingLine >= section.top && readingLine < section.bottom) {
          currentHref = section.href;
          break;
        }
      }

      setActiveHref((current) =>
        current === currentHref ? current : currentHref,
      );
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <header className="gps-header">
      <Container className="gps-header-layout">
        <a
          className="gps-header-brand"
          href="#inicio"
          aria-label="Academia GPS, ir al inicio"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={academy.assets.logo}
            alt="Academia GPS · Aprendizajes que transforman"
            width={640}
            height={316}
            sizes="(max-width: 767px) 126px, 145px"
          />
        </a>
        <nav aria-label="Navegación principal" className="gps-desktop-nav">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "location" : undefined}
              onClick={() => setActiveHref(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="gps-header-actions">
          <a href="/campus" className="gps-campus-link">
            Acceso alumnos <span aria-hidden="true">↗</span>
          </a>
          <Cta gold className="gps-header-cta">
            Quiero inscribirme
          </Cta>
        </div>
        <button
          ref={menuButton}
          className="gps-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
        {isMenuOpen && (
          <button
            className="gps-menu-backdrop"
            type="button"
            tabIndex={-1}
            aria-label="Cerrar navegación"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <nav
          id="mobile-navigation"
          className="gps-mobile-nav"
          aria-label="Navegación móvil"
          hidden={!isMenuOpen}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "location" : undefined}
              onClick={() => {
                setActiveHref(item.href);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href="/campus" onClick={() => setIsMenuOpen(false)}>
            Acceso alumnos <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
