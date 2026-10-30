import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function TolTopBanner() {
  return (
    <div className="relative h-9 overflow-hidden bg-brand-blue text-white shadow-[0_8px_22px_rgba(0,72,119,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,128,128,0.16))]" />
      <Container className="relative flex h-9 items-center justify-center text-center font-extrabold">
        <p className="w-full whitespace-nowrap text-[10px] leading-none tracking-[-0.01em] text-brand-yellow min-[360px]:text-[11px] sm:text-xs sm:tracking-normal">
          {siteConfig.topBanner.label}
        </p>
      </Container>
    </div>
  );
}
