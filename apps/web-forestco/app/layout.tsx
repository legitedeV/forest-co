import './globals.css'
import type { ReactNode } from 'react'
import { NavBar } from '../components/NavBar'

export const metadata = {
  title: 'ForestCo – naturalne produkty leśne',
  description: 'Produkty leśne, catering i bar w jednym ekosystemie.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <NavBar />
        <main className="pb-16">{children}</main>
        <footer className="border-t border-forest-800 bg-forest-900/60">
          <div className="container py-8 text-sm text-forest-200">
            © {new Date().getFullYear()} ForestCo. Wszystkie prawa zastrzeżone.
          </div>
        </footer>
      </body>
    </html>
  )
}
