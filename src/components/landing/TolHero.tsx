import Image from "next/image";
import { brand } from "@/config/brand";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const visibleBenefits = siteConfig.heroBenefits.slice(0, 3);

export function TolHero() {
  const paymentCta = getPrimaryPaymentCta();
  const whatsappCta = getPrimaryWhatsappCta();

  return (
    <section
      id="inicio"
      className="hero-premium-surface relative isolate overflow-hidden bg-brand-cream"
      aria-labelledby="hero-title"
    >
      <Container className="relative grid grid-cols-1 gap-7 pb-8 pt-6 sm:py-8 lg:min-h-[720px] lg:grid-cols-[minmax(0,0.98fr)_minmax(400px,0.76fr)] lg:items-center lg:gap-x-11 lg:py-7 xl:gap-x-14">
        <div className="animate-hero-stage max-w-[760px]">
          <div className="mb-4 inline-flex max-w-full items-center rounded-[24px] border border-white/80 bg-white/78 px-4 py-3 shadow-[0_16px_42px_rgba(0,72,119,0.09)]">
            <Image
              src={brand.assets.trilogiaTolLogo}
              alt={siteConfig.heroWordmark}
              width={330}
              height={186}
              className="h-16 w-auto sm:h-[4.6rem] lg:h-[4.35rem]"
            />
          </div>

          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-teal sm:text-[11px]">
            {siteConfig.heroKicker}
          </p>

          <h1
            id="hero-title"
            className="max-w-[710px] text-balance font-heading text-[clamp(2.35rem,8vw,3.3rem)] font-extrabold leading-[0.98] text-brand-blue sm:text-[clamp(2.9rem,4.8vw,3.6rem)] lg:text-[clamp(3rem,3.18vw,3.6rem)]"
          >
            {siteConfig.headline}
          </h1>

          <p className="mt-4 max-w-[620px] text-pretty text-[1rem] font-semibold leading-7 text-brand-blue/74 sm:text-[1.05rem] lg:mt-4">
            {siteConfig.supportLine}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {visibleBenefits.map((benefit) => (
              <span
                className="rounded-full border border-brand-blue/10 bg-white/70 px-3.5 py-2 text-[11px] font-extrabold text-brand-blue/70 shadow-[0_8px_18px_rgba(0,72,119,0.05)]"
                key={benefit}
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="hero-offer-card w-max" aria-label={siteConfig.offer.value}>
              <span>{siteConfig.offerPill}</span>
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              className="hero-buy-button group min-h-14 w-full gap-3 px-5 text-[0.96rem] sm:w-auto sm:min-w-[238px]"
              href={paymentCta.href}
              isPlaceholder={paymentCta.isPlaceholder}
              size="lg"
            >
              <span>{siteConfig.heroPrimaryCtaLabel}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/14 text-lg leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                →
              </span>
            </Button>

            <Button
              className="hero-whatsapp-button min-h-14 border-brand-teal/55 bg-white/78 px-5 text-brand-teal shadow-none hover:border-brand-teal hover:text-brand-blue"
              href={whatsappCta.href}
              isPlaceholder={whatsappCta.isPlaceholder}
              size="lg"
              variant="secondary"
            >
              {siteConfig.heroWhatsappCtaLabel}
            </Button>
          </div>

          <div className="mt-3 flex max-w-[610px] flex-col gap-2.5 sm:flex-row sm:items-center">
            <div className="flex -space-x-3" aria-hidden="true">
              {siteConfig.socialProof.avatars.map((avatar, index) => (
                <Image
                  alt=""
                  className="h-10 w-10 rounded-full object-cover object-[50%_20%] ring-2 ring-white shadow-[0_8px_18px_rgba(0,72,119,0.12)]"
                  height={64}
                  key={avatar}
                  src={avatar}
                  width={64}
                  style={{ zIndex: siteConfig.socialProof.avatars.length - index }}
                />
              ))}
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-extrabold leading-5 text-brand-blue/72">
                {siteConfig.socialProof.label}
              </p>
              <p className="text-[11px] font-semibold leading-5 text-brand-blue/50">
                {siteConfig.trustLine}
              </p>
            </div>
          </div>
        </div>

        <figure className="animate-hero-stage-delayed relative mx-auto w-full max-w-[410px] sm:max-w-[455px] lg:max-w-[500px]">
          <div className="absolute -left-5 top-8 hidden h-[78%] w-[62%] -rotate-3 rounded-[32px] bg-brand-blue/10 shadow-[0_28px_74px_rgba(0,72,119,0.11)] lg:block" />

          <div className="hero-photo-shell overflow-hidden rounded-[30px] bg-white p-2">
            <div className="relative overflow-hidden rounded-[24px] bg-white">
              <Image
                src={siteConfig.assets.heroImage}
                alt={siteConfig.assets.heroImageAlt}
                width={1280}
                height={1706}
                className="h-[320px] w-full object-cover object-[52%_30%] sm:h-[410px] lg:h-[500px] xl:h-[520px]"
                sizes="(max-width: 768px) 88vw, (max-width: 1200px) 40vw, 500px"
                preload
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/94 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-blue shadow-[0_10px_24px_rgba(0,72,119,0.12)]">
                Formación guiada
              </span>
            </div>

            <figcaption className="flex items-center justify-between gap-3 px-3 pb-2.5 pt-3">
              <span>
                <span className="block font-heading text-[1.05rem] font-extrabold leading-tight text-brand-blue">
                  {siteConfig.authority.name}
                </span>
                <span className="mt-0.5 block text-[0.82rem] font-medium text-brand-blue/58">
                  {siteConfig.authority.role}
                </span>
              </span>
              <span className="hidden rounded-full border border-brand-teal/18 bg-brand-cream px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-brand-teal sm:inline-flex">
                Academia GPS
              </span>
            </figcaption>
          </div>

          <div className="absolute -right-7 top-20 hidden w-32 rotate-3 rounded-[20px] border border-white/90 bg-white p-1.5 shadow-[0_18px_42px_rgba(0,72,119,0.17)] sm:block">
            <Image
              src="/images/dra-nidia/dra-nidia-autoridad.jpeg"
              alt="Dra. Nidia Carolina en una instancia de formación profesional."
              width={500}
              height={500}
              className="aspect-square rounded-[13px] object-cover object-[50%_30%]"
            />
          </div>

          <div className="absolute -left-8 bottom-28 hidden w-32 -rotate-2 rounded-[20px] border border-white/90 bg-white p-1.5 shadow-[0_18px_42px_rgba(0,72,119,0.17)] lg:block">
            <Image
              src="/images/dra-nidia/dra-nidia-sentada.jpeg"
              alt="Dra. Nidia Carolina en un entorno profesional."
              width={500}
              height={500}
              className="aspect-square rounded-[13px] object-cover object-[50%_28%]"
            />
          </div>
        </figure>
      </Container>

      <span id="pagopar-pendiente" className="sr-only">
        Enlaces de Pagopar pendientes de confirmación.
      </span>
      <span id="metodologia" className="sr-only">
        Metodología GPS pendiente de implementación.
      </span>
      <span id="programas" className="sr-only">
        Programas TOL pendientes de implementación.
      </span>
      <span id="inversion" className="sr-only">
        Inversión pendiente de implementación.
      </span>
      <span id="preguntas-frecuentes" className="sr-only">
        Preguntas frecuentes pendientes de implementación.
      </span>
    </section>
  );
}
