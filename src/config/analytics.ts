export const googleAnalyticsConfig = {
  measurementId: "G-GGDY2FDKLW",
  productionHosts: ["academiagps.com", "www.academiagps.com"],
} as const;

export type GoogleAnalyticsMode = "disabled" | "preview" | "production";

// Se evalúa en el servidor; VERCEL_ENV no es una variable pública del navegador.
export const googleAnalyticsMode: GoogleAnalyticsMode =
  process.env.NODE_ENV !== "production"
    ? "disabled"
    : process.env.VERCEL_ENV === "production"
      ? "production"
      : process.env.VERCEL_ENV === "preview"
        ? "preview"
        : "disabled";

export function getAnalyticsSession(mode: GoogleAnalyticsMode, href: string) {
  const disabled = { enabled: false, debug: false };
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return disabled;
  }
  if (url.protocol !== "https:") return disabled;
  if (mode === "production") {
    return {
      enabled: googleAnalyticsConfig.productionHosts.some((host) => host === url.hostname),
      debug: false,
    };
  }
  if (mode === "preview" && url.hostname.endsWith(".vercel.app") &&
      url.searchParams.get("ga_debug") === "1") {
    return { enabled: true, debug: true };
  }
  return disabled;
}
