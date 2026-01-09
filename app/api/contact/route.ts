import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, formType, workshopDate } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Navn og email er påkrævet' },
        { status: 400 }
      )
    }

    // Check for required environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables')
      return NextResponse.json(
        { error: 'Email konfiguration mangler' },
        { status: 500 }
      )
    }

    // Create transporter inside the handler to ensure env vars are available
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

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
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorCode = (error as { code?: string })?.code || 'NO_CODE'
    console.error('Email error:', { message: errorMessage, code: errorCode, full: error })
    return NextResponse.json(
      { error: `Fejl: ${errorCode} - ${errorMessage}` },
      { status: 500 }
    )
  }
}
