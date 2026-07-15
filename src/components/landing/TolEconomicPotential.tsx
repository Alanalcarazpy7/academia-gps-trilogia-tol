import type { CSSProperties } from "react";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const boardRows = [
  ["Ingresos", "Servicios cobrados", "Trazable"],
  ["Costos", "Fijos + variables", "Visible"],
  ["Arancel", "Precio con criterio", "Decidido"],
  ["Margen", "Resultado por servicio", "Protegido"],
] as const;

const barRows = [
  { label: "Ventas", value: "78%", fill: "78%" },
  { label: "Costos", value: "46%", fill: "46%" },
  { label: "Margen", value: "62%", fill: "62%" },
] as const;

export function TolEconomicPotential() {
  const paymentCta = getPrimaryPaymentCta();
  const { economicPotential } = siteConfig;

  return (
    <section
      id="potencial-economico"
      className="money-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="economic-title"
    >
      <Container className="relative z-[1] grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.86fr_1fr] lg:gap-16">
        <Reveal>
          <div className="max-w-[600px]">
            <span className="section-eyebrow !border-brand-blue/14 !bg-brand-blue/6 !text-brand-blue">
              {economicPotential.eyebrow}
            </span>
            <h2
              id="economic-title"
              className="mt-4 text-balance font-heading text-[clamp(1.7rem,3.6vw,2.35rem)] font-extrabold leading-[1.12] text-brand-blue"
            >
              {economicPotential.headline}
            </h2>
            <p className="mt-4 max-w-[540px] text-pretty text-[0.98rem] font-medium leading-7 text-brand-blue/64">
              {economicPotential.supportLine}
            </p>

            <div className="mt-7 grid gap-2.5">
              {economicPotential.metrics.map((metric, index) => (
                <Reveal delay={70 + index * 60} key={metric.label}>
                  <div className="money-insight">
                    <span className="money-insight-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-[0.98rem] font-extrabold text-brand-blue">
                        {metric.label}
                      </h3>
                      <p className="mt-1 text-[0.86rem] font-medium leading-6 text-brand-blue/62">
                        {metric.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Button
              className="btn-glow-primary group mt-8 min-h-14 w-full gap-3 px-6 text-[0.96rem] sm:w-auto"
              href={paymentCta.href}
              isPlaceholder={paymentCta.isPlaceholder}
              size="lg"
            >
              <span>{economicPotential.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/14 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <aside className="money-panel px-6 py-6 sm:px-7 sm:py-7" aria-label="Tablero financiero">
            <div className="flex items-center justify-between">
              <div className="money-panel-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue/45">
                Tablero GPS
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-teal">
                  {economicPotential.boardLabel}
                </span>
                <p className="mt-1 font-heading text-xl font-extrabold text-brand-blue">
                  Rentabilidad visible
                </p>
              </div>
              <span className="money-formula">margen = precio &minus; costo</span>
            </div>

            <div className="mt-5 grid gap-1.5">
              {boardRows.map(([label, value, state]) => (
                <div className="money-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <em>{state}</em>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              {barRows.map((bar) => (
                <div className="money-bar-group" key={bar.label}>
                  <span>{bar.label}</span>
                  <div className="money-bar-track">
                    <div
                      className="money-bar-fill"
                      style={{ "--fill": bar.fill } as CSSProperties}
                    />
                  </div>
                  <b>{bar.value}</b>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-brand-blue/8 pt-5">
              <div className="money-leak-row">
                {economicPotential.leaks.map((leak) => (
                  <span className="money-leak" key={leak}>
                    {leak}
                  </span>
                ))}
              </div>
              <svg className="money-spark" viewBox="0 0 100 40" fill="none" aria-hidden="true">
                <path
                  d="M2 32 L20 26 L36 30 L52 16 L68 20 L84 6 L98 10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="98" cy="10" r="2.6" fill="currentColor" />
              </svg>
            </div>

            <p className="mt-5 text-[11px] font-semibold leading-5 text-brand-blue/40">
              {economicPotential.boardNote}
            </p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
