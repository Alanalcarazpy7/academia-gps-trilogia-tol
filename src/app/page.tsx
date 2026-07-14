import { TolAuthority } from "@/components/landing/TolAuthority";
import { TolHero } from "@/components/landing/TolHero";
import { TolPainPoints } from "@/components/landing/TolPainPoints";
import { TolTopBanner } from "@/components/landing/TolTopBanner";
import { TolTransformation } from "@/components/landing/TolTransformation";
import { TolValueVideo } from "@/components/landing/TolValueVideo";
import { Header } from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-40">
        <TolTopBanner />
        <Header />
      </div>
      <main>
        <TolHero />
        <TolValueVideo />
        <TolAuthority />
        <TolPainPoints />
        <TolTransformation />
      </main>
    </>
  );
}
