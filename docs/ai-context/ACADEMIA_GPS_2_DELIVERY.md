# Academia GPS 2.0: implementación para Preview

Fecha: 26 de octubre de 2026, America/Asuncion.

La landing de la edición 2027 está implementada exclusivamente en `feature/academia-gps-2.0`. Los datos comerciales están autorizados para revisar el Preview y siguen pendientes de aprobación final de la clienta. Esta entrega no autoriza una publicación en producción.

## Respaldo adicional de producción

Antes del rediseño se consultó nuevamente la API pública de despliegues de GitHub. El último despliegue de Vercel con entorno `Production` y estado `success` continuaba en `e51d38e2d2210476cd2ef65ce05c997927d0843f`, despliegue `5810275029` del 8 de agosto de 2026.

El dominio `https://academiagps.com/` respondió desde Vercel, redirigiendo a `https://www.academiagps.com/`, con HTTP 200 final y el contenido anterior. La identificación del commit se basa en el registro de Vercel en GitHub; no se accedió a ajustes privados ni se modificaron dominios o redirecciones.

Se crearon y subieron referencias nuevas:

| Referencia | Commit |
| --- | --- |
| `backup/academia-gps-production-2026-10-26` | `e51d38e2d2210476cd2ef65ce05c997927d0843f` |
| `academia-gps-production-2026-10-26` | `e51d38e2d2210476cd2ef65ce05c997927d0843f` al resolver la etiqueta anotada |

El push fue atómico, con solo esas dos referencias, sin `force`. Ambas se comprobaron en el remoto. No se cambiaron `main` local (`6d5a26a`), `origin/main` (`e51d38e`), `develop` (`6d5a26a`), `backup/academia-gps-v1` (`872f052`) ni la etiqueta original.

## Diseño implementado

Se revisaron el esquema completo, los diez PNG de bloques, el Word, los dos gráficos del producto, la fotografía auténtica, los logos y las cinco páginas del PDF de identidad TOL.

Se construyeron secciones con HTML, React y CSS reales, manteniendo Next.js 16, TypeScript y Tailwind CSS 4:

1. Portada con propuesta de valor, fotografía de la directora y CTA a inversión.
2. Problemas de rentabilidad, captación de pacientes y organización del equipo.
3. TOL-Fi, TOL-Mark y TOL-Coach, con sus contenidos y símbolos auténticos.
4. Qué incluye la inscripción, Plan CEO GPS Anual, fecha inaugural y metodología.
5. Presentación del programa en video y perfil profesional de la directora.
6. Áreas de trabajo: finanzas, marketing, equipo, procesos, crecimiento y equilibrio.
7. Inversión con cuatro categorías seleccionables, bonos y condiciones de financiación.
8. Inscripción en tres pasos y contacto con Academia GPS.
9. Garantía con la política consultable dentro de la misma landing.
10. Nueve preguntas frecuentes.
11. CTA final, footer, acceso al campus y CTA fijo en móvil.

El diseño utiliza títulos con serif, fondos crema, verde petróleo, azul oscuro y dorado. Incluye adaptaciones para escritorio, tablet y móvil, foco visible, enlace para saltar al contenido y respeto por movimiento reducido. Las pestañas de categorías contemplan flechas, Inicio y Fin; las preguntas usan `details` nativos. Los enlaces de perfil y política abren su contenido además de navegar al ancla.

No se usaron los PNG completos como secciones ni se publicaron fotografías de otras personas como testimonios. La nueva landing no muestra los testimonios anteriores cuya confirmación no consta en los materiales nuevos.

## Datos y decisiones de contenido

La configuración única de la nueva edición es `src/config/academy.ts`. Los importes son números y se formatean al mostrarlos:

| Categoría | Mes | Contado | Cuota mensual | Cantidad de cuotas | Bonos |
| --- | --- | ---: | ---: | ---: | ---: |
| Élite | Noviembre | USD 899 | USD 139 | 10 | 4 |
| VIP | Diciembre | USD 1.049 | USD 149 | 10 | 3 |
| Plus | Enero | USD 1.199 | USD 169 | 10 | 2 |
| Estándar | Febrero | USD 1.499 | USD 199 | 10 | 1 |

Precio oficial: USD 1.499 al contado o 10 cuotas de USD 199. Cada formación por separado: USD 999. Los totales financiados se calculan a partir de cuota y cantidad, sin interpretar los puntos de miles como decimales.

Confirmaciones recibidas durante esta implementación:

- Acceso inmediato a las tres formaciones, sustituyendo la habilitación progresiva que figuraba en algunos PNG y en parte de la política escrita.
- Garantía: 30 días corridos desde la habilitación efectiva del acceso para solicitarla; procesamiento dentro de los 10 días hábiles siguientes a recibir la solicitud. No es necesario esperar al final del período de garantía.
- WhatsApp comercial indicado por la clienta: +595 981 980 083.

Las promociones vencidas de agosto, el “50% OFF” y los cuatro meses de acompañamiento anteriores no se muestran en la nueva landing. El contenido de la edición nueva usa seis meses de formación, veinte sesiones y doce meses de acceso desde la clase inaugural del 15 de febrero de 2027 a las 19:00 h de Paraguay. No se inventaron fechas de cierre para las categorías.

Se mantuvo el bono de Agenda del CEO GPS según el Word y el bloque 7. Otro gráfico lo presenta como una masterclass de planificación: debe reconciliarse al aprobar el contenido comercial. Se incluyeron las herramientas de IA que aparecen en el bloque 4.

La inscripción sigue los tres pasos del Word y del esquema general. El bloque 8 individual contiene una variante de cuatro pasos con formulario, pero no se proporcionó una URL ni un servicio de recepción de datos; no se inventó un formulario funcional.

## Recursos y exclusiones

Todos los originales nuevos permanecen en `source-assets/academia-gps-2.0/`, excluida por la regla `/source-assets/` de `.gitignore`. Esto incluye PNG, DOCX, PDF, ZIP y el MOV original. También permanecen ignorados los MOV anteriores, los respaldos locales, dependencias, cachés, logs y variables privadas.

Solo se incorporan las copias necesarias para que el Preview funcione desde Git:

- Logo actualizado y tres símbolos TOL en `public/brand/edition-2027/`: WebP optimizados, aproximadamente 73 KB en total.
- Retrato y poster en `public/images/edition-2027/`: aproximadamente 129 KB en total.
- `public/videos/tol-2027-presentacion.mp4`: H.264/AAC, 960 × 540, 9.762.218 bytes; el MOV fuente pesaba 70.318.921 bytes. Se conserva la duración completa, se comprobó su decodificación y se preparó para reproducción progresiva mediante `faststart`.

Los videos, imágenes y posters anteriores no se borraron. Los MP4 anteriores ya rastreados se conservaron para no romper sus URLs. Las herramientas temporales de PDF y formato no agregaron dependencias ni cambiaron `package.json` o `package-lock.json`.

## Funcionalidades conservadas

- `/campus` y su iframe original de Vidroop, incluidos título, pantalla completa y dimensiones.
- `/gracias` y su flujo existente.
- Enlaces exactos de Pagopar y funciones/configuración de WhatsApp.
- Vercel Analytics, redes sociales, favicon y enlace de desarrollo.
- Rutas públicas anteriores; la versión 1.0 se recupera desde Git y no tiene una segunda ruta pública duplicada.

Los CTA de coordinación de la inscripción conducen a WhatsApp. Los enlaces existentes de Pagopar siguen disponibles en “Enlaces de pago”, con indicación de confirmar categoría e importe antes de pagar. No se crearon enlaces nuevos ni se asumió que los enlaces de 1.0 ya cobran los precios de 2027.

## SEO

- `metadataBase`, canonical, Open Graph, Twitter y JSON-LD usan `https://academiagps.com`, como se solicitó. Se observó la redirección actual a `www`; no se modificó esa configuración de producción.
- La home tiene un único H1 y ocho destinos de anclas internas verificados.
- Los precios de JSON-LD son `899`, `1049`, `1199`, `1499`, todos números reales; no hay precios con formato de miles ni fechas vencidas en los datos estructurados nuevos.
- `robots.ts` y `sitemap.ts` separan Preview de producción mediante `VERCEL_ENV`.
- En Preview se emite `noindex, nofollow`, se bloquea rastreo y no se listan URLs en el sitemap.
- En un build de producción la home permite indexación y el sitemap contiene únicamente `/`.
- Campus y gracias mantienen `noindex, nofollow`, con canonical correspondiente a su propia ruta.

La publicación futura debe generar un nuevo build en el entorno Production tras aprobación. No se debe promover directamente un build Preview, porque sus metadatos se generaron con `noindex`.

## Verificaciones realizadas

| Verificación | Resultado |
| --- | --- |
| Respaldo adicional local/remoto | Dos referencias nuevas al commit exacto `e51d38e`; sin operaciones forzadas |
| `npm run lint` final | Correcto |
| `npm run build` final | Correcto, incluidos TypeScript y páginas estáticas |
| Error preexistente de Reveal | Corregido, sin desactivar la regla; medición/actualización en un frame y limpieza del observer |
| Precios y condiciones con aserciones de Node | Correctos; cuatro categorías, acceso inmediato y plazos de garantía |
| Configuración SEO simulando Preview/Production | Correcta; bloqueo solo en Preview y sitemap de producción con `/` |
| HTTP local del build | `/`, `/campus`, `/gracias`, `/opengraph-image`, `/robots.txt` y `/sitemap.xml` correctos |
| HTML de la home | Un H1, 37 IDs únicos, ocho anclas con destino, cuatro pestañas y sus paneles, nueve FAQ y ocho imágenes con alt |
| Contenido servido | Sin promoción de agosto, descuento del 50% ni campos `[AGREGAR]`/`[REVISAR]` |
| Recursos públicos por HEAD | 37 archivos responden HTTP 200, incluidos los anteriores |
| Optimizador de imágenes de Next | Retrato responsive responde HTTP 200 como imagen |
| Video | Decodificación correcta; rango de 1024 bytes responde HTTP 206 |
| Ruta inexistente | HTTP 404 |
| Navegador real | No disponible en esta sesión: no se ejecutaron pruebas visuales, clics, teclado real, consola o medidas de rendimiento |
| Compras, cobros y login del campus externo | No ejecutados |

Las comprobaciones HTTP se hicieron en un servidor temporal limitado a `127.0.0.1:3102`, cerrado al terminar. No se añadió un script `test` ni se atribuyen resultados a pruebas inexistentes.

## Archivos principales

- `src/components/edition-2027/`: secciones, inversión interactiva, elementos comunes, enlaces desplegables y estilos.
- `src/config/academy.ts`: textos y condiciones de la nueva edición.
- `src/components/shared/Header.tsx` y `src/config/navigation.ts`: navegación adaptada, conservando seguimiento de sección y cierre del menú.
- `src/components/ui/Reveal.tsx`: corrección del lint y movimiento reducido.
- `src/app/page.tsx`: composición nueva; los componentes de la primera edición quedan conservados, sin montarse en la home.
- `src/config/seo.ts`, `src/config/structured-data.ts`, `src/app/layout.tsx`, `src/app/opengraph-image.tsx`, `robots.ts`, `sitemap.ts`: SEO de la edición nueva.
- Campus y gracias: únicamente canonical específico; su funcionamiento no cambia.

## Pendiente antes de publicar

1. Aprobar el diseño en un navegador de escritorio, tablet y móvil; revisar navegación, teclado, reproducción y consola.
2. Confirmar con la clienta precios, cuotas, bonos, fecha inaugural y condiciones comerciales completas.
3. Agregar el correo oficial a la política cuando se proporcione. El placeholder no está publicado.
4. Confirmar que los enlaces existentes de Pagopar corresponden a los productos e importes aprobados, sin hacer compras de prueba reales.
5. Resolver el nombre/formato del tercer bono y cualquier variante final del proceso de inscripción.
6. Obtener autorización expresa de publicación. Después se podrá revisar un PR hacia `main` y generar un build de producción; esta entrega no hace ese merge ni cambia producción.

## Recuperar el código exacto de producción respaldado

Para inspeccionarlo en otra carpeta sin sobrescribir la rama de trabajo:

```powershell
git fetch origin refs/heads/backup/academia-gps-production-2026-10-26:refs/remotes/origin/backup/academia-gps-production-2026-10-26
git fetch origin tag academia-gps-production-2026-10-26
git worktree add --detach ../academia-gps-production-review academia-gps-production-2026-10-26
```

La rama `backup/academia-gps-v1` y su etiqueta siguen recuperando la copia local original con sus cambios pendientes. La referencia adicional de producción recupera exactamente `e51d38e`, que incluye Analytics. Ninguna de estas operaciones de revisión publica código.
