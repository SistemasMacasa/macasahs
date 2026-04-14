import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { CtaSection } from '@/shared/components/cta-section'
import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a MACASA HS: más de una década diseñando la arquitectura tecnológica de empresas en México.',
}

const values = [
  {
    icon: Target,
    title: 'Compromiso',
    description: 'Entregamos soluciones que cumplen con los estándares más exigentes del mercado.',
  },
  {
    icon: Eye,
    title: 'Visión',
    description: 'Anticipamos las necesidades tecnológicas de nuestros clientes para mantenerlos competitivos.',
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Solo trabajamos con marcas líderes y productos certificados con garantía de fábrica.',
  },
  {
    icon: Users,
    title: 'Cercanía',
    description: 'Somos un equipo de expertos accesible, que entiende las necesidades reales de cada empresa.',
  },
]

const reasons = [
  {
    title: 'Experiencia comprobada',
    description: 'Más de una década de experiencia acumulada en nuestro equipo de ingenieros, especialistas en las plataformas líderes de la industria.',
  },
  {
    title: 'Soporte confiable',
    description: 'Equipo técnico disponible para detectar y resolver incidentes antes de que impacten tu operación.',
  },
  {
    title: 'Alianzas estratégicas',
    description: 'Trabajamos de la mano con los principales fabricantes y mayoristas de tecnología para ofrecerte los mejores costos y arquitecturas.',
  },
  {
    title: 'Cobertura nacional',
    description: 'Desde nuestras oficinas en Naucalpan de Juárez, atendemos a organizaciones en todo el país con tiempos de respuesta competitivos.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Sobre MACASA"
        description="Más de una década diseñando la arquitectura tecnológica de empresas en México."
        breadcrumbs={[{ label: 'Nosotros' }]}
      />

      {/* Historia */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-macasa-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-macasa-primary">
                Nuestra filosofía
              </span>
              <h2 className="mb-6 text-3xl font-bold text-macasa-dark sm:text-4xl">
                Tu aliado en{' '}
                <span className="text-macasa-primary">transformación digital</span>
              </h2>
              <div className="space-y-4 text-macasa-text-light leading-relaxed">
                <p>
                  En <strong className="text-macasa-dark">MACASA Hardware & Software</strong>,
                  entendemos que la tecnología no es un fin en sí misma, sino el
                  cimiento sobre el cual las empresas construyen su futuro. Nuestra
                  filosofía se basa en el diseño meticuloso, la implementación segura
                  y el mantenimiento proactivo.
                </p>
                <p>
                  Nos enorgullece ser arquitectos de soluciones, no solo proveedores.
                  Evaluamos, diseñamos y desplegamos infraestructura de red, sistemas
                  de seguridad y capas de ciberseguridad que escalan de manera
                  eficiente junto con las ambiciones de nuestros clientes.
                </p>
                <p>
                  Nacimos como distribuidores de hardware y software, y hemos
                  evolucionado para convertirnos en un aliado tecnológico integral.
                  Hoy ofrecemos consultoría TI, servicios administrados,
                  ciberseguridad, cableado estructurado y videovigilancia,
                  acompañando a nuestros clientes en cada etapa de su
                  transformación digital.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl border border-macasa-border p-6 ${
                    index % 2 === 1 ? 'mt-6' : ''
                  }`}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-macasa-primary/10 p-3">
                    <value.icon size={24} className="text-macasa-primary" />
                  </div>
                  <h3 className="mb-2 font-bold text-macasa-dark">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-macasa-text-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-macasa-bg-light">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-macasa-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-macasa-primary">
              ¿Por qué elegirnos?
            </span>
            <h2 className="mb-4 text-3xl font-bold text-macasa-dark sm:text-4xl">
              Tu socio tecnológico de{' '}
              <span className="text-macasa-primary">confianza</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex gap-4 rounded-2xl border border-macasa-border bg-white p-6"
              >
                <div className="shrink-0">
                  <CheckCircle size={24} className="text-macasa-accent" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-macasa-dark">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-macasa-text-light">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-4 inline-block rounded-full bg-macasa-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-macasa-primary">
            Ubicación
          </span>
          <h2 className="mb-4 text-3xl font-bold text-macasa-dark sm:text-4xl">
            Nuestra oficina
          </h2>
          <p className="mb-8 text-macasa-text-light">
            Av. Primero de Mayo No. 15, Piso 10, Oficina 1025, Col. San Andrés Atoto,
            Naucalpan de Juárez, Estado de México
          </p>
          <div className="overflow-hidden rounded-2xl border border-macasa-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.2308!3d19.4678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2035a97b3b3b7%3A0x0!2sAv.+Primero+de+Mayo+15%2C+San+Andr%C3%A9s+Atoto%2C+Naucalpan!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación MACASA HS"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
