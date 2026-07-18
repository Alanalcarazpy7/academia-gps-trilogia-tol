import Image from "next/image";
import { brand } from "@/config/brand";
import { siteConfig } from "@/config/site";

export function TolAuthorityPhotos() {
  return (
    <figure className="composition-group group relative mx-auto w-full max-w-[430px] pt-3 sm:max-w-[500px] sm:pt-4 lg:max-w-[560px] lg:pt-6 xl:max-w-[600px]">
      <div className="absolute -left-3 top-2 hidden h-[86%] w-[68%] -rotate-3 rounded-[36px] bg-gradient-to-br from-brand-teal/14 to-brand-blue/8 shadow-[0_30px_78px_rgba(0,72,119,0.12)] lg:block" />

      <div className="photo-frame-premium overflow-hidden rounded-[30px] bg-white p-2 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <div className="relative overflow-hidden rounded-[24px] bg-white">
          <Image
            src={siteConfig.assets.heroImage}
            alt={siteConfig.assets.heroImageAlt}
            width={1280}
            height={1706}
            className="h-[340px] w-full object-cover object-[52%_18%] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] sm:h-[440px] lg:h-[540px] lg:object-[52%_42%] xl:h-[580px]"
            sizes="(max-width: 768px) 88vw, (max-width: 1200px) 44vw, 560px"
            preload
          />
        </div>

        <figcaption className="flex items-center justify-between gap-3 px-3 pb-2.5 pt-3">
          <span>
            <span className="block font-heading text-[1.05rem] font-extrabold leading-tight text-brand-blue">
              {siteConfig.authority.name}
            </span>
            <span className="mt-0.5 block text-[0.82rem] font-medium text-brand-blue/58">
              {siteConfig.authority.role}
            </span>
          </span>
        </figcaption>
      </div>

      <div className="thumb-float absolute -right-3 top-16 hidden w-36 rotate-3 rounded-[22px] border-2 border-brand-yellow/70 bg-white p-1.5 shadow-[0_20px_46px_rgba(0,72,119,0.18)] sm:block sm:translate-x-6 lg:-right-3 lg:w-40 lg:translate-x-14">
        <div className="flex aspect-square items-center justify-center rounded-[16px] bg-white p-3">
          <Image
            src="/brand/gps-consultora-logo.jpeg"
            alt="Logo de GPS Consultora"
            width={300}
            height={300}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-blue px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(0,72,119,0.24)]">
          Asesorías
        </span>
      </div>

      <div className="thumb-float absolute -left-4 bottom-16 hidden w-36 -translate-x-2 -rotate-2 rounded-[22px] border border-white/90 bg-white p-1.5 shadow-[0_20px_46px_rgba(0,72,119,0.18)] sm:block lg:bottom-[4.5rem] lg:left-0 lg:w-36 lg:translate-x-0 xl:bottom-20 xl:-left-8 xl:w-40 xl:-translate-x-4">
        <div className="flex aspect-square items-center justify-center rounded-[16px] bg-white p-4">
          <Image
            src={brand.assets.academiaGpsLogo}
            alt="Logo de Academia GPS"
            width={1000}
            height={360}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-brand-teal shadow-[0_10px_20px_rgba(0,72,119,0.16)]">
          Formaciones
        </span>
      </div>
    </figure>
  );
}
