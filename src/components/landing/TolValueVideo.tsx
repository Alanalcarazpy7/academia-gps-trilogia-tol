import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillarIcons = [
  <svg key="finanzas" aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 19V5M4 19h16M8 15l3.5-4 3 2.5L19 8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="19" cy="8" r="1.4" fill="currentColor" />
  </svg>,
  <svg key="marketing" aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.3" fill="currentColor" />
  </svg>,
  <svg key="liderazgo" aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M15.5 6.2c1.5.4 2.6 1.7 2.6 3.3s-1.1 2.9-2.6 3.3M17.5 19c0-2.4-1.6-4.2-3.7-4.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>,
];

export function TolValueVideo() {
  const paymentCta = getPrimaryPaymentCta();
  const { valueProposition } = siteConfig;

  return (
    <section
      id="propuesta-valor"
      className="value-surface relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="value-video-title"
    >
      <div className="value-surface-pulse" aria-hidden="true" />

      <Container className="relative z-[1]">
        <Reveal className="mx-auto max-w-[760px] text-center" as="div">
          <span className="section-eyebrow">{valueProposition.eyebrow}</span>
          <h2
            id="value-video-title"
            className="mt-3.5 text-balance font-heading text-[clamp(1.5rem,3.6vw,2.1rem)] font-extrabold leading-[1.25] text-white"
          >
            <span className="text-white/68">{valueProposition.introLead}</span>{" "}
            <span>{valueProposition.introEmphasis}</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[960px] gap-5 sm:mt-12 sm:grid-cols-3">
          {valueProposition.pillars.map((pillar, index) => (
            <Reveal delay={90 + index * 70} variant="pop" key={pillar.label}>
              <div className="pillar-card h-full px-6 py-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-yellow/14 text-brand-yellow">
                  <span className="h-6 w-6">{pillarIcons[index]}</span>
                </span>
                <p className="mt-4 font-heading text-lg font-extrabold text-white">
                  {pillar.label}
                </p>
                <p className="mt-1.5 text-sm font-medium leading-6 text-white/68">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="mx-auto mt-10 max-w-[640px] text-center sm:mt-12">
            <p className="text-balance text-lg font-extrabold text-white">
              {valueProposition.closingLead}
            </p>
            <p className="mt-2 text-balance text-[0.98rem] font-medium leading-7 text-white/72">
              {valueProposition.closing}
            </p>
            <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-yellow/80">
              {valueProposition.closingNote}
            </p>

            <Button
              className="btn-gold-glow group mt-7 min-h-14 w-full gap-3 px-6 text-[0.96rem] sm:w-auto"
              href={paymentCta.href}
              isPlaceholder={paymentCta.isPlaceholder}
              size="lg"
            >
              <span>{valueProposition.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue/14 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
              >
                →
              </span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
