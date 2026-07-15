import type { CSSProperties, ReactNode } from "react";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const icons: ReactNode[] = [
  <path key="a" d="M4 14V9M10 14V5M16 14v-3" />,
  <>
    <path
      key="b1"
      d="M11 3H6a1 1 0 0 0-.7.29L3 5.6a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 0-1.42l-4-4A1 1 0 0 0 11 3Z"
    />
    <circle key="b2" cx="7.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
  </>,
  <>
    <circle key="c1" cx="10" cy="10" r="6.8" />
    <circle key="c2" cx="10" cy="10" r="3.3" />
    <circle key="c3" cx="10" cy="10" r="0.6" fill="currentColor" stroke="none" />
  </>,
  <>
    <circle key="d1" cx="7" cy="7" r="2.5" />
    <circle key="d2" cx="14" cy="8.2" r="2" />
    <path key="d3" d="M2.5 17c.5-3 2.2-4.6 4.5-4.6s4 1.6 4.5 4.6M12.6 17c.3-2.1 1.4-3.5 2.9-3.8" />
  </>,
  <>
    <circle key="e1" cx="10" cy="10" r="3.3" />
    <path
      key="e2"
      d="M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4M15.3 15.3l-1.4-1.4M6.1 6.1 4.7 4.7"
    />
  </>,
];

const cardAccents = ["#008080", "#76a858", "#004877", "#008080"] as const;

function MomentCard({
  tag,
  text,
  accent,
  icon,
  anchor,
}: {
  tag: string;
  text: string;
  accent: string;
  icon: ReactNode;
  anchor?: boolean;
}) {
  return (
    <div
      className={`future-card${anchor ? " future-card-anchor" : ""}`}
      style={{ "--card-accent": accent } as CSSProperties}
    >
      <span className="future-card-icon" aria-hidden="true">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </span>
      <span className="future-card-tag">{tag}</span>
      <p className="future-card-text">{text}</p>
      {anchor ? (
        <div className="future-anchor-bars" aria-hidden="true">
          <span style={{ height: "35%" }} />
          <span style={{ height: "58%" }} />
          <span style={{ height: "46%" }} />
          <span style={{ height: "78%" }} />
          <span style={{ height: "100%" }} />
        </div>
      ) : null}
    </div>
  );
}

export function TolFutureVision() {
  const paymentCta = getPrimaryPaymentCta();
  const { futureVision } = siteConfig;
  const [hero, ...rest] = futureVision.items;

  const moments = [
    { ...hero, accent: "#e6c619", icon: icons[0], anchor: true },
    ...rest.map((item, index) => ({
      ...item,
      accent: cardAccents[index % cardAccents.length],
      icon: icons[index + 1],
      anchor: false,
    })),
  ];
  return (
    <section
      id="futuro"
      className="future-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="future-title"
    >
      <Container className="relative z-[1]">
        <div className="future-split">
          <div className="future-narrative">
            <span className="future-ghost-num" aria-hidden="true">
              6
            </span>

            <Reveal>
              <span className="section-eyebrow !border-brand-blue/14 !bg-brand-blue/6 !text-brand-blue">
                {futureVision.eyebrow}
              </span>
              <h2
                id="future-title"
                className="mt-4 text-balance font-heading text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.1] text-brand-blue"
              >
                {futureVision.headline}
              </h2>
              <p className="mt-4 text-pretty text-[1rem] font-medium leading-7 text-brand-blue/62">
                {futureVision.supportLine}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="future-remate mt-8">
                <p className="future-closing-line">
                  <span>{futureVision.closingLead}</span>
                  <strong>{futureVision.closingEmphasis}</strong>
                </p>

                <Button
                  className="btn-glow-primary group mt-6 min-h-14 w-full gap-3 whitespace-normal! px-6 py-3.5 text-center text-[0.92rem]"
                  href={paymentCta.href}
                  isPlaceholder={paymentCta.isPlaceholder}
                  size="lg"
                >
                  <span>{futureVision.ctaLabel}</span>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/14 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="future-proof">
            {moments.map((moment, index) => (
              <Reveal delay={80 + index * 80} key={moment.tag}>
                <MomentCard {...moment} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
