import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, formType, workshopDate } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Navn og email er påkrævet' },
        { status: 400 }
      )
    }

    let subject = 'Ny henvendelse'
    switch (formType) {
      case 'kontakt':
        subject = `Ny kontakt fra /kontakt: ${name}`
        break
      case 'forside':
        subject = `Ny kontakt fra forsiden: ${name}`
        break
      case 'venteliste-lederworkshop':
        subject = `Venteliste: Lederworkshop ${workshopDate || ''} - ${name}`
        break
      case 'tilmelding-blinde-vinkler':
        subject = `Tilmelding: Blinde Vinkler ${workshopDate || ''} - ${name}`
        break
      default:
        subject = `Ny henvendelse: ${name}`
    }

    let htmlContent = `
      <h2>${subject}</h2>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `

    if (phone) {
      htmlContent += `<p><strong>Telefon:</strong> ${phone}</p>`
    }
    if (company) {
      htmlContent += `<p><strong>Virksomhed:</strong> ${company}</p>`
    }
    if (workshopDate) {
      htmlContent += `<p><strong>Dato:</strong> ${workshopDate}</p>`
    }
    if (message) {
      htmlContent += `<p><strong>Besked:</strong></p><p>${message}</p>`
    }

    htmlContent += `
      <hr>
      <p style="color: #666; font-size: 12px;">Sendt fra christinaborreby.dk</p>
    `

    await transporter.sendMail({
      from: `"Christina Borreby Website" <${process.env.GMAIL_USER}>`,
      to: 'info@christinaborreby.dk',
      subject,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Der opstod en fejl ved afsendelse af email' },
      { status: 500 }
    )
  }
}
