"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const accents = ["#008080", "#e6c619", "#004877", "#76a858", "#008080"] as const;
const SPEED_PX_PER_SEC = 30;

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
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const halfWidthRef = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    let last = performance.now();
    let rafId: number;

    function step(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      if (track) {
        if (!pausedRef.current) {
          track.scrollLeft += SPEED_PX_PER_SEC * dt;
        }
        const half = halfWidthRef.current;
        if (half > 0) {
          if (track.scrollLeft >= half) track.scrollLeft -= half;
          if (track.scrollLeft < 0) track.scrollLeft += half;
        }
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  function nudge(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[0] as HTMLElement | undefined;
    if (!slide) return;
    const step = slide.offsetWidth + 20;
    setPaused(true);
    track.scrollBy({ left: direction * step, behavior: "smooth" });
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 2400);
  }

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

        <Reveal className="mx-auto max-w-[680px] text-center" as="div">
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
          <div
            className="testimonial-carousel mx-auto mt-10 max-w-[1100px] sm:mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="testimonial-track" ref={trackRef} role="region" aria-label="Testimonios de alumnos">
              {loopItems.map((item, i) => (
                <article
                  className="testimonial-slide"
                  key={`${item.name}-${i}`}
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

            <div className="mt-7 flex items-center justify-center gap-5">
              <button
                aria-label="Testimonio anterior"
                className="testimonial-nav-btn"
                onClick={() => nudge(-1)}
                type="button"
              >
                &larr;
              </button>
              <button
                aria-label="Testimonio siguiente"
                className="testimonial-nav-btn"
                onClick={() => nudge(1)}
                type="button"
              >
                &rarr;
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
