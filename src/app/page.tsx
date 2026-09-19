import Link from 'next/link'
import { Monitor, Code, Search, Landmark } from 'lucide-react'
import { CtaSection } from '@/shared/components/cta-section'

const services = [
  {
    icon: Monitor,
    title: 'Venta de Hardware',
    description: 'Cómputo, servidores, impresión y networking de las marcas líderes del mercado.',
    href: '/servicios/venta-hardware',
  },
  {
    icon: Code,
    title: 'Venta de Software',
    description: 'Licenciamiento empresarial, sistemas operativos, herramientas de productividad y seguridad.',
    href: '/servicios/venta-software',
  },
  {
    icon: Search,
    title: 'Consultoría',
    description: 'Asesoría especializada en hardware, redes, software y seguridad para tu infraestructura TI.',
    href: '/servicios/consultoria',
  },
  {
    icon: Landmark,
    title: 'Soluciones Financieras',
    description: 'Crédito, financiamiento y arrendamiento para adquirir tecnología con flexibilidad.',
    href: '/servicios/soluciones-financieras',
  },
]

const partners = [
  { name: 'Dell', logo: '/partners/dell-leasing.png' },
  { name: 'HP', logo: '/partners/hp-financial.png' },
  { name: 'Lenovo', logo: '/partners/lenovo.png' },
  { name: 'Apple', logo: '/partners/apple.svg' },
  { name: 'Microsoft', logo: '/partners/microsoft.png' },
  { name: 'Cisco', logo: '/partners/cisco.png' },
  { name: 'VMware', logo: '/partners/vmware.png' },
  { name: 'Check Point', logo: '/partners/Check-Point.png' },
]

export default function Home() {
  return (
    <>
      {/* Hero — mismo tratamiento que la portada del manual:
          FONDO 04 lavado en blanco, tipografia en azul de marca. */}
      <section className="relative min-h-screen overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fondos/fondo-04.webp')" }}
          aria-hidden="true"
        />
        {/* El lavado no es decorativo: es lo que sostiene el contraste del
            texto azul y gris sobre la foto, igual que en la portada. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 lg:to-white/45"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl relative flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="pt-20 lg:pt-0">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-macasa-gris-900 sm:text-5xl lg:text-6xl">
                Tu socio{' '}
                <span className="text-macasa-brand">estratégico</span>{' '}
                en tecnología
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-macasa-gris-600">
                Distribuimos hardware, software y soluciones TI empresariales.
                Desde equipos de cómputo hasta consultoría y soluciones financieras,
                impulsamos la transformación digital de tu empresa.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-lg bg-macasa-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-macasa-primary-dark hover:shadow-lg"
                >
                  Habla con un experto
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-macasa-border pt-8">
                <div>
                  <p className="text-2xl font-bold text-macasa-gris-900 sm:text-3xl">15+</p>
                  <p className="mt-1 text-xs text-macasa-gris-500 sm:text-sm">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-macasa-gris-900 sm:text-3xl">500+</p>
                  <p className="mt-1 text-xs text-macasa-gris-500 sm:text-sm">Clientes atendidos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-macasa-gris-900 sm:text-3xl">20+</p>
                  <p className="mt-1 text-xs text-macasa-gris-500 sm:text-sm">Marcas aliadas</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:items-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-macasa-azul-200 bg-macasa-azul-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-macasa-brand animate-pulse" />
                <span className="text-xs font-medium text-macasa-primary-dark">
                  Distribuidor tecnológico certificado
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {services.map((service, i) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="animate-fade-in rounded-2xl border border-macasa-border bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-macasa-azul-200 hover:shadow-xl"
                    style={{ animationDelay: `${0.2 + i * 0.2}s` }}
                  >
                    <service.icon className="mb-3 text-macasa-brand" size={36} />
                    <p className="text-base font-semibold text-macasa-gris-900">{service.title}</p>
                    <p className="mt-1 text-sm text-macasa-gris-500">{service.description.split('.')[0]}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-macasa-bg-light">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-macasa-azul-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-macasa-primary-dark">
              Partners tecnológicos
            </span>
            <h2 className="mb-4 text-3xl font-bold text-macasa-gris-900 sm:text-4xl">
              Trabajamos con las{' '}
              <span className="text-macasa-brand">mejores marcas</span>
            </h2>
            <p className="mx-auto max-w-2xl text-macasa-text-light">
              Como distribuidor autorizado, ofrecemos productos originales con
              garantía de fábrica y precios competitivos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center justify-center rounded-2xl border border-macasa-border bg-white p-8"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-28 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  )
}
