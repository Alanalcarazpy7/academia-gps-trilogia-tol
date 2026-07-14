import Image from "next/image";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const heroHighlights = ["Finanzas", "Marketing", "Liderazgo"] as const;

export function TolHero() {
  const paymentCta = getPrimaryPaymentCta();
  const whatsappCta = getPrimaryWhatsappCta();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-cream"
      aria-labelledby="hero-title"
    >
      <Container className="grid min-h-[calc(100dvh-124px)] items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:py-16">
        <div className="max-w-3xl">
          <div
            className="mb-8 inline-flex flex-col gap-1 rounded-[18px] border border-brand-blue/20 bg-white/80 px-5 py-4 shadow-[0_16px_44px_rgba(0,72,119,0.08)]"
            data-logo-slot="trilogia-tol-svg-pending"
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-brand-teal">
              Academia GPS presenta
            </span>
            <span className="font-heading text-3xl font-extrabold leading-none text-brand-blue sm:text-4xl">
              La <span className="text-brand-teal">Trilogía</span>{" "}
              <span className="text-brand-green">TOL</span>
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-heading text-4xl font-extrabold leading-[1.06] text-brand-blue sm:text-5xl lg:text-6xl"
          >
            {siteConfig.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/80">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={paymentCta.href} isPlaceholder={paymentCta.isPlaceholder}>
              {paymentCta.label}
            </Button>
            <Button
              href={whatsappCta.href}
              isPlaceholder={whatsappCta.isPlaceholder}
              variant="secondary"
            >
              {whatsappCta.label}
            </Button>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3" id="programas">
            {heroHighlights.map((highlight) => (
              <div
                className="border-l-4 border-brand-yellow bg-white/70 px-4 py-3"
                key={highlight}
              >
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                  Pilar TOL
                </dt>
                <dd className="mt-1 font-heading text-xl font-bold text-brand-blue">
                  {highlight}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <figure className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_28px_70px_rgba(0,72,119,0.18)]">
            <Image
              src={siteConfig.assets.heroImage}
              alt={siteConfig.assets.heroImageAlt}
              width={1280}
              height={1706}
              className="aspect-[4/5] h-auto w-full object-cover object-[52%_42%]"
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 520px"
              preload
            />
          </figure>
          <div
            className="absolute -bottom-5 left-5 right-5 bg-brand-blue px-5 py-4 text-white shadow-[0_18px_38px_rgba(0,72,119,0.2)]"
            id="contacto-pendiente"
          >
            <p className="text-sm font-semibold">
              Acompañamiento para pasar de atender pacientes a dirigir con claridad.
            </p>
          </div>
        </div>
      </Container>
      <span id="pagopar-pendiente" className="sr-only">
        Enlaces de Pagopar pendientes de confirmación.
      </span>
      <span id="metodologia" className="sr-only">
        Metodología GPS pendiente de implementación.
      </span>
      <span id="inscripcion" className="sr-only">
        Bloque de inscripción pendiente de implementación.
      </span>
    </section>
  );
}
