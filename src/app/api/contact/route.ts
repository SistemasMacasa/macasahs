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
    const body = await request.json()
    const { name, company, email, phone, subject, message } = body

    if (!name || !company || !email || !subject || !message) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    await transporter.sendMail({
      from: '"MACASA Sitio Web" <soporte@macasahs.com.mx>',
      to: 'ventas@macasahs.com.mx',
      replyTo: email,
      subject: `Nuevo contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto — MACASA HS</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Nombre</strong></td><td>${name}</td></tr>
          <tr><td><strong>Empresa</strong></td><td>${company}</td></tr>
          <tr><td><strong>Correo</strong></td><td>${email}</td></tr>
          <tr><td><strong>Teléfono</strong></td><td>${phone || '—'}</td></tr>
          <tr><td><strong>Asunto</strong></td><td>${subject}</td></tr>
        </table>
        <h3 style="margin-top:16px">Mensaje</h3>
        <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error enviando correo de contacto:', err)
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 })
  }
}
