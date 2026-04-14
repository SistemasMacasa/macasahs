# BUSINESS_LOGIC.md - MACASA HS

> Generado por SaaS Factory | Fecha: 2026-03-19

## 1. Problema de Negocio
**Dolor:** MACASA tiene un sitio web obsoleto (www.macasahs.com.mx) que fue diseñado como tienda en línea pero ya no cumple esa función. Hoy solo necesitan presencia informativa pero el sitio actual confunde a los visitantes, no transmite profesionalismo y requiere mantener un sistema complejo de e-commerce que no usan.

**Costo actual:**
- Clientes se confunden al ver una tienda en línea donde no pueden comprar
- Pérdida de credibilidad y profesionalismo frente a competidores
- Mantenimiento innecesario de un sistema e-commerce complejo

## 2. Solución
**Propuesta de valor:** Un sitio web profesional e informativo que presente a MACASA como distribuidor tecnológico confiable, destacando sus servicios de distribución de hardware/software, licenciamiento, consultoría TI, servicios cloud y virtualización.

**Flujo principal (Happy Path):**
1. Visitante llega al sitio → ve hero profesional con propuesta de valor
2. Explora servicios (distribución, licenciamiento, consultoría TI, cloud, virtualización)
3. Ve partners/marcas que manejan (Dell, HP, Lenovo, Apple, Microsoft, etc.)
4. Conoce la empresa en sección "Nosotros"
5. Encuentra información de contacto y llena formulario o llama directamente

## 3. Usuario Objetivo
**Roles:**
- Gerentes de TI de empresas medianas buscando un proveedor confiable
- Directores de compras que necesitan cotizar equipo de cómputo
- PyMEs que necesitan armar su infraestructura tecnológica
- Gerentes de TI con incidentes o requerimientos de migraciones

**Contexto:** Profesionales B2B que evalúan proveedores tecnológicos. Buscan credibilidad, catálogo de servicios claro y forma rápida de contactar.

## 4. Arquitectura de Datos
**Input:**
- Formulario de contacto/cotización (nombre, empresa, email, teléfono, mensaje)

**Output:**
- Notificación por email a contacto01@macasahs.com.mx

**Storage:** No se requiere base de datos por el momento. Sitio estático informativo.

## 5. KPI de Éxito
**Métrica principal:** Que el sitio se vea profesional y moderno, al nivel de artem.com.mx

## 6. Contenido a Generar

> MACASA no cuenta con documentación ni contenido preparado. TODO el contenido (textos, descripciones de servicios, sección nosotros) debe ser generado por el agente. Solo se usará el logo y código de colores de MACASA. Las imágenes serán generadas.

### Sitios de Referencia (estilo y estructura)
- **artem.com.mx** — Integradora tecnológica mexicana. Cards interactivas, métricas, hero impactante, paleta moderna.
- **kenos.com.mx** — Servicios TI. Gradientes, estadísticas destacadas, logos de alianzas, testimonios.
- **kyndryl.com** — Servicios de infraestructura global. Paleta corporativa, sliders, banners hero, marquesinas de partners.

### Información de MACASA (del sitio actual)
- **Teléfono:** (55) 5003 2830
- **Email:** contacto01@macasahs.com.mx
- **Dirección:** Av. Primero de Mayo No. 15 Piso 10 Oficina 1025, Col. San Andrés Atoto, Naucalpan de Juárez, Estado de México
- **Horarios:** Lunes a viernes, 9 AM a 6 PM
- **Redes sociales:** Facebook

### Servicios a Destacar
1. **Distribución de Hardware** — Equipos de cómputo, servidores, redes, seguridad, impresión (Dell, HP, Lenovo, Apple, Acer)
2. **Licenciamiento de Software** — Sistemas operativos, antivirus, software empresarial, Microsoft, etc.
3. **Consultoría TI** — Asesoría tecnológica, diseño de infraestructura, migraciones
4. **Servicios Cloud** — Soluciones en la nube, migración a cloud, administración
5. **Virtualización** — Servidores virtuales, consolidación de infraestructura, optimización

### Marcas/Partners
Dell, HP, Lenovo, Apple, Acer, Microsoft (y otras que se infieran del catálogo actual)

## 7. Especificación Técnica (Para el Agente)

### Secciones del Sitio
```
Páginas:
├── / (Home)
│   ├── Hero — Propuesta de valor + CTA
│   ├── Servicios — 5 servicios principales con cards
│   ├── Partners — Logos de marcas (marquesina o grid)
│   ├── Nosotros — Historia/misión de MACASA
│   └── Contacto — Formulario + datos de contacto
│
└── (Single Page con navegación por secciones)
```

### Features a Implementar (Feature-First)
```
src/features/
├── hero/            # Banner principal con propuesta de valor
├── services/        # Cards de servicios con iconos/descripciones
├── partners/        # Grid/marquesina de logos de marcas
├── about/           # Sección Nosotros
└── contact/         # Formulario de contacto → email
```

### Stack Confirmado
- **Frontend:** Next.js 16 + React 19 + TypeScript + Tailwind 3.4
- **Formulario:** Email via API route (Resend o nodemailer)
- **Estilo:** Inspirado en artem.com.mx — corporativo, moderno, cards interactivas
- **Imágenes:** Generadas con AI (skill image-generation)
- **Deploy:** Vercel

### Próximos Pasos
1. [ ] Extraer logo y colores de MACASA del sitio actual
2. [ ] Definir design system (basado en referencias)
3. [ ] Implementar layout base + navbar + footer
4. [ ] Sección: Hero
5. [ ] Sección: Servicios
6. [ ] Sección: Partners/Marcas
7. [ ] Sección: Nosotros
8. [ ] Sección: Contacto (formulario → email)
9. [ ] Generar imágenes con AI
10. [ ] Responsive + optimización
11. [ ] Deploy Vercel
