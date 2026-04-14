import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CtaSectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function CtaSection({
  title = '¿Listo para modernizar tu infraestructura?',
  description = 'Agenda una evaluación sin costo con nuestros especialistas en tecnología.',
  buttonText = 'Solicitar cotización',
  buttonHref = '/contacto',
}: CtaSectionProps) {
  return (
    <section className="bg-gradient-to-r from-macasa-primary-dark via-macasa-primary to-macasa-secondary px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mb-8 text-lg text-white/80">{description}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center rounded-lg bg-macasa-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-lg group"
        >
          {buttonText}
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
