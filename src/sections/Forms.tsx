import { useState, useEffect, type FormEvent, type FC } from 'react'
import { PLAN_NAMES } from '../data'
import { waPlan, waTrial } from '../utils/wa'

interface FormsProps {
  selectedPlan: string
  onPlanChange: (plan: string) => void
  onToast: (msg: string) => void
}

export const Forms: FC<FormsProps> = ({ selectedPlan, onPlanChange, onToast }) => {
  // Plan Reservation Form State
  const [planName, setPlanName] = useState('')
  const [planPhone, setPlanPhone] = useState('')
  const [planChoice, setPlanChoice] = useState(selectedPlan || PLAN_NAMES[0])
  const [planNotes, setPlanNotes] = useState('')
  const [planHoneypot, setPlanHoneypot] = useState('')

  // Free Trial Form State
  const [trialName, setTrialName] = useState('')
  const [trialPhone, setTrialPhone] = useState('')
  const [trialDiscipline, setTrialDiscipline] = useState('Hatha Yoga (Free First Class)')
  const [trialSlot, setTrialSlot] = useState('')
  const [trialHoneypot, setTrialHoneypot] = useState('')

  useEffect(() => {
    if (selectedPlan) {
      setPlanChoice(selectedPlan)
    }
  }, [selectedPlan])

  const handlePlanSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (planHoneypot.trim() !== '') return

    if (!planName.trim() || !planPhone.trim()) {
      alert('Please provide your name and phone number.')
      return
    }

    const planString = planNotes.trim()
      ? `${planChoice} (Note: ${planNotes.trim()})`
      : planChoice

    const url = waPlan(planName.trim(), planPhone.trim(), planString)
    window.open(url, '_blank', 'noopener,noreferrer')
    onToast('Membership request prepared. Redirecting to WhatsApp...')

    setPlanName('')
    setPlanPhone('')
    setPlanNotes('')
  }

  const handleTrialSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (trialHoneypot.trim() !== '') return

    if (!trialName.trim() || !trialPhone.trim()) {
      alert('Please provide your name and phone number.')
      return
    }

    const discDetail = trialSlot.trim()
      ? `${trialDiscipline} (Preferred Slot: ${trialSlot.trim()})`
      : trialDiscipline

    const url = waTrial(trialName.trim(), trialPhone.trim(), discDetail)
    window.open(url, '_blank', 'noopener,noreferrer')
    onToast('Free trial reservation prepared. Redirecting to WhatsApp...')

    setTrialName('')
    setTrialPhone('')
    setTrialSlot('')
  }

  return (
    <section id="contact" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
                06
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / DIRECT WHATSAPP RESERVATIONS
              </span>
            </div>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-espresso leading-tight tracking-tight">
              Reserve Your Place on the Mat{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                or in the Silks
              </span>
            </h2>

            <p className="mt-4 text-base text-espresso/90 font-sans font-medium max-w-[62ch]">
              Select either membership lock-in or book your complimentary first class.
              All submissions route directly to Anupriya for personal slot confirmation.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-espresso font-bold">
            <span className="px-4 py-2 bg-travertine border border-hairline rounded-full shadow-xs">
              ⚡ 2-HOUR WHATSAPP CONFIRMATION
            </span>
          </div>
        </div>

        {/* Dual Form Architectural Grid with High Contrast & Soft Edges */}
        <div className="p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Form 01: Lock in Your Plan */}
          <div className="p-6 sm:p-10 flex flex-col justify-between bg-linen border border-hairline/80 rounded-2xl shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                  OPTION A
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-espresso font-semibold px-3 py-1 bg-travertine border border-hairline rounded-full">
                  MEMBERSHIP LOCK-IN
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-espresso mt-6">
                Lock In Your Plan
              </h3>
              <p className="mt-2 text-sm text-espresso/80 font-sans font-medium leading-relaxed">
                Choose your tuition tier. We will confirm batch availability and share UPI details
                directly via WhatsApp.
              </p>

              <form onSubmit={handlePlanSubmit} className="mt-8 flex flex-col gap-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={planHoneypot}
                  onChange={(e) => setPlanHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  aria-hidden="true"
                />

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    placeholder="e.g. Radhika Raman"
                    className="w-full bg-travertine/50 border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-medium placeholder:text-umber/50 focus:border-terra rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Phone or WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={planPhone}
                    onChange={(e) => setPlanPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-travertine/50 border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-medium placeholder:text-umber/50 focus:border-terra rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Selected Tuition Tier *
                  </label>
                  <select
                    value={planChoice}
                    onChange={(e) => {
                      setPlanChoice(e.target.value)
                      onPlanChange(e.target.value)
                    }}
                    className="w-full bg-travertine/50 border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-semibold focus:border-terra rounded-xl"
                  >
                    {PLAN_NAMES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Notes or Schedule Preference (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={planNotes}
                    onChange={(e) => setPlanNotes(e.target.value)}
                    placeholder="e.g. Prefer 07:30 AM slot, beginner in aerial silks..."
                    className="w-full bg-travertine/50 border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-medium placeholder:text-umber/50 focus:border-terra rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-terra w-full justify-center py-3.5 font-bold text-xs mt-2"
                >
                  <span>Lock In Membership on WhatsApp</span>
                  <span>↗</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-hairline mt-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-moss rounded-full"></span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-espresso font-bold">
                Payment settled after confirmation · UPI / Cash accepted
              </span>
            </div>
          </div>

          {/* Form 02: Book First Class Free */}
          <div className="p-6 sm:p-10 flex flex-col justify-between bg-travertine/30 border border-hairline/80 rounded-2xl shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                  OPTION B
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-espresso font-semibold px-3 py-1 bg-linen border border-hairline rounded-full shadow-xs">
                  COMPLIMENTARY FIRST CLASS
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-espresso mt-6">
                Book Your First Class Free
              </h3>
              <p className="mt-2 text-sm text-espresso/80 font-sans font-medium leading-relaxed">
                Experience the studio atmosphere before making any commitment.
                Hatha trials are 100% free; Aerial drop-ins are ₹700 (refundable).
              </p>

              <form onSubmit={handleTrialSubmit} className="mt-8 flex flex-col gap-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={trialHoneypot}
                  onChange={(e) => setTrialHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  aria-hidden="true"
                />

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={trialName}
                    onChange={(e) => setTrialName(e.target.value)}
                    placeholder="e.g. Siddharth Menon"
                    className="w-full bg-linen border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-medium placeholder:text-umber/50 focus:border-terra rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Phone or WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={trialPhone}
                    onChange={(e) => setTrialPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-linen border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-medium placeholder:text-umber/50 focus:border-terra rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Preferred Practice *
                  </label>
                  <select
                    value={trialDiscipline}
                    onChange={(e) => setTrialDiscipline(e.target.value)}
                    className="w-full bg-linen border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-semibold focus:border-terra rounded-xl"
                  >
                    <option value="Hatha Yoga (Free First Class)">
                      Hatha Yoga (Studio) — 100% Free First Class
                    </option>
                    <option value="Aerial Yoga (Drop-In Trial ₹700 Refundable)">
                      Aerial Yoga — ₹700 Drop-In (Refunded on Monthly)
                    </option>
                    <option value="Weekend Online Hatha (Google Meet)">
                      Weekend Online Hatha — Free Trial
                    </option>
                    <option value="Prenatal Yoga Consultation">
                      Prenatal Yoga Consultation
                    </option>
                    <option value="Kids Hatha + Aerial (Ages 7–14)">
                      Kids Hatha + Aerial (Ages 7–14)
                    </option>
                    <option value="Private Therapy Consultation (9:30 AM)">
                      Private Therapy Consultation (Weekdays 9:30 AM)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso font-bold mb-1">
                    Preferred Day / Time (Optional)
                  </label>
                  <input
                    type="text"
                    value={trialSlot}
                    onChange={(e) => setTrialSlot(e.target.value)}
                    placeholder="e.g. Tuesday morning 7:30 AM"
                    className="w-full bg-linen border border-hairline/80 px-3.5 py-2.5 text-sm font-sans text-espresso font-medium placeholder:text-umber/50 focus:border-terra rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-terra w-full justify-center py-3.5 font-bold text-xs mt-2"
                >
                  <span>Claim Free Class Slot on WhatsApp</span>
                  <span>↗</span>
                </button>
              </form>
            </div>

            {/* Studio Guarantees */}
            <div className="pt-6 border-t border-hairline mt-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-moss rounded-full"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold">
                  Direct personal communication with Anupriya. No bots.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-moss rounded-full"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold">
                  2-hour average response time during studio hours (6 AM – 8 PM).
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
