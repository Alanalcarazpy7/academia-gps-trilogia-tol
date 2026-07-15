import Image from "next/image";
import { brand } from "@/config/brand";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const whatsappCta = getPrimaryWhatsappCta();
  const { footer } = siteConfig;

  return (
    <footer className="site-footer relative isolate overflow-hidden py-14 sm:py-16">
      <Container className="relative z-[1]">
        <div className="footer-grid">
          <div className="footer-col">
            <a className="footer-logo-badge" href="#inicio">
              <Image
                alt={brand.name}
                height={40}
                src={brand.assets.academiaGpsLogoDark}
                width={160}
                className="h-8 w-auto"
              />
            </a>
            <p className="mt-4 font-heading text-[0.95rem] font-extrabold text-white">
              {siteConfig.heroWordmark}
            </p>
            <p className="mt-2.5 max-w-[300px] text-[0.86rem] font-medium leading-6 text-white/48">
              {footer.tagline}
            </p>
          </div>

          <div className="footer-col">
            <span className="footer-heading">{footer.quickLinksLabel}</span>
            <nav className="mt-3 flex flex-col" aria-label="Enlaces del footer">
              {footer.quickLinks.map((link) => (
                <a className="footer-link" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <span className="footer-heading">{footer.contactLabel}</span>
            <div className="mt-3">
              <a className="footer-whatsapp-btn" href={whatsappCta.href}>
                <span className="footer-whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.55 0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.69 1.24h.01c5.26 0 9.55-4.28 9.55-9.55S17.3 2.5 12.04 2.5Zm5.6 13.47c-.24.66-1.38 1.27-1.9 1.34-.49.07-1.05.1-3.29-.7-2.78-1-4.55-3.85-4.7-4.03-.13-.18-1.12-1.49-1.12-2.84 0-1.36.71-2.02.97-2.3.24-.27.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.58.8 2 .87 2.15.07.15.11.32.02.5-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.13.56.16.28.7 1.16 1.51 1.87 1.04.92 1.91 1.21 2.19 1.34.28.14.44.12.6-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.12.07.68-.16 1.34Z" />
                  </svg>
                </span>
                <span className="footer-whatsapp-label">
                  <strong>{siteConfig.heroWhatsappCtaLabel}</strong>
                  <span>Enviar mensaje directo</span>
                </span>
              </a>
              <p className="mt-3 text-[0.8rem] font-medium leading-6 text-white/40">
                {siteConfig.trustLine}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider flex flex-col-reverse items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.78rem] font-medium text-white/40">{footer.legal}</p>

          <a
            className="footer-credit-badge"
            href={footer.developedByHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="footer-credit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
            <span className="text-[0.82rem] font-medium">
              {footer.developedByLabel} <strong>{footer.developedByName}</strong>
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
