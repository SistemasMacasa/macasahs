import type { Metadata } from 'next'
import { PageHero } from '@/shared/components/page-hero'
import { ContactForm } from '@/features/contact/components/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos. Nuestro equipo de especialistas responderá en menos de 24 horas hábiles.',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    content: '(55) 5003 2830',
    href: 'tel:+525550032830',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'ventas@macasahs.com.mx',
    href: 'mailto:ventas@macasahs.com.mx',
  },
  {
    icon: MapPin,
    title: 'Oficina',
    content: 'Av. Primero de Mayo No. 15, Piso 10, Of. 1025, Col. San Andrés Atoto, Naucalpan de Juárez, Edo. de México',
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lunes a Viernes, 9:00 AM - 6:00 PM (CST)',
  },
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contáctanos"
        description="Cuéntanos sobre tu proyecto. Nuestro equipo de especialistas responderá en menos de 24 horas hábiles."
        breadcrumbs={[{ label: 'Contacto' }]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-macasa-border bg-macasa-bg-light p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-macasa-primary/10 p-3">
                        <item.icon size={20} className="text-macasa-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-macasa-dark">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-sm text-macasa-text-light hover:text-macasa-primary"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm leading-relaxed text-macasa-text-light">
                            {item.content}
                          </p>
                        )}
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
