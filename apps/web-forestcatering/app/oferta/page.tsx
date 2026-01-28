const services = [
  {
    title: 'Menu sezonowe',
    description: 'Autorskie menu oparte o produkty z lokalnych lasów i gospodarstw.'
  },
  {
    title: 'Obsługa eventów',
    description: 'Kompleksowe wsparcie organizacyjne, serwis i logistyka.'
  },
  {
    title: 'Stacje live cooking',
    description: 'Interaktywne stanowiska kulinarne dla gości wydarzenia.'
  }
]

export default function OfertaPage() {
  return (
    <div className="container py-16">
      <h1 className="section-title">Oferta</h1>
      <p className="mt-4 max-w-2xl text-forest-200">
        ForestCatering to elastyczne pakiety współpracy dla firm i organizatorów eventów.
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
