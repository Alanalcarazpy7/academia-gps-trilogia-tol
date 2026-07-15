"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TolFaq() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="preguntas-frecuentes"
      className="faq-surface relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-title"
    >
      <Container className="relative z-[1]">
        <span className="faq-ghost-mark" aria-hidden="true">
          ?
        </span>

        <Reveal className="mx-auto max-w-[640px] text-center" as="div">
          <span className="section-eyebrow !border-brand-blue/14 !bg-brand-blue/6 !text-brand-blue">
            {faq.eyebrow}
          </span>
          <h2
            id="faq-title"
            className="mt-4 text-balance font-heading text-[clamp(1.7rem,3.6vw,2.35rem)] font-extrabold leading-[1.16] text-brand-blue"
          >
            {faq.headline}
          </h2>
          <p className="mt-4 text-pretty text-[0.96rem] font-medium leading-7 text-brand-blue/58">
            {faq.supportLine}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="faq-list mx-auto mt-10 max-w-[760px] sm:mt-12">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div className="faq-item" data-open={isOpen} key={item.question}>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="faq-question"
                    id={`faq-question-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    type="button"
                  >
                    <span className="faq-question-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="faq-closing mx-auto mt-9 max-w-[640px] text-center sm:mt-10">
            <span>{faq.closingLead}</span>
            <strong>{faq.closingEmphasis}</strong>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
