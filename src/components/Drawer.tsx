import { useState, useEffect, type FormEvent, type FC } from 'react'
import type { DrawerContext } from '../types'
import { waBook, waTrial } from '../utils/wa'

interface DrawerProps {
  context: DrawerContext
  onClose: () => void
  onToast: (msg: string) => void
}

export const Drawer: FC<DrawerProps> = ({ context, onClose, onToast }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (context.cls) {
      setDiscipline(context.cls)
    } else {
      setDiscipline('')
    }
    setErrorMessage('')
  }, [context])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check (anti-bot)
    if (honeypot.trim() !== '') {
      onClose()
      return
    }

    if (!name.trim()) {
      setErrorMessage('Please enter your name.')
      return
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please enter a valid phone or WhatsApp number.')
      return
    }

    let url = ''
    if (context.day && context.time && context.cls) {
      url = waBook(name.trim(), phone.trim(), context.day, context.time, context.cls)
    } else {
      url = waTrial(name.trim(), phone.trim(), discipline.trim())
    }

    // Open WhatsApp link in new tab
    window.open(url, '_blank', 'noopener,noreferrer')

    onToast('Reservation request prepared. Redirecting to WhatsApp...')
    setName('')
    setPhone('')
    setDiscipline('')
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${context.open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <aside
        className={`drawer-panel p-6 sm:p-10 flex flex-col justify-between ${
          context.open ? 'open' : ''
        }`}
        aria-label="Class Reservation Drawer"
      >
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 border-b border-hairline">
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
              {context.day && context.time ? 'Timetable Slot Booking' : 'First Class Free · Claim Slot'}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-espresso hover:text-terra transition-colors"
              aria-label="Close drawer"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="square"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Heading & Copy */}
          <div className="mt-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight text-espresso">
              Your first class <span className="italic font-normal">is free.</span>
            </h2>
            <p className="mt-4 text-[13px] text-umber leading-relaxed">
              No commitment. Drop in, meet Anupriya, and decide after. Leave your number and
              we&apos;ll confirm a slot within 2 hours.
            </p>
          </div>

          {/* Slot summary badge if triggered from Timetable */}
          {context.day && context.time && (
            <div className="mt-6 p-4 bg-travertine border border-hairline">
              <span className="font-mono text-[9px] uppercase tracking-wider text-umber block">
                Selected Timetable Session
              </span>
              <div className="mt-1 flex items-baseline justify-between font-mono text-xs text-espresso">
                <span className="font-medium">{context.cls || 'Practice Session'}</span>
                <span className="text-umber">
                  {context.day} · {context.time}
                </span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            {/* Honeypot field (hidden from genuine users) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none', position: 'absolute', left: '-9999px' }}
              aria-hidden="true"
            />

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1.5">
                Your name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya Sundaram"
                className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1.5">
                Phone or WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1.5">
                Preferred discipline (optional)
              </label>
              <select
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso"
              >
                <option value="">Any / Not sure yet</option>
                <option value="Hatha Yoga &amp; Mudras">Hatha Yoga &amp; Mudras (Studio / Virtual)</option>
                <option value="Aerial Yoga (Silk Hammock)">Aerial Yoga (Silk Hammock)</option>
                <option value="Private Yoga Therapy">Private Yoga Therapy (Clinical)</option>
                <option value="Prenatal Yoga">Prenatal Yoga</option>
                <option value="Kids Hatha + Aerial">Kids Hatha + Aerial (Ages 7–14)</option>
                <option value="Weekend Online Hatha">Weekend Online Hatha (Sat/Sun 10 AM)</option>
              </select>
            </div>

            {errorMessage && (
              <p className="font-mono text-[11px] text-terra">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="btn-terra w-full justify-center mt-3 py-3"
            >
              <span>Claim my free class</span>
              <span>↗</span>
            </button>
          </form>
        </div>

        {/* Drawer Footer Assurance */}
        <div className="pt-8 border-t border-hairline mt-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
              Direct connection with Anupriya · No automated bot
            </span>
          </div>
          <p className="font-mono text-[9px] text-umber/80 mt-2">
            ECR Thiruvanmiyur · Mon–Sat 6 AM – 7 PM · +91 81227 51154
          </p>
        </div>
      </aside>
    </>
  )
}
