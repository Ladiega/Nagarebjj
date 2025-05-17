import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ message: 'Correo inválido.' }, { status: 400 })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  // if (!response.ok) {
  //   const errData = await response.json()
  //   const message = errData.title || 'Error desconocido en Mailchimp'
  //   return NextResponse.json({ message }, { status: 400 })
  // }

  if (!response.ok) {
    const errData = await response.json()
    console.error("Mailchimp error:", errData) // <-- esto aparecerá en logs de Vercel
    const message = errData.detail || errData.title || 'Error desconocido en Mailchimp'
    return NextResponse.json({ message }, { status: 400 })
  }

  return NextResponse.json({ message: '¡Suscripción exitosa!' })
}