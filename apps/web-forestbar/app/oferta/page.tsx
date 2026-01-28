const services = [
  {
    title: 'Autorskie koktajle',
    description: 'Menu oparte o sezonowe składniki, syropy i infuzje.'
  },
  {
    title: 'Mobilne stacje barowe',
    description: 'Pełne zaplecze barowe na eventy indoor i outdoor.'
  },
  {
    title: 'Obsługa barmańska',
    description: 'Doświadczony zespół, show barmański i degustacje.'
  }
]

export default function OfertaPage() {
  return (
    <div className="container py-16">
      <h1 className="section-title">Oferta</h1>
      <p className="mt-4 max-w-2xl text-forest-200">
        ForestBar to kompleksowa obsługa barowa z leśnym charakterem.
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
