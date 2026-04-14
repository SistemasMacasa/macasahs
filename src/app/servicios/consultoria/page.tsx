import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { CtaSection } from '@/shared/components/cta-section'
import { Monitor, Network, Code, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consultoría TI | MACASA',
  description: 'Asesoría especializada en hardware, redes, software y seguridad para diseñar y optimizar tu infraestructura tecnológica.',
}

const areas = [
  {
    icon: Monitor,
    title: 'Consultoría de Hardware',
    description: 'Asesoría integral para la selección, dimensionamiento y renovación del equipamiento tecnológico de su organización. Evaluamos sus necesidades actuales y futuras para proponer soluciones que maximicen el rendimiento y la vida útil de su inversión.',
    topics: [
      'Cómputo: selección y configuración de equipos portátiles y desktop según perfiles de usuario y cargas de trabajo',
      'Servidores: dimensionamiento de capacidad, arquitectura de alta disponibilidad y configuración óptima',
      'Centro de datos: diseño de infraestructura física, enfriamiento, energía y distribución de racks',
    ],
    brands: [
      { name: 'Dell', logo: '/partners/dell-leasing.png' },
      { name: 'HP', logo: '/partners/hp-financial.png' },
      { name: 'Lenovo', logo: '/partners/lenovo.png' },
    ],
  },
  {
    icon: Code,
    title: 'Consultoría de Software',
    description: 'Consultoría especializada en plataformas, sistemas operativos, virtualización y protección de datos. Le ayudamos a elegir, implementar y optimizar las soluciones de software que su infraestructura necesita.',
    topics: [
      'Microsoft Windows: Active Directory, GPOs, migración de versiones, licenciamiento y optimización',
      'Linux: implementación de servidores, servicios críticos, hardening y administración',
      'Veeam: diseño de estrategias de respaldo, replicación y recuperación ante desastres',
      'VMware: virtualización de servidores, consolidación de infraestructura y migración a entornos virtuales',
      'Bases de datos: SQL Server, diseño de arquitectura, optimización de rendimiento y migración',
    ],
    brands: [
      { name: 'Microsoft', logo: '/partners/microsoft.png' },
      { name: 'VMware', logo: '/partners/vmware.png' },
      { name: 'Veeam', logo: '/partners/Veeam_Logo.png' },
    ],
  },
  {
    icon: Network,
    title: 'Consultoría de Redes',
    description: 'Diseño, evaluación y optimización de la infraestructura de comunicaciones de su organización. Garantizamos conectividad confiable, de alto rendimiento y escalable para soportar el crecimiento de su operación.',
    topics: [
      'Routing: diseño de topologías, protocolos de enrutamiento y políticas de tráfico',
      'Switching: arquitectura de red, VLANs, QoS y redundancia',
      'Wireless: cobertura empresarial, site surveys, diseño RF y controladores',
      'Fibra óptica: tendido, fusión, certificación y documentación de enlaces',
      'Cableado estructurado: diseño, instalación y certificación de redes Cat6/6A',
    ],
    brands: [
      { name: 'Cisco', logo: '/partners/cisco.png' },
    ],
  },
  {
    icon: Shield,
    title: 'Consultoría de Seguridad',
    description: 'Evaluación y fortalecimiento de la postura de seguridad de su infraestructura. Diseñamos arquitecturas de protección perimetral y segmentación de red para proteger los activos críticos de su organización.',
    topics: [
      'Firewall: diseño de arquitectura perimetral, políticas de seguridad, NAT y segmentación de redes',
      'Seguridad de red: inspección profunda de tráfico, prevención de intrusiones (IPS) y filtrado de aplicaciones',
      'Evaluación de vulnerabilidades: identificación de riesgos y recomendaciones de remediación',
      'Check Point: implementación y administración de soluciones de seguridad empresarial',
    ],
    brands: [
      { name: 'Check Point', logo: '/partners/Check-Point.png' },
      { name: 'Fortinet', logo: '/partners/fortinet.png' },
    ],
  },
]

export default function ConsultoriaPage() {
  return (
    <>
      <PageHero
        title="Consultoría TI"
        description="Asesoría especializada para diseñar, optimizar y proteger la infraestructura tecnológica de su empresa."
        breadcrumbs={[{ label: 'Consultoría' }]}
        tags={['Hardware', 'Software', 'Redes', 'Seguridad']}
      />

      {/* Intro */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-macasa-dark">
              Experiencia que{' '}
              <span className="text-macasa-primary">respalda sus decisiones</span>
            </h2>
            <p className="text-macasa-text-light leading-relaxed">
              Nuestro equipo de consultores certificados le acompaña en cada etapa:
              desde el diagnóstico inicial hasta la implementación y puesta en marcha
              de soluciones tecnológicas a la medida de su organización.
            </p>
          </div>
        </div>
      </section>

      {/* Areas grid 2x2 */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-macasa-bg-light">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-macasa-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-macasa-primary/10 p-3">
                  <area.icon size={28} className="text-macasa-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-macasa-dark">{area.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-macasa-text-light">{area.description}</p>
                <ul className="space-y-3">
                  {area.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-macasa-primary" />
                      <span className="text-sm text-macasa-text">{topic}</span>
                    </li>
                  ))}
                </ul>

                {area.brands.length > 0 && (
                  <div className="mt-8 border-t border-macasa-border pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-macasa-text-light">Tecnologías que implementamos</p>
                    <div className="flex flex-wrap items-center gap-6">
                      {area.brands.map((brand) => (
                        <img
                          key={brand.name}
                          src={brand.logo}
                          alt={brand.name}
                          className="h-12 w-32 object-contain"
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

      {/* How we work */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-12 text-center text-2xl font-bold text-macasa-dark">¿Cómo trabajamos?</h3>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Evaluamos su infraestructura actual e identificamos oportunidades de mejora.' },
              { step: '02', title: 'Diseño', desc: 'Proponemos la arquitectura ideal alineada a sus objetivos de negocio.' },
              { step: '03', title: 'Implementación', desc: 'Ejecutamos el proyecto con metodología probada y mínima disrupción operativa.' },
              { step: '04', title: 'Seguimiento', desc: 'Validamos resultados y brindamos acompañamiento post-implementación.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-macasa-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                <h4 className="mb-2 text-sm font-bold text-macasa-dark">{item.title}</h4>
                <p className="text-xs leading-relaxed text-macasa-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="¿Necesita asesoría tecnológica?"
        description="Agende una sesión de diagnóstico sin costo con nuestros consultores."
        buttonText="Agendar consultoría"
      />
    </>
  )
}
