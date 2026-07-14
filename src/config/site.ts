import { brand } from "./brand";

export const siteConfig = {
  name: brand.productDisplayName,
  parentBrand: brand.name,
  heroWordmark: "La Trilogía TOL",
  heroWordmarkLabel: "Academia GPS presenta",
  headline: "Dirigí una clínica rentable, no solo una agenda llena.",
  supportLine:
    "La universidad te enseñó a atender pacientes. La Trilogía TOL te enseña a liderar con finanzas, marketing y estrategia.",
  description:
    "Una formación guiada para profesionales de la salud que quieren ordenar sus números, atraer mejores pacientes y liderar con claridad.",
  topBanner: {
    label: "Pre-lanzamiento exclusivo",
    savings: "50% de ahorro",
    deadline: "hasta el 31 de julio de 2026",
    ctaLabel: "Reservar plaza",
  },
  heroKicker: "FORMACIÓN EJECUTIVA PARA CLÍNICAS",
  heroPrimaryCtaLabel: "Reservar mi plaza",
  heroPrimaryCtaBadge: "50% OFF",
  heroWhatsappCtaLabel: "Hablar por WhatsApp",
  offerPill: "50% de ahorro · hasta el 31 de julio",
  trustLine: "Pago seguro por Pagopar · Cupos limitados · Respuesta por WhatsApp",
  offer: {
    label: "Pre-lanzamiento exclusivo",
    value: "50% de ahorro hasta el 31 de julio de 2026",
    includes: "Incluye 3 programas + 4 masterclasses en vivo",
  },
  heroBenefits: [
    "3 programas completos",
    "20 sesiones en vivo",
    "4 meses de acompañamiento",
    "Herramientas aplicables",
  ],
  methodologyPreview: ["Aprender", "Reflexionar", "Implementar", "Acompañar"],
  domains: {
    candidates: ["academiagps.online", "academiagps.com"],
    finalDomainPendingConfirmation: true,
  },
  assets: {
    heroImage: "/images/dra-nidia/dra-nidia-tablet.jpeg",
    heroImageAlt:
      "Dra. Nidia Carolina sentada con una tablet en un entorno profesional luminoso.",
  },
  futureRoute: "/trilogia-tol",
} as const;
