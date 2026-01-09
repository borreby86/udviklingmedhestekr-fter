import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Dynamic import to handle potential issues
    const nodemailer = await import('nodemailer')

    const body = await request.json()
    const { name, email, phone, company, message, formType, workshopDate } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Navn og email er påkrævet' },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        { error: 'Email config mangler - tjek GMAIL_USER og GMAIL_APP_PASSWORD' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.default.createTransport({
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
      default:
        subject = `Ny henvendelse: ${name}`
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

    htmlContent += `<hr><p style="color: #666; font-size: 12px;">Sendt fra christinaborreby.dk</p>`

    await transporter.sendMail({
      from: `"Christina Borreby Website" <${gmailUser}>`,
      to: 'info@christinaborreby.dk',
      subject,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error('Contact API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorCode = (error as { code?: string })?.code || 'NO_CODE'
    return NextResponse.json(
      { error: `${errorCode}: ${errorMessage}` },
      { status: 500 }
    )
  }
}
