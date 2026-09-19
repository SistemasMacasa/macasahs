# Identidad de marca MACASA — aplicación al sitio web

> Fuente: **Manual de Identidad para Web** (15 pp.), entregado por MACASA.
> Vive en NextCloud: `ARTEM/Proyectos/macasa/ecommerce/Manual MACASA Web.pdf`
> (no se versiona en git: es un binario del cliente, no un derivable nuestro).
>
> Implementación: [`src/app/globals.css`](../src/app/globals.css) — ese archivo es
> la única fuente de tokens. Este documento explica **por qué** cada token vale lo
> que vale, que es lo que el CSS no puede contar.

---

## 1. Qué trae el manual

| Página | Contenido |
|--------|-----------|
| 1 | Portada: logotipo azul sobre FONDO 04 lavado en blanco |
| 2 | Logotipo: versión a color + **versión blanca** sobre azul y sobre gris |
| 3 | Paleta: 5 colores en CMYK / **Web** / RGB |
| 4 | Escala de color: rampa de tintas por color (sin hexes) |
| 5 | Tipografías: **Helvetica** y **Hind**, regular y bold |
| 6-9 | FONDO 01 a 04 — fondos fotográficos lavados |
| 10-15 | Banco fotográfico corporativo (9 imágenes) |

El manual **no define**: color de acento, colores de estado (error/éxito),
escala tipográfica, espaciado ni radios. Eso queda a criterio de implementación.

---

## 2. Paleta declarada (fila "Web", pág. 3)

| Color | Web | CMYK del manual | Rol en el sitio |
|-------|-----|-----------------|-----------------|
| Azul MACASA | `#2378eb` | C80 M53 Y0 K0 | Identidad. Títulos grandes, iconos, rellenos |
| Gris 01 | `#636569` | C59 M47 Y42 K36 | Texto secundario |
| Gris 02 | `#808080` | C49 M39 Y38 K20 | Decorativo |
| Gris 03 | `#999293` | C40 M36 Y33 K136 ⚠️ | Decorativo |
| Gris 04 | `#afafaf` | C34 M26 Y27 K5 | Texto sobre fondo oscuro, bordes |

⚠️ El gris 03 trae `K=136%`, imposible (el máximo es 100). Es una errata del
manual. No afecta al sitio porque para web manda el hex, no el CMYK.

### Discrepancia del azul — resuelta a favor del hex "Web"

El manual se contradice consigo mismo:

- La fila **"Web" declara `#2378eb`**.
- El **logotipo del propio PDF** está dibujado en **`#446dbe`** — que es lo que
  da la conversión CMYK→RGB del azul de imprenta (C80 M53 Y0 K0).

Se tomó `#2378eb`, por tres razones: la fila se llama literalmente "Web", la
página es la especificación de color, y el logotipo que ya usaba el sitio
(`public/logo-macasa-transparent.png`) **ya estaba en `#2378ec`** — o sea, ya
cumplía el hex declarado. Cambiarlo al azul de imprenta habría sido alinearse
con el error y no con la especificación.

**Si MACASA aclara que el azul correcto es el del logotipo (`#446dbe`)**, el
cambio es de una línea: `--color-macasa-brand` en `globals.css`, más recalcular
la escala. Nada más depende de ese valor de forma literal.

---

## 3. Identidad vs interactivo — la decisión no obvia

`#2378eb` da **4.24:1** sobre blanco. WCAG AA pide 4.5:1 para texto normal y
3.0:1 para texto grande (≥24px, o ≥18.7px en bold). O sea: el azul del manual
alcanza para un título, un icono o un relleno, **pero no para un enlace de 14px
ni para un botón con texto de 12px**.

Por eso hay dos tokens y no uno:

| Token | Valor | Para qué |
|-------|-------|----------|
| `macasa-brand` | `#2378eb` | Identidad: el azul del manual, tal cual. Títulos grandes, iconos, rellenos, degradados |
| `macasa-primary` | `#1e67ca` | Interactivo: botones, enlaces, texto chico en azul. 5.46:1 sobre blanco |
| `macasa-primary-dark` | `#1854a4` | Hover, y etiquetas chicas sobre superficie azul clara. 7.39:1 |

Es el mismo tono un escalón más oscuro: a simple vista son el mismo azul, la
diferencia sólo se vuelve visible —y necesaria— en texto pequeño.

**El blanco sobre el azul de marca también da 4.24:1.** Por eso la banda de CTA
usa `azul-600` como campo y deja el azul de marca en el degradado: así el texto
de 18px pasa AA sin perder la lectura de marca.

---

## 4. Escala

El manual muestra la rampa (pág. 4) pero no da valores. Los tints se calculan
mezclando con blanco y las sombras con negro. Los neutros salen **todos de la
familia del gris 01 (`#636569`)** para no introducir un gris ajeno al manual.

```
azul     50 #f2f7fe · 100 #e0ecfc · 200 #c1d9f9 · 300 #9ac1f6 · 400 #619ef1
         500 #2378eb (manual) · 600 #1e67ca · 700 #1854a4 · 800 #13417f · 900 #0d2e59

neutro   50 #f7f7f8 · 100 #eff0f0 · 200 #ddddde · 300 #c4c4c6 · 400 #929396
         500 #636569 (manual) · 600 #515356 · 700 #3d3f41 · 800 #2a2a2c · 900 #1c1c1d
```

El fondo oscuro del footer (`#1c1c1d`) es una derivación del gris 01, no un
negro genérico: el manual no da un oscuro, y usar la familia de su propio gris
mantiene la temperatura de la paleta.

**Umbrales de uso, ya verificados:**

| Combinación | Contraste | Veredicto |
|-------------|-----------|-----------|
| `#636569` sobre blanco | 5.84 | ✅ texto corrido |
| `#808080` sobre blanco | 3.95 | ⚠️ sólo texto grande |
| `#afafaf` sobre blanco | 2.19 | ❌ nunca texto — sólo bordes |
| `#afafaf` sobre `#1c1c1d` | 6.89 | ✅ texto sobre oscuro |
| `#2378eb` sobre `#1c1c1d` | 3.57 | ⚠️ no para texto chico → usar `azul-300` (8.15) |

---

## 5. Tipografía (pág. 5)

| Rol | Familia | Cómo se resuelve |
|-----|---------|------------------|
| Display (`h1`–`h4`) | **Helvetica** | `'Helvetica Neue', Helvetica, Arial, 'Liberation Sans'`. No es webfont: nativa en macOS/iOS, cae a Arial en Windows — metricamente compatible, sin salto de layout |
| Texto | **Hind** | `next/font/google`, **self-hosted en el build**: no hay request a Google en runtime |

Hind se descarga en tiempo de build. Es una dependencia de red del build; si
alguna vez falla el deploy por eso, la salida es vendorizar los `.woff2` con
`next/font/local` — y entonces hay que agregar `!websites/**/public/**/*.woff2`
al `.gitignore` raíz, porque hoy sólo están whitelisteadas las imágenes.

---

## 6. Logotipo (pág. 2)

El manual autoriza **dos versiones y nada más**:

| Versión | Archivo | Dónde |
|---------|---------|-------|
| Color | `public/logo-macasa-transparent.png` | Sólo sobre blanco o gris muy claro |
| Blanco (knockout) | `public/marca/logo-macasa-blanco.png` | **Obligatorio** sobre azul, gris u oscuro |

La versión blanca se generó del canal alfa del logotipo original, que es
exactamente lo que es un knockout.

**No es preferencia estética.** El wordmark a color sobre el azul de marca queda
casi invisible: es el mismo azul del fondo. El footer del sitio usaba el
logotipo a color sobre fondo oscuro; eso se corrigió.

Ambas versiones se sirven **únicamente** por el componente
[`MacasaLogo`](../src/shared/components/macasa-logo.tsx). No insertar la marca
con un `<img>` a mano: el componente es lo que evita que se vuelva a colocar la
versión equivocada.

---

## 7. Imágenes del manual

Extraídas del PDF a resolución completa y convertidas a WebP q82
(1.3 MB en total para las 14).

**Fondos** (`public/fondos/`) — pp. 6-9:

| Archivo | Manual | Uso |
|---------|--------|-----|
| `fondo-01.webp` | FONDO 01 | interior claro desenfocado |
| `fondo-02.webp` | FONDO 02 | corredor cálido desenfocado |
| `fondo-03.webp` | FONDO 03 | oficina moderna nítida |
| `fondo-04.webp` | FONDO 04 | **hero de la home** — el de la portada |
| `fondo-04-hud.webp` | FONDO 04 (capa técnica) | banda de CTA, al 15% |

**Banco fotográfico** (`public/fotos/`) — pp. 10-15:

| Archivo | Página que lo usa |
|---------|-------------------|
| `sala-presentacion.webp` | `/nosotros` |
| `revision-hardware.webp` | `/servicios/venta-hardware` |
| `equipo-laptop.webp` | `/servicios/venta-software` |
| `datacenter-tablet.webp` | `/servicios/consultoria` |
| `junta-propuesta.webp` | `/servicios/soluciones-financieras` |
| `asesoria-dupla.webp` | `/contacto` |
| `showroom-tablet.webp` | `/unete` |
| `tablet-escritorio.webp`, `tablet-oficina.webp` | sin asignar |

Las fotos del banco van **detrás del velo azul** de `PageHero`
(`azul-900/95 → azul-800/85 → brand/60`). El velo no es decoración: es lo que
garantiza el contraste del texto blanco con cualquier foto del banco, incluidas
las claras. Al cambiar una foto no hace falta recalcular nada.

Cuatro del banco vienen chicas en el PDF (519×752 a 666×752). Sirven detrás del
velo; **no** las uses como imagen a sangre completa sin pedir el original a
MACASA.

---

## 8. Lo que el manual no resuelve

| Hueco | Qué se hizo |
|-------|-------------|
| No hay color de acento | El contraste sobre azul lo da el **blanco** (botón blanco con texto azul), no un tercer color. El naranja que tenía el sitio (`#F2933D`) no venía de ningún manual y se eliminó |
| No hay colores de estado | Se conservan rojo/verde de Tailwind en los formularios: son semánticos, no de marca |
| No hay escala tipográfica ni espaciado | Se conservó la del sitio: el manual es de identidad, no de layout |

---

*Aplicado el 2026-09-17. Antes de este cambio el sitio usaba `#003DA5` + acento
naranja e Inter — ninguno de los tres salía del manual.*
