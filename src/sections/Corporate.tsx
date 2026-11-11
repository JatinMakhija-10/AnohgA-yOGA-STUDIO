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
    teamSize: '10–25',
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
    if (formData.website.trim() !== '') {
      return
    }

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
      teamSize: '10–25',
      programme: 'Weekly On-Site Sessions',
      notes: '',
      website: '',
    })
  }

  return (
    <section id="corporate" className="bg-bark text-linen border-b border-[#343E34] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-16 border-b border-[#343E34]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
              05
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-linen/70">
              / CORPORATE WELLNESS
            </span>
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-linen leading-tight tracking-tightest">
            Ergonomic Resilience &amp;{' '}
            <span className="italic font-normal text-terra">Executive Mindfulness</span>
          </h2>

          <p className="mt-4 text-sm text-linen/80 leading-relaxed font-sans max-w-[62ch]">
            Counteract prolonged desk posture, screen fatigue, and cognitive stress. Anupriya
            designs bespoke corporate programmes for Chennai enterprises, IT hubs along OMR/ECR,
            and executive teams.
          </p>
        </div>

        {/* 3-Column Architectural Programme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#343E34] border-b border-[#343E34]">
          {/* Programme 01 */}
          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-terra">
                01 / WEEKLY ON-SITE
              </span>
              <h3 className="font-serif text-2xl font-light text-linen mt-3">
                Desk Ergonomics &amp; Spinal Release
              </h3>
              <p className="mt-4 text-xs font-sans text-linen/75 leading-relaxed">
                Regular 45 to 60-minute sessions conducted at your office or campus. Targets
                cervical spine tension, shoulder mobility, hip flexor tightness, and conscious
                pranayama techniques to reset autonomic nervous system tone.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#343E34]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60">
                Format: 1–2 Sessions Weekly
              </span>
            </div>
          </div>

          {/* Programme 02 */}
          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-terra">
                02 / INTENSIVE WORKSHOPS
              </span>
              <h3 className="font-serif text-2xl font-light text-linen mt-3">
                Half-Day Executive Offsites
              </h3>
              <p className="mt-4 text-xs font-sans text-linen/75 leading-relaxed">
                Structured retreats combining restorative yoga, somatic unwinding, guided breathwork
                cycles, and practical postural awareness tools that employees can integrate into
                everyday workstation routines.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#343E34]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60">
                Format: Half-Day or Full-Day Offsite
              </span>
            </div>
          </div>

          {/* Programme 03 */}
          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-terra">
                03 / HYBRID MEMBERSHIP
              </span>
              <h3 className="font-serif text-2xl font-light text-linen mt-3">
                Subsidised Studio Pass
              </h3>
              <p className="mt-4 text-xs font-sans text-linen/75 leading-relaxed">
                Provide employees with corporate wellness subsidies for Anohga studio batches on
                ECR, supplemented with live interactive Google Meet sessions on weekends for remote
                and hybrid team members.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#343E34]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60">
                Format: Studio + Remote Virtual Access
              </span>
            </div>
          </div>
        </div>

        {/* Logistics & Benchmark Strip */}
        <div className="p-6 sm:p-10 border-b border-[#343E34] bg-linen/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block">
              Investment Benchmark
            </span>
            <span className="font-serif text-xl font-light text-linen mt-1 block">
              ₹8,000 – ₹25,000 / mo
            </span>
            <span className="font-mono text-[9px] text-linen/50 mt-1 block">
              Based on frequency &amp; headcount
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block">
              Instructor Credentials
            </span>
            <span className="font-serif text-xl font-light text-linen mt-1 block">
              RYT-500 Lead
            </span>
            <span className="font-mono text-[9px] text-linen/50 mt-1 block">
              Direct guidance by Anupriya
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block">
              Coverage Radius
            </span>
            <span className="font-serif text-xl font-light text-linen mt-1 block">
              ECR, OMR &amp; Central Chennai
            </span>
            <span className="font-mono text-[9px] text-linen/50 mt-1 block">
              On-site equipment support
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-linen/60 block">
              Pilot Class Availability
            </span>
            <span className="font-serif text-xl font-light text-linen mt-1 block">
              1-Session Demonstration
            </span>
            <span className="font-mono text-[9px] text-linen/50 mt-1 block">
              Assesses team receptivity
            </span>
          </div>
        </div>

        {/* 4-Step Process Ledger & Proposal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#343E34]">
          {/* Left: 4-Step Process */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16">
            <span className="font-mono text-xs uppercase tracking-widest text-linen/70 block mb-6">
              ENGAGEMENT CADENCE
            </span>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-terra font-semibold">01.</span>
                <div>
                  <h4 className="font-serif text-lg text-linen">Discovery &amp; Ergonomic Assessment</h4>
                  <p className="text-xs text-linen/70 font-sans mt-1">
                    We review team size, work conditions, common physical complaints, and facility layout.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-terra font-semibold">02.</span>
                <div>
                  <h4 className="font-serif text-lg text-linen">Custom Proposal</h4>
                  <p className="text-xs text-linen/70 font-sans mt-1">
                    Structured syllabus matching your operational schedule and wellness budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-terra font-semibold">03.</span>
                <div>
                  <h4 className="font-serif text-lg text-linen">On-Site Demonstration</h4>
                  <p className="text-xs text-linen/70 font-sans mt-1">
                    A test pilot class to gauge team participation and align difficulty levels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-terra font-semibold">04.</span>
                <div>
                  <h4 className="font-serif text-lg text-linen">Ongoing Cadence</h4>
                  <p className="text-xs text-linen/70 font-sans mt-1">
                    Consistent weekly sessions with progressive anatomical milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Proposal Request Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 bg-[#252E25]">
            <span className="font-mono text-xs uppercase tracking-widest text-terra block mb-2">
              REQUEST A CUSTOM PROPOSAL
            </span>
            <p className="text-xs font-sans text-linen/80 mb-6">
              Direct dispatch to Anupriya. We will review your organization&apos;s requirements and
              respond within 24 hours.
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
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Tech Solutions"
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans placeholder:text-linen/30 focus:border-terra"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Natarajan"
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans placeholder:text-linen/30 focus:border-terra"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="priya@acme.com"
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans placeholder:text-linen/30 focus:border-terra"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans placeholder:text-linen/30 focus:border-terra"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Team Size
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans focus:border-terra"
                >
                  <option value="1–10 employees">1–10 employees (Intimate)</option>
                  <option value="10–25 employees">10–25 employees (Mid-team)</option>
                  <option value="25–50 employees">25–50 employees (Department)</option>
                  <option value="50+ employees">50+ employees (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Programme Focus
                </label>
                <select
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans focus:border-terra"
                >
                  <option value="Weekly On-Site Sessions">Weekly On-Site Sessions</option>
                  <option value="Executive Offsite Workshop">Executive Offsite Workshop</option>
                  <option value="Subsidised Studio Passes">Subsidised Studio Passes</option>
                  <option value="Hybrid / Virtual Series">Hybrid / Virtual Series</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono text-[9px] uppercase tracking-wider text-linen/70 mb-1">
                  Specific Physical Goals or Notes
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Ergonomics focus for engineering team, prefer Friday afternoons..."
                  className="w-full bg-[#1E251E] border border-[#343E34] text-linen px-3 py-2 text-xs font-sans placeholder:text-linen/30 focus:border-terra"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="btn-outline-linen w-full justify-center py-3"
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
