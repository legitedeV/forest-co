export default function KontaktPage() {
  return (
    <div className="container py-16">
      <h1 className="section-title">Kontakt</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold">Biuro ForestBar</h2>
          <p className="mt-2 text-sm text-forest-200">ul. Koktajlowa 8, 00-003 Warszawa</p>
          <p className="mt-2 text-sm text-forest-200">bar@forestco.pl</p>
          <p className="mt-2 text-sm text-forest-200">+48 522 700 800</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Dostępność</h2>
          <p className="mt-2 text-sm text-forest-200">Pon–Pt: 10:00–20:00</p>
          <p className="mt-2 text-sm text-forest-200">Sb: 12:00–22:00</p>
          <p className="mt-2 text-sm text-forest-200">Nd: eventy specjalne</p>
        </div>
      </div>
    </div>
  )
}
