import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolPainPoints() {
  const { painPoints } = siteConfig;

  return (
    <section
      id="para-quien-es"
      className="pain-surface relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="pain-points-title"
    >
      <Container className="relative z-[1]">
        <Reveal className="mx-auto max-w-[680px] text-center" as="div">
          <span className="section-eyebrow">{painPoints.eyebrow}</span>
          <h2
            id="pain-points-title"
            className="mt-4 text-balance font-heading text-[clamp(1.6rem,3.6vw,2.2rem)] font-extrabold leading-[1.2] text-white"
          >
            {painPoints.headline}
          </h2>
          <p className="mt-4 text-pretty text-[0.98rem] font-medium leading-7 text-white/64">
            {painPoints.supportLine}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-3.5 sm:mt-12 sm:grid-cols-2">
          {painPoints.items.map((item, index) => (
            <Reveal delay={70 + index * 45} key={item}>
              <div className="pain-item h-full">
                <span className="pain-item-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.94rem] font-semibold leading-6 text-white/88">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
