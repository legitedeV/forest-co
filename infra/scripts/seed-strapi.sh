#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

docker compose exec -T strapi node - <<'NODE'
const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function run() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  const existing = await strapi.entityService.findMany('api::page.page', {
    filters: { slug: { $in: ['catering', 'bar'] } },
    populate: ['sections']
  });

  const existingSlugs = new Set(existing.map((page) => page.slug));

  async function upsertPage(slug, title, sections) {
    if (existingSlugs.has(slug)) {
      return;
    }

    const page = await strapi.entityService.create('api::page.page', {
      data: {
        title,
        slug,
        sections: sections.map((section) => ({
          ...section
        }))
      },
      populate: ['sections']
    });

    for (const section of sections) {
      await strapi.entityService.create('api::section.section', {
        data: {
          ...section,
          page: page.id
        }
      });
    }
  }

  await upsertPage('catering', 'Catering leśny premium', [
    { type: 'hero', heading: 'Sezonowe menu', body: 'Tworzymy menu oparte o świeże składniki z lokalnych lasów.' },
    { type: 'service', heading: 'Eventy firmowe', body: 'Kompleksowa obsługa wydarzeń od 50 do 1000 osób.' },
    { type: 'service', heading: 'Private dining', body: 'Ekskluzywne kolacje degustacyjne z szefem kuchni.' }
  ]);

  await upsertPage('bar', 'Bar leśny i koktajle', [
    { type: 'hero', heading: 'Autorskie koktajle', body: 'Karty drinków inspirowane naturą i sezonowością.' },
    { type: 'service', heading: 'Mobilne stacje', body: 'Pełne zaplecze barowe na eventy indoor i outdoor.' },
    { type: 'service', heading: 'Show barmański', body: 'Doświadczeni barmani i degustacje dla gości.' }
  ]);

  await strapi.destroy();
  process.exit(0);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
NODE
