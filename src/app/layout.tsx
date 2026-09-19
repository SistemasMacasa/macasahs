import type { Metadata } from 'next'
import { Hind } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/shared/components/navbar'
import { Footer } from '@/shared/components/footer'

// Tipografia de texto del manual de identidad (pag. 5).
// next/font la sirve self-hosted: no hay request a Google en runtime.
const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MACASA HS | Distribuidor Tecnológico en México',
    template: '%s | MACASA HS',
  },
  description:
    'Distribución de hardware, software, licenciamiento, consultoría TI, servicios cloud y virtualización para empresas. Tu socio estratégico en tecnología.',
  keywords: [
    'distribuidor tecnológico',
    'hardware empresarial',
    'licenciamiento software',
    'consultoría TI',
    'servicios cloud',
    'virtualización',
    'ciberseguridad',
    'servicios administrados',
    'México',
  ],
  openGraph: {
    title: 'MACASA HS | Distribuidor Tecnológico en México',
    description:
      'Distribución de hardware, software y soluciones TI empresariales. Consultoría, cloud y virtualización.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={hind.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
