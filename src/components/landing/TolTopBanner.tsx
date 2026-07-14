import { paymentPlaceholders } from "@/config/payment-links";
import { Container } from "@/components/ui/Container";

export function TolTopBanner() {
  return (
    <div className="bg-brand-blue text-white">
      <Container className="flex min-h-11 items-center justify-center py-2 text-center text-xs font-bold sm:text-sm">
        <p>
          Oferta de prelanzamiento en preparación.{" "}
          <span className="text-brand-yellow">{paymentPlaceholders.status}</span>
        </p>
      </Container>
    </div>
  );
}
