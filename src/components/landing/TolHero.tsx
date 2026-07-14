import Image from "next/image";
import { brand } from "@/config/brand";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const heroSummary =
  "Ordena finanzas, marketing y liderazgo para hacer crecer tu clinica con claridad.";

const heroBenefits = [
  "3 programas completos",
  "20 sesiones en vivo",
  "4 meses de acompanamiento",
] as const;

const socialProfiles = ["Dra.", "Od.", "Lic."] as const;

export function TolHero() {
  const paymentCta = getPrimaryPaymentCta();
  const whatsappCta = getPrimaryWhatsappCta();

  return (
    <section
      id="inicio"
      className="hero-premium-surface relative isolate overflow-hidden bg-brand-cream"
      aria-labelledby="hero-title"
    >
      <Container className="relative grid grid-cols-1 gap-6 pb-8 pt-6 sm:py-8 lg:h-[700px] lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] lg:items-center lg:gap-x-10 lg:py-5 xl:gap-x-14">
        <div className="animate-hero-stage max-w-[750px]">
          <div className="mb-5 inline-flex items-center gap-3 rounded-[26px] border border-white/70 bg-white/78 p-2 pr-4 shadow-[0_18px_46px_rgba(0,72,119,0.11)]">
            <span className="flex h-12 w-[110px] items-center justify-center rounded-[18px] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(0,72,119,0.1)]">
              <Image
                src={brand.assets.academiaGpsLogo}
                alt="Academia GPS"
                width={154}
                height={56}
                className="h-8 w-auto"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-teal">
                Presenta
              </span>
              {/* TODO: reemplazar por logo oficial de La Trilogia TOL cuando la clienta lo entregue */}
              <span className="block font-heading text-[1.65rem] font-extrabold leading-none text-brand-blue sm:text-[1.85rem]">
                {siteConfig.heroWordmark}
              </span>
            </span>
          </div>

          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-teal">
            {siteConfig.heroKicker}
          </p>

          <h1
            id="hero-title"
            className="max-w-[720px] text-balance font-heading text-[clamp(2.55rem,9vw,3.6rem)] font-extrabold leading-[0.98] text-brand-blue sm:text-[clamp(3rem,5.1vw,4rem)] lg:text-[clamp(3.05rem,3.55vw,3.95rem)]"
          >
            {siteConfig.headline}
          </h1>

          <p className="mt-4 max-w-[560px] text-pretty text-[1rem] font-semibold leading-7 text-brand-blue/72 lg:text-base">
            {heroSummary}
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="hero-offer-card w-full sm:w-auto" aria-label="50% de ahorro hasta el 31 de julio">
              <span className="font-heading text-[2.4rem] font-extrabold leading-none text-brand-blue">
                50%
              </span>
              <span className="text-left text-xs font-extrabold leading-4 text-brand-blue/78">
                de ahorro
                <br />
                hasta el 31 de julio
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="hero-buy-button group min-h-14 w-full gap-3 px-5 text-[0.96rem] sm:w-auto sm:min-w-[244px]"
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
                className="min-h-14 border-brand-teal/55 bg-white/78 px-5 text-brand-teal shadow-none hover:border-brand-teal hover:bg-white hover:text-brand-blue"
                href={whatsappCta.href}
                isPlaceholder={whatsappCta.isPlaceholder}
                size="lg"
                variant="secondary"
              >
                {siteConfig.heroWhatsappCtaLabel}
              </Button>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-[24px] border border-brand-blue/10 bg-white/70 p-3 shadow-[0_18px_44px_rgba(0,72,119,0.08)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {socialProfiles.map((profile) => (
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-brand-blue text-[10px] font-extrabold text-white shadow-[0_8px_18px_rgba(0,72,119,0.14)]"
                    key={profile}
                  >
                    {profile}
                  </span>
                ))}
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-brand-yellow text-xs font-extrabold text-brand-blue shadow-[0_8px_18px_rgba(230,198,25,0.2)]">
                  +
                </span>
              </div>
              <p className="text-sm font-extrabold leading-5 text-brand-blue">
                Mas de [X] profesionales acompanados
                <span className="block text-[11px] font-semibold text-brand-blue/56">
                  Placeholder editable para dato real de Academia GPS
                </span>
              </p>
            </div>
            <p className="text-xs font-semibold leading-5 text-brand-blue/54">
              {siteConfig.trustLine}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {heroBenefits.map((benefit) => (
              <span
                className="rounded-full border border-brand-blue/10 bg-white/66 px-3 py-2 text-xs font-extrabold text-brand-blue/70"
                key={benefit}
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <figure className="animate-hero-stage-delayed relative mx-auto w-full max-w-[420px] lg:max-w-[490px]">
          <div className="absolute -left-5 top-8 hidden h-[82%] w-[68%] -rotate-3 rounded-[34px] bg-brand-blue/12 shadow-[0_30px_80px_rgba(0,72,119,0.12)] lg:block" />
          <div className="hero-photo-shell overflow-hidden rounded-[32px] bg-white p-2">
            <div className="relative overflow-hidden rounded-[26px] bg-white">
              <Image
                src={siteConfig.assets.heroImage}
                alt={siteConfig.assets.heroImageAlt}
                width={1280}
                height={1706}
                className="h-[330px] w-full object-cover object-[52%_30%] sm:h-[400px] lg:h-[490px] xl:h-[510px]"
                sizes="(max-width: 768px) 88vw, (max-width: 1200px) 38vw, 490px"
                preload
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-blue shadow-[0_10px_24px_rgba(0,72,119,0.13)]">
                Formacion guiada
              </div>
            </div>

            <figcaption className="flex items-center justify-between gap-4 px-3 pb-3 pt-4">
              <span>
                <span className="block font-heading text-lg font-extrabold leading-tight text-brand-blue">
                  Dra. Nidia Carolina
                </span>
                <span className="mt-0.5 block text-sm font-medium text-brand-blue/58">
                  Fundadora de Academia GPS
                </span>
              </span>
              <span className="hidden rounded-full border border-brand-teal/18 bg-brand-cream px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-teal sm:inline-flex">
                Academia GPS
              </span>
            </figcaption>
          </div>

          <div className="absolute -right-4 top-20 hidden w-28 rotate-3 rounded-[18px] border border-white/80 bg-white p-1.5 shadow-[0_18px_42px_rgba(0,72,119,0.16)] sm:block">
            <Image
              src="/images/dra-nidia/dra-nidia-autoridad.jpeg"
              alt="Dra. Nidia Carolina en una instancia de formacion profesional."
              width={500}
              height={500}
              className="aspect-square rounded-[14px] object-cover object-[50%_30%]"
            />
          </div>

          <div className="absolute -left-5 bottom-28 hidden w-28 -rotate-2 rounded-[18px] border border-white/80 bg-white p-1.5 shadow-[0_18px_42px_rgba(0,72,119,0.16)] lg:block">
            <Image
              src="/images/dra-nidia/dra-nidia-sentada.jpeg"
              alt="Dra. Nidia Carolina en un entorno profesional."
              width={500}
              height={500}
              className="aspect-square rounded-[14px] object-cover object-[50%_28%]"
            />
          </div>
        </figure>
      </Container>

      <div className="hidden bg-brand-blue py-4 text-white lg:block">
        <Container className="flex items-center justify-center gap-8 text-center">
          <p className="font-heading text-xl font-extrabold">
            El siguiente paso es dirigir con estrategia.
          </p>
          <p className="max-w-[460px] text-sm font-semibold text-white/72">
            La metodologia GPS conecta numeros, marketing y liderazgo clinico.
          </p>
        </Container>
      </div>

      <span id="pagopar-pendiente" className="sr-only">
        Enlaces de Pagopar pendientes de confirmacion.
      </span>
      <span id="metodologia" className="sr-only">
        Metodologia GPS pendiente de implementacion.
      </span>
      <span id="programas" className="sr-only">
        Programas TOL pendientes de implementacion.
      </span>
      <span id="inversion" className="sr-only">
        Inversion pendiente de implementacion.
      </span>
      <span id="preguntas-frecuentes" className="sr-only">
        Preguntas frecuentes pendientes de implementacion.
      </span>
    </section>
  );
}
