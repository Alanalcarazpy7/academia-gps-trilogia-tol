export type AnalyticsContext = {
  section_id: string;
  program_id?: string;
  price_category?: string;
};

export type AnalyticsEvent = {
  name: string;
  parameters: Record<string, string>;
};

const programIds = ["tol-fi", "tol-mark", "tol-coach"];
const priceCategories = ["elite", "vip", "plus", "standard"];

export function getAnalyticsContext(element: Element): AnalyticsContext {
  const section = element.closest("section[id]");
  let sectionId = section?.id || "page";
  if (element.closest("header")) sectionId = "header";
  else if (element.closest("footer")) sectionId = "footer";
  else if (element.closest(".gps-mobile-cta")) sectionId = "mobile_cta";
  else if (element.closest(".gps-final")) sectionId = "final_cta";

  const programId = element.closest("article[id]")?.id;
  const category = element.closest('[role="tabpanel"]')?.id.replace("price-panel-", "");

  return {
    section_id: sectionId,
    ...(programId && programIds.includes(programId) ? { program_id: programId } : {}),
    ...(category && priceCategories.includes(category) ? { price_category: category } : {}),
  };
}

export function getLinkAnalyticsEvent(
  href: string,
  baseUrl: string,
  context: AnalyticsContext,
): AnalyticsEvent | null {
  let url: URL;
  try {
    url = new URL(href, baseUrl);
  } catch {
    return null;
  }

  let name: string;
  if (url.protocol === "tel:") name = "phone_click";
  else if (!["https:", "http:"].includes(url.protocol)) return null;
  else if (["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname)) {
    name = "whatsapp_click";
  } else if (url.hostname === "pago.pagopar.com") name = "payment_click";
  else if (url.origin === new URL(baseUrl).origin && url.pathname === "/campus") {
    name = "campus_click";
  } else if (["www.instagram.com", "www.facebook.com"].includes(url.hostname)) {
    name = "social_click";
  } else if (url.hostname === "solvatech.com.py") name = "developer_link_click";
  else return null;

  // No enviar URL completa, consultas, mensajes de WhatsApp ni teléfonos.
  return {
    name,
    parameters: { ...context, link_domain: url.hostname || "phone" },
  };
}

export function getPriceCategoryEvent(tabId: string): AnalyticsEvent | null {
  const category = tabId.replace("price-tab-", "");
  if (!priceCategories.includes(category)) return null;
  return {
    name: "price_category_click",
    parameters: { section_id: "inversion", price_category: category },
  };
}
