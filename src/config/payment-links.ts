export const paymentLinks = {
  fullPrelaunch: "https://pago.pagopar.com/85uq9",
  fullLaunch: "",
  installmentsPrelaunch: "https://pago.pagopar.com/85urd",
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

export function getInstallmentsPaymentCta() {
  const href = paymentLinks.installmentsPrelaunch || paymentLinks.installmentsLaunch;

  return {
    label: paymentPlaceholders.label,
    href: href || paymentPlaceholders.href,
    isPlaceholder: !href,
  };
}
