import Image from "next/image";
import { academy } from "@/config/academy";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { Container } from "@/components/ui/Container";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList, Cta, Eyebrow, Icon } from "./Elements";
import { Investment } from "./Investment";
import { DisclosureLink } from "./DisclosureLink";

function Hero() {
  return (
    <section id="inicio" className="gps-hero" aria-labelledby="hero-title">
      <Container className="gps-hero-layout">
        <div className="gps-hero-copy">
          <Eyebrow>
            {academy.product} · Edición {academy.edition}
          </Eyebrow>
          <h1 id="hero-title">
            {academy.hero.title}
            <br />
            <em>{academy.hero.emphasis}</em>
          </h1>
          <p className="gps-hero-subtitle">{academy.hero.subtitle}</p>
          <p className="gps-hero-connection">{academy.hero.connection}</p>
          <Cta>{academy.hero.cta}</Cta>
          <dl className="gps-hero-facts">
            <div>
              <dt>
                <Icon name="book" />
                {academy.programs.length} TOL
              </dt>
              <dd>Talleres online</dd>
            </div>
            <div>
              <dt>
                <Icon name="calendar" />
                {academy.liveSessions}
              </dt>
              <dd>Encuentros en vivo</dd>
            </div>
            <div>
              <dt>
                <Icon name="growth" />
                {academy.trainingMonths} meses
              </dt>
              <dd>De formación</dd>
            </div>
          </dl>
        </div>
        <div className="gps-hero-portrait">
          <Image
            src={academy.assets.portrait}
            alt="Dra. Nidia Carolina, directora de Academia GPS"
            width={1000}
            height={1501}
            sizes="(max-width: 767px) 100vw, 46vw"
            preload
          />
          <span className="gps-portrait-note">{academy.hero.handwritten}</span>
          <div className="gps-portrait-caption">
            <span>Dirección académica</span>
            <strong>{academy.director.name}</strong>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="gps-section gps-pains" aria-labelledby="pain-title">
      <Container>
        <div className="gps-centered-heading">
          <Eyebrow>¿Te identificás?</Eyebrow>
          <h2 id="pain-title">
            Tu clínica necesita algo más que{" "}
            <em>excelencia técnica profesional.</em>
          </h2>
          <p>
            Trabajás mucho, pero ¿tenés claridad sobre la rentabilidad, la
            captación de pacientes y la organización de tu equipo?
          </p>
        </div>
        <div className="gps-pain-grid">
          {academy.painPoints.map((point) => (
            <article key={point.title} className="gps-pain-card">
              <span className="gps-icon-disc">
                <Icon name={point.icon} />
              </span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Programs() {
  return (
    <section
      id="programas"
      className="gps-section gps-programs"
      aria-labelledby="programs-title"
    >
      <Container>
        <div className="gps-program-heading">
          <div>
            <Eyebrow light>Un método integral</Eyebrow>
            <h2 id="programs-title">
              La Trilogía <em>TOL 2.0</em>
            </h2>
          </div>
          <p>
            Tres formaciones integradas para dirigir tu clínica y convertirla en
            una verdadera empresa de salud.
          </p>
        </div>
        <div className="gps-program-grid">
          {academy.programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 75}>
              <article
                id={program.id}
                className={`gps-program-card gps-tone-${program.tone}`}
              >
                <div className="gps-program-top">
                  <span className="gps-program-mark">
                    <Image src={program.logo} alt={`Símbolo de ${program.name}`} width={140} height={144} sizes="58px" />
                  </span>
                  <span className="gps-program-tag">{program.name}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <CheckList items={program.topics} />
                <div className="gps-program-outcome">
                  <Icon name={program.icon} />
                  <strong>{program.outcome}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Experience() {
  const access = academy.progressiveAccess
    ? [
        "Acceso inmediato a TOL-Fi",
        "TOL-Mark y TOL-Coach habilitados progresivamente",
      ]
    : ["Acceso inmediato a TOL-Fi, TOL-Mark y TOL-Coach"];
  return (
    <section
      id="beneficios"
      className="gps-section gps-experience"
      aria-labelledby="experience-title"
    >
      <Container>
        <Eyebrow>Tu experiencia</Eyebrow>
        <h2 id="experience-title">
          Mucho más que <em>asistir a clases.</em>
        </h2>
        <p className="gps-section-intro">
          Formación, herramientas y acompañamiento para implementar lo que
          aprendés en tu clínica.
        </p>
        <div className="gps-experience-grid">
          <article className="gps-includes-card">
            <h3>Lo que incluye tu inscripción</h3>
            <CheckList
              items={[
                ...access,
                `${academy.liveSessions} sesiones online en vivo`,
                `${academy.trainingMonths} meses de formación y acompañamiento grupal`,
                `${academy.accessMonths} meses de acceso desde la clase inaugural`,
                ...academy.includes,
              ]}
            />
          </article>
          <article className="gps-plan-card">
            <div className="gps-plan-cover">
              <span>Tu clínica. Tu dirección.</span>
              <Icon name="growth" />
              <h3>
                Plan CEO
                <br />
                GPS Anual
              </h3>
              <span>Academia GPS</span>
            </div>
            <div>
              <Icon name="plan" />
              <h3>
                Un plan para dirigir
                <br />
                tu próximo año.
              </h3>
              <p>
                Tu Plan de Dirección Anual para tu Clínica con objetivos, metas,
                indicadores y ciclos de ejecución.
              </p>
              <div className="gps-class-date">
                <Icon name="calendar" />
                <div>
                  <strong>Clase inaugural en vivo</strong>
                  <time dateTime={academy.inauguralClass.iso}>
                    {academy.inauguralClass.dateLabel}
                  </time>
                  <span>{academy.inauguralClass.timeLabel}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div id="metodologia" className="gps-methodology">
          <p>Del aprendizaje a la implementación.</p>
          <ol>
            {academy.methodology.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Presentation() {
  return (
    <section
      id="directora"
      className="gps-section gps-presentation"
      aria-labelledby="presentation-title"
    >
      <Container>
        <div className="gps-presentation-grid">
          <div className="gps-video-story">
            <Eyebrow light>Conocé el programa</Eyebrow>
            <h2 id="presentation-title">
              Descubrí cómo funciona
              <br />
              <em>la Trilogía TOL.</em>
            </h2>
            <p>
              La Dra. Nidia Carolina te explica en qué consiste la Trilogía,
              cómo se integran sus tres formaciones y cómo aplicar este método
              en la dirección de tu clínica.
            </p>
            <VideoPlayer
              src={academy.assets.video}
              poster={academy.assets.videoPoster}
              label="Presentación de la Trilogía TOL 2.0 por la Dra. Nidia Carolina"
              sizes="(max-width: 767px) 90vw, 55vw"
            />
          </div>
          <article className="gps-director-card">
            <Image
              src={academy.assets.portrait}
              alt="Retrato de la Dra. Nidia Carolina"
              width={1000}
              height={1501}
              sizes="(max-width: 767px) 90vw, 32vw"
              className="gps-director-portrait"
            />
            <div>
              <Eyebrow>Dirección académica</Eyebrow>
              <h3>{academy.director.name}</h3>
              <p>{academy.director.biography}</p>
              <DisclosureLink
                className="gps-text-link"
                targetId="perfil-profesional"
              >
                Ver trayectoria profesional <Icon name="arrow" />
              </DisclosureLink>
            </div>
          </article>
        </div>
        <details id="perfil-profesional" className="gps-bio-details">
          <summary>
            La experiencia detrás del programa <span aria-hidden="true">+</span>
          </summary>
          <div>
            <p>
              La Trilogía TOL es la evolución de la formación en Gerencia en
              Salud desarrollada e impartida por la Dra. Nidia Carolina durante
              más de diez años en modalidad presencial.
            </p>
            <p>
              Su especialización en Neuroeducación Virtual incorpora
              metodologías, herramientas digitales y recursos de aprendizaje
              para llevar los conocimientos a la gestión de la clínica.
            </p>
          </div>
        </details>
      </Container>
    </section>
  );
}

function Outcomes() {
  return (
    <section
      id="resultados"
      className="gps-section gps-outcomes"
      aria-labelledby="outcomes-title"
    >
      <Container>
        <div className="gps-centered-heading">
          <Eyebrow>El cambio que podés construir</Eyebrow>
          <h2 id="outcomes-title">
            Una clínica más organizada,
            <br />
            <em>rentable y humana.</em>
          </h2>
          <p>
            Herramientas prácticas y acompañamiento para trabajar en cada área
            de tu clínica.
          </p>
        </div>
        <div className="gps-outcome-grid">
          {academy.outcomes.map((outcome) => (
            <article key={outcome.title}>
              <Icon name={outcome.icon} />
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Enrollment() {
  const whatsapp = getPrimaryWhatsappCta();
  return (
    <section
      id="inscripcion"
      className="gps-section gps-enrollment"
      aria-labelledby="enrollment-title"
    >
      <Container>
        <Eyebrow>Tu inscripción</Eyebrow>
        <h2 id="enrollment-title">
          Comenzar <em>es muy sencillo.</em>
        </h2>
        <ol className="gps-enrollment-steps">
          {academy.enrollment.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="gps-enrollment-contact">
          <p>Te acompañamos durante todo el proceso.</p>
          <Cta href={whatsapp.href} external>
            Quiero hacer mi inscripción
          </Cta>
        </div>
      </Container>
    </section>
  );
}

function Guarantee() {
  const whatsapp = getPrimaryWhatsappCta();
  return (
    <section
      id="garantia"
      className="gps-section gps-guarantee"
      aria-labelledby="guarantee-title"
    >
      <Container>
        <div className="gps-guarantee-layout">
          <div className="gps-guarantee-seal">
            <Icon name="shield" />
            <span>Garantía de satisfacción</span>
            <strong>
              100<small>%</small>
            </strong>
            <span>{academy.guaranteeDays} días corridos desde tu acceso</span>
          </div>
          <div>
            <Eyebrow>Tu tranquilidad también importa</Eyebrow>
            <h2 id="guarantee-title">
              El riesgo corre
              <br />
              <em>por nuestra cuenta.</em>
            </h2>
            <p>
              Si durante los primeros {academy.guaranteeDays} días corridos
              desde tu acceso a la plataforma sentís que el contenido no se
              adapta a tu realidad, podés solicitar la devolución del 100% del
              importe abonado.
            </p>
            <ol className="gps-guarantee-steps">
              <li>
                <span>01</span>
                <strong>Accedés</strong>
                <p>Recibís tus claves y explorás el programa.</p>
              </li>
              <li>
                <span>02</span>
                <strong>Probás</strong>
                <p>Conocés las clases y materiales a tu ritmo.</p>
              </li>
              <li>
                <span>03</span>
                <strong>Decidís</strong>
                <p>Si no es para vos, solicitás la devolución.</p>
              </li>
            </ol>
            <DisclosureLink
              className="gps-text-link"
              targetId="condiciones-garantia"
            >
              Conocer las condiciones completas <Icon name="arrow" />
            </DisclosureLink>
          </div>
        </div>
        <details id="condiciones-garantia" className="gps-guarantee-policy">
          <summary>
            Política de Garantía de Satisfacción{" "}
            <span aria-hidden="true">+</span>
          </summary>
          <div>
            <p>
              <strong>
                {academy.name} · {academy.product} · Edición {academy.edition}
              </strong>
            </p>
            <p>
              Garantía de {academy.guaranteeDays} días corridos desde la
              habilitación efectiva del acceso. Reintegro del 100% del importe
              efectivamente abonado, sin necesidad de justificar tu decisión.
            </p>
            {academy.guaranteePolicy.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </section>
            ))}
            <p>
              La devolución se procesa dentro de los{" "}
              {academy.refundBusinessDays} días hábiles siguientes a la
              recepción de la solicitud, sin perjuicio de los tiempos
              adicionales de acreditación.
            </p>
            <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
              Contactar a Academia GPS · {academy.contact.displayPhone}
            </a>
          </div>
        </details>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section
      id="preguntas-frecuentes"
      className="gps-section gps-faq"
      aria-labelledby="faq-title"
    >
      <Container className="gps-faq-layout">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 id="faq-title">
            Todo lo que
            <br />
            <em>necesitás saber.</em>
          </h2>
          <p>Las respuestas para dar tu próximo paso con claridad.</p>
        </div>
        <div className="gps-faq-list">
          {academy.faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span className="gps-faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{faq.question}</h3>
                <span className="gps-faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  const whatsapp = getPrimaryWhatsappCta();
  return (
    <section className="gps-section gps-final" aria-labelledby="final-title">
      <Container>
        <Eyebrow light>Tu próximo paso</Eyebrow>
        <h2 id="final-title">
          Tu clínica merece una
          <br />
          <em>Dirección Estratégica.</em>
        </h2>
        <p>
          Ser CEO de tu clínica no depende de su tamaño.
          <br />
          Depende de cómo la dirigís.
        </p>
        <Cta href={whatsapp.href} gold external>
          {academy.hero.cta}
        </Cta>
        <a className="gps-final-link" href="#programas">
          Volver a conocer el programa <Icon name="arrow" />
        </a>
      </Container>
    </section>
  );
}

export function AcademyLanding() {
  return (
    <main id="contenido-principal" tabIndex={-1}>
      <Hero />
      <PainPoints />
      <Programs />
      <Experience />
      <Presentation />
      <Outcomes />
      <Investment />
      <Enrollment />
      <Guarantee />
      <Faq />
      <FinalCta />
    </main>
  );
}

export function AcademyFooter() {
  const whatsapp = getPrimaryWhatsappCta();
  return (
    <footer className="gps-footer">
      <Container>
        <div className="gps-footer-main">
          <a href="#inicio" aria-label="Academia GPS, volver al inicio">
            <Image
              src={academy.assets.logo}
              alt="Academia GPS · Aprendizajes que transforman"
              width={640}
              height={316}
              sizes="160px"
            />
          </a>
          <p>
            Formación ejecutiva para profesionales de la salud.
            <br />
            Finanzas, marketing y liderazgo para dirigir tu clínica.
          </p>
          <nav aria-label="Contacto y redes sociales">
            <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
              WhatsApp ↗
            </a>
            {academy.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label} ↗
              </a>
            ))}
          </nav>
        </div>
        <div className="gps-footer-bottom">
          <span>© {new Date().getFullYear()} Academia GPS.</span>
          <DisclosureLink targetId="condiciones-garantia">
            Política de garantía
          </DisclosureLink>
          <a href="/campus">Acceso alumnos</a>
          <a
            href="https://solvatech.com.py/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desarrollado por SolvaTech ↗
          </a>
        </div>
      </Container>
    </footer>
  );
}
