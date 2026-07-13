# Prompt maestro para Claude Code o Codex

Actúa como desarrollador web senior, diseñador UX/UI y especialista en landing pages de conversión.

Estás trabajando en una landing de una sola página para “La Trilogía TOL”, producto premium de Academia GPS dirigido a profesionales de la salud que gestionan clínicas o consultorios.

## Antes de hacer cambios

1. Lee `README.md`.
2. Lee `PROJECT_CONTEXT.md`, `DECISIONS.md` y `STATUS.md`.
3. Inspecciona el repositorio actual.
4. Resume en máximo 8 líneas qué existe, qué falta y qué archivos vas a modificar.
5. No empieces de cero si ya existe código útil.
6. No borres ni reemplaces archivos sin justificarlo.
7. Trabaja en cambios pequeños y verificables.

## Archivos de contexto

Lee solo lo necesario para la tarea:

- diseño: `DESIGN_SYSTEM.md`
- contenido: `CONTENT_MAP.md`
- desarrollo: `TECHNICAL_SPEC.md`
- SEO y conversión: `SEO_CONVERSION.md`

## Objetivo

Construir una landing premium, rápida, responsive y enfocada en conversión, con aproximadamente 15 secciones en un único recorrido vertical.

Debe:

- explicar el producto;
- presentar TOL-FI, TOL-Mark y TOL-Coach;
- fortalecer la autoridad de la Dra. Nidia;
- mostrar beneficios y transformación;
- presentar oferta, bonos, precios y garantía;
- resolver objeciones;
- llevar a Pagopar mediante enlaces externos;
- llevar a WhatsApp de las asesoras con mensajes prearmados;
- tener SEO básico;
- poder integrarse después en la web principal de Academia GPS.

## Restricciones

- Pagopar es solo un enlace, no una integración API.
- No crear checkout propio.
- No crear panel administrativo.
- No crear área de alumnos.
- No crear páginas internas para las secciones.
- No inventar precios, fechas, testimonios, enlaces, números o credenciales.
- Usar placeholders centralizados para datos faltantes.
- No usar Lorem Ipsum.
- No convertir el PDF en una imagen larga.
- No copiar literalmente todo el Word: adaptar el contenido a web sin cambiar el sentido.
- No publicar información vencida o no confirmada.

## Identidad

Usa:

- `#004877`
- `#008080`
- `#76A858`
- `#F8F2EA`
- `#E6C619`

Tipografías:

- Poppins para títulos.
- Montserrat para texto.

## Arquitectura

- Componentes independientes por sección.
- Datos comerciales y enlaces en archivos de configuración.
- Mobile first.
- Accesible.
- Optimizado para velocidad.
- Preparado para futura reutilización dentro de Academia GPS.

## Flujo de trabajo

1. Audita el código actual.
2. Propón la arquitectura.
3. Implementa o corrige el sistema visual.
4. Construye las secciones una a una.
5. Conecta configuración de Pagopar y WhatsApp.
6. Implementa SEO.
7. Verifica responsive y accesibilidad.
8. Ejecuta build, lint y pruebas disponibles.
9. Corrige errores.
10. Actualiza `STATUS.md` al terminar.

## Formato de respuesta

Sé breve.

Al iniciar:
- diagnóstico;
- plan;
- archivos a tocar.

Al finalizar:
- cambios realizados;
- pruebas ejecutadas;
- pendientes reales;
- siguiente paso recomendado.

No repitas todo el contexto en cada respuesta. Usa estos archivos como memoria del proyecto.
