# Ficha Técnica — Sitio Web MACASA HS
**Versión**: 1.0
**Fecha de emisión**: 2026-04-09
**Elaborado por**: ARTEM — Arquitectos de Tecnología Mouan S.A. de C.V.

---

## 1. Descripción General

Sitio web informativo profesional desarrollado para **MACASA Hardware & Software**, distribuidor TI B2B con presencia en el Estado de México. El sitio reemplaza un e-commerce obsoleto con una plataforma moderna de presencia digital orientada a la generación de contactos comerciales.

| Campo | Detalle |
|-------|---------|
| **Tipo de sitio** | Informativo corporativo (sin e-commerce) |
| **Objetivo** | Presencia digital profesional + captación de leads B2B |
| **Audiencia** | Gerentes TI y directores de compras de empresas medianas y PyMEs |
| **URL de producción** | https://www.macasahs.com.mx |

---

## 2. Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework web | Next.js | 16.x |
| Lenguaje | TypeScript | 5.7.x |
| UI Library | React | 19.x |
| Estilos | Tailwind CSS | 4.2.x |
| Íconos | Lucide React | 0.577.x |
| Runtime | Node.js | 20 (Alpine) |
| Contenerización | Docker (multi-stage build) | — |
| Formulario de contacto | Web3Forms API | — |

> El sitio **no tiene base de datos propia**. El formulario de contacto usa Web3Forms, un servicio externo que enruta los mensajes al correo del cliente sin requerir backend propio ni credenciales almacenadas en el servidor.

---

## 3. Páginas y Estructura

| Ruta | Contenido |
|------|-----------|
| `/` | Home — Hero, cards de servicios, partners, CTA |
| `/nosotros` | Historia, valores, ubicación (Naucalpan) |
| `/contacto` | Formulario de contacto + datos directos |
| `/servicios/venta-hardware` | Cómputo, servidores, impresión, networking |
| `/servicios/venta-software` | Licenciamiento empresarial |
| `/servicios/consultoria` | Consultoría TI |
| `/servicios/soluciones-financieras` | Crédito, financiamiento, arrendamiento |

---

## 4. Funcionalidades Implementadas

### 4.1 Formulario de Contacto
- Campos: nombre, empresa, correo electrónico, mensaje
- Validación de campos en frontend
- Envío directo a `contacto01@macasahs.com.mx` vía Web3Forms
- Estados de UI: enviando / confirmación de éxito / error

### 4.2 Diseño Responsivo
- Compatible con móvil (375px), tablet (768px) y escritorio (1280px+)
- Menú hamburger en móvil
- Probado en Chrome, Firefox y Safari

### 4.3 SEO
- Metadata única por página (título, descripción)
- `sitemap.xml` generado automáticamente por Next.js
- `robots.txt` configurado
- Open Graph cards para redes sociales

### 4.4 Partners y Marcas
16 logos de marcas tecnológicas incluidos:

| Categoría | Marcas |
|-----------|--------|
| Aliados financieros | Dell Leasing, HP Financial |
| Hardware | Lenovo, Apple, Cisco |
| Software | Microsoft, VMware, Red Hat, SQL Server, Google |
| Seguridad | Check Point, Fortinet |
| Impresión | Lexmark, Xerox, Epson |
| Backup | Veeam |

---

## 5. Infraestructura y Deploy

### 5.1 Plataforma de Hosting — AWS Lightsail

| Campo | Valor |
|-------|-------|
| **Proveedor** | Amazon Web Services (AWS) |
| **Servicio** | Lightsail Container Service |
| **Plan** | Nano — $7 USD/mes |
| **Región** | `us-east-1` (Norte de Virginia) |
| **Account ID** | `518824469708` (cuenta del cliente) |
| **Container Registry** | Amazon ECR — `macasahs` (us-east-1) |
| **URL interna Lightsail** | `macasahs.m1hzedgqrqhe4.us-east-1.cs.amazonlightsail.com` |

### 5.2 Dominio y DNS

| Campo | Valor |
|-------|-------|
| **Dominio** | `www.macasahs.com.mx` |
| **Gestión DNS** | Cloudflare (migrado desde Akky) |
| **Nameservers** | `corey.ns.cloudflare.com` / `melinda.ns.cloudflare.com` |
| **SSL/TLS** | Certificado AWS Certificate Manager (ACM) — validado vía CNAME |
| **Regla de redirección** | `macasahs.com.mx` → `www.macasahs.com.mx` (301) |

### 5.3 Pipeline de Deploy Automático

```
Desarrollador hace push a GitHub (rama main)
        ↓
GitHub Actions detecta cambios en websites/macasahs/
        ↓
Build de imagen Docker (Next.js standalone)
        ↓
Push a Amazon ECR (us-east-1)
        ↓
Deploy automático a Lightsail Container Service
        ↓
Sitio actualizado en www.macasahs.com.mx (~3 min)
```

> No se requiere intervención manual para actualizar el sitio. Cualquier cambio aprobado en el repositorio se publica automáticamente.

---

## 6. Seguridad

| Elemento | Implementación |
|----------|---------------|
| HTTPS | Activo en todos los ambientes (ACM + Cloudflare) |
| Secrets | Ninguna credencial almacenada en el código fuente |
| Backend propio | No aplica — formulario usa servicio externo (Web3Forms) |
| Acceso AWS | IAM User `MCARREON1` con permisos mínimos para ECR y Lightsail |

---

## 7. Datos de Contacto del Sitio

| Campo | Valor configurado |
|-------|-----------------|
| Teléfono | (55) 5003 2830 |
| Correo contacto | contacto01@macasahs.com.mx |
| Correo ventas | ventas@macasahs.com.mx |
| Dirección | Av. Primero de Mayo No. 15, Piso 10, Of. 1025, Col. San Andrés Atoto, Naucalpan de Juárez, Edo. de México |
| Horario | Lunes a Viernes, 9 AM – 6 PM |

---

## 8. Mantenimiento y Actualizaciones

| Actividad | Responsable | Notas |
|-----------|------------|-------|
| Actualización de contenido/texto | ARTEM o cliente con acceso al repo | Requiere push a GitHub |
| Renovación de dominio `.com.mx` | Cliente (Akky) | Verificar fecha de vencimiento |
| Factura AWS Lightsail | Cliente | ~$7 USD/mes — se cobra a tarjeta registrada en cuenta `518824469708` |
| Soporte técnico | ARTEM — contacto@artem.com.mx | — |

---

## 9. Repositorio de Código Fuente

El código fuente completo del sitio está disponible en la cuenta GitHub del cliente:

| Campo | Valor |
|-------|-------|
| **Organización GitHub** | SistemasMacasa |
| **Repositorio** | https://github.com/SistemasMacasa/macasahs |
| **Rama principal** | `main` |
| **Acceso** | Cuenta de la organización SistemasMacasa |

El repositorio contiene todo el código fuente, configuración de deploy (GitHub Actions + Docker) y documentación técnica del proyecto. Cualquier actualización al sitio se realiza haciendo un push a la rama `main`.

---

## 10. Entregables del Proyecto

| # | Entregable | Estado |
|---|-----------|--------|
| 1 | Código fuente en GitHub (github.com/SistemasMacasa/macasahs) | ✅ Entregado |
| 2 | Sitio publicado en `www.macasahs.com.mx` | ✅ En producción |
| 3 | Pipeline CI/CD configurado (GitHub Actions) | ✅ Operativo |
| 4 | SSL activo | ✅ Operativo |
| 5 | Formulario funcional → contacto01@macasahs.com.mx | ✅ Operativo |
| 6 | 7 páginas de contenido | ✅ Completas |
| 7 | 16 logos de partners integrados | ✅ Completos |
| 8 | SEO base (metadata, sitemap, robots) | ✅ Completo |
| 9 | Diseño responsivo (mobile, tablet, desktop) | ✅ Validado |

---

*Documento elaborado por ARTEM — Arquitectos de Tecnología Mouan S.A. de C.V.*
*Para soporte técnico: contacto@artem.com.mx*
