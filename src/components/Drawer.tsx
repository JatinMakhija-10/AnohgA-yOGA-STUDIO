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
        className={`drawer-panel p-6 sm:p-10 flex flex-col justify-between rounded-l-2xl shadow-2xl ${
          context.open ? 'open' : ''
        }`}
        aria-label="Class Reservation Drawer"
      >
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 border-b border-hairline">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
              {context.day && context.time ? 'SLOT RESERVATION' : 'FIRST CLASS FREE'}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-espresso hover:text-terra transition-colors rounded-full hover:bg-travertine/60 cursor-pointer"
              aria-label="Close drawer"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Heading & Copy */}
          <div className="mt-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-espresso">
              Your first class <span className="italic font-bold text-terra">is free.</span>
            </h2>
            <p className="mt-3 text-sm text-espresso/90 font-sans font-medium leading-relaxed">
              No commitment. Drop in, meet Anupriya, and decide after. Leave your number and
              we&apos;ll confirm a slot within 2 hours.
            </p>
          </div>

          {/* Slot summary badge if triggered from Timetable */}
          {context.day && context.time && (
            <div className="mt-6 p-4 bg-travertine/60 border border-hairline rounded-2xl">
              <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-bold block">
                Selected Timetable Session
              </span>
              <div className="mt-1 flex items-baseline justify-between font-mono text-xs text-espresso">
                <span className="font-bold text-sm">{context.cls || 'Practice Session'}</span>
                <span className="text-terra font-bold">
                  {context.day} · {context.time}
                </span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
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
              <label className="block font-mono text-[11px] uppercase tracking-wider text-espresso font-bold mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-travertine/40 border border-hairline hover:border-espresso/40 focus:border-terra focus:bg-linen px-4 py-3 text-sm font-sans text-espresso font-medium placeholder:text-umber/40 rounded-xl transition-all outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-espresso font-bold mb-1.5">
                Phone or WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full bg-travertine/40 border border-hairline hover:border-espresso/40 focus:border-terra focus:bg-linen px-4 py-3 text-sm font-sans text-espresso font-medium placeholder:text-umber/40 rounded-xl transition-all outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-espresso font-bold mb-1.5">
                Preferred Practice (Optional)
              </label>
              <select
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                className="w-full bg-travertine/40 border border-hairline hover:border-espresso/40 focus:border-terra focus:bg-linen px-4 py-3 text-sm font-sans text-espresso font-semibold rounded-xl transition-all outline-none"
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

            {/* Live WhatsApp message preview */}
            <div className="p-3.5 bg-travertine/50 border border-hairline font-mono text-[10px] text-espresso leading-relaxed rounded-2xl">
              <span className="text-terra font-bold uppercase block mb-1">
                💬 LIVE WHATSAPP MESSAGE PREVIEW:
              </span>
              <p className="italic text-espresso/90 font-sans text-xs">
                &ldquo;Hi Anupriya! I&apos;d like to claim my FREE first class at Anohga Yoga Studio.{' '}
                {name ? `Name: ${name}. ` : ''}
                {discipline ? `Discipline: ${discipline}. ` : ''}
                Please confirm my slot.&rdquo;
              </p>
            </div>

            {errorMessage && (
              <p className="font-mono text-[11px] text-terra font-bold">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="btn-terra w-full justify-center mt-2 py-3.5 font-bold text-xs shadow-md hover:shadow-lg"
            >
              <span>Claim Complimentary Class on WhatsApp</span>
              <span>↗</span>
            </button>
          </form>
        </div>

        {/* Drawer Footer Assurance */}
        <div className="pt-6 border-t border-hairline mt-8 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-moss rounded-full"></span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-espresso font-bold">
              Direct communication with founder Anupriya (No bots)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-moss rounded-full"></span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-espresso font-bold">
              2-hr average response time · Mon–Sat 6 AM – 8 PM
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}
