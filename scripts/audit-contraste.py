#!/usr/bin/env python3
"""
Audit de contraste WCAG AA sobre el DOM renderizado del sitio MACASA.

Recorre las 8 paginas publicas en desktop y movil, y reporta todo texto que no
alcance su umbral: 4.5:1 normal, 3.0:1 grande (>=24px, o >=18.7px en bold).

Por que existe: el manual de identidad de MACASA trae un azul (#2378eb) que da
4.24:1 sobre blanco — alcanza para titulo pero no para texto chico. Ese margen
no se ve a ojo, y un cambio de color aparentemente inocuo lo rompe en silencio.
Ver docs/IDENTIDAD.md seccion 3.

GOTCHA que hace falta respetar: Tailwind 4 emite los colores de fondo como
`oklab(...)`, no como `rgb()`. Un parser de numeros sobre esa cadena lee
"0.999994, 0.0000456, ..." como RGB y concluye negro -> decenas de falsos
positivos. Aqui el color se resuelve pintando 1px en un canvas y leyendo el
pixel: eso devuelve sRGB real para oklab, color-mix, currentColor y lo que
venga. Si un audit de contraste reporta fallas absurdas, sospecha del parser.

Uso:
    npx next dev --turbopack -p 3000        # en otra terminal
    ~/.venvs/brand-kit/bin/python scripts/audit-contraste.py [--url URL]

Salida: exit 0 si no hay fallas, 1 si hay. Sirve para CI.
"""

import argparse
import sys

from playwright.sync_api import sync_playwright

PAGINAS = [
    "/",
    "/nosotros",
    "/servicios/venta-hardware",
    "/servicios/venta-software",
    "/servicios/consultoria",
    "/servicios/soluciones-financieras",
    "/contacto",
    "/unete",
]

VIEWPORTS = [("desktop", 1440, 900), ("movil", 390, 844)]

JS_AUDIT = r"""
() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  const cache = {};

  // Resuelve cualquier notacion de color a sRGB real (oklab, color-mix, rgb...)
  const toRGBA = (s) => {
    if (cache[s]) return cache[s];
    cx.clearRect(0, 0, 1, 1); cx.fillStyle = '#000';
    try { cx.fillStyle = s; } catch (e) { return cache[s] = [0, 0, 0, 0]; }
    cx.clearRect(0, 0, 1, 1); cx.fillRect(0, 0, 1, 1);
    const d = cx.getImageData(0, 0, 1, 1).data;
    return cache[s] = [d[0], d[1], d[2], d[3] / 255];
  };

  const over = (f, b) => { const a = f[3];
    return [f[0]*a + b[0]*(1-a), f[1]*a + b[1]*(1-a), f[2]*a + b[2]*(1-a), 1]; };

  const lum = (c) => { const f = v => { v /= 255;
      return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
    return 0.2126*f(c[0]) + 0.7152*f(c[1]) + 0.0722*f(c[2]); };

  // Composita la pila de fondos del elemento hacia arriba, sobre blanco
  const fondoDe = (el) => {
    const capas = []; let n = el;
    while (n) {
      const c = toRGBA(getComputedStyle(n).backgroundColor);
      if (c[3] > 0) capas.push(c);
      n = n.parentElement;
    }
    let acc = [255, 255, 255, 1];
    for (let i = capas.length - 1; i >= 0; i--) acc = over(capas[i], acc);
    return acc;
  };

  const fallas = [];
  const sel = 'p,a,span,li,h1,h2,h3,h4,button,label,div';
  document.querySelectorAll(sel).forEach(el => {
    if (el.children.length > 0) return;              // solo nodos de texto hoja
    const t = (el.innerText || '').trim();
    if (!t || t.length > 90) return;
    const st = getComputedStyle(el);
    if (st.visibility === 'hidden' || st.display === 'none') return;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;

    const fs = parseFloat(st.fontSize);
    const fw = parseInt(st.fontWeight) || 400;
    const fondo = fondoDe(el);
    let fg = toRGBA(st.color);
    const op = parseFloat(st.opacity);
    if (fg[3] < 1 || op < 1) {
      fg = over([fg[0], fg[1], fg[2], fg[3] * (isNaN(op) ? 1 : op)], fondo);
    }

    const l1 = lum(fg), l2 = lum(fondo);
    const cr = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const grande = fs >= 24 || (fs >= 18.66 && fw >= 700);
    const min = grande ? 3.0 : 4.5;
    if (cr < min) {
      fallas.push({ t: t.slice(0, 50), cr: +cr.toFixed(2), min, fs: +fs.toFixed(0), fw });
    }
  });
  return fallas;
}
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default="http://localhost:3000", help="base del sitio")
    args = ap.parse_args()

    total = 0
    with sync_playwright() as p:
        navegador = p.chromium.launch()
        for etiqueta, w, h in VIEWPORTS:
            ctx = navegador.new_context(viewport={"width": w, "height": h})
            pagina = ctx.new_page()
            for ruta in PAGINAS:
                pagina.goto(f"{args.url}{ruta}", wait_until="networkidle", timeout=45000)
                pagina.wait_for_timeout(400)
                fallas = pagina.evaluate(JS_AUDIT)
                if fallas:
                    print(f"\n[{etiqueta}] {ruta}")
                    for f in fallas:
                        print(
                            f"   {f['cr']:.2f} (min {f['min']}) "
                            f"{f['fs']}px/{f['fw']}  \"{f['t']}\""
                        )
                    total += len(fallas)
            ctx.close()
        navegador.close()

    print("\n" + "=" * 60)
    if total:
        print(f"contraste WCAG AA: {total} fallas")
        return 1
    print(
        f"contraste WCAG AA: 0 fallas "
        f"({len(PAGINAS)} paginas x {len(VIEWPORTS)} viewports)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
