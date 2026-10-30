"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { academy, formatUsd } from "@/config/academy";
import { getPrimaryWhatsappCta } from "@/config/contacts";
import {
  getInstallmentsPaymentCta,
  getPrimaryPaymentCta,
} from "@/config/payment-links";
import { Container } from "@/components/ui/Container";
import { CheckList, Cta, Eyebrow, Icon } from "./Elements";

export function Investment() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const tier = academy.tiers[selected];
  const whatsapp = getPrimaryWhatsappCta();
  const cash = getPrimaryPaymentCta();
  const installments = getInstallmentsPaymentCta();

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % academy.tiers.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + academy.tiers.length) % academy.tiers.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = academy.tiers.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section
      id="inversion"
      className="gps-section gps-investment"
      aria-labelledby="investment-title"
    >
      <Container>
        <div className="gps-investment-heading">
          <div>
            <Eyebrow>Inversión y preventa</Eyebrow>
            <h2 id="investment-title">
              Cuanto antes te inscribas,
              <br />
              <em>más beneficios tenés.</em>
            </h2>
            <p>
              El programa es el mismo para todos. Cambian la inversión y los
              bonos según el mes de inscripción.
            </p>
          </div>
          <dl className="gps-official-prices">
            <div>
              <dt>Precio oficial al contado</dt>
              <dd>{formatUsd(academy.officialCashPrice)}</dd>
            </div>
            <div>
              <dt>Precio oficial en cuotas</dt>
              <dd>
                {academy.installmentCount} ×{" "}
                {formatUsd(academy.officialInstallmentPrice)}
              </dd>
            </div>
          </dl>
        </div>
        <div
          className="gps-price-tabs"
          role="tablist"
          aria-label="Categoría según el mes de inscripción"
        >
          {academy.tiers.map((item, index) => (
            <button
              key={item.id}
              id={`price-tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected === index}
              aria-controls={`price-panel-${item.id}`}
              tabIndex={selected === index ? 0 : -1}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => navigateTabs(event, index)}
            >
              <span>{item.month} {item.year}</span>
              <strong>{item.name}</strong>
              <small>
                {item.bonusCount} bonus
              </small>
            </button>
          ))}
        </div>
        {academy.tiers.map((item, index) => (
          <div
            key={item.id}
            id={`price-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`price-tab-${item.id}`}
            hidden={selected !== index}
            tabIndex={0}
            className={`gps-price-panel gps-tone-${item.tone}`}
          >
            <div className="gps-price-main">
              <div className="gps-tier-name">
                <Icon name="gift" />
                <div>
                  <span>{item.month} {item.year}</span>
                  <h3>{item.name}</h3>
                  <p>{item.bonusCount} bonus</p>
                </div>
              </div>
              <div className="gps-cash-price">
                <span>Inversión al contado</span>
                <strong>{formatUsd(item.cash)}</strong>
                <small>Pago único</small>
              </div>
              <div className="gps-financed-price">
                <span>Inversión en cuotas</span>
                <strong>
                  {formatUsd(item.installment)}
                </strong>
                <small>× {academy.installmentCount} cuotas mensuales</small>
              </div>
              <Cta href={whatsapp.href} gold external>
                Quiero los beneficios de {item.name}
              </Cta>
            </div>
            <div className="gps-bonus-grid">
              <div>
                <h4>Lo que recibís con la categoría {item.name}</h4>
                <CheckList items={academy.bonuses.slice(0, item.bonusCount)} />
              </div>
              <aside className="gps-extra-bonus">
                <Icon name="gift" />
                <div>
                  <span>Bonus extra de lanzamiento</span>
                  <h4>
                    {academy.extraBonus.hours} hora de asesoría estratégica
                    individual
                  </h4>
                  <p>
                    Con la Dra. Nidia Carolina, para los primeros{" "}
                    {academy.extraBonus.places} inscriptos confirmados.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        ))}
        <ul className="gps-price-conditions">
          <li>Precios en dólares americanos.</li>
          <li>{academy.tierCondition}</li>
          <li>Cada formación por separado = {formatUsd(academy.individualProgramPrice)}.</li>
        </ul>
        <div className="gps-payment-options">
          <Cta href={cash.href} gold external>Quiero pagar contado</Cta>
          <Cta href={installments.href} external>Quiero pagar en cuotas</Cta>
        </div>
        <p className="gps-sr-only" aria-live="polite">
          Categoría seleccionada: {tier.name}, {formatUsd(tier.cash)} al
          contado.
        </p>
      </Container>
    </section>
  );
}
