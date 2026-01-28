const services = [
  {
    title: 'Kontrakty B2B',
    description: 'Stałe dostawy i sezonowe kosze dla hoteli, restauracji i sklepów premium.'
  },
  {
    title: 'Obsługa eventów',
    description: 'Kompleksowy catering oraz bar leśny na wydarzenia firmowe i plenerowe.'
  },
  {
    title: 'Produkty private label',
    description: 'Opracowujemy autorskie blendy i konfekcję pod Twoją markę.'
  }
]

export default function OfertaPage() {
  return (
    <div className="container py-16">
      <h1 className="section-title">Oferta</h1>
      <p className="mt-4 max-w-2xl text-forest-200">
        Dla partnerów biznesowych przygotowaliśmy elastyczne pakiety współpracy, które łączą produkty,
        catering oraz obsługę baru.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="card">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm text-forest-200">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
