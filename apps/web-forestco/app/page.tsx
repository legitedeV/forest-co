import Link from 'next/link'

const highlights = [
  {
    title: 'Naturalna selekcja',
    description: 'Produkty z polskich lasów, selekcjonowane przez ekspertów.'
  },
  {
    title: 'B2B & catering',
    description: 'Obsługujemy eventy oraz stałe kontrakty gastronomiczne.'
  },
  {
    title: 'Bar leśny',
    description: 'Autorskie koktajle i napary w leśnym stylu.'
  }
]

export default function HomePage() {
  return (
    <div className="container">
      <section className="py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-forest-200">ForestCo</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight">
          Leśna marka premium dla gastronomii, eventów i klientów detalicznych.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-forest-200">
          Łączymy sprzedaż produktów leśnych, catering i bar w jeden spójny ekosystem. Zawsze świeżo,
          lokalnie i odpowiedzialnie.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest-950" href="/sklep">
            Zobacz sklep
          </Link>
          <Link className="rounded-full border border-forest-600 px-6 py-3 text-sm font-semibold" href="/oferta">
            Oferta dla biznesu
          </Link>
        </div>
      </section>

      <section className="grid gap-6 pb-16 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="card">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-forest-200">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
