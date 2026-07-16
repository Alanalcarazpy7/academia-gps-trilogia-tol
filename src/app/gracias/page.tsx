import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gracias, tu lugar esta reservado | Academia GPS",
  robots: { index: false, follow: false },
};

const nextSteps = [
  "Revisa tu correo: ahi te enviaremos la confirmacion y los datos de acceso.",
  "Sumate al canal o grupo indicado por Academia GPS para novedades y acompanamiento.",
  "Guarda la fecha de la primera sesion en vivo. Te avisaremos con anticipacion.",
] as const;

export default function GraciasPage() {
  const whatsappCta = getPrimaryWhatsappCta();

  return (
    <main className="thanks-surface relative isolate flex min-h-screen items-center overflow-hidden py-16">
      <Container className="relative z-[1] mx-auto max-w-[620px] text-center">
        <Image
          alt={brand.name}
          className="mx-auto h-9 w-auto"
          height={40}
          src={brand.assets.academiaGpsLogo}
          width={160}
        />

        <span className="thanks-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>

        <h1 className="mt-6 text-balance font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold leading-[1.15] text-brand-blue">
          Gracias, tu lugar en la Trilogia TOL esta en camino
        </h1>
        <p className="mt-4 text-pretty text-[1.02rem] font-medium leading-7 text-brand-blue/64">
          Estamos procesando tu inscripcion. En breve vas a recibir los detalles para empezar.
        </p>

        <div className="thanks-steps mt-8 text-left">
          {nextSteps.map((step, index) => (
            <div className="thanks-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            className="btn-outline-whatsapp min-h-13 gap-2.5 border-brand-teal/55 bg-white px-6 text-brand-teal"
            href={whatsappCta.href}
            isPlaceholder={whatsappCta.isPlaceholder}
            variant="secondary"
          >
            {siteConfig.heroWhatsappCtaLabel}
          </Button>
          <Link className="text-[0.9rem] font-bold text-brand-blue/60 underline underline-offset-4 hover:text-brand-blue" href="/">
            Volver al inicio
          </Link>
        </div>
      </Container>
    </main>
  );
}
