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
    <section className="relative overflow-hidden bg-macasa-azul-600 px-4 py-20 sm:px-6 lg:px-8">
      {/* Capa tecnica de la portada del manual, apenas insinuada */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen"
        style={{ backgroundImage: "url('/fondos/fondo-04-hud.webp')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-macasa-azul-700/50 via-macasa-brand/25 to-macasa-azul-800/50" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mb-8 text-lg text-white">{description}</p>
        {/* Boton blanco con texto azul: sin color de acento en el manual, el
            contraste sobre el azul de marca lo da el blanco, no un naranja. */}
        <Link
          href={buttonHref}
          className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-macasa-primary shadow-lg transition-all duration-300 hover:bg-macasa-azul-50 hover:shadow-xl"
        >
          {buttonText}
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
