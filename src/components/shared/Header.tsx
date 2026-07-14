import Image from "next/image";
import { brand } from "@/config/brand";
import { navigationItems } from "@/config/navigation";
import { getPrimaryPaymentCta } from "@/config/payment-links";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const paymentCta = getPrimaryPaymentCta();

  return (
    <header className="sticky top-0 z-30 border-b border-brand-blue/10 bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          href="#inicio"
          aria-label="Ir al inicio de Academia GPS"
        >
          <Image
            src={brand.assets.academiaGpsLogo}
            alt="Academia GPS"
            width={154}
            height={56}
            className="h-11 w-auto"
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 text-sm font-semibold text-brand-blue/80 lg:flex"
        >
          {navigationItems.map((item) => (
            <a
              className="transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          className="hidden min-w-36 px-5 lg:inline-flex"
          href={paymentCta.href}
          isPlaceholder={paymentCta.isPlaceholder}
        >
          {paymentCta.label}
        </Button>
      </Container>
    </header>
  );
}
