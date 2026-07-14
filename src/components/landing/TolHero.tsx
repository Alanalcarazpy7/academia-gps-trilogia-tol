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
      <Container className="relative grid grid-cols-1 gap-7 pb-10 pt-6 sm:py-8 lg:min-h-[min(calc(100svh-100px),840px)] lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.86fr)] lg:items-center lg:gap-x-12 lg:py-8 xl:gap-x-16">
        <div className="animate-hero-stage max-w-[760px]">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-blue/45">
            {siteConfig.heroWordmarkLabel}
          </p>

          <div className="group/tol-logo relative mb-3 inline-flex max-w-full items-center overflow-hidden rounded-[20px] border border-white/78 bg-white/58 px-3 py-2.5 shadow-[0_12px_34px_rgba(0,72,119,0.075),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-xl transition-[box-shadow,transform,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-brand-yellow/32 hover:shadow-[0_16px_42px_rgba(0,72,119,0.105),inset_0_1px_0_rgba(255,255,255,0.95)]">
            <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/58 to-transparent" />
            <Image
              src={brand.assets.trilogiaTolLogo}
              alt={siteConfig.heroWordmark}
              width={676}
              height={350}
              className="relative h-[3.1rem] w-auto drop-shadow-[0_10px_16px_rgba(0,72,119,0.10)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/tol-logo:scale-[1.02] sm:h-[3.7rem] lg:h-[4.15rem]"
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
            <span
              className="pill-offer w-max"
              aria-label={siteConfig.offer.value}
            >
              <span>{siteConfig.offerPill}</span>
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              className="btn-glow-primary group min-h-14 w-full gap-3 px-5 text-[0.96rem] sm:w-auto sm:min-w-62"
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
              className="btn-outline-whatsapp min-h-14 gap-2.5 border-brand-teal/55 bg-white/78 px-5 text-brand-teal shadow-none hover:border-brand-teal hover:text-brand-blue"
              href={whatsappCta.href}
              isPlaceholder={whatsappCta.isPlaceholder}
              size="lg"
              variant="secondary"
            >
              <svg
                aria-hidden="true"
                className="h-4.5 w-4.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.85.5 3.63 1.44 5.19L2 22l4.94-1.4a9.96 9.96 0 0 0 5.07 1.38h.01c5.52 0 10-4.48 10-10.01C22.02 6.48 17.54 2 12.01 2Zm5.85 14.32c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.24.2-3.6-.77-3.02-1.25-4.96-4.32-5.11-4.52-.15-.2-1.22-1.62-1.22-3.09s.75-2.19 1.02-2.49c.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.25.6.83 2.07.9 2.22.07.15.11.32.02.52-.09.2-.14.32-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.15.28.68 1.14 1.47 1.85 1.01.92 1.86 1.2 2.14 1.34.28.14.44.12.61-.07.17-.2.71-.83.9-1.11.19-.28.38-.24.63-.15.25.09 1.61.77 1.89.91.28.14.46.21.53.33.07.12.07.68-.18 1.38Z" />
              </svg>
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
                  style={{
                    zIndex: siteConfig.socialProof.avatars.length - index,
                  }}
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

        <figure className="composition-group group animate-hero-stage-delayed relative mx-auto w-full max-w-[430px] pt-3 sm:max-w-[500px] sm:pt-4 lg:max-w-[560px] lg:pt-6 xl:max-w-[600px]">
          <div className="absolute -left-3 top-2 hidden h-[86%] w-[68%] -rotate-3 rounded-[36px] bg-gradient-to-br from-brand-teal/14 to-brand-blue/8 shadow-[0_30px_78px_rgba(0,72,119,0.12)] lg:block" />

          <div className="photo-frame-premium overflow-hidden rounded-[30px] bg-white p-2 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div className="relative overflow-hidden rounded-[24px] bg-white">
              <Image
                src={siteConfig.assets.heroImage}
                alt={siteConfig.assets.heroImageAlt}
                width={1280}
                height={1706}
                className="h-[340px] w-full object-cover object-[52%_28%] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] sm:h-[440px] lg:h-[540px] xl:h-[580px]"
                sizes="(max-width: 768px) 88vw, (max-width: 1200px) 44vw, 560px"
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

          <div className="thumb-float absolute -right-3 top-16 hidden w-36 rotate-3 rounded-[22px] border-2 border-brand-yellow/70 bg-white p-1.5 shadow-[0_20px_46px_rgba(0,72,119,0.18)] sm:block sm:translate-x-6 lg:-right-3 lg:w-40 lg:translate-x-14">
            <Image
              src="/images/dra-nidia/dra-nidia-autoridad.jpeg"
              alt="Dra. Nidia Carolina de pie, en una postura de liderazgo profesional."
              width={500}
              height={500}
              className="aspect-square rounded-[16px] object-cover object-[50%_28%]"
            />
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-blue px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(0,72,119,0.24)]">
              Liderazgo
            </span>
          </div>

          <div className="thumb-float absolute -left-4 bottom-16 hidden w-36 -translate-x-2 -rotate-2 rounded-[22px] border border-white/90 bg-white p-1.5 shadow-[0_20px_46px_rgba(0,72,119,0.18)] sm:block lg:bottom-20 lg:-left-8 lg:w-40 lg:-translate-x-4">
            <Image
              src="/images/dra-nidia/dra-nidia-tablet.jpeg"
              alt="Dra. Nidia Carolina revisando indicadores de su clínica en una tablet."
              width={500}
              height={500}
              className="aspect-square rounded-[16px] object-cover object-[52%_25%]"
            />
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-brand-teal shadow-[0_10px_20px_rgba(0,72,119,0.16)]">
              Gestión clínica
            </span>
          </div>
        </figure>
      </Container>

      <div className="hero-floor-shadow" aria-hidden="true" />

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
