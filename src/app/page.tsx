import { TolAuthority } from "@/components/landing/TolAuthority";
import { TolEconomicPotential } from "@/components/landing/TolEconomicPotential";
import { TolFaq } from "@/components/landing/TolFaq";
import { TolFinalDecision } from "@/components/landing/TolFinalDecision";
import { TolFutureVision } from "@/components/landing/TolFutureVision";
import { TolGuarantee } from "@/components/landing/TolGuarantee";
import { TolHero } from "@/components/landing/TolHero";
import { TolMarketOpportunity } from "@/components/landing/TolMarketOpportunity";
import { TolMethodology } from "@/components/landing/TolMethodology";
import { TolOffer } from "@/components/landing/TolOffer";
import { TolPainPoints } from "@/components/landing/TolPainPoints";
import { TolPrograms } from "@/components/landing/TolPrograms";
import { TolTestimonials } from "@/components/landing/TolTestimonials";
import { TolTopBanner } from "@/components/landing/TolTopBanner";
import { TolTransformation } from "@/components/landing/TolTransformation";
import { TolValueVideo } from "@/components/landing/TolValueVideo";
import { Footer } from "@/components/shared/Footer";
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
        <TolEconomicPotential />
        <TolMarketOpportunity />
        <TolMethodology />
        <TolPrograms />
        <TolFutureVision />
        <TolTestimonials />
        <TolOffer />
        <TolGuarantee />
        <TolFaq />
        <TolFinalDecision />
      </main>
      <Footer />
    </>
  );
}
