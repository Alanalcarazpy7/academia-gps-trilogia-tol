# Academia GPS 2.0: auditoría y respaldo

Fecha de revisión: 26 de octubre de 2026, America/Asuncion.

El respaldo y la rama de desarrollo están preparados. El rediseño está pendiente de identificar los nuevos mockups y confirmar las condiciones comerciales. Esta preparación no constituye una versión 2.0 terminada.

## Estado encontrado

- Next.js 16.2.10, React 19.2.4, TypeScript y Tailwind CSS 4; App Router.
- Gestor: npm, indicado por `package-lock.json`. Scripts: `dev`, `build`, `start`, `lint`. No existe un script `test`.
- Rama inicial: `main`, commit `6d5a26afa734ae6e3977c1652f422cc7d566bab1`.
- `develop` y `origin/develop` apuntaban al mismo commit.
- Remoto: `https://github.com/Alanalcarazpy7/academia-gps-trilogia-tol.git`.
- `origin/main`: `e51d38e2d2210476cd2ef65ce05c997927d0843f`, dos commits por delante de `main` local. Agregan Vercel Analytics y su dependencia.
- La API pública de GitHub registra ese SHA en el último despliegue `Production` de Vercel. Es evidencia de que `main` se utiliza para producción; no se accedió a la configuración privada del proyecto de Vercel.
- Había dos archivos modificados y ningún archivo sin seguimiento fuera de los ignorados: `TolTopBanner.tsx` y `site.ts`. Los cambios quitaban la cuenta regresiva del banner y cambiaban su texto a consultas sobre promociones. Se conservaron íntegramente.
- No se encontraron archivos `.env`, claves privadas o credenciales entre los archivos rastreados. La búsqueda de patrones habituales de secretos sobre 86 archivos de texto no tuvo hallazgos; no equivale a una certificación de ausencia de secretos.
- `git fsck --full --no-reflogs` terminó con código 0. Informó objetos sin referencias, sin errores de integridad. No se eliminaron objetos.

## Respaldo recuperable

| Referencia | Estado preservado |
| --- | --- |
| `backup/academia-gps-v1` | `872f052564b9890126bf552e36938f7e5b8c888f` |
| `academia-gps-v1.0-before-redesign` | Etiqueta anotada cuyo commit es el mismo `872f052` |
| `origin/main`, al auditar | Producción existente en `e51d38e`, que incluye Analytics |

La rama y la etiqueta de respaldo conservan exactamente el estado local original más sus dos modificaciones legítimas: 117 archivos rastreados. Se subieron ambas referencias al mismo remoto con refspecs explícitos y sin `force`. Se comprobaron sus SHA mediante `git ls-remote`.

La copia local inicial no contenía Analytics. Para conservar también el código que estaba desplegado, el bundle incluye `refs/remotes/origin/main` en `e51d38e`; la rama de desarrollo integra esos commits sin modificar la rama de respaldo.

Copias adicionales, ignoradas por Git:

- `docs/references/backups/2026-10-26/academia-gps-v1.bundle`: historia completa de las tres referencias indicadas. `git bundle verify` pasó y se restauró correctamente en un clon independiente.
- `docs/references/backups/2026-10-26/material-original-cliente.zip`: documentos fuente y las dos referencias visuales existentes. No se subió este material privado a GitHub.
- La prueba de restauración quedó en `node_modules/.cache/academia-gps-v1-restore-check`, fuera del alcance de TypeScript y ESLint. Es una copia de verificación descartable; el respaldo durable es el bundle y las referencias remotas.

Los `.mov` originales permanecen en `public/videos`, sin modificaciones. No se duplicaron ni subieron: ocupan unos 768 MB en conjunto y no se usan en la web. Sus versiones `.mp4` y posters sí están rastreados y forman parte del respaldo. Tampoco se incluyeron dependencias instaladas, `.next`, logs o variables privadas.

Las copias locales comparten el mismo disco: conviene conservar también el bundle y el ZIP en un almacenamiento independiente elegido por el propietario.

## Rama de desarrollo

Se creó `feature/academia-gps-2.0` desde `backup/academia-gps-v1`. Se integró `origin/main` mediante un merge en esta rama, conservando Vercel Analytics y el lockfile originales de producción.

No se modificaron `main`, `develop`, DNS, dominios, variables de entorno, redirecciones o ajustes de producción. No se ejecutó un despliegue de producción.

Vercel registró el push de la rama de respaldo como `Preview`, en el mismo proyecto. El despliegue de la rama feature debe comprobarse también como `Preview`; su URL depende del commit y se obtiene del estado de Vercel en GitHub. No se debe promover esa vista previa a producción durante la preparación.

## Material disponible y faltantes

Fuentes existentes en `source-assets/documentos`:

- `0. CONTENIDO LANDING TRILOGÍA TOL.docx`: contenido fuente recibido originalmente.
- `1. Identidad Academia GPS 2024.pdf`: identidad visual de apoyo.
- `2. Identidad Trilogía TOL.png`: material gráfico de identidad.

Recursos utilizados por la web: logos e ilustraciones SVG/PNG en `public/brand`, fotografías en `public/images`, videos MP4 y posters en `public/videos`.

Se inspeccionaron visualmente `docs/references/ref_hero_01.png` y `ref_hero_02.png`: son referencias de otros cursos, uno de productos digitales y otro de maquillaje de novias. No contienen el nuevo diseño específico de Academia GPS 2.0. No se identificó un conjunto de mockups nuevos para las nueve secciones solicitadas.

Antes de implementar se necesita:

1. La carpeta o los archivos de los nuevos mockups, logos e imágenes de la clienta.
2. La fuente vigente de precios, categorías, cuotas, bonos, preventa, fechas y garantía.
3. Confirmación de cualquier testimonio y afirmación comercial que se reutilice: la documentación histórica aún marca datos pendientes, mientras el código ya muestra cifras y testimonios.

## Funcionalidades que deben conservarse

- `/`: landing con seis destinos de navegación interna, sección de programas, oferta, FAQ, videos, CTAs y menú móvil.
- `/campus`: mismo iframe hacia `https://aula.vidroop.com/login/44c6fc57-9a61-4279-ac54-0d7c86a7c9ba`, título y permiso de pantalla completa. No se reconstruyó ni cambió Vidroop.
- `/gracias`: página de confirmación existente con retorno al inicio.
- Pagopar: `https://pago.pagopar.com/85uq9` y `https://pago.pagopar.com/85urd`.
- WhatsApp: `https://wa.me/message/T3T346YKBQNVP1` y helpers existentes.
- Videos horizontales y verticales, posters, logos, fotografías y enlaces sociales.
- Vercel Analytics de `origin/main`.

No se encontraron formularios propios, integración de API de pagos, IDs de Google Analytics ni verificación de Search Console en el código revisado. Los servicios externos pueden tener configuración adicional que no está en este repositorio. No se hicieron compras, envíos ni accesos con credenciales.

## Riesgos detectados antes de tocar SEO o contenido

- `src/config/seo.ts` usa `https://academiagps.online` para `metadataBase`; el dominio de producción indicado es `https://academiagps.com/`. Afecta al canonical, Open Graph y URLs de datos estructurados. Se documenta antes de cambiarlo y debe validarse contra el dominio definitivo.
- La oferta vence el **15 de agosto de 2026**, fecha anterior a esta auditoría. Todavía aparece en hero, oferta, cierre, cuotas y `validThrough` del JSON-LD, aunque el cambio local ya quitaba la cuenta regresiva del banner.
- El “50% de ahorro” no coincide con el precio oficial de USD 2.799 y el promocional de USD 1.599: esa diferencia representa aproximadamente 42,9%. No se corrigieron ni inventaron importes.
- `priceFromLabel("USD 1.599")` produce `"1.599"` en el JSON-LD: el separador de miles queda interpretado como decimal. Corregir junto con la fuente de precios confirmada.
- No hay archivos de rutas `robots.ts`/`robots.txt` ni `sitemap.ts`/`sitemap.xml` en el repositorio. El build tampoco genera esas rutas.
- `/campus` y `/gracias` conservan `noindex, nofollow`. Heredan el canonical raíz del layout; conviene revisar metadatos por ruta al abordar SEO.
- La landing conserva title, description, keywords, canonical, Open Graph, Twitter Card y JSON-LD Organization/Course/FAQPage. No se creó una segunda ruta pública con una copia de la versión 1.0.
- El header y el CTA móvil aún contienen un “50% OFF” escrito directamente en el componente.

## Verificaciones ejecutadas

| Verificación | Resultado |
| --- | --- |
| Referencias del respaldo local y remoto | Mismo commit `872f052` |
| `git bundle verify` y clon de restauración | Correctos; árbol limpio y coincide con la etiqueta |
| `npm run build` | Correcto, incluidos TypeScript y generación de páginas |
| `npm run lint` | Falla por un error preexistente en `src/components/ui/Reveal.tsx:42`, regla `react-hooks/set-state-in-effect` |
| Comparación de `Reveal.tsx` contra `origin/main` | Sin diferencias: no es un error introducido por esta preparación |
| Comprobación HTTP del build en `127.0.0.1:3102` | `/`, `/campus`, `/gracias` e imagen social responden 200 |
| HTML servido por `/` | Un H1; seis anclas con destino; enlaces originales de Pagopar, WhatsApp y campus presentes |
| HTML servido por `/campus` y `/gracias` | `noindex, nofollow`; URL original del iframe preservada |
| Recursos públicos | Los 30 archivos rastreados de `public` responden 200 mediante HEAD |
| Ruta inexistente | Responde 404 |
| Tests unitarios | No hay script `test`; no se atribuye un resultado |
| Navegación real, reproducción, responsive, foco y consola del navegador | Pendientes: el navegador de esta sesión no está disponible |
| Login de Vidroop y checkout de Pagopar | No ejecutados; la comprobación HTTP verifica HTML/enlaces, no el funcionamiento interno externo |

El servidor de comprobación fue local y temporal, y se cerró al terminar. No se ejecutó un despliegue mediante ese build.

## Recuperar 1.0 sin sobrescribir el trabajo actual

Con el repositorio disponible, crear una carpeta de revisión independiente desde la etiqueta:

```powershell
git fetch origin refs/heads/backup/academia-gps-v1:refs/remotes/origin/backup/academia-gps-v1
git fetch origin tag academia-gps-v1.0-before-redesign
git worktree add --detach ../academia-gps-v1-review academia-gps-v1.0-before-redesign
```

Para recuperar desde la copia local aunque el remoto no esté disponible, ejecutar desde la raíz del proyecto, usando una carpeta de destino nueva:

```powershell
git bundle verify docs/references/backups/2026-10-26/academia-gps-v1.bundle
git clone --branch backup/academia-gps-v1 docs/references/backups/2026-10-26/academia-gps-v1.bundle ../academia-gps-v1-restored
```

El clon recupera código y medios rastreados. Ejecutar `npm ci` dentro de la copia recuperada para reinstalar dependencias. El ZIP local conserva los documentos fuente y referencias ignorados. Variables privadas, ajustes de Vercel y servicios externos no forman parte de un respaldo Git.

Para inspeccionar exactamente el código de producción observado, usar el commit `e51d38e2d2210476cd2ef65ce05c997927d0843f` en otro worktree. Recuperar código local no modifica el sitio publicado. Revertir producción requiere una aprobación posterior específica.

## Pasos hasta una publicación aprobada

1. Identificar los recursos 2.0 y resolver los datos comerciales contradictorios.
2. Implementar únicamente en `feature/academia-gps-2.0`, conservando rutas, integraciones y contenido útil; corregir los riesgos SEO documentados cuando estén confirmados los datos.
3. Resolver el error de lint preexistente si corresponde al alcance acordado. Ejecutar lint, build y pruebas de navegación y responsive en un navegador disponible.
4. Revisar el Preview generado por Vercel y comprobar que esté protegido frente a indexación; confirmar que su entorno sea `Preview` y que producción siga en su despliegue actual.
5. Entregar los archivos y pruebas del rediseño completo y obtener aprobación expresa de diseño, contenido y publicación.
6. Solo después de esa aprobación, revisar un PR hacia la rama de producción y coordinar el despliegue. En esta preparación no se hizo merge ni promoción a producción.
