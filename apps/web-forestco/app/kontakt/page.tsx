export default function KontaktPage() {
  return (
    <div className="container py-16">
      <h1 className="section-title">Kontakt</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold">ForestCo HQ</h2>
          <p className="mt-2 text-sm text-forest-200">ul. Leśna 21, 00-001 Warszawa</p>
          <p className="mt-2 text-sm text-forest-200">kontakt@forestco.pl</p>
          <p className="mt-2 text-sm text-forest-200">+48 500 800 900</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Godziny pracy</h2>
          <p className="mt-2 text-sm text-forest-200">Pon–Pt: 08:00–18:00</p>
          <p className="mt-2 text-sm text-forest-200">Sb: 10:00–14:00</p>
          <p className="mt-2 text-sm text-forest-200">Nd: zamknięte</p>
        </div>
      </div>
    </div>
  )
}
