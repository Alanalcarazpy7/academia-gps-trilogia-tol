import { seoConfig } from "./seo";
import { siteConfig } from "./site";

const baseUrl = seoConfig.metadataBaseUrl;

function priceFromLabel(price: string) {
  return price.replace(/[^\d.]/g, "");
}

export function buildStructuredData() {
  const prelaunchTier = siteConfig.pricingOffer.tiers[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.parentBrand,
        url: baseUrl,
        logo: `${baseUrl}/brand/academia-gps-logo.svg`,
      },
      {
        "@type": "Course",
        "@id": `${baseUrl}/#course`,
        name: siteConfig.heroWordmark,
        description: seoConfig.description,
        courseMode: "Online",
        educationalCredentialAwarded: "Formacion ejecutiva",
        provider: {
          "@type": "Organization",
          name: siteConfig.parentBrand,
          sameAs: baseUrl,
        },
        offers: {
          "@type": "Offer",
          category: "Formacion ejecutiva",
          priceCurrency: "USD",
          price: priceFromLabel(prelaunchTier.price),
          availability: "https://schema.org/InStock",
          url: baseUrl,
          validThrough: siteConfig.prelaunchDeadlineIso,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: siteConfig.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}
