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
        <div className="p-6 sm:p-10 lg:p-16 border-b border-hairline">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
              06
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-umber">
              / DIRECT DISPATCH &amp; RESERVATIONS
            </span>
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-espresso leading-tight tracking-tightest">
            Reserve Your Place on the Mat{' '}
            <span className="italic font-normal">or in the Silks</span>
          </h2>

          <p className="mt-4 text-sm text-umber leading-relaxed font-sans max-w-[62ch]">
            Submit your details below. Each request routes directly to Anupriya on WhatsApp for
            personalized confirmation and schedule coordination.
          </p>
        </div>

        {/* Dual Form Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-hairline">
          {/* Form 01: Lock in Your Plan */}
          <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-between bg-linen">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
                  OPTION A
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
                  MEMBERSHIP RESERVATION
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-espresso mt-6">
                Lock In Your Plan
              </h3>
              <p className="mt-3 text-xs text-umber font-sans leading-relaxed">
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
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    placeholder="e.g. Radhika Raman"
                    className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Phone or WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={planPhone}
                    onChange={(e) => setPlanPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Select Plan *
                  </label>
                  <select
                    value={planChoice}
                    onChange={(e) => {
                      setPlanChoice(e.target.value)
                      onPlanChange(e.target.value)
                    }}
                    className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso"
                  >
                    {PLAN_NAMES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Notes or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={planNotes}
                    onChange={(e) => setPlanNotes(e.target.value)}
                    placeholder="e.g. Prefer 07:30 AM slot, beginner in aerial..."
                    className="w-full bg-travertine/60 border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-terra w-full justify-center py-3.5 mt-2"
                >
                  <span>Lock in membership</span>
                  <span>↗</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-hairline mt-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
                Payment settled after confirmation · UPI / Cash accepted
              </span>
            </div>
          </div>

          {/* Form 02: Book First Class Free */}
          <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-between bg-travertine/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
                  OPTION B
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
                  COMPLIMENTARY FIRST CLASS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-espresso mt-6">
                Book Your First Class Free
              </h3>
              <p className="mt-3 text-xs text-umber font-sans leading-relaxed">
                Experience the atmosphere and teaching philosophy before making any commitment.
                Hatha trials are completely free; Aerial drop-ins are ₹700 (refundable).
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
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={trialName}
                    onChange={(e) => setTrialName(e.target.value)}
                    placeholder="e.g. Siddharth Menon"
                    className="w-full bg-linen border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Phone or WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={trialPhone}
                    onChange={(e) => setTrialPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-linen border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Preferred Practice *
                  </label>
                  <select
                    value={trialDiscipline}
                    onChange={(e) => setTrialDiscipline(e.target.value)}
                    className="w-full bg-linen border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso"
                  >
                    <option value="Hatha Yoga (Free First Class)">
                      Hatha Yoga (Studio) — 100% Free Trial
                    </option>
                    <option value="Aerial Yoga (Drop-In Trial ₹700 Refundable)">
                      Aerial Yoga — ₹700 Drop-In (Refundable on Monthly)
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
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-umber mb-1">
                    Preferred Day / Time (Optional)
                  </label>
                  <input
                    type="text"
                    value={trialSlot}
                    onChange={(e) => setTrialSlot(e.target.value)}
                    placeholder="e.g. Tuesday morning 7:30 AM"
                    className="w-full bg-linen border border-hairline px-3.5 py-2.5 text-xs font-sans text-espresso placeholder:text-umber/50"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-outline w-full justify-center py-3.5 mt-2"
                >
                  <span>Claim free class slot</span>
                  <span>↗</span>
                </button>
              </form>
            </div>

            {/* Studio Guarantees */}
            <div className="pt-6 border-t border-hairline mt-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-espresso">
                  No automated bots: Anupriya confirms all messages personally.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-espresso">
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
