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
              <a className="footer-link" href={whatsappCta.href}>
                {siteConfig.heroWhatsappCtaLabel}
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
