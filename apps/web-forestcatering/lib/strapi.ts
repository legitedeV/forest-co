const strapiUrl = process.env.STRAPI_URL ?? 'http://strapi:1337'

export type StrapiSection = {
  id: number
  type: string
  heading: string
  body: string
}

export type StrapiPage = {
  id: number
  title: string
  slug: string
  sections: StrapiSection[]
}

export async function getPage(slug: string): Promise<StrapiPage | null> {
  const response = await fetch(
    `${strapiUrl}/api/pages?filters[slug][$eq]=${slug}&populate=sections`,
    { cache: 'no-store' }
  )

  if (!response.ok) {
    return null
  }

  const data = await response.json()
  const page = data?.data?.[0]
  if (!page) {
    return null
  }

  return {
    id: page.id,
    title: page.attributes.title,
    slug: page.attributes.slug,
    sections: (page.attributes.sections ?? []).map((section: any) => ({
      id: section.id,
      type: section.type,
      heading: section.heading,
      body: section.body
    }))
  }
}

export async function createLead(payload: {
  name: string
  email: string
  phone: string
  message: string
  source: string
}) {
  const response = await fetch(`${strapiUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: payload })
  })

  if (!response.ok) {
    throw new Error('Nie udało się wysłać formularza')
  }

  return response.json()
}
