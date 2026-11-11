import { useState, type ChangeEvent, type FormEvent, type FC } from 'react'
import { waCorporate } from '../utils/wa'

interface CorporateProps {
  onToast: (msg: string) => void
}

export const Corporate: FC<CorporateProps> = ({ onToast }) => {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    teamSize: '10–25 employees',
    programme: 'Weekly On-Site Sessions',
    notes: '',
    website: '', // honeypot
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.website.trim() !== '') return

    if (!formData.company || !formData.contactName || !formData.phone) {
      alert('Please fill out the required corporate fields.')
      return
    }

    const payload: Record<string, string> = {
      'Company Name': formData.company,
      'Contact Person': formData.contactName,
      'Email': formData.email || 'Not provided',
      'Phone': formData.phone,
      'Team Size': formData.teamSize,
      'Programme of Interest': formData.programme,
    }
    if (formData.notes) {
      payload['Notes'] = formData.notes
    }

    const url = waCorporate(payload)
    window.open(url, '_blank', 'noopener,noreferrer')
    onToast('Corporate proposal request formatted. Redirecting to WhatsApp...')

    setFormData({
      company: '',
      contactName: '',
      email: '',
      phone: '',
      teamSize: '10–25 employees',
      programme: 'Weekly On-Site Sessions',
      notes: '',
      website: '',
    })
  }

  return (
    <section id="corporate" className="bg-bark text-linen border-b border-[#343E34] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-[#343E34]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/20 border border-terra/40 rounded-md">
              05
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-linen font-semibold">
              / CORPORATE RESILIENCE
            </span>
          </div>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-linen leading-tight tracking-tight">
            Desk Ergonomics &amp;{' '}
            <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
              Executive Focus
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-linen/90 leading-relaxed font-sans font-medium max-w-[62ch]">
            Counteract prolonged desk posture, screen fatigue, and cognitive stress with structured
            anatomical sessions designed for Chennai tech hubs along OMR, ECR, and central business districts.
          </p>
        </div>

        {/* 3-Column Visual Programme Cards */}
        <div className="p-6 sm:p-10 lg:p-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 border-b border-[#343E34]">
          {/* Programme 01 */}
          <div className="p-8 flex flex-col justify-between hover:bg-white/5 transition-colors border border-[#343E34] bg-white/[0.02] rounded-xl shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                  01 / ON-SITE
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-linen/80 px-2.5 py-0.5 border border-[#343E34] rounded-md bg-white/5">
                  WEEKLY
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-linen mt-3">
                Desk Ergonomics &amp; Spinal Release
              </h3>
              <p className="mt-4 text-sm font-sans text-linen/80 font-medium leading-relaxed">
                45 to 60-minute sessions at your office. Targets neck stiffness, shoulder impingement,
                lower-back compression, and guided breathing to reset stress tone.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#343E34] font-mono text-xs text-terra font-bold">
              ✓ Recommended for Engineering &amp; Operations Teams
            </div>
          </div>

          {/* Programme 02 */}
          <div className="p-8 flex flex-col justify-between hover:bg-white/5 transition-colors border border-[#343E34] bg-white/[0.02] rounded-xl shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                  02 / OFFSITES
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-linen/80 px-2.5 py-0.5 border border-[#343E34] rounded-md bg-white/5">
                  INTENSIVE
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-linen mt-3">
                Executive Retreats &amp; Sound Calm
              </h3>
              <p className="mt-4 text-sm font-sans text-linen/80 font-medium leading-relaxed">
                Half-day or full-day structured offsites combining restorative somatic release,
                deep breath regulation, and actionable posture hygiene drills.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#343E34] font-mono text-xs text-terra font-bold">
              ✓ Leadership Offsites &amp; Quarterly Wellness
            </div>
          </div>

          {/* Programme 03 */}
          <div className="p-8 flex flex-col justify-between hover:bg-white/5 transition-colors border border-[#343E34] bg-white/[0.02] rounded-xl shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                  03 / HYBRID PASS
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-linen/80 px-2.5 py-0.5 border border-[#343E34] rounded-md bg-white/5">
                  FLEXIBLE
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-linen mt-3">
                Subsidised Studio &amp; Virtual Pass
              </h3>
              <p className="mt-4 text-sm font-sans text-linen/80 font-medium leading-relaxed">
                Offer employees subsidised studio passes for in-person Hatha and Aerial classes,
                plus live weekend virtual streams for remote team members.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#343E34] font-mono text-xs text-terra font-bold">
              ✓ Ideal for Distributed &amp; Hybrid Companies
            </div>
          </div>
        </div>

        {/* Logistics & Benchmark Highlights */}
        <div className="p-6 sm:p-10 border-b border-[#343E34] bg-white/[0.02]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 border border-[#343E34] bg-white/[0.03] rounded-2xl shadow-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block font-semibold">
                Tuition Benchmark
              </span>
              <span className="font-serif text-2xl font-bold text-terra mt-1 block">
                ₹8,000 – ₹25,000 / mo
              </span>
              <span className="font-mono text-[10px] text-linen/70 mt-1 block">
                Customized by cadence
              </span>
            </div>

            <div className="p-5 border border-[#343E34] bg-white/[0.03] rounded-2xl shadow-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block font-semibold">
                Instructor Integrity
              </span>
              <span className="font-serif text-2xl font-bold text-linen mt-1 block">
                Anupriya (RYT-500)
              </span>
              <span className="font-mono text-[10px] text-linen/70 mt-1 block">
                100% direct instruction
              </span>
            </div>

            <div className="p-5 border border-[#343E34] bg-white/[0.03] rounded-2xl shadow-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block font-semibold">
                Coverage Range
              </span>
              <span className="font-serif text-2xl font-bold text-linen mt-1 block">
                ECR, OMR &amp; City
              </span>
              <span className="font-mono text-[10px] text-linen/70 mt-1 block">
                Equipment brought on-site
              </span>
            </div>

            <div className="p-5 border border-[#343E34] bg-white/[0.03] rounded-2xl shadow-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block font-semibold">
                Trial Demonstration
              </span>
              <span className="font-serif text-2xl font-bold text-terra mt-1 block">
                1-Session Pilot
              </span>
              <span className="font-mono text-[10px] text-linen/70 mt-1 block">
                Test team engagement
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Process & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#343E34]">
          {/* Left: 4-Step Process Visual Cards */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold block mb-6">
              FOUR STEPS TO ON-SITE WELLNESS
            </span>

            <div className="space-y-4">
              <div className="p-4 border border-[#343E34] bg-white/5 flex items-start gap-4 rounded-xl">
                <span className="font-mono text-lg text-terra font-bold">01</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-linen">Assessment Call</h4>
                  <p className="text-xs text-linen/80 font-sans mt-0.5">
                    We evaluate employee work postures, shift timings, and space logistics.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-[#343E34] bg-white/5 flex items-start gap-4 rounded-xl">
                <span className="font-mono text-lg text-terra font-bold">02</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-linen">Tailored Curriculum</h4>
                  <p className="text-xs text-linen/80 font-sans mt-0.5">
                    Structured syllabus addressing specific repetitive strain risks.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-[#343E34] bg-white/5 flex items-start gap-4 rounded-xl">
                <span className="font-mono text-lg text-terra font-bold">03</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-linen">On-Site Demonstration</h4>
                  <p className="text-xs text-linen/80 font-sans mt-0.5">
                    A test session to evaluate employee participation and enthusiasm.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-[#343E34] bg-white/5 flex items-start gap-4 rounded-xl">
                <span className="font-mono text-lg text-terra font-bold">04</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-linen">Consistent Weekly Cadence</h4>
                  <p className="text-xs text-linen/80 font-sans mt-0.5">
                    Ongoing practice with progressive anatomical milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Proposal Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 bg-[#232B23] rounded-xl m-2 lg:m-6 border border-[#343E34] shadow-md">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/20 border border-terra/30 rounded-md inline-block mb-3">
              REQUEST A CUSTOM PROPOSAL
            </span>
            <p className="text-sm font-sans text-linen/90 font-medium mb-6 leading-relaxed">
              Routes directly to Anupriya on WhatsApp. We will evaluate your facility requirements
              and share a proposal within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                aria-hidden="true"
              />

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company or organization name"
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans placeholder:text-linen/30 focus:border-terra rounded-md transition-all outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Contact person full name"
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans placeholder:text-linen/30 focus:border-terra rounded-xl transition-all outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="corporate@company.com"
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans placeholder:text-linen/30 focus:border-terra rounded-xl transition-all outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone or WhatsApp"
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans placeholder:text-linen/30 focus:border-terra rounded-xl transition-all outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Team Size
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans focus:border-terra rounded-xl transition-all outline-none"
                >
                  <option value="1–10 employees">1–10 employees (Core Team)</option>
                  <option value="10–25 employees">10–25 employees (Department)</option>
                  <option value="25–50 employees">25–50 employees (Mid-sized)</option>
                  <option value="50+ employees">50+ employees (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Programme Focus
                </label>
                <select
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans focus:border-terra rounded-xl transition-all outline-none"
                >
                  <option value="Weekly On-Site Sessions">Weekly On-Site Sessions</option>
                  <option value="Executive Offsite Workshop">Executive Offsite Workshop</option>
                  <option value="Subsidised Studio Passes">Subsidised Studio Passes</option>
                  <option value="Hybrid / Virtual Series">Hybrid / Virtual Series</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-linen font-bold mb-1.5">
                  Specific Physical Goals or Notes
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Team requirements, desk strain patterns, preferred weekly schedule..."
                  className="w-full bg-[#1A201A] border border-[#343E34] hover:border-terra/40 text-linen px-4 py-3 text-sm font-sans placeholder:text-linen/30 focus:border-terra rounded-xl transition-all outline-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="btn-terra w-full justify-center py-3.5 font-bold"
                >
                  <span>Submit Corporate Proposal Request</span>
                  <span>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
