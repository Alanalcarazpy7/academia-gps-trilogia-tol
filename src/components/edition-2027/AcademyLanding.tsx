import Image from "next/image";
import { academy } from "@/config/academy";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { getProgramWhatsappHref } from "@/config/program-contacts";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList, Cta, Eyebrow, Icon } from "./Elements";
import { Investment } from "./Investment";
import { DisclosureLink } from "./DisclosureLink";
import { PainPointBackdrop, PainPointIcon } from "./PainPointArtwork";
import { PresentationVideo } from "./PresentationVideo";

function Hero() {
  return (
    <section id="inicio" className="gps-hero" aria-labelledby="hero-title">
      <Container className="gps-hero-layout">
        <div className="gps-hero-copy">
          <Eyebrow>
            {academy.product} · Edición {academy.edition}
          </Eyebrow>
          <h1 id="hero-title">
            <span>{academy.hero.title}</span>{" "}
            <em>{academy.hero.emphasis}</em>
          </h1>
          <p className="gps-hero-subtitle">{academy.hero.subtitle}</p>
          <p className="gps-hero-connection">{academy.hero.connection}</p>
          <Cta>¡{academy.hero.cta}!</Cta>
          <dl className="gps-hero-facts">
            <div>
              <dt>
                <span className="gps-hero-fact-icon">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m2 11 14-7 14 7-14 7-14-7Z" />
                    <path d="M7 14v9c5 4 13 4 18 0v-9M29 12v12M27 27l2-3 2 3" />
                  </svg>
                </span>
                {academy.programs.length} TOL
              </dt>
              <dd>Talleres Online</dd>
            </div>
            <div>
              <dt>
                <span className="gps-hero-fact-icon">
                  <Icon name="calendar" />
                </span>
                {academy.liveSessions}
              </dt>
              <dd>Encuentros en vivo</dd>
            </div>
            <div>
              <dt>
                <span className="gps-hero-fact-icon">
                  <Icon name="growth" />
                </span>
                {academy.trainingMonths} meses
              </dt>
              <dd>De formación</dd>
            </div>
          </dl>
          <p className="gps-hero-motto">{academy.hero.handwritten}</p>
        </div>
      </Container>
      <div className="gps-hero-visual">
        <div className="gps-hero-scene" aria-hidden="true">
          <Image
            src="/images/edition-2027/hero-clinica-background.webp"
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            unoptimized
          />
        </div>
        <div className="gps-hero-portrait">
          <Image
            src="/images/edition-2027/dra-nidia-hero-transparent.webp"
            alt="Dra. Nidia Carolina, directora de Academia GPS"
            width={771}
            height={1413}
            sizes="(max-width: 639px) 86vw, (max-width: 1023px) 460px, (min-width: 1762px) 740px, 42vw"
            preload
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="gps-section gps-pains" aria-labelledby="pain-title">
      <PainPointBackdrop />
      <Container className="gps-pains-layout">
        <div className="gps-centered-heading">
          <Eyebrow>
            <span className="gps-sr-only">¿Te identificás?</span>
          </Eyebrow>
          <h2 id="pain-title">
            Tu clínica necesita <em>algo más</em> que excelencia técnica profesional
            para ser exitosa.
          </h2>
          <p>
            Trabajás mucho, pero ¿tenés claridad sobre la rentabilidad, la
            captación de pacientes y la organización de tu equipo?
          </p>
        </div>
        <div className="gps-pain-grid">
          {academy.painPoints.map((point) => (
            <article key={point.title} className="gps-pain-card">
              <PainPointIcon kind={point.icon} />
              <div className="gps-pain-copy">
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
                    <Image
                      src={program.logo}
                      alt={`Símbolo de ${program.name}`}
                      width={140}
                      height={144}
                      sizes="72px"
                    />
                  </span>
                  <div className="gps-program-title">
                    <span className="gps-program-tag">{program.name}</span>
                    <h3>{program.title}</h3>
                  </div>
                </div>
                <p>{program.description}</p>
                <CheckList items={program.topics} />
                <a
                  className="gps-program-outcome"
                  href={getProgramWhatsappHref(program)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar sobre ${program.name} por WhatsApp (abre una nueva pestaña)`}
                >
                  <Icon name={program.icon} />
                  <span className="gps-program-outcome-copy">
                    <strong>{program.outcome}</strong>
                    <span>Consultar {program.name} por WhatsApp</span>
                  </span>
                  <span className="gps-program-arrow">
                    <Icon name="arrow" />
                  </span>
                </a>
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
            <h3>
              <Icon name="book" /> Lo que incluye tu inscripción
            </h3>
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
      <Container className="gps-presentation-layout">
        <div className="gps-presentation-grid">
          <div className="gps-video-story">
            <div className="gps-presentation-heading">
              <Eyebrow light>Conocé el programa</Eyebrow>
              <h2 id="presentation-title">
                Descubrí cómo funciona
                <br />
                <em>la Trilogía TOL.</em>
              </h2>
              <p>
                Conocé la Trilogía de la mano de su directora: tres formaciones
                que integran finanzas, marketing y liderazgo para dirigir tu clínica.
              </p>
            </div>
            <PresentationVideo
              src={academy.assets.video}
              poster={academy.assets.videoPoster}
              label="Presentación de la Trilogía TOL 2.0 por la Dra. Nidia Carolina"
            />
          </div>
          <article className="gps-director-card">
            <div className="gps-director-photo">
              <Image
                src="/images/edition-2027/dra-nidia-hero-transparent.webp"
                alt="Dra. Nidia Carolina, directora de Academia GPS"
                width={771}
                height={1413}
                sizes="(max-width: 639px) 175px, 186px"
                unoptimized
                className="gps-director-portrait"
              />
            </div>
            <div className="gps-director-copy">
              <Eyebrow>Dirección académica</Eyebrow>
              <h3>{academy.director.name}</h3>
              <p>
                Odontóloga, estratega y fundadora de GPS Consultora y Academia GPS.
              </p>
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
            <p>{academy.director.biography}</p>
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
          {academy.outcomes.map((outcome, index) => (
            <Reveal
              key={outcome.title}
              className="gps-polish-reveal"
              delay={(index % 3) * 60}
            >
              <article>
                <span className="gps-outcome-icon">
                  <Icon name={outcome.icon} />
                </span>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            </Reveal>
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
          <p>Acceso, clases, pagos y garantía: resolvé tus dudas antes de inscribirte.</p>
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
      <Reveal className="gps-polish-reveal">
        <Experience />
      </Reveal>
      <Presentation />
      <Outcomes />
      <Reveal className="gps-polish-reveal">
        <Investment />
      </Reveal>
      <Reveal className="gps-polish-reveal">
        <Enrollment />
      </Reveal>
      <Reveal className="gps-polish-reveal">
        <Guarantee />
      </Reveal>
      <Reveal className="gps-polish-reveal">
        <Faq />
      </Reveal>
      <Reveal className="gps-polish-reveal">
        <FinalCta />
      </Reveal>
    </main>
  );
}

export { AcademyFooter } from "./AcademyFooter";
