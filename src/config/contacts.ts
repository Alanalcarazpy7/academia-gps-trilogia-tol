export type AdvisorContact = {
  name: string;
  phone: string;
  message: string;
  isPlaceholder?: boolean;
};

export const whatsappMessages = {
  default:
    "Hola, vi la landing de La Trilogía TOL y quiero recibir más información sobre la inscripción.",
} as const;

export const advisorContacts: AdvisorContact[] = [];

export const contactPlaceholders = {
  whatsappHref: "#contacto-pendiente",
  whatsappLabel: "Consultar por WhatsApp",
  advisorStatus: "Pendiente de confirmar asesoras, números y mensajes.",
} as const;

export function createWhatsappHref(contact: AdvisorContact) {
  if (!contact.phone) {
    return contactPlaceholders.whatsappHref;
  }

  const phone = contact.phone.replace(/\D/g, "");
  const message = encodeURIComponent(contact.message);

  return `https://wa.me/${phone}?text=${message}`;
}

export function getPrimaryWhatsappCta() {
  const [primaryAdvisor] = advisorContacts;

  if (!primaryAdvisor) {
    return {
      label: contactPlaceholders.whatsappLabel,
      href: contactPlaceholders.whatsappHref,
      isPlaceholder: true,
    };
  }

  return {
    label: contactPlaceholders.whatsappLabel,
    href: createWhatsappHref(primaryAdvisor),
    isPlaceholder: Boolean(primaryAdvisor.isPlaceholder),
  };
}
