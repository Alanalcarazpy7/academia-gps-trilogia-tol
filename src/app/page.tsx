import { TolHero } from "@/components/landing/TolHero";
import { TolTopBanner } from "@/components/landing/TolTopBanner";
import { Header } from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <TolTopBanner />
      <Header />
      <main>
        <TolHero />
      </main>
    </>
  );
}
