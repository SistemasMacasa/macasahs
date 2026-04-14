import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { CtaSection } from '@/shared/components/cta-section'
import { CreditCard, HandCoins, FileSpreadsheet, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soluciones Financieras | MACASA',
  description: 'Crédito de casa, financiamiento y arrendamiento para adquirir tecnología con flexibilidad y optimizar tu inversión.',
}

const solutions = [
  {
    icon: CreditCard,
    title: 'Crédito de Casa',
    description: 'Nos adecuamos al ciclo de pago de su empresa haciendo flexible su proceso de adquisición, proceso y días de pago que su operación requiere, contando con los días necesarios para la liquidación de su factura.',
    highlights: [
      'Flexibilidad total en días de pago adaptada a su ciclo operativo',
      'Proceso de adquisición ágil y sin intermediarios financieros',
      'Trato directo con MACASA — relación comercial de confianza',
      'Ideal para compras recurrentes y proyectos de equipamiento',
    ],
  },
  {
    icon: HandCoins,
    title: 'Financiamiento',
    description: 'Contamos con un amplio abanico de opciones financieras como Dell Leasing, HP Financial Services, DLL Leasing y varias más, que le permiten encontrar el mecanismo de compra y financiamiento ideal que su empresa requiere para la adquisición de activos.',
    highlights: [
      'Dell Leasing — financiamiento directo de fábrica con condiciones preferenciales',
      'HP Financial Services — opciones flexibles para todo el portafolio HP',
      'DLL Leasing — financiamiento especializado en activos tecnológicos',
      'Plazos y condiciones ajustados al presupuesto de su empresa',
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Arrendamiento',
    description: 'Contamos con un amplio abanico de opciones financieras como Dell Leasing, HP Financial Services, DLL Leasing y varias más, que le permiten encontrar el mecanismo de arrendamiento para el uso y goce de los bienes y servicios que requiere su operación, con un plan flexible de pagos mensuales permitiéndole maximizar su liquidez financiera.',
    highlights: [
      'Pagos mensuales fijos que facilitan la planeación financiera',
      'Maximice la liquidez financiera de su empresa',
      'Renovación tecnológica constante sin grandes inversiones de capital',
      'Beneficios fiscales — deducción del 100% como gasto operativo (OPEX)',
    ],
  },
]

const benefits = [
  { title: 'Flexibilidad', description: 'Esquemas adaptados al ciclo financiero de cada empresa' },
  { title: 'Liquidez', description: 'Conserve su capital de trabajo para lo que más importa' },
  { title: 'Tecnología actual', description: 'Renueve equipos sin comprometer su presupuesto' },
  { title: 'Beneficio fiscal', description: 'Deduzca pagos como gasto operativo (OPEX)' },
]

export default function SolucionesFinancierasPage() {
  return (
    <>
      <PageHero
        title="Soluciones Financieras"
        description="Adquiera la tecnología que su empresa necesita con esquemas de pago flexibles y a la medida de su operación."
        breadcrumbs={[{ label: 'Soluciones Financieras' }]}
        tags={['Crédito de Casa', 'Financiamiento', 'Arrendamiento', 'OPEX']}
      />

      {/* Quick benefits */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-macasa-border bg-macasa-bg-light p-6 text-center">
                <h4 className="mb-2 text-lg font-bold text-macasa-primary">{b.title}</h4>
                <p className="text-sm text-macasa-text-light">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions detail */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-macasa-bg-light">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl border border-macasa-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-macasa-primary/10 p-3">
                  <solution.icon size={28} className="text-macasa-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-macasa-dark">{solution.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-macasa-text-light">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-macasa-primary" />
                      <span className="text-sm text-macasa-text">{h}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          {/* Aliados financieros */}
          <div className="mt-12 rounded-2xl border border-macasa-border bg-white p-8 text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-macasa-text-light">Aliados financieros</p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <img src="/partners/dll-logo.png" alt="DLL Financial Solutions Partner" className="h-16 w-auto max-w-[280px] object-contain" />
              <img src="/partners/dell-financial.png" alt="Dell Financial Services" className="h-16 w-auto max-w-[280px] object-contain" />
              <img src="/partners/hpe-financial.webp" alt="HPE Financial Services" className="h-16 w-auto max-w-[280px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="¿Buscas financiar tu proyecto tecnológico?"
        description="Te ayudamos a encontrar el esquema financiero ideal para tu empresa."
        buttonText="Solicitar asesoría financiera"
      />
    </>
  )
}
