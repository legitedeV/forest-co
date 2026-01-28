import Link from 'next/link'

const medusaUrl = process.env.MEDUSA_BACKEND_URL ?? 'http://medusa:9000'

type MedusaProduct = {
  id: string
  handle: string
  title: string
  subtitle: string | null
  description: string | null
  thumbnail: string | null
}

async function getProducts(): Promise<MedusaProduct[]> {
  const response = await fetch(`${medusaUrl}/store/products?limit=12`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    return []
  }

  const data = await response.json()
  return data.products ?? []
}

export default async function SklepPage() {
  const products = await getProducts()

  return (
    <div className="container py-16">
      <h1 className="section-title">Sklep</h1>
      <p className="mt-4 max-w-2xl text-forest-200">
        Odkryj sezonowe produkty z Medusa. Każda pozycja ma szczegółowy opis i pochodzi z lokalnych
        dostaw.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.length === 0 ? (
          <div className="card md:col-span-3">
            <p className="text-sm text-forest-200">Brak produktów do wyświetlenia. Sprawdź ponownie później.</p>
          </div>
        ) : (
          products.map((product) => (
            <Link key={product.id} href={`/sklep/${product.handle}`} className="card hover:border-white/30">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="mt-2 text-sm text-forest-200">{product.subtitle ?? 'Sezonowa rekomendacja'}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-forest-200">Zobacz detale</p>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
