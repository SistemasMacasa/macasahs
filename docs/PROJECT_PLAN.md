# PROJECT_PLAN — MACASA HS Website

> Sitio web informativo profesional para MACASA Hardware & Software.
> Distribuidor TI B2B: hardware, software, licenciamiento, consultoría, cloud, virtualización.
> Inicio: 2026-04-01
> Estado: EN PRODUCCION — https://aeap-macasa.artem.com.mx

---

## Resumen de Progreso

| Fase | Nombre | Estado | Progreso |
|------|--------|--------|----------|
| 1 | Estructura base + diseño system | ✅ Completada | 5/5 |
| 2 | Páginas principales | ✅ Completada | 7/7 |
| 3 | Formulario de contacto | ✅ Completada | 5/5 |
| 4 | Assets (logos partners) | ✅ Completada | 16/16 |
| 5 | SEO + Metadata | ✅ Completada | 4/4 |
| 6 | Responsive QA | ✅ Completada | 4/4 |
| 7 | Deploy producción | ✅ Completada | 3/3 |
| 8 | Deploy AWS + Dominio producción | ✅ Completada | 9/9 |
| 9 | Página de reclutamiento /unete | ✅ Completada | 3/3 |
| 10 | Brevo SMTP — formularios propios | ✅ Completada | 4/4 |
| 11 | Export + CI/CD repo cliente | ✅ Completada | 4/4 |

**Total**: 63/63 tareas completadas

---

## FASE 1: Estructura base + diseño system ✅ COMPLETADA

### Track 1A: Setup

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 1.1 | Inicializar proyecto Next.js 16 + TypeScript | ✅ | next.config.ts output standalone |
| 1.2 | Tailwind CSS 3.4 + shadcn/ui | ✅ | Paleta corporativa MACASA |
| 1.3 | Componente `<Navbar />` | ✅ | Logo MACASA, navegación principal |
| 1.4 | Componente `<Footer />` | ✅ | Datos de contacto y links |
| 1.5 | Componentes shared: `<PageHero />`, `<CtaSection />` | ✅ | Reutilizables en todas las páginas |

### Entregables Fase 1

- [x] Proyecto Next.js corriendo localmente
- [x] Sistema de diseño con colores y tipografía MACASA
- [x] Layout base con Navbar y Footer
- [x] Componentes shared listos para reutilizar
- [x] Build exitoso sin errores

---

## FASE 2: Páginas principales ✅ COMPLETADA

### Track 2A: Rutas

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 2.1 | Home `/` — Hero, servicios cards, partners, CTA | ✅ | Gradiente + cards de texto |
| 2.2 | Nosotros `/nosotros` | ✅ | Historia, valores, razones, mapa Naucalpan |
| 2.3 | Contacto `/contacto` | ✅ | Formulario + datos de contacto |
| 2.4 | `/servicios/venta-hardware` | ✅ | Cómputo, servidores, impresión, networking |
| 2.5 | `/servicios/venta-software` | ✅ | Licenciamiento empresarial |
| 2.6 | `/servicios/consultoria` | ✅ | Consultoría TI |
| 2.7 | `/servicios/soluciones-financieras` | ✅ | Crédito, financiamiento, arrendamiento |

### Entregables Fase 2

- [x] 7 rutas implementadas y navegables
- [x] Contenido real de MACASA HS en cada página
- [x] Navegación entre páginas funcional
- [x] Layout consistente en todas las vistas

---

## FASE 3: Formulario de contacto ✅ COMPLETADA

### Track 3A: Contacto

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 3.1 | UI del formulario (`ContactForm`) | ✅ | Campos: nombre, email, empresa, mensaje |
| 3.2 | Envío via web3forms API | ✅ | Sin backend propio, sin secrets en env |
| 3.3 | Destinatario configurado | ✅ | `contacto01@macasahs.com.mx` |
| 3.4 | Validación de campos | ✅ | HTML5 required |
| 3.5 | Estados de UI (enviando / éxito / error) | ✅ | Feedback visual al usuario |

### Entregables Fase 3

- [x] Formulario funcional enviando a contacto01@macasahs.com.mx
- [x] Estados de carga y confirmación implementados
- [x] Sin dependencia de backend propio

---

## FASE 4: Assets (logos partners) ✅ COMPLETADA

### Track 4A: Partners

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 4.1 | Dell | ✅ | `dell-leasing.png` |
| 4.2 | HP | ✅ | `hp-financial.png` |
| 4.3 | Lenovo | ✅ | `lenovo.png` |
| 4.4 | Apple | ✅ | `apple.svg` |
| 4.5 | Microsoft | ✅ | `microsoft.png` |
| 4.6 | Cisco | ✅ | `cisco.png` |
| 4.7 | VMware | ✅ | `vmware.png` |
| 4.8 | Check Point | ✅ | `checkpoint.svg` + `.png` |
| 4.9 | Fortinet | ✅ | `fortinet.png` |
| 4.10 | Lexmark | ✅ | `lexmark.svg` |
| 4.11 | Xerox | ✅ | `xerox.svg` |
| 4.12 | Epson | ✅ | `epson.svg` |
| 4.13 | Google | ✅ | `google.png` |
| 4.14 | Veeam | ✅ | `veeam.svg` |
| 4.15 | Red Hat | ✅ | `redhat-official.svg` |
| 4.16 | SQL Server | ✅ | `sql-server-official.svg` |

### Entregables Fase 4

- [x] 16 logos de partners en `/public/partners/`
- [x] Logos MACASA: principal, transparente, favicon, apple-icon
- [x] Jerarquía visual: aliados financieros `h-16 max-w-[280px]`, marcas en cards `h-12 max-w-[100px]`

---

## FASE 5: SEO + Metadata ✅ COMPLETADA

### Track 5A: SEO

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 5.1 | Metadata por página (title, description) | ✅ | Next.js metadata API |
| 5.2 | `sitemap.xml` | ✅ | Generado automáticamente con Next.js |
| 5.3 | `robots.txt` | ✅ | Configurado |
| 5.4 | OG cards | ✅ | Open Graph para redes sociales |

### Entregables Fase 5

- [x] Metadata única por página
- [x] Sitemap y robots.txt presentes
- [x] Indexable por buscadores

---

## FASE 6: Responsive QA ✅ COMPLETADA

### Track 6A: QA

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 6.1 | Mobile (375px) | ✅ | Navbar hamburger, hero, cards, formulario |
| 6.2 | Tablet (768px) | ✅ | Layout intermedio revisado |
| 6.3 | Desktop (1280px+) | ✅ | Layout completo |
| 6.4 | Cross-browser básico | ✅ | Chrome, Firefox, Safari |

### Entregables Fase 6

- [x] Sitio funcional y legible en todos los breakpoints
- [x] Navbar mobile con menú hamburger
- [x] Cards de servicios adaptadas a mobile

---

## FASE 7: Deploy producción ✅ COMPLETADA

### Track 7A: Infraestructura

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 7.1 | Dockerfile multi-stage | ✅ | node:20-alpine, standalone output |
| 7.2 | Docker Compose en aeap-agents | ✅ | Container `macasahs` activo |
| 7.3 | Cloudflare Tunnel configurado | ✅ | `aeap-macasa.artem.com.mx` activo |

### Entregables Fase 7

- [x] Sitio accesible en https://aeap-macasa.artem.com.mx
- [x] Container Docker estable en producción
- [x] SSL activo via Cloudflare

---

## Dependencias

| Dependencia | Tipo | Estado |
|-------------|------|--------|
| web3forms API key | Externa | ✅ Configurada en dashboard web3forms |
| Cloudflare Tunnel (aeap-agents) | Infra | ✅ Activo |
| Docker en aeap-agents VPS | Infra | ✅ Activo |

---

## Decisiones y Notas

| Fecha | Decisión |
|-------|----------|
| 2026-04-01 | Formulario con web3forms — no requiere backend propio ni secrets en env |
| 2026-04-01 | Deploy Docker standalone en aeap-agents (no Vercel) |
| 2026-04-01 | Sin base de datos — sitio estático informativo, sin Supabase por ahora |
| 2026-04-01 | Dominio temporal `aeap-macasa.artem.com.mx` — dominio final pendiente decisión cliente |
| 2026-04-03 | Logos aliados financieros con más jerarquía visual que logos de marcas en cards |
| 2026-04-03 | Remover `turbopack` de `experimental` en next.config.ts — Next.js 16 no acepta esa key |

---

## Contacto del Cliente

| Campo | Valor |
|-------|-------|
| Teléfono | (55) 5003 2830 |
| Email | contacto01@macasahs.com.mx / ventas@macasahs.com.mx |
| Dirección | Av. Primero de Mayo No. 15, Piso 10, Of. 1025, Col. San Andrés Atoto, Naucalpan de Juárez, Edo. de México |
| Horario | Lunes a Viernes, 9 AM – 6 PM |

---

---

## FASE 8: Deploy en AWS + Dominio de producción

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 8.1 | AWS CLI instalado en WSL y Windows 11 | ✅ | Credenciales cuenta cliente MCARREON1 |
| 8.2 | ECR repositorio `macasahs` en us-east-1 | ✅ | 518824469708.dkr.ecr.us-east-1.amazonaws.com/macasahs |
| 8.3 | Lightsail Container Service `macasahs` (nano $7/mes) | ✅ | URL: macasahs.m1hzedgqrqhe4.us-east-1.cs.amazonlightsail.com |
| 8.4 | GitHub Actions deploy automático | ✅ | Push a websites/macasahs/ → build + deploy a Lightsail |
| 8.5 | Certificado ACM `www.macasahs.com.mx` validado | ✅ | Validado via CNAME en Cloudflare |
| 8.6 | Dominio custom conectado a Lightsail | ✅ | `update-container-service --public-domain-names` |
| 8.7 | DNS macasahs.com.mx migrado a Cloudflare | ✅ | Nameservers Akky → corey/melinda.ns.cloudflare.com |
| 8.8 | CNAME www → Lightsail + A @ dummy + Page Rule 301 | ✅ | Configurado en Cloudflare |
| 8.9 | Propagación DNS completada | ✅ | Completada 2026-04-13 |

### Decisiones

| Fecha | Decisión |
|-------|----------|
| 2026-04-09 | Lightsail en lugar de App Runner — deprecated el 30 abril 2026, más económico ($7/mes) |
| 2026-04-09 | package-lock.json commiteado en macasahs — requerido por npm ci en GitHub Actions |
| 2026-04-09 | GitHub Actions excluye macasahs del deploy al VPS (solo va a Lightsail) |

*Última actualización: 2026-04-09 — Fase 8 deploy AWS en curso (propagación DNS pendiente)*

---

## FASE 9: Página de reclutamiento ✅ COMPLETADA

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 9.1 | Componente `RecruitmentForm` | ✅ | Nombre, Teléfono, Correo, Puesto, CV, Notas |
| 9.2 | Página `/unete` con PageHero + sección beneficios | ✅ | 4 cards: crecimiento, equipo, ubicación, horario |
| 9.3 | Opción "Únete a nuestro equipo" en navbar | ✅ | Desktop + mobile |

### Decisiones

| Fecha | Decisión |
|-------|----------|
| 2026-04-13 | Web3Forms para reclutamiento — consistencia con ContactForm, sin backend extra |
| 2026-04-13 | Envío a mcarreon@macasahs.com.mx — RRHH separado de contacto general |
| 2026-04-13 | Web3Forms campo `to` no soportado en plan gratuito — usar access key dedicado por correo destino |

---

## FASE 10: Brevo SMTP — formularios propios ✅ COMPLETADA

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 10.1 | Instalar nodemailer + @types/nodemailer | ✅ | |
| 10.2 | `/api/contact` → Brevo → `ventas@macasahs.com.mx` | ✅ | replyTo del usuario |
| 10.3 | `/api/unete` → Brevo → `mcarreon@macasahs.com.mx` + CV adjunto | ✅ | PDF/DOC/DOCX |
| 10.4 | Sender `soporte@macasahs.com.mx` con dominio autenticado | ✅ | Dominio verificado en Brevo |

### Decisiones

| Fecha | Decisión |
|-------|----------|
| 2026-04-14 | Migrar de Web3Forms a nodemailer+Brevo — plan gratuito no soporta file uploads |
| 2026-04-14 | Cuenta Brevo nueva ARTEM para macasahs — cuenta cliente sin créditos |
| 2026-04-14 | Sender soporte@macasahs.com.mx — dominio macasahs.com.mx ya autenticado en Brevo |
| 2026-04-14 | /contacto destinatario ventas@macasahs.com.mx (no contacto01@) |

---

## FASE 11: Export + CI/CD repo cliente ✅ COMPLETADA

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 11.1 | Export limpio a `SistemasMacasa/macasahs` | ✅ | Script export-project.sh |
| 11.2 | Workflow `deploy.yml` en cliente repo | ✅ | Build Docker → Lightsail |
| 11.3 | Secrets AWS + Brevo en cliente repo | ✅ | 4 secrets configurados |
| 11.4 | Sync automático `sync-macasahs.yml` en monorepo | ✅ | Push websites/macasahs/** → sync → deploy |

### Decisiones

| Fecha | Decisión |
|-------|----------|
| 2026-04-14 | Monorepo es fuente de verdad — sync automático vía GitHub Actions al repo del cliente |
| 2026-04-14 | deploy-macasahs.yml eliminado del monorepo — deploy lo maneja SistemasMacasa/macasahs |
