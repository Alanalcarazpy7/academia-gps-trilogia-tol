import { academy } from "./academy";
import { createWhatsappHref } from "./contacts";

type ProgramInquiry = Pick<
  (typeof academy.programs)[number],
  "name" | "title"
>;

export function getProgramWhatsappHref(program: ProgramInquiry) {
  return createWhatsappHref({
    name: academy.name,
    phone: academy.contact.phone,
    message: `Hola, vi ${program.name}: ${program.title}, de Academia GPS (Trilogía TOL 2.0). Quiero recibir más información sobre esta formación, su modalidad y cómo inscribirme.`,
  });
}
