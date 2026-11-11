import type { MouseEvent, FC } from 'react'
import type { DrawerContext } from '../types'

interface HeroProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const Hero: FC<HeroProps> = ({ onOpenDrawer }) => {
  const handleScrollToSchedule = (e: MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#schedule')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative border-b border-hairline overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left 7 Columns: Editorial Content */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-hairline bg-linen">
          <div>
            {/* Top Monospace Metadata */}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-umber">
                EST. CHENNAI · RYT-500 LED PRACTICE
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-espresso leading-editorial tracking-tightest">
              Breathe. Balance.{' '}
              <span className="italic font-normal text-terra">Elevate.</span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-umber leading-relaxed max-w-[58ch] font-sans font-normal">
              An intimate Thiruvanmiyur studio led personally by Anupriya. Rooted in classical
              Hatha, suspended Aerial silks, Pranayama, and clinical Yoga Therapy—taught through
              progressive weekly anatomical themes rather than random routines.
            </p>

            {/* Dual Action CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenDrawer({ source: 'trial' })}
                className="btn-terra py-3.5 px-6"
              >
                <span>Book your first class free</span>
                <span>↗</span>
              </button>
              <button
                type="button"
                onClick={handleScrollToSchedule}
                className="btn-outline py-3.5 px-6"
              >
                <span>View weekly timetable</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Bottom Ledger Strip (3 columns separated by 1px borders, pure typography) */}
          <div className="mt-14 pt-8 border-t border-hairline grid grid-cols-3 divide-x divide-hairline">
            <div className="pr-4 sm:pr-6">
              <div className="font-serif text-2xl sm:text-3xl font-light text-espresso leading-none">
                10+ YRS
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-umber mt-2">
                Personal Sadhana &amp; Practice
              </div>
            </div>
            <div className="px-4 sm:px-6">
              <div className="font-serif text-2xl sm:text-3xl font-light text-espresso leading-none">
                6+ YRS
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-umber mt-2">
                Teaching Hatha, Aerial &amp; Therapy
              </div>
            </div>
            <div className="pl-4 sm:pl-6">
              <div className="font-serif text-2xl sm:text-3xl font-light text-espresso leading-none">
                2 HRS
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-umber mt-2">
                Average Slot Confirmation
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Editorial Visual */}
        <div className="lg:col-span-5 bg-travertine relative flex flex-col justify-between">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=85&auto=format&fit=crop"
              alt="Suspended silk and floor alignment at Anohga Yoga Studio, ECR Chennai"
              className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.03]"
              loading="eager"
            />
            {/* Subtle architectural vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Understated bottom caption bar */}
          <div className="bg-linen/95 border-t border-hairline py-3 px-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-umber">
              FIG 01. SUSPENDED SILK &amp; FLOOR ALIGNMENT
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-espresso">
              ECR STUDIO
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
