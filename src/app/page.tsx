import { TolHero } from "@/components/landing/TolHero";
import { TolTopBanner } from "@/components/landing/TolTopBanner";
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
      </main>
    </>
  );
}
