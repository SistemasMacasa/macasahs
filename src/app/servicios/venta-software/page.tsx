import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { CtaSection } from '@/shared/components/cta-section'
import { Code, Shield, BarChart3, Database, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Venta de Software | MACASA',
  description: 'Licenciamiento empresarial, sistemas operativos, herramientas de productividad y seguridad de las principales marcas.',
}

const categories = [
  {
    icon: BarChart3,
    title: 'Productividad y Colaboración',
    description: 'Herramientas que potencian la eficiencia y comunicación de tu equipo. Licenciamiento por volumen con los mejores precios del mercado.',
    items: ['Microsoft 365 Business y Enterprise', 'Google Workspace', 'Herramientas de colaboración', 'Suites ofimáticas'],
    brands: [
      { name: 'Microsoft', logo: '/partners/microsoft.png' },
      { name: 'Google', logo: '/partners/google.png' },
    ],
  },
  {
    icon: Code,
    title: 'Sistemas Operativos y Plataformas',
    description: 'Licenciamiento de sistemas operativos para servidores y estaciones de trabajo. Configuraciones optimizadas para tu entorno.',
    items: ['Microsoft Windows Server', 'Windows 10/11 Enterprise', 'Linux Enterprise (Red Hat, SUSE)', 'Virtualización (VMware, Hyper-V)'],
    brands: [
      { name: 'Microsoft', logo: '/partners/microsoft.png' },
      { name: 'VMware', logo: '/partners/vmware.png' },
      { name: 'Red Hat', logo: '/partners/red-hat-linux.jpg' },
    ],
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Software de protección integral para endpoints, servidores y correo electrónico. Mantén tu organización protegida contra amenazas.',
    items: ['Antivirus y antimalware', 'Protección de endpoints', 'Seguridad de correo electrónico', 'Cifrado y DLP'],
    brands: [
      { name: 'Fortinet', logo: '/partners/Fortinet_logo.svg' },
      { name: 'Check Point', logo: '/partners/Check-Point.png' },
    ],
  },
  {
    icon: Database,
    title: 'Infraestructura y Bases de Datos',
    description: 'Licenciamiento de plataformas de datos y herramientas de administración para gestionar tus activos de información.',
    items: ['Microsoft SQL Server', 'Bases de datos empresariales', 'Herramientas de respaldo', 'Monitoreo y administración'],
    brands: [
      { name: 'Microsoft', logo: '/partners/microsoft.png' },
      { name: 'SQL Server', logo: '/partners/sql-server-official.png' },
      { name: 'Veeam', logo: '/partners/Veeam_Logo.png' },
    ],
  },
]

const benefits = [
  'Licenciamiento original y certificado',
  'Asesoría en modelos de licenciamiento',
  'Precios competitivos por volumen',
  'Soporte en activación y configuración',
  'Renovaciones y actualizaciones',
  'Cumplimiento de normativas de software',
]

export default function VentaSoftwarePage() {
  return (
    <>
      <PageHero
        title="Venta de Software"
        description="Licenciamiento empresarial y soluciones de software para potenciar cada área de tu organización."
        breadcrumbs={[{ label: 'Venta de Software' }]}
        tags={['Licenciamiento', 'Productividad', 'Seguridad', 'Plataformas']}
      />

      {/* Categories */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-macasa-dark">
              Software empresarial{' '}
              <span className="text-macasa-primary">para cada necesidad</span>
            </h2>
            <p className="text-macasa-text-light leading-relaxed">
              Te ayudamos a elegir el modelo de licenciamiento ideal para tu empresa,
              optimizando costos y asegurando el cumplimiento normativo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-macasa-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-macasa-primary/10 p-3">
                  <category.icon size={24} className="text-macasa-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-macasa-dark">{category.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-macasa-text-light">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-macasa-text">
                      <CheckCircle size={14} className="shrink-0 text-macasa-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {category.brands && category.brands.length > 0 && (
                  <div className="mt-6 border-t border-macasa-border pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-macasa-text-light">Tecnologías que implementamos</p>
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
          <h3 className="mb-8 text-center text-2xl font-bold text-macasa-dark">¿Por qué licenciar con MACASA?</h3>
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
        title="¿Necesitas licenciamiento?"
        description="Te asesoramos para encontrar el modelo de licenciamiento ideal para tu empresa."
        buttonText="Solicitar cotización"
      />
    </>
  )
}
