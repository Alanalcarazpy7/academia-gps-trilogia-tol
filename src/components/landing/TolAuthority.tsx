import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TolAuthorityPhotos } from "@/components/landing/TolAuthorityPhotos";

export function TolAuthority() {
  const { authorityProfile } = siteConfig;

  return (
    <section
      id="autoridad"
      className="authority-surface relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="authority-title"
    >
      <Container className="relative z-[1] grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <TolAuthorityPhotos />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto max-w-[560px] lg:mx-0">
            <span className="section-eyebrow !border-brand-green/30 !bg-brand-green/8 !text-brand-blue">
              {authorityProfile.eyebrow}
            </span>

            <h2
              id="authority-title"
              className="mt-4 text-balance font-heading text-[clamp(1.6rem,3.6vw,2.2rem)] font-extrabold leading-[1.15] text-brand-blue"
            >
              {authorityProfile.headline}
            </h2>

            <div className="mt-5">
              <span className="quote-mark">&ldquo;</span>
              <p className="-mt-6 text-pretty text-[1.05rem] font-semibold leading-8 text-brand-blue/85">
                {authorityProfile.quote}
              </p>
            </div>

            <p className="mt-4 text-pretty text-[0.95rem] font-medium leading-7 text-brand-blue/65">
              {authorityProfile.bodyLead}
            </p>

            <ul className="mt-6 grid gap-3">
              {authorityProfile.credentials.map((credential) => (
                <li className="credential-item" key={credential}>
                  <p className="text-[0.92rem] font-semibold leading-6 text-brand-blue/78">
                    {credential}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {authorityProfile.stats.map((stat) => (
                <div className="stat-card px-3 py-4 text-center" key={stat.label}>
                  <p className="font-heading text-2xl font-extrabold text-brand-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold leading-4 text-brand-blue/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-balance border-t border-brand-blue/10 pt-5 text-[0.98rem] font-extrabold text-brand-blue">
              {authorityProfile.closing}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
