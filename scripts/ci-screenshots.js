const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')

const targets = [
  { name: 'forestco', base: 'http://localhost:3001', paths: ['/', '/oferta', '/sklep'] },
  { name: 'forestcatering', base: 'http://localhost:3002', paths: ['/', '/oferta', '/kontakt'] },
  { name: 'forestbar', base: 'http://localhost:3003', paths: ['/', '/oferta', '/kontakt'] }
]

async function run() {
  const outDir = path.join('artifacts', 'screenshots')
  fs.mkdirSync(outDir, { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })

  for (const target of targets) {
    for (const targetPath of target.paths) {
      const url = `${target.base}${targetPath}`
      await page.goto(url, { waitUntil: 'networkidle' })
      const safePath = targetPath === '/' ? 'home' : targetPath.replace('/', '')
      await page.screenshot({ path: path.join(outDir, `${target.name}-${safePath}.png`), fullPage: true })
    }
  }

  await browser.close()
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
