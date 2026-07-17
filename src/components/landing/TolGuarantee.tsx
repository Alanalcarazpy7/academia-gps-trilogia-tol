import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolGuarantee() {
  const paymentCta = getPrimaryPaymentCta();
  const { guarantee } = siteConfig;

  return (
    <section
      id="garantia"
      className="guarantee-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="guarantee-title"
    >
      <Container className="relative z-[1]">
        <div className="guarantee-layout">
          <Reveal variant="scale">
            <div className="guarantee-seal-wrap">
              <div className="guarantee-seal">
                <span className="guarantee-seal-ring" aria-hidden="true" />
                <div className="text-center">
                  <svg
                    className="guarantee-seal-icon mx-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10v-6L12 2.5Z" />
                    <path d="m8.7 12.1 2.2 2.2 4.4-4.6" />
                  </svg>
                  <p className="guarantee-seal-value">100%</p>
                  <p className="guarantee-seal-label">30 días</p>
                </div>
              </div>

              <span className="guarantee-lock-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="9" rx="2.2" />
                  <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
                </svg>
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={80} variant="right">
              <span className="section-eyebrow !border-brand-green/24 !bg-brand-green/10 !text-brand-green">
                {guarantee.eyebrow}
              </span>
              <h2
                id="guarantee-title"
                className="mt-4 text-balance font-heading text-[clamp(1.7rem,3.6vw,2.35rem)] font-extrabold leading-[1.16] text-brand-blue"
              >
                {guarantee.headline}
              </h2>
              <p className="mt-4 max-w-[520px] text-pretty text-[0.98rem] font-medium leading-7 text-brand-blue/62">
                {guarantee.supportLine}
              </p>
            </Reveal>

            <div className="mt-6 max-w-[520px]">
              {guarantee.points.map((point, index) => (
                <Reveal delay={140 + index * 70} variant="left" key={point}>
                  <div className="guarantee-point">
                    <span className="guarantee-point-index">{index + 1}</span>
                    <p className="text-[0.92rem] font-semibold leading-6 text-brand-blue/78">
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="guarantee-closing mt-6 max-w-[520px]">
                <p className="font-heading text-[1.05rem] font-extrabold text-brand-blue">
                  {guarantee.closing}
                </p>
              </div>

              <Button
                className="btn-outline-guarantee group mt-7 min-h-12 gap-2.5 px-6"
                href={paymentCta.href}
                isPlaceholder={paymentCta.isPlaceholder}
                variant="ghost"
              >
                {guarantee.ctaLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
