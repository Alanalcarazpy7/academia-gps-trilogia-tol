export const paymentLinks = {
  fullPrelaunch: "",
  fullLaunch: "",
  installmentsPrelaunch: "",
  installmentsLaunch: "",
} as const;

export const paymentPlaceholders = {
  href: "#pagopar-pendiente",
  label: "Quiero reservar mi plaza",
  status: "Pendiente de recibir enlaces exactos de Pagopar.",
} as const;

export function getPrimaryPaymentCta() {
  const href = paymentLinks.fullPrelaunch || paymentLinks.fullLaunch;

  return {
    label: paymentPlaceholders.label,
    href: href || paymentPlaceholders.href,
    isPlaceholder: !href,
  };
}
