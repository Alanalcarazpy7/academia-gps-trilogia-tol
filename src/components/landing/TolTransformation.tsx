import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolTransformation() {
  const paymentCta = getPrimaryPaymentCta();
  const { transformationStory } = siteConfig;

  return (
    <section
      id="transformacion"
      className="transformation-surface relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="transformation-title"
    >
      <Container className="relative z-[1]">
        <Reveal className="mx-auto max-w-[700px] text-center" as="div">
          <span className="section-eyebrow !border-brand-blue/15 !bg-brand-blue/6 !text-brand-blue">
            {transformationStory.eyebrow}
          </span>
          <h2
            id="transformation-title"
            className="mt-4 text-balance font-heading text-[clamp(1.7rem,3.8vw,2.35rem)] font-extrabold leading-[1.15] text-brand-blue"
          >
            {transformationStory.headline}
          </h2>
          <p className="mt-2 text-pretty text-[1.02rem] font-semibold text-brand-blue/60">
            {transformationStory.subheadline}
          </p>
        </Reveal>

        <div className="story-pivot-row mt-8 sm:mt-10">
          <Reveal delay={80}>
            <p className="story-pivot-pill">{transformationStory.pivot}</p>
          </Reveal>
        </div>

        <div className="story-diptych mx-auto mt-6 max-w-[980px] sm:mt-8">
          <Reveal delay={130}>
            <div className="story-problem-card">
              <span className="story-card-tag">Lo que vivís hoy</span>
              {transformationStory.paragraphs.map((paragraph) => (
                <p
                  className="mt-4 text-pretty text-[0.98rem] font-medium leading-7 text-brand-blue/76"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-pretty text-[0.98rem] font-bold leading-7 text-brand-blue">
                {transformationStory.consequence}
              </p>
            </div>
          </Reveal>

          <Reveal delay={190}>
            <div className="vision-card story-shift-card px-7 py-8 sm:px-8 sm:py-9">
              <span className="story-card-tag story-card-tag-accent">Lo que es posible</span>
              <p className="mt-4 text-pretty text-[0.98rem] font-semibold leading-7 text-brand-blue/85">
                {transformationStory.vision}
              </p>
              <p className="mt-4 text-pretty text-[0.9rem] font-medium leading-6 text-brand-blue/58">
                {transformationStory.visionNote}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="mx-auto mt-10 max-w-[600px] text-center sm:mt-12">
            <p className="text-balance text-lg font-extrabold text-brand-blue">
              {transformationStory.closing}
            </p>
            <p className="mt-2 text-pretty text-[0.98rem] font-medium leading-7 text-brand-blue/65">
              {transformationStory.closingNote}
            </p>

            <Button
              className="btn-glow-primary group mt-7 min-h-14 w-full gap-3 px-6 text-[0.96rem] sm:w-auto"
              href={paymentCta.href}
              isPlaceholder={paymentCta.isPlaceholder}
              size="lg"
            >
              <span>{transformationStory.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/14 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5"
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
