'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/unete', label: 'Únete a nuestro equipo' },
]

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-macasa-transparent.png"
            alt="MACASA Hardware & Software"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-macasa-text transition-colors duration-200 hover:text-macasa-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-lg bg-macasa-primary px-5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-macasa-primary-dark hover:shadow-lg"
          >
            Cotizar ahora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-macasa-dark"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-macasa-border bg-white px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-sm font-medium text-macasa-text hover:text-macasa-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setIsMobileOpen(false)}
            className="mt-3 block w-full rounded-lg bg-macasa-primary px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-macasa-primary-dark"
          >
            Cotizar ahora
          </Link>
        </div>
      )}
    </nav>
  )
}
