import Image from "next/image";
import { academy } from "@/config/academy";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { Container } from "@/components/ui/Container";
import { DisclosureLink } from "./DisclosureLink";
import { Cta, Icon } from "./Elements";

const exploreLinks = [
  { label: "Tu experiencia", href: "#beneficios" },
  { label: "Cómo aprendés", href: "#metodologia" },
  { label: "Inversión y beneficios", href: "#inversion" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
];

export function AcademyFooter() {
  const whatsapp = getPrimaryWhatsappCta();

  return (
    <footer className="gps-footer">
      <Container className="gps-footer-layout">
        <div className="gps-footer-main">
          <div className="gps-footer-brand">
            <a className="gps-footer-logo" href="#inicio" aria-label="Academia GPS, volver al inicio">
              <Image
                src={academy.assets.logo}
                alt="Academia GPS · Aprendizajes que transforman"
                width={640}
                height={316}
                sizes="155px"
              />
            </a>
            <p>Finanzas, marketing y liderazgo para dirigir una clínica rentable y humana.</p>
            <span className="gps-footer-edition">{academy.product} · Edición {academy.edition}</span>
          </div>

          <div className="gps-footer-column">
            <h2>Las tres formaciones</h2>
            <nav className="gps-footer-programs" aria-label="Formaciones de Academia GPS">
              {academy.programs.map((program) => (
                <a key={program.id} href={`#${program.id}`}>
                  <strong>{program.name}</strong>
                  <span>{program.title}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="gps-footer-column">
            <h2>Explorá el programa</h2>
            <nav aria-label="Enlaces del pie de página">
              {exploreLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label} <Icon name="arrow" />
                </a>
              ))}
            </nav>
          </div>

          <div className="gps-footer-column gps-footer-contact">
            <h2>Estamos para acompañarte</h2>
            <Cta href={whatsapp.href} external>Consultar inscripciones</Cta>
            <a className="gps-footer-phone" href={`tel:+${academy.contact.phone}`}>
              {academy.contact.displayPhone}
            </a>
            <a className="gps-footer-campus" href="/campus">
              <Icon name="book" /> Acceso al Campus <Icon name="arrow" />
            </a>
            <nav className="gps-footer-socials" aria-label="Redes sociales de Academia GPS">
              {academy.social.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label === "Instagram" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M14 21v-8h3l.5-3H14V8c0-1 .3-1.5 1.6-1.5H18V3.7c-.5-.1-1.6-.2-2.7-.2-2.7 0-4.3 1.5-4.3 4.3V10H8v3h3v8h3Z" />
                    </svg>
                  )}
                  {social.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="gps-footer-bottom">
          <div className="gps-footer-legal">
            <p>© {new Date().getFullYear()} Academia GPS. Todos los derechos reservados.</p>
            <DisclosureLink targetId="condiciones-garantia">Condiciones de garantía</DisclosureLink>
          </div>
          <a
            className="gps-developer-credit"
            href="https://solvatech.com.py/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Desarrollado por SolvaTech. Visitar su sitio web (abre una nueva pestaña)"
            title="Diseño y desarrollo web por SolvaTech"
          >
            <span className="gps-developer-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" />
              </svg>
            </span>
            <span className="gps-developer-copy"><span>Desarrollado por</span><strong>SolvaTech</strong></span>
            <span className="gps-developer-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
