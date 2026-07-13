# Especificación técnica

## Stack preferido

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Componentes reutilizables.
- Mobile first.

Si el repositorio ya usa otro stack, primero inspeccionarlo y mantenerlo cuando sea razonable.

## Estructura sugerida

```text
src/
  app/
    page.tsx
    layout.tsx
  components/
    landing/
      TopBanner.tsx
      Header.tsx
      Hero.tsx
      ValueProposition.tsx
      Authority.tsx
      Audience.tsx
      Transformation.tsx
      FinancialImpact.tsx
      MarketOpportunity.tsx
      Methodology.tsx
      Programs.tsx
      Includes.tsx
      FutureVision.tsx
      Testimonials.tsx
      Offer.tsx
      GuaranteeFaq.tsx
      FinalCta.tsx
      Footer.tsx
  config/
    site.ts
    offers.ts
    whatsapp.ts
    seo.ts
  data/
    faq.ts
    programs.ts
    testimonials.ts
public/
  images/
  logos/
```

## Reglas

- No escribir precios, fechas, teléfonos o enlaces directamente en componentes.
- Centralizar datos en archivos de configuración.
- No usar Lorem Ipsum.
- No crear rutas internas para las 15 secciones.
- Usar IDs de ancla para navegación.
- Preparar componentes para reutilizarlos dentro de la futura web de Academia GPS.
- No romper código existente.
- No reemplazar componentes funcionales sin necesidad.

## Rendimiento

- optimizar imágenes;
- usar tamaños responsivos;
- lazy load debajo del fold;
- evitar dependencias pesadas;
- reducir JavaScript;
- animaciones discretas;
- revisar Core Web Vitals.

## Accesibilidad

- HTML semántico;
- un solo H1;
- jerarquía H2/H3 coherente;
- contraste suficiente;
- foco visible;
- botones y enlaces accesibles;
- alt en imágenes;
- acordeones operables por teclado.

## Publicación

La clienta usa HostGator.

Antes de publicar:

1. revisar si el hosting soporta Node.js;
2. si no lo soporta, desplegar en Vercel;
3. conectar el dominio desde DNS de HostGator;
4. documentar cambios;
5. no borrar registros DNS sin respaldo;
6. confirmar cuál dominio se utilizará.
