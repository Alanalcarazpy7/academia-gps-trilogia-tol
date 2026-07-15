import { getPrimaryWhatsappCta } from "@/config/contacts";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolFinalDecision() {
  const paymentCta = getPrimaryPaymentCta();
  const whatsappCta = getPrimaryWhatsappCta();
  const { finalDecision } = siteConfig;

  return (
    <section
      id="decision"
      className="decision-surface relative isolate scroll-mt-32 overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-labelledby="decision-title"
    >
      <Container className="relative z-[1] text-center">
        <Reveal className="mx-auto max-w-[680px]" as="div">
          <span className="section-eyebrow !border-brand-yellow/30 !bg-brand-yellow/10 !text-brand-yellow">
            {finalDecision.eyebrow}
          </span>
          <h2
            id="decision-title"
            className="mt-5 text-balance font-heading text-[clamp(2rem,4.6vw,3rem)] font-extrabold leading-[1.1] text-white"
          >
            {finalDecision.headline}
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div className="decision-versus mt-9 sm:mt-10">
            <div className="decision-option decision-option-a justify-center">
              <span>{finalDecision.optionA}</span>
            </div>
            <div className="decision-arrow" aria-hidden="true">
              <svg viewBox="0 0 20 24" width="20" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v18M4 14l6 6 6-6" />
              </svg>
            </div>
            <div className="decision-option justify-center">
              <p className="decision-option-b text-balance">
                <em>{finalDecision.optionB}</em>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-[560px] text-pretty text-[1rem] font-medium leading-7 text-white/64">
            {finalDecision.body}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex flex-col items-center gap-4 sm:mt-10">
            <span className="decision-cta-wrap">
              <Button
                className="btn-glow-gold group min-h-16 w-full gap-3 whitespace-normal! px-8 py-4 text-center text-[1.02rem] sm:w-auto"
                href={paymentCta.href}
                isPlaceholder={paymentCta.isPlaceholder}
                size="lg"
              >
                <span>{finalDecision.ctaLabel}</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue/12 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Button>
            </span>

            <Button
              variant="ghost"
              className="btn-outline-offer min-h-12 gap-2.5 px-6 text-[0.9rem]"
              href={whatsappCta.href}
              isPlaceholder={whatsappCta.isPlaceholder}
            >
              {finalDecision.whatsappLabel}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="decision-trust-line mt-8 text-[0.8rem] font-semibold">
            {finalDecision.trustLine}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
