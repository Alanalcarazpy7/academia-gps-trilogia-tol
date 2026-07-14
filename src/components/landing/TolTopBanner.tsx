import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function TolTopBanner() {
  return (
    <div className="sticky top-0 z-40 h-9 overflow-hidden bg-brand-blue text-white shadow-[0_8px_22px_rgba(0,72,119,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,128,128,0.16))]" />
      <Container className="relative flex h-9 items-center justify-center text-center font-extrabold">
        <p className="flex w-full items-center justify-center gap-1.5 whitespace-nowrap text-[10px] leading-none sm:hidden">
          <span>{siteConfig.topBanner.label}</span>
          <span className="text-white/42">·</span>
          <span className="text-brand-yellow">{siteConfig.topBanner.savings}</span>
          <span className="text-white/42">·</span>
          <span>hasta 31/07/2026</span>
        </p>
        <p className="hidden min-w-0 items-center justify-center sm:flex sm:text-xs">
          <span>{siteConfig.topBanner.label}</span>
          <span className="mx-2 text-white/42">·</span>
          <span className="text-brand-yellow">{siteConfig.topBanner.savings}</span>
          <span className="mx-2 text-white/42">·</span>
          <span>{siteConfig.topBanner.deadline}</span>
        </p>
      </Container>
    </div>
  );
}
