import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name    = formData.get('name') as string
    const phone   = formData.get('phone') as string
    const email   = formData.get('email') as string
    const puesto  = formData.get('puesto') as string
    const message = formData.get('message') as string | null
    const cvFile  = formData.get('cv') as File | null

    if (!name || !phone || !email || !puesto) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    // Preparar adjunto si viene CV
    const attachments: nodemailer.SendMailOptions['attachments'] = []
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      })
    }

    await transporter.sendMail({
      from: `"MACASA — Bolsa de trabajo" <${process.env.BREVO_USER}>`,
      to: 'mcarreon@macasahs.com.mx',
      replyTo: email,
      subject: `Solicitud de empleo: ${name}`,
      html: `
        <h2>Nueva solicitud de empleo — MACASA HS</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Nombre</strong></td><td>${name}</td></tr>
          <tr><td><strong>Teléfono</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Correo</strong></td><td>${email}</td></tr>
          <tr><td><strong>Puesto</strong></td><td>${puesto}</td></tr>
        </table>
        ${message ? `<h3 style="margin-top:16px">Notas adicionales</h3><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${message}</p>` : ''}
        ${attachments.length === 0 ? '<p style="color:#888;font-size:13px;margin-top:16px">No se adjuntó CV.</p>' : ''}
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error enviando solicitud de empleo:', err)
    return NextResponse.json({ error: 'Error al enviar la solicitud' }, { status: 500 })
  }
}
