import { getInstallmentsPaymentCta, getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolOffer() {
  const primaryCta = getPrimaryPaymentCta();
  const installmentsCta = getInstallmentsPaymentCta();
  const { pricingOffer: offer } = siteConfig;

  return (
    <section
      id="inversion"
      className="offer-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="offer-title"
    >
      <Container className="relative z-[1]">
        <span className="offer-ghost-percent" aria-hidden="true">
          50%
        </span>

        <Reveal className="mx-auto max-w-[680px] text-center" as="div">
          <span className="section-eyebrow !border-brand-yellow/30 !bg-brand-yellow/10 !text-brand-yellow">
            {offer.eyebrow}
          </span>
          <h2
            id="offer-title"
            className="mt-4 text-balance font-heading text-[clamp(1.8rem,3.8vw,2.5rem)] font-extrabold leading-[1.14] text-white"
          >
            {offer.headline}
          </h2>
          <p className="mt-4 text-pretty text-[0.98rem] font-medium leading-7 text-white/62">
            {offer.supportLine}
          </p>
          <p className="offer-price-strike mx-auto mt-5 justify-center">
            <span>{offer.officialPriceLabel}</span>
            <strong>{offer.officialPrice}</strong>
          </p>
        </Reveal>

        <div className="offer-pricing-grid mx-auto mt-8 max-w-[900px] sm:mt-10">
          {offer.tiers.map((tier, index) => (
            <Reveal delay={90 + index * 70} key={tier.id}>
              <div className={`offer-price-card h-full${tier.featured ? " is-featured" : ""}`}>
                {tier.featured ? (
                  <span className="offer-price-ribbon">Recomendado</span>
                ) : null}
                <p className="offer-price-label">{tier.label}</p>
                <p className="offer-price-value">{tier.price}</p>
                <span className="offer-savings-chip">{tier.savings}</span>
                <p className="offer-deadline">{tier.deadline}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={230}>
          <div className="mx-auto mt-9 max-w-[900px] text-center sm:mt-10 sm:text-left">
            <Button
              className="btn-glow-gold group min-h-16 w-full gap-3 whitespace-normal! px-6 py-4 text-center text-[0.94rem] sm:px-7 sm:text-[1rem] sm:w-auto"
              href={primaryCta.href}
              isPlaceholder={primaryCta.isPlaceholder}
              size="lg"
            >
              <span>{offer.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue/12 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Button>

            <div className="offer-includes-list mt-6 text-left sm:grid-cols-2">
              {offer.includes.map((item) => (
                <p className="offer-includes-item" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mx-auto mt-12 max-w-[900px] sm:mt-14">
            <p className="text-center font-heading text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-yellow/85">
              {offer.bonusLabel}
            </p>
            <div className="offer-bonus-grid mt-4">
              {offer.bonuses.map((bonus, index) => (
                <div className="offer-bonus-card" key={bonus.title}>
                  <span className="offer-bonus-icon" aria-hidden="true">
                    {index === 0 ? "▶" : "⚙"}
                  </span>
                  <h3 className="mt-3.5 font-heading text-[1.02rem] font-extrabold text-white">
                    {bonus.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] font-medium leading-6 text-white/62">
                    {bonus.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={330}>
          <div className="offer-financing-panel mx-auto mt-9 max-w-[900px] sm:mt-10">
            <p className="font-heading text-[1.05rem] font-extrabold text-white">
              {offer.financing.label}
            </p>
            <p className="mt-1.5 text-[0.88rem] font-medium text-white/58">
              {offer.financing.supportLine}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {offer.financing.plans.map((plan) => (
                <div className="offer-financing-plan" key={plan.id}>
                  <span className="text-[0.76rem] font-bold uppercase tracking-[0.06em] text-brand-teal/85">
                    {plan.label}
                  </span>
                  <strong>{plan.price}</strong>
                  <p className="mt-1 text-[0.78rem] font-medium text-white/50">{plan.detail}</p>
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              className="btn-outline-offer group mt-6 min-h-14 w-full gap-3 whitespace-normal! px-6 py-3.5 text-center text-[0.9rem] sm:w-auto"
              href={installmentsCta.href}
              isPlaceholder={installmentsCta.isPlaceholder}
              size="lg"
            >
              <span>{offer.financing.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/14 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
