# macasahs — Sitio Web MACASA HS

> Reglas globales, Decision Tree y skills: ver root `CLAUDE.md`.
> Este archivo contiene solo el contexto especifico de este sitio.

---

## Que es este proyecto

Sitio web informativo profesional para MACASA HS, distribuidor tecnologico B2B.
Reemplaza un e-commerce obsoleto con un sitio estatico de presencia informativa.
Ver `BUSINESS_LOGIC.md` para contexto completo de negocio.

| Capa | Detalle |
|------|---------|
| Framework | Next.js 16 + React 19 + TypeScript |
| Backend | Supabase self-hosted (formulario de contacto) |
| Deploy | Docker en `aeap-agents` |
| Dominio | `https://aeap-macasa.artem.com.mx` |

## Negocio (resumen)

- Distribuidor TI B2B: hardware, software, licenciamiento, consultoria, cloud, virtualizacion
- Partners: Dell, HP, Lenovo, Apple, Microsoft y otros
- Usuarios: Gerentes TI y directores de compras de empresas medianas y PyMEs
- Contacto: formulario → notificacion a `contacto01@macasahs.com.mx`
- Sin base de datos por ahora (sitio estatico informativo)

## Notas tecnicas

- `settings.local.json` con permisos extendidos para Playwright y operaciones con imagenes/logos
- Sin e-commerce — NO agregar funcionalidad de tienda sin autorizacion explicita
