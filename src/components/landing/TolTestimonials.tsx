import Image from "next/image";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const accents = ["#008080", "#e6c619", "#004877", "#76a858", "#008080"] as const;

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.6l2.47 5.24 5.78.65-4.3 3.94 1.15 5.7L10 14.2l-5.1 2.93 1.15-5.7-4.3-3.94 5.78-.65Z" />
    </svg>
  );
}

export function TolTestimonials() {
  const { testimonials } = siteConfig;
  const items = testimonials.items;
  const loopItems = [...items, ...items];

  return (
    <section
      id="testimonios"
      className="testimonial-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-title"
    >
      <Container className="relative z-[1]">
        <span className="testimonial-ghost-quote" aria-hidden="true">
          &#8220;
        </span>

        <Reveal className="mx-auto max-w-[680px] text-center" as="div" variant="up-strong">
          <span className="section-eyebrow !border-brand-blue/14 !bg-brand-blue/6 !text-brand-blue">
            {testimonials.eyebrow}
          </span>
          <h2
            id="testimonials-title"
            className="mt-4 text-balance font-heading text-[clamp(1.7rem,3.6vw,2.35rem)] font-extrabold leading-[1.15] text-brand-blue"
          >
            {testimonials.headline}
          </h2>
          <p className="mt-4 text-pretty text-[0.96rem] font-medium leading-7 text-brand-blue/58">
            {testimonials.supportLine}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <div className="testimonial-trust-strip mx-auto mt-7 justify-center">
            {testimonials.trustItems.map((item) => (
              <span className="testimonial-trust-item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="testimonial-carousel mx-auto mt-10 max-w-[1120px] sm:mt-12">
            <div className="testimonial-viewport">
              <div className="testimonial-track testimonial-marquee" role="list" aria-label="Testimonios de alumnos">
                {loopItems.map((item, i) => (
                  <article
                    className="testimonial-slide"
                    key={`${item.name}-${i}`}
                    role="listitem"
                    aria-hidden={i >= items.length}
                    style={{ "--card-accent": accents[i % accents.length] } as CSSProperties}
                  >
                    <div className="testimonial-card">
                      <div className="flex items-center gap-3">
                        <span className="testimonial-avatar-ring">
                          <Image
                            alt={item.name}
                            className="testimonial-avatar h-14 w-14"
                            height={112}
                            src={item.avatar}
                            width={112}
                          />
                        </span>
                        <div>
                          <div className="testimonial-stars" aria-label={`${item.rating} de 5 estrellas`}>
                            {Array.from({ length: item.rating }).map((_, starIndex) => (
                              <Star key={`${item.name}-star-${starIndex}`} />
                            ))}
                          </div>
                          <p className="mt-1 font-heading text-[0.94rem] font-extrabold text-brand-blue">
                            {item.name}
                          </p>
                          <p className="text-[0.76rem] font-semibold text-brand-blue/54">
                            {item.role} · {item.context}
                          </p>
                        </div>
                      </div>

                      <p className="relative z-[1] mt-4 text-pretty text-[0.94rem] font-medium leading-7 text-brand-blue/78">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
