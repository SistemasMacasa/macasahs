import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { RecruitmentForm } from '@/features/recruitment/components/recruitment-form'
import { MapPin, Clock, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Únete a nuestro equipo — MACASA Hardware & Software',
  description: 'Forma parte del equipo MACASA. Buscamos talento comprometido en el sector de tecnología B2B. Envía tu CV y nos pondremos en contacto contigo.',
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Crecimiento profesional',
    description: 'Capacitaciones constantes y certificaciones con nuestros partners tecnológicos.',
  },
  {
    icon: Users,
    title: 'Equipo sólido',
    description: 'Trabaja con profesionales de TI con más de 20 años de experiencia en el sector.',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    description: 'Naucalpan de Juárez, Edo. de México. Zona metropolitana bien conectada.',
  },
  {
    icon: Clock,
    title: 'Horario',
    description: 'Lunes a viernes, 9:00 AM – 6:00 PM. Ambiente de trabajo estable y formal.',
  },
]

export default function UnetePage() {
  return (
    <>
      <PageHero
        title="Únete a nuestro equipo"
        description="En MACASA buscamos personas comprometidas con la tecnología y el servicio al cliente. Si te apasiona el mundo TI, queremos conocerte."
        breadcrumbs={[{ label: 'Únete a nuestro equipo' }]}
        tags={['Ventas TI', 'Soporte técnico', 'Administración', 'Logística']}
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Formulario */}
            <div className="lg:col-span-3">
              <h2 className="mb-2 text-2xl font-bold text-macasa-dark">Envía tu solicitud</h2>
              <p className="mb-8 text-sm text-macasa-text-light">
                Completa el formulario y adjunta tu CV. Nuestro equipo de Recursos Humanos revisará tu perfil y te contactará.
              </p>
              <RecruitmentForm />
            </div>

            {/* Info lateral */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold text-macasa-dark">¿Por qué trabajar en MACASA?</h2>
              <div className="space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-macasa-border bg-macasa-bg-light p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-macasa-primary/10 p-3 shrink-0">
                        <item.icon size={20} className="text-macasa-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-macasa-dark">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-macasa-text-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
