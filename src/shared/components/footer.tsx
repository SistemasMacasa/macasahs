import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'

const serviceLinks = [
  { href: '/servicios/venta-hardware', label: 'Venta de Hardware' },
  { href: '/servicios/venta-software', label: 'Venta de Software' },
  { href: '/servicios/consultoria', label: 'Consultoría' },
  { href: '/servicios/soluciones-financieras', label: 'Soluciones Financieras' },
]

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="bg-macasa-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img
              src="/logo-macasa-transparent.png"
              alt="MACASA Hardware & Software"
              className="mb-6 h-10 w-auto"
            />
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Tu socio estratégico en tecnología. Más de una década
              distribuyendo hardware, software y servicios TI empresariales
              en México.
            </p>
            <a
              href="https://www.facebook.com/macasahs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-macasa-accent"
            >
              <Facebook size={18} />
              Facebook
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-macasa-accent">
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-macasa-accent">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-macasa-accent">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-macasa-primary-light" />
                <span className="text-sm text-gray-400">(55) 5003 2830</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-macasa-primary-light" />
                <span className="text-sm text-gray-400">ventas@macasahs.com.mx</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-macasa-primary-light" />
                <span className="text-sm text-gray-400">
                  Av. Primero de Mayo No. 15, Piso 10, Of. 1025,
                  Col. San Andrés Atoto, Naucalpan, Edo. de México
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-macasa-primary-light" />
                <span className="text-sm text-gray-400">
                  Lun - Vie: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MACASA Hardware & Software. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
