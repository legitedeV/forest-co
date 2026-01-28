'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm({ source }: { source: string }) {
  const [status, setStatus] = useState<FormState>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          source
        })
      })

      if (!response.ok) {
        throw new Error('Błąd zapisu')
      }

      event.currentTarget.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label className="text-xs uppercase text-forest-200">Imię i nazwisko</label>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-forest-700 bg-forest-900 px-4 py-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs uppercase text-forest-200">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-forest-700 bg-forest-900 px-4 py-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs uppercase text-forest-200">Telefon</label>
        <input name="phone" className="mt-2 w-full rounded-xl border border-forest-700 bg-forest-900 px-4 py-2 text-sm" />
      </div>
      <div>
        <label className="text-xs uppercase text-forest-200">Wiadomość</label>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-forest-700 bg-forest-900 px-4 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest-950"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
      </button>
      {status === 'success' && <p className="text-sm text-emerald-300">Dziękujemy! Odezwemy się wkrótce.</p>}
      {status === 'error' && <p className="text-sm text-red-300">Coś poszło nie tak. Spróbuj ponownie.</p>}
    </form>
  )
}
