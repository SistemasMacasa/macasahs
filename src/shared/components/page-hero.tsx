import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  description: string
  breadcrumbs?: Breadcrumb[]
  tags?: string[]
  /**
   * Fotografia del banco del manual (pags. 10-15), ruta bajo /public.
   * Va detras de un velo azul de marca para que el texto blanco conserve
   * contraste con cualquier foto del banco.
   */
  image?: string
}

export function PageHero({ title, description, breadcrumbs, tags, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-macasa-azul-800 pt-32 pb-20">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden="true"
        />
      )}

      {/* Velo azul de marca: fija el contraste del texto sin apagar la foto */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-macasa-azul-900/95 via-macasa-azul-800/85 to-macasa-brand/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="mb-6 flex items-center gap-1 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Inicio</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={14} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/85">
          {description}
        </p>

        {tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
