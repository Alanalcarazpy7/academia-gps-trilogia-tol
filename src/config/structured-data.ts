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
        sameAs: academy.social.map((social) => social.href),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${academy.contact.phone}`,
          contactType: "customer service",
          availableLanguage: "es",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: academy.name,
        inLanguage: "es-PY",
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: seoConfig.title,
        description: seoConfig.description,
        inLanguage: "es-PY",
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: { "@id": `${baseUrl}/#course` },
      },
      {
        "@type": "Course",
        "@id": `${baseUrl}/#course`,
        name: academy.product,
        url: baseUrl,
        inLanguage: "es",
        description: seoConfig.description,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          startDate: academy.inauguralClass.iso,
        },
        provider: {
          "@id": `${baseUrl}/#organization`,
          "@type": "Organization",
          name: academy.name,
          sameAs: baseUrl,
        },
        offers: academy.tiers.map((tier) => ({
          "@type": "Offer",
          name: `${tier.name} · ${tier.month} ${tier.year} · Pago contado`,
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
