import Link from 'next/link'

const medusaUrl = process.env.MEDUSA_BACKEND_URL ?? 'http://medusa:9000'

type MedusaProduct = {
  id: string
  title: string
  description: string | null
  subtitle: string | null
  metadata?: Record<string, string>
}

async function getProduct(handle: string): Promise<MedusaProduct | null> {
  const response = await fetch(`${medusaUrl}/store/products?handle=${handle}`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    return null
  }

  const data = await response.json()
  return data.products?.[0] ?? null
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle)

  if (!product) {
    return (
      <div className="container py-16">
        <h1 className="section-title">Produkt nie znaleziony</h1>
        <p className="mt-4 text-forest-200">Nie udało się znaleźć produktu o wskazanym adresie.</p>
        <Link className="mt-6 inline-flex rounded-full border border-forest-600 px-5 py-2 text-sm" href="/sklep">
          Wróć do sklepu
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <Link className="text-sm text-forest-200" href="/sklep">
        ← Wróć do sklepu
      </Link>
      <div className="mt-6 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="section-title">{product.title}</h1>
          <p className="mt-4 text-forest-200">{product.subtitle ?? 'Produkt sezonowy ForestCo'}</p>
          <p className="mt-6 text-sm leading-7 text-forest-200">
            {product.description ?? 'Opis produktu jest w przygotowaniu.'}
          </p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Informacje</h2>
          <p className="mt-3 text-sm text-forest-200">Dostępność: od ręki</p>
          <p className="mt-2 text-sm text-forest-200">Pochodzenie: lokalne gospodarstwa</p>
          <p className="mt-2 text-sm text-forest-200">Kategoria: {product.metadata?.category ?? 'Sezonowa kolekcja'}</p>
        </div>
      </div>
    </div>
  )
}
