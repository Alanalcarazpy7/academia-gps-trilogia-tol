import { seoConfig } from "./seo";
import { academy } from "./academy";

const baseUrl = seoConfig.metadataBaseUrl;

export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: academy.name,
        url: baseUrl,
        logo: `${baseUrl}${academy.assets.logo}`,
      },
      {
        "@type": "Course",
        "@id": `${baseUrl}/#course`,
        name: academy.product,
        description: seoConfig.description,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          startDate: academy.inauguralClass.iso,
        },
        provider: {
          "@type": "Organization",
          name: academy.name,
          sameAs: baseUrl,
        },
        offers: academy.tiers.map((tier) => ({
          "@type": "Offer",
          name: `${tier.name} · ${tier.month} · Pago contado`,
          priceCurrency: academy.currency,
          price: tier.cash,
          availability: "https://schema.org/PreOrder",
          url: `${baseUrl}/#inversion`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: academy.faqs.map((item) => ({
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
