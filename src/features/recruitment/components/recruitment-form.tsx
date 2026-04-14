'use client'

import React, { useState, useRef } from 'react'
import { Send, CheckCircle, AlertCircle, Paperclip, X } from 'lucide-react'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function RecruitmentForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : null)
  }

  function clearFile() {
    setFileName(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/unete', {
        method: 'POST',
        body: data,
      })

      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
        setFileName(null)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-macasa-border bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-macasa-dark">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Tu nombre completo"
            className={inputClass}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-macasa-dark">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(55) 1234 5678"
            className={inputClass}
          />
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-macasa-dark">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@correo.com"
            className={inputClass}
          />
        </div>

        {/* Puesto */}
        <div>
          <label htmlFor="puesto" className="mb-2 block text-sm font-medium text-macasa-dark">
            Puesto de interés *
          </label>
          <select
            id="puesto"
            name="puesto"
            required
            className={inputClass}
          >
            <option value="">Selecciona un puesto</option>
            <option value="Ventas">Ventas</option>
            <option value="Sistemas/Consultoría">Sistemas / Consultoría</option>
            <option value="Administración">Administración</option>
          </select>
        </div>
      </div>

      {/* Subir CV */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-macasa-dark">
          CV (PDF, DOC, DOCX — máx. 5 MB) *
        </label>
        <div className="flex items-center gap-3">
          <label
            htmlFor="cv"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-macasa-primary bg-white px-4 py-3 text-sm font-medium text-macasa-primary transition-colors hover:bg-macasa-primary/5"
          >
            <Paperclip size={16} />
            {fileName ? 'Cambiar archivo' : 'Seleccionar archivo'}
          </label>
          <input
            ref={fileInputRef}
            type="file"
            id="cv"
            name="cv"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="sr-only"
          />
          {fileName && (
            <div className="flex items-center gap-2 rounded-lg bg-macasa-bg-light px-3 py-2 text-sm text-macasa-text">
              <span className="max-w-[200px] truncate">{fileName}</span>
              <button
                type="button"
                onClick={clearFile}
                className="text-macasa-text-light hover:text-macasa-dark"
                aria-label="Quitar archivo"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notas */}
      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-macasa-dark">
          Notas adicionales
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Cuéntanos sobre tu experiencia, disponibilidad, o cualquier información que quieras compartir..."
          className="w-full resize-none rounded-lg border border-macasa-border bg-macasa-bg-light px-4 py-3 text-sm text-macasa-dark outline-none transition-colors focus:border-macasa-primary focus:ring-2 focus:ring-macasa-primary/20"
        />
      </div>

      {/* Mensajes de estado */}
      {status === 'success' && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-sm text-green-700">
          <CheckCircle size={16} />
          ¡Solicitud enviada! Te contactaremos pronto.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={16} />
          Error al enviar. Intenta de nuevo o escríbenos a mcarreon@macasahs.com.mx
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-macasa-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-macasa-primary-dark hover:shadow-lg disabled:opacity-50"
      >
        {status === 'sending' ? (
          'Enviando...'
        ) : (
          <>
            <Send size={16} className="mr-2" />
            Enviar solicitud
          </>
        )}
      </button>
    </form>
  )
}
