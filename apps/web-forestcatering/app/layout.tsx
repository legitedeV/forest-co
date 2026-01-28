import './globals.css'
import type { ReactNode } from 'react'
import { NavBar } from '../components/NavBar'

export const metadata = {
  title: 'ForestCatering – eventy i catering premium',
  description: 'Leśny catering oraz obsługa eventów firmowych.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <NavBar />
        <main className="pb-16">{children}</main>
        <footer className="border-t border-forest-800 bg-forest-900/60">
          <div className="container py-8 text-sm text-forest-200">
            © {new Date().getFullYear()} ForestCatering. Wszystkie prawa zastrzeżone.
          </div>
        </footer>
      </body>
    </html>
  )
}
