import { useState, type FC } from 'react'
import { PRICING, FAQ } from '../data'
import { TuitionCalculator } from '../components/TuitionCalculator'

interface PricingProps {
  onSelectPlan: (planString: string) => void
  onToast: (msg: string) => void
}

export const Pricing: FC<PricingProps> = ({ onSelectPlan, onToast }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Group plans
  const groups = ['Combo Packs', 'Aerial Yoga', 'Hatha & Kids', 'Specialised']

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handlePlanReserve = (planName: string, monthlyPrice: number) => {
    const planFormatted = `${planName} — ₹${monthlyPrice}/mo`
    onSelectPlan(planFormatted)
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header & Billing Cadence Toggle */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-md">
                03
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / PRICING &amp; MEMBERSHIPS
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-espresso leading-tight tracking-tight">
              Honest, Transparent{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Tuition Ledger
              </span>
            </h2>
            <p className="mt-3 text-base text-espresso/90 font-sans font-medium max-w-[56ch]">
              No sign-up dues or registration traps. Choose month-to-month flexibility or save up
              to ₹1,900 with quarterly commitment.
            </p>
          </div>

          {/* Billing Cadence Toggle - Architectural Switcher */}
          <div className="flex items-center gap-1.5 border border-hairline p-1 bg-travertine/80 self-start md:self-auto rounded-md shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`toggle-btn font-bold cursor-pointer rounded-md px-4 py-2 ${
                billingCycle === 'monthly' ? 'active shadow-sm' : ''
              }`}
            >
              MONTHLY CADENCE
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`toggle-btn font-bold cursor-pointer rounded-md px-4 py-2 ${
                billingCycle === 'quarterly' ? 'active shadow-sm' : ''
              }`}
            >
              QUARTERLY (SAVE ₹)
            </button>
          </div>
        </div>

        {/* ── Visual Studio Tuition Guarantee Highlights ── */}
        <div className="p-6 sm:p-10 lg:p-12 bg-travertine/20 border-b border-hairline">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-6 bg-linen rounded-lg border border-hairline/80 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold block">
                ₹0 ADMISSION FEE
              </span>
              <span className="font-mono text-[10px] text-umber font-semibold block mt-1">
                Only class tuition applies
              </span>
            </div>
            <div className="p-6 bg-linen rounded-lg border border-hairline/80 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold block">
                FLEXIBLE MAKE-UPS
              </span>
              <span className="font-mono text-[10px] text-umber font-semibold block mt-1">
                Roll slots within the month
              </span>
            </div>
            <div className="p-6 bg-linen rounded-lg border border-hairline/80 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold block">
                DIRECT UPI SETTLEMENT
              </span>
              <span className="font-mono text-[10px] text-umber font-semibold block mt-1">
                GPay / PhonePe / Cash
              </span>
            </div>
            <div className="p-6 bg-linen rounded-lg border border-hairline/80 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold block">
                AERIAL TRIAL REFUND
              </span>
              <span className="font-mono text-[10px] text-umber font-semibold block mt-1">
                ₹700 credited on sign-up
              </span>
            </div>
          </div>
        </div>

        {/* ── 4 Pricing Groups Ledger with Visual Cards ── */}
        <div className="divide-y divide-hairline">
          {groups.map((groupName) => {
            const groupPlans = PRICING.filter((p) => p.group === groupName)
            return (
              <div key={groupName} className="p-6 sm:p-10 lg:p-14">
                <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-terra rounded-full"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-espresso font-bold">
                      {groupName}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-md">
                    {billingCycle === 'monthly' ? 'MONTHLY CADENCE' : 'QUARTERLY UPFRONT (SAVE UP TO ₹1,900)'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {groupPlans.map((plan) => {
                    const price = billingCycle === 'monthly' ? plan.monthly : plan.quarterly
                    const unit = billingCycle === 'monthly' ? '/ month' : ' / 3 months'
                    const isPopular = plan.tag === 'MOST POPULAR'
                    const isBestValue = plan.tag === 'BEST VALUE'

                    return (
                      <div
                        key={plan.name}
                        className={`p-7 border flex flex-col justify-between transition-all bg-linen rounded-xl ${
                          isPopular || isBestValue
                            ? 'border-terra shadow-md bg-travertine/10'
                            : 'border-hairline hover:border-espresso shadow-xs'
                        }`}
                      >
                        <div>
                          {/* Tag row */}
                          <div className="flex items-center justify-between min-h-[26px] mb-3">
                            {plan.tag ? (
                              <span
                                className={`font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 font-bold rounded-md ${
                                  isPopular
                                    ? 'bg-terra text-linen'
                                    : 'bg-moss text-linen'
                                }`}
                              >
                                {plan.tag}
                              </span>
                            ) : (
                              <span className="font-mono text-[9px] uppercase tracking-wider text-umber">
                                STANDARD TIER
                              </span>
                            )}
                            {billingCycle === 'quarterly' && plan.quarterlySave > 0 && (
                              <span className="font-mono text-[10px] text-moss font-bold px-2 py-0.5 bg-moss/10 rounded-md">
                                Save ₹{plan.quarterlySave}
                              </span>
                            )}
                          </div>

                          {/* Plan Title */}
                          <h3 className="font-serif text-2xl font-bold text-espresso leading-snug">
                            {plan.name}
                          </h3>

                          {plan.note && (
                            <p className="mt-2 font-mono text-[11px] text-umber font-semibold">
                              {plan.note}
                            </p>
                          )}
                        </div>

                        {/* Price & Action Button */}
                        <div className="mt-8 pt-4 border-t border-hairline">
                          <div className="mb-4">
                            <span className="font-serif text-3xl sm:text-4xl font-bold text-espresso leading-none">
                              ₹{price.toLocaleString('en-IN')}
                            </span>
                            <span className="font-mono text-xs text-umber font-semibold block mt-1">
                              {unit}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handlePlanReserve(plan.name, plan.monthly)}
                            className={`w-full justify-center py-3 text-[11px] font-bold ${
                              isPopular || isBestValue ? 'btn-terra' : 'btn-outline'
                            }`}
                          >
                            <span>Reserve This Plan</span>
                            <span>↗</span>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Custom Tuition Calculator ── */}
        <div className="p-6 sm:p-10 lg:p-14 border-t border-hairline bg-linen">
          <TuitionCalculator onToast={onToast} />
        </div>

        {/* ── FAQ Section (Accordion with Bold Typography) ── */}
        <div className="p-6 sm:p-10 lg:p-14 border-t border-hairline bg-travertine/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-md">
                FAQ
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / CLARIFICATIONS &amp; POLICIES
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-espresso">
              Common Questions Before Your First Class
            </h3>
          </div>

          <div className="mt-8 divide-y divide-hairline border-t border-b border-hairline">
            {FAQ.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between gap-4 text-left group bg-transparent border-0 p-0 cursor-pointer"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-bold text-espresso group-hover:text-terra transition-colors">
                      {faq.q}
                    </span>
                    <span className="font-mono text-sm text-espresso font-bold w-8 h-8 flex items-center justify-center border border-hairline rounded-full shrink-0 mt-1 bg-linen group-hover:border-terra group-hover:text-terra transition-colors">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                    <p className="mt-4 text-sm text-espresso/90 leading-relaxed font-sans font-medium max-w-[65ch]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
