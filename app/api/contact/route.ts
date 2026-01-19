import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, formType, workshopDate, _honeypot, _loadTime } = body

    // Spam protection: Check honeypot field (should be empty for humans)
    if (_honeypot) {
      // Silently reject - don't reveal we detected spam
      return NextResponse.json({ success: true })
    }

    // Spam protection: Check submission timing (minimum 3 seconds to fill form)
    if (_loadTime) {
      const timeTaken = Date.now() - _loadTime
      if (timeTaken < 3000) {
        // Too fast - likely a bot
        return NextResponse.json({ success: true })
      }
    }

    if (!name || !email) {
      return NextResponse.json({ error: 'Navn og email er påkrævet' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPass) {
      return NextResponse.json({ error: 'Email config mangler' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
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
    }

    let htmlContent = `
      <h2>${subject}</h2>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `
    if (phone) htmlContent += `<p><strong>Telefon:</strong> ${phone}</p>`
    if (company) htmlContent += `<p><strong>Virksomhed:</strong> ${company}</p>`
    if (workshopDate) htmlContent += `<p><strong>Dato:</strong> ${workshopDate}</p>`
    if (message) htmlContent += `<p><strong>Besked:</strong></p><p>${message}</p>`
    htmlContent += `<hr><p style="color:#666;font-size:12px;">Sendt fra christinaborreby.dk</p>`

    await transporter.sendMail({
      from: `"Christina Borreby Website" <${gmailUser}>`,
      to: 'info@christinaborreby.dk',
      subject,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error'
    const code = (error as { code?: string })?.code || ''
    console.error('Email error:', msg, code)
    return NextResponse.json({ error: `${code}: ${msg}` }, { status: 500 })
  }
}
