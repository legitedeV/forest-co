import { LeadForm } from '../components/LeadForm'
import { getPage } from '../lib/strapi'

export default async function HomePage() {
  const page = await getPage('catering')
  const sections = page?.sections ?? []

  return (
    <div className="container">
      <section className="py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-forest-200">ForestCatering</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight">
          {page?.title ?? 'Leśny catering premium na Twoje wydarzenie.'}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-forest-200">
          Obsługujemy eventy firmowe, plenerowe i prywatne. Menu komponujemy z sezonowych produktów
          leśnych.
        </p>
      </section>

      <section className="grid gap-6 pb-16 md:grid-cols-3">
        {sections.length === 0 ? (
          <div className="card md:col-span-3">
            <p className="text-sm text-forest-200">
              Treści z CMS są w przygotowaniu. Skontaktuj się z nami, aby otrzymać ofertę.
            </p>
          </div>
        ) : (
          sections.map((section) => (
            <div key={section.id} className="card">
              <h3 className="text-lg font-semibold">{section.heading}</h3>
              <p className="mt-3 text-sm text-forest-200">{section.body}</p>
            </div>
          ))
        )}
      </section>

      <section className="pb-16">
        <h2 className="section-title">Zapytaj o ofertę</h2>
        <p className="mt-4 max-w-2xl text-forest-200">
          Wypełnij formularz, a przygotujemy dedykowaną propozycję cateringu i obsługi eventu.
        </p>
        <div className="mt-8 max-w-2xl">
          <LeadForm source="forestcatering" />
        </div>
      </section>
    </div>
  )
}
