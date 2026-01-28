export default function KontaktPage() {
  return (
    <div className="container py-16">
      <h1 className="section-title">Kontakt</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold">Biuro ForestCatering</h2>
          <p className="mt-2 text-sm text-forest-200">ul. Cateringowa 12, 00-002 Warszawa</p>
          <p className="mt-2 text-sm text-forest-200">catering@forestco.pl</p>
          <p className="mt-2 text-sm text-forest-200">+48 511 600 700</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Dostępność</h2>
          <p className="mt-2 text-sm text-forest-200">Pon–Pt: 08:00–18:00</p>
          <p className="mt-2 text-sm text-forest-200">Sb: 10:00–16:00</p>
          <p className="mt-2 text-sm text-forest-200">Nd: obsługa eventów</p>
        </div>
      </div>
    </div>
  )
}
