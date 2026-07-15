import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolMarketOpportunity() {
  const { marketOpportunity } = siteConfig;

  return (
    <section
      id="oportunidad-mercado"
      className="market-surface relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="market-title"
    >
      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(420px,0.95fr)_minmax(0,0.9fr)] lg:gap-14">
          <Reveal>
            <div className="market-radar mx-auto max-w-[560px]">
              <span className="market-radar-ring ring-1" />
              <span className="market-radar-ring ring-2" />
              <span className="market-radar-ring ring-3" />
              <div className="market-clinic-node">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
                  Clinica
                </span>
                <span className="mt-1 block font-heading text-lg font-extrabold text-white">
                  Direccion profesional
                </span>
              </div>
              {marketOpportunity.signals.map((signal, index) => (
                <div className={`market-signal signal-${index + 1}`} key={signal.label}>
                  <span className="market-signal-pulse" />
                  <span className="block font-heading text-sm font-extrabold text-white">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto max-w-[560px] lg:mx-0">
              <span className="section-eyebrow">
                {marketOpportunity.eyebrow}
              </span>
              <h2
                id="market-title"
                className="mt-4 text-balance font-heading text-[clamp(1.7rem,3.8vw,2.35rem)] font-extrabold leading-[1.12] text-white"
              >
                {marketOpportunity.headline}
              </h2>
              <p className="mt-4 text-pretty text-[1rem] font-medium leading-7 text-white/66">
                {marketOpportunity.supportLine}
              </p>

              <div className="mt-8 grid gap-3">
                {marketOpportunity.signals.map((signal, index) => (
                  <Reveal delay={180 + index * 55} key={signal.label}>
                    <div className="market-signal-card">
                      <span className="font-heading text-sm font-extrabold text-brand-yellow">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-heading text-base font-extrabold text-white">
                          {signal.label}
                        </span>
                        <span className="mt-1 block text-sm font-medium leading-6 text-white/62">
                          {signal.detail}
                        </span>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
