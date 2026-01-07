import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Navn og email er påkrævet' },
        { status: 400 }
      )
    }

    // Send email to Christina
    await resend.emails.send({
      from: 'Kontaktformular <noreply@christinaborreby.dk>',
      to: 'info@christinaborreby.dk',
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <h2>Ny henvendelse fra kontaktformularen</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Virksomhed:</strong> ${company}</p>` : ''}
        ${message ? `<p><strong>Besked:</strong></p><p>${message}</p>` : ''}
      `,
    })

    // Send confirmation email to the person who submitted
    await resend.emails.send({
      from: 'Christina Borreby <noreply@christinaborreby.dk>',
      to: email,
      subject: 'Tak for din henvendelse',
      html: `
        <h2>Tak for din henvendelse, ${name}</h2>
        <p>Jeg har modtaget din besked og vender tilbage inden for 24 timer.</p>
        <p>Med venlig hilsen,<br>Christina Borreby</p>
        <p><a href="https://christinaborreby.dk">christinaborreby.dk</a></p>
      `,
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
