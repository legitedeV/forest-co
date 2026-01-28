import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/kontakt', label: 'Kontakt' }
]

export function NavBar() {
  return (
    <header className="border-b border-forest-800 bg-forest-900/60">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          ForestCatering
        </Link>
        <nav className="flex items-center gap-6 text-sm text-forest-200">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
