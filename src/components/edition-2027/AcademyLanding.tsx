import Image from "next/image";
import { academy } from "@/config/academy";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList, Cta, Eyebrow, Icon } from "./Elements";
import { Investment } from "./Investment";
import { PainPointBackdrop, PainPointIcon } from "./PainPointArtwork";
import { PresentationVideo } from "./PresentationVideo";
import { SatisfactionSeal } from "./ProgramArtwork";

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
        <div className="gps-program-video">
          <PresentationVideo
            src={academy.assets.video}
            poster={academy.assets.videoPoster}
            label="Presentación de la Trilogía TOL 2.0 por la Dra. Nidia Carolina"
          />
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
                <div className="gps-program-outcome">
                  <Icon name={program.icon} />
                  <span className="gps-program-outcome-copy">
                    <strong>{program.outcome}</strong>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div id="directora" className="gps-program-author">
          <p>Creadora y dictante de la Trilogía TOL: <strong>{academy.director.name}</strong></p>
          <a href={academy.director.instagramUrl} target="_blank" rel="noopener noreferrer">
            Conocé más de la Dra. Nidia <Icon name="arrow" />
          </a>
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
            <figure className="gps-plan-visual">
              <div className="gps-plan-photo-frame">
                <Image
                  src={academy.assets.planPhoto}
                  alt="Computadora con el tablero del Plan CEO Anual, agenda y teléfono sobre un escritorio"
                  width={1373}
                  height={1145}
                  unoptimized
                />
              </div>
            </figure>
            <div>
              <Icon name="plan" />
              <h3>Plan CEO Anual</h3>
              <p>
                Plan de Dirección Anual para tu Clínica con objetivos, metas,
                indicadores y ciclos de ejecución.
              </p>
              <div className="gps-training-start">
                <strong>¡Tu formación inicia al inscribirte!</strong>
                <p>Tenés acceso inmediato a las formaciones.</p>
              </div>
              <div className="gps-class-date">
                <Icon name="calendar" />
                <div>
                  <p>
                    Y el <time dateTime={academy.inauguralClass.iso}>
                      {academy.inauguralClass.shortDateLabel}
                    </time> iniciamos las clases en vivo de acompañamiento grupal.
                  </p>
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
  return (
    <section
      id="garantia"
      className="gps-section gps-guarantee"
      aria-labelledby="guarantee-title"
    >
      <Container className="gps-guarantee-container">
        <div className="gps-guarantee-layout">
          <div className="gps-guarantee-badge">
            <SatisfactionSeal />
          </div>
          <div>
            <Eyebrow>Tu tranquilidad importa</Eyebrow>
            <h2 id="guarantee-title">
              El riesgo corre
              <br />
              <em>por nuestra cuenta.</em>
            </h2>
            <p>
              Accedé al contenido y, si en los {academy.guaranteeDays} días
              sentís que el contenido no se
              adapta a tu realidad, podés solicitar la devolución del 100% del
              importe abonado.
            </p>
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
        <Eyebrow light>Es momento de dar el paso</Eyebrow>
        <h2 id="final-title">
          Tu clínica no puede depender siempre de que vos hagas todo.
        </h2>
        <p>
          Aprendé a dirigir tus finanzas, tener un marketing y equipo efectivo
          para construir una clínica rentable, organizada y lista para seguir creciendo.
        </p>
        <p className="gps-final-invitation">
          Convertite en el CEO que tu clínica necesita con la Trilogía TOL 2.0.
        </p>
        <Cta href={whatsapp.href} gold external>
          ¡Quiero inscribirme y convertirme en CEO de mi clínica!
        </Cta>
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
