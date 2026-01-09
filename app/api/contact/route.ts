import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Navn og email er påkrævet' }, { status: 400 })
    }

    // Test: Return success without sending email
    return NextResponse.json({
      success: true,
      message: 'API virker! Email sending er midlertidigt deaktiveret.',
      received: { name, email }
    })

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
