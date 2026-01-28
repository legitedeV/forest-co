const strapiUrl = process.env.STRAPI_URL ?? 'http://strapi:1337'

export async function POST(request: Request) {
  const payload = await request.json()
  const response = await fetch(`${strapiUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: payload })
  })

  if (!response.ok) {
    return Response.json({ status: 'error' }, { status: 500 })
  }

  return Response.json({ status: 'ok' })
}
