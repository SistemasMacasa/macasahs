'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const subjects = [
  'Venta de Hardware',
  'Venta de Software',
  'Consultoría',
  'Soluciones Financieras',
  'Otro',
]

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-macasa-border bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-macasa-dark">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-macasa-dark">
            Empresa *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
            placeholder="Nombre de tu empresa"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-macasa-dark">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
            placeholder="correo@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-macasa-dark">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
            placeholder="(55) 1234 5678"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-macasa-dark">
          Asunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
        >
          <option value="">Selecciona un asunto</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-macasa-dark">
          ¿Cómo podemos ayudarte? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
          placeholder="Describe lo que necesitas: equipos, licencias, consultoría, etc."
        />
      </div>

      {status === 'success' && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-sm text-green-700">
          <CheckCircle size={16} />
          Mensaje enviado correctamente. Te contactaremos pronto.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={16} />
          Error al enviar. Intenta de nuevo o llámanos directamente.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-lg bg-macasa-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-macasa-primary-dark hover:shadow-lg mt-6 w-full disabled:opacity-50"
      >
        {status === 'sending' ? (
          'Enviando...'
        ) : (
          <>
            <Send size={16} className="mr-2" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  )
}
