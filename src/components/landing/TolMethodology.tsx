import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolMethodology() {
  const { gpsMethodology } = siteConfig;

  return (
    <section
      id="metodologia"
      className="route-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="method-title"
    >
      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.8fr] lg:gap-14">
          <Reveal>
            <div>
              <span className="section-eyebrow !border-brand-blue/14 !bg-brand-blue/6 !text-brand-blue">
                {gpsMethodology.eyebrow}
              </span>
              <h2
                id="method-title"
                className="mt-4 text-balance font-heading text-[clamp(1.75rem,3.8vw,2.5rem)] font-extrabold leading-[1.1] text-brand-blue"
              >
                {gpsMethodology.headline}
              </h2>
              <p className="mt-4 max-w-[560px] text-pretty text-[0.98rem] font-medium leading-7 text-brand-blue/64">
                {gpsMethodology.supportLine}
              </p>

              <div className="route-phase-row mt-6" aria-label="Fases de trabajo">
                <span>Claridad</span>
                <span>Diagnóstico</span>
                <span>Acción</span>
                <span>Resultados</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="tilt">
            <aside className="route-guidance-card">
              <span>GPS</span>
              <strong>{gpsMethodology.guidanceTitle}</strong>
              <p>{gpsMethodology.guidanceText}</p>
            </aside>
          </Reveal>
        </div>

        <div className="route-track">
          <div className="route-line" aria-hidden="true" />
          {gpsMethodology.steps.map((step, index) => (
            <Reveal delay={110 + index * 70} variant="up-strong" key={step.label}>
              <article className="route-card">
                <span className="route-node" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
                <span className="route-outcome">{step.outcome}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
