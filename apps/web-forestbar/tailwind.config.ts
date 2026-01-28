import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0b0f0e',
          900: '#0f1513',
          800: '#1b2622',
          700: '#273430',
          600: '#3a4b45',
          500: '#55655e',
          200: '#d7e0dc'
        }
      }
    }
  },
  plugins: []
}

export default config
