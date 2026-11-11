import { useState, type FC } from 'react'
import { PRICING, FAQ } from '../data'

interface PricingProps {
  onSelectPlan: (planString: string) => void
}

export const Pricing: FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Group plans
  const groups = ['Hatha & Kids', 'Aerial Yoga', 'Combo Packs', 'Specialised']

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
        {/* Section Header & Billing Toggle */}
        <div className="p-6 sm:p-10 lg:p-16 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
                03
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-umber">
                / PRICING LEDGER
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-espresso leading-tight tracking-tightest">
              Simple, Transparent{' '}
              <span className="italic font-normal">Studio Tuition</span>
            </h2>
            <p className="mt-3 text-sm text-umber leading-relaxed font-sans max-w-[54ch]">
              No sign-up dues or registration fees. Choose month-to-month flexibility or save with
              our 3-month quarterly commitment.
            </p>
          </div>

          {/* Billing Cadence Toggle */}
          <div className="flex items-center gap-2 border border-hairline p-1 bg-travertine/40 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            >
              MONTHLY CADENCE
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`toggle-btn ${billingCycle === 'quarterly' ? 'active' : ''}`}
            >
              QUARTERLY (3 MO)
            </button>
          </div>
        </div>

        {/* ── 4 Pricing Groups Ledger ── */}
        <div className="divide-y divide-hairline">
          {groups.map((groupName) => {
            const groupPlans = PRICING.filter((p) => p.group === groupName)
            return (
              <div key={groupName} className="p-6 sm:p-10 lg:p-16">
                <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                    {groupName}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
                    {billingCycle === 'monthly' ? 'MONTHLY BILLING' : '3-MONTH UPFRONT (SAVE UP TO ₹1,900)'}
                  </span>
                </div>

                <div className="divide-y divide-hairline border border-hairline bg-travertine/10">
                  {groupPlans.map((plan) => {
                    const price = billingCycle === 'monthly' ? plan.monthly : plan.quarterly
                    const unit = billingCycle === 'monthly' ? '/ month' : ' / 3 months'

                    return (
                      <div
                        key={plan.name}
                        className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-linen hover:bg-travertine/30 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="font-serif text-lg sm:text-xl text-espresso font-light">
                              {plan.name}
                            </span>
                            {plan.tag && (
                              <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-moss/10 text-moss border border-moss/20">
                                {plan.tag}
                              </span>
                            )}
                          </div>
                          {plan.note && (
                            <p className="mt-1 font-mono text-[11px] text-umber">
                              {plan.note}
                            </p>
                          )}
                          {billingCycle === 'quarterly' && plan.quarterlySave > 0 && (
                            <span className="font-mono text-[10px] text-moss block mt-1">
                              ✓ Includes ₹{plan.quarterlySave} quarterly savings
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-hairline/60">
                          <div className="text-right">
                            <span className="font-serif text-2xl sm:text-3xl font-light text-espresso leading-none">
                              ₹{price.toLocaleString('en-IN')}
                            </span>
                            <span className="font-mono text-[10px] text-umber block mt-0.5">
                              {unit}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handlePlanReserve(plan.name, plan.monthly)}
                            className="btn-outline text-[10px] py-2 px-3 whitespace-nowrap"
                          >
                            <span>Reserve Plan</span>
                            <span>→</span>
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

        {/* ── FAQ Section (Accordion) ── */}
        <div className="p-6 sm:p-10 lg:p-16 border-t border-hairline bg-travertine/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
                FAQ
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-umber">
                / CLARIFICATIONS &amp; POLICIES
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl font-light text-espresso">
              Frequently Discussed Questions
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
                    <span className="font-serif text-xl sm:text-2xl font-light text-espresso group-hover:text-terra transition-colors">
                      {faq.q}
                    </span>
                    <span className="font-mono text-sm text-umber p-1 border border-hairline shrink-0 mt-1">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                    <p className="mt-4 text-xs sm:text-sm text-umber leading-relaxed font-sans max-w-[65ch]">
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
