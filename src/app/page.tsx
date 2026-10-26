import {
  AcademyFooter,
  AcademyLanding,
} from "@/components/edition-2027/AcademyLanding";
import { Cta } from "@/components/edition-2027/Elements";
import { Header } from "@/components/shared/Header";
import { academy } from "@/config/academy";
import { buildStructuredData } from "@/config/structured-data";
import "@/components/edition-2027/edition.css";

export default function Home() {
  const structuredData = buildStructuredData();

  return (
    <div className="gps-v2">
      <a className="gps-skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <AcademyLanding />
      <AcademyFooter />
      <aside
        className="gps-mobile-cta"
        aria-label="Inscripción a la Trilogía TOL"
      >
        <div>
          <small>Edición {academy.edition}</small>
          <strong>Trilogía TOL 2.0</strong>
        </div>
        <Cta>Ver inversión</Cta>
      </aside>
    </div>
  );
}
