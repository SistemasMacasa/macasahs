import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { CtaSection } from '@/shared/components/cta-section'
import { Monitor, Server, Printer, Network, Laptop, HardDrive, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Venta de Hardware | MACASA',
  description: 'Cómputo portátil y desktop, servidores, impresión y networking de las marcas líderes del mercado.',
}

const categories = [
  {
    icon: Laptop,
    title: 'Cómputo',
    description: 'Equipos portátiles y de escritorio para cada perfil de usuario en tu organización. Desde estaciones de trabajo de alto rendimiento hasta equipos corporativos optimizados para productividad.',
    items: ['Laptops corporativas', 'Desktops y All-in-One', 'Workstations', 'Monitores y periféricos'],
    brands: [
      { name: 'Dell', logo: '/partners/dell-leasing.png' },
      { name: 'HP', logo: '/partners/hp-financial.png' },
      { name: 'Lenovo', logo: '/partners/lenovo.png' },
      { name: 'Apple', logo: '/partners/apple.svg' },
    ],
  },
  {
    icon: Printer,
    title: 'Impresión',
    description: 'Soluciones de impresión y digitalización para optimizar los flujos documentales de tu empresa. Desde equipos individuales hasta flotas administradas.',
    items: ['Impresoras láser y multifuncionales', 'Plotters y gran formato', 'Escáneres documentales', 'Consumibles y refacciones'],
    brands: [
      { name: 'HP', logo: '/partners/hp-financial.png' },
      { name: 'Xerox', logo: '/partners/Xerox_logo.svg' },
      { name: 'Epson', logo: '/partners/Epson_logo.png' },
      { name: 'Lexmark', logo: '/partners/Lexmark-primary-logo.png' },
    ],
  },
  {
    icon: Server,
    title: 'Servidores',
    description: 'Infraestructura de cómputo empresarial diseñada para soportar las cargas de trabajo más exigentes. Soluciones rack, torre y blade con configuraciones a medida.',
    items: ['Servidores rack y torre', 'Servidores blade', 'Almacenamiento SAN/NAS', 'Soluciones hiperconvergentes'],
    brands: [
      { name: 'Dell', logo: '/partners/dell-leasing.png' },
      { name: 'HP', logo: '/partners/hp-financial.png' },
      { name: 'Lenovo', logo: '/partners/lenovo.png' },
    ],
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'Equipamiento de red para garantizar conectividad confiable y de alto rendimiento en toda tu organización. Diseño, suministro e implementación.',
    items: ['Switches y routers', 'Access points y wireless', 'Firewalls y seguridad perimetral', 'Cableado estructurado'],
    brands: [
      { name: 'Cisco', logo: '/partners/cisco.png' },
      { name: 'Fortinet', logo: '/partners/Fortinet_logo.svg' },
    ],
  },
]

const benefits = [
  'Equipos originales con garantía de fabricante',
  'Precios competitivos como distribuidor autorizado',
  'Asesoría para elegir la mejor configuración',
  'Entrega e instalación en sitio',
  'Soporte post-venta especializado',
  'Opciones de renovación tecnológica',
]

export default function VentaHardwarePage() {
  return (
    <>
      <PageHero
        title="Venta de Hardware"
        description="Equipamiento tecnológico de las marcas líderes para impulsar la productividad de tu empresa."
        breadcrumbs={[{ label: 'Venta de Hardware' }]}
        tags={['Cómputo', 'Servidores', 'Impresión', 'Networking']}
      />

      {/* Categories grid 2x2 */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-macasa-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-macasa-primary/10 p-3">
                  <category.icon size={28} className="text-macasa-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-macasa-dark">{category.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-macasa-text-light">{category.description}</p>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="shrink-0 text-macasa-primary" />
                      <span className="text-sm text-macasa-text">{item}</span>
                    </li>
                  ))}
                </ul>

                {category.brands && category.brands.length > 0 && (
                  <div className="mt-6 border-t border-macasa-border pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-macasa-text-light">Marcas que comercializamos</p>
                    <div className="flex flex-wrap items-center gap-8">
                      {category.brands.map((brand) => (
                        <img
                          key={brand.name}
                          src={brand.logo}
                          alt={brand.name}
                          className="h-12 w-auto max-w-[100px] object-contain"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-macasa-bg-light">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-macasa-dark">¿Por qué comprar con MACASA?</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 rounded-xl border border-macasa-border bg-white p-4">
                <CheckCircle size={18} className="shrink-0 text-macasa-accent" />
                <span className="text-sm text-macasa-text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="¿Necesitas cotizar equipo?"
        description="Envíanos tus requerimientos y te preparamos una propuesta en menos de 24 horas."
        buttonText="Solicitar cotización"
      />
    </>
  )
}
