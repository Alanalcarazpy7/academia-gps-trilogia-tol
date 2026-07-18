"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const accentColors = {
  blue: "#004877",
  teal: "#008080",
  gold: "#E6C619",
} as const;

const accentTextColors = {
  blue: "#ffffff",
  teal: "#ffffff",
  gold: "#004877",
} as const;

const programOutcomes = {
  "tol-fi": "Vas a salir con tu tablero de costos, aranceles y margen listo para operar.",
  "tol-mark": "Vas a salir con tu mapa de comunicación y experiencia del paciente definido.",
  "tol-coach": "Vas a obtener herramientas de liderazgo y plan de formación de equipos.",
} as const;

const programIncludes = [
  "Acceso a los 3 programas",
  "Clases grabadas 24/7",
  "20 sesiones en vivo",
  "Plantillas y checklists",
  "Dashboards y matrices",
  "4 meses de acompañamiento",
] as const;

type ProgramId = (typeof siteConfig.programsShowcase.programs)[number]["id"];

export function TolPrograms() {
  const { programsShowcase } = siteConfig;
  const [activeId, setActiveId] = useState<ProgramId>(programsShowcase.programs[0].id);
  const activeProgram =
    programsShowcase.programs.find((program) => program.id === activeId) ??
    programsShowcase.programs[0];
  const accent = accentColors[activeProgram.accent];

  return (
    <section
      id="programas"
      className="catalog-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="programs-title"
    >
      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.65fr] lg:items-end lg:gap-12">
          <Reveal variant="left">
            <div className="max-w-[680px]">
              <span className="section-eyebrow">{programsShowcase.eyebrow}</span>
              <h2
                id="programs-title"
                className="mt-4 text-balance font-heading text-[clamp(1.75rem,3.8vw,2.5rem)] font-extrabold leading-[1.1] text-white"
              >
                {programsShowcase.headline}
              </h2>
              <p className="mt-4 text-pretty text-[0.98rem] font-medium leading-7 text-white/64">
                {programsShowcase.supportLine}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} variant="right">
            <div className="catalog-includes">
              <span>{programsShowcase.overviewLabel}</span>
              <div className="catalog-includes-grid">
                {programIncludes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div
            className="mt-9 sm:mt-10"
            role="tablist"
            aria-label="Programas de la Trilogía TOL"
          >
            <div className="catalog-tabs">
              {programsShowcase.programs.map((program) => {
                const isActive = program.id === activeProgram.id;
                return (
                  <button
                    key={program.id}
                    type="button"
                    role="tab"
                    id={`tab-${program.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${program.id}`}
                    data-active={isActive}
                    className="catalog-tab"
                    style={
                      {
                        "--tab-accent": accentColors[program.accent],
                        "--tab-text": accentTextColors[program.accent],
                      } as CSSProperties
                    }
                    onClick={() => setActiveId(program.id)}
                  >
                    <span className="catalog-tab-dot" aria-hidden="true" />
                    {program.name}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div
          className="catalog-panel mt-5 px-6 py-7 sm:px-9 sm:py-9"
          role="tabpanel"
          id={`panel-${activeProgram.id}`}
          aria-labelledby={`tab-${activeProgram.id}`}
          style={{ "--tab-accent": accent } as CSSProperties}
          key={activeProgram.id}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
            <div className="mx-auto w-full max-w-[180px] sm:mx-0">
              <div className="catalog-logo-frame">
                <Image
                  src={activeProgram.logo}
                  alt={`${activeProgram.name}: ${activeProgram.subtitle}`}
                  width={480}
                  height={600}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/45">
                Programa · {activeProgram.subtitle}
              </p>
              <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-white sm:text-[1.75rem]">
                {activeProgram.name}
              </h3>

              <p className="catalog-promise mt-4">{activeProgram.promise}</p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {activeProgram.modules.map((unit, index) => (
                  <div className="catalog-unit" key={unit}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{unit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-2.5 border-t border-white/10 pt-5">
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                <p className="text-[0.86rem] font-semibold leading-6 text-white/68">
                  {programOutcomes[activeProgram.id]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
