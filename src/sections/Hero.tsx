import { useState, type MouseEvent, type FC } from 'react'
import type { DrawerContext } from '../types'

interface HeroProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const Hero: FC<HeroProps> = ({ onOpenDrawer }) => {
  const [activePhoto, setActivePhoto] = useState<number>(0)

  const heroPhotos = [
    {
      src: '/images/hero_aerial.jpg',
      title: 'AERIAL SILKS SUSPENSION',
      caption: 'FIG 01. ZERO-COMPRESSION SPINAL TRACTION — ECR STUDIO',
      badge: 'SILK HAMMOCK',
    },
    {
      src: '/images/hatha_floor.jpg',
      title: 'ANATOMICAL FLOOR HATHA',
      caption: 'FIG 02. ASANA ALIGNMENT & DEEP PRANAYAMA — THIRUVANMIYUR',
      badge: 'CLASSICAL FLOOR',
    },
    {
      src: '/images/kids_aerial.jpg',
      title: 'KIDS SILK EXPLORATION',
      caption: 'FIG 03. PLAYFUL BALANCE FOR AGES 7–14 — TUE & THU 5 PM',
      badge: 'KIDS BATCH',
    },
  ]

  const handleScrollToSchedule = (e: MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#schedule')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative border-b border-hairline overflow-hidden bg-linen">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left 7 Columns: Punchy Editorial Typography + Visual Metrics */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-hairline bg-linen">
          <div>
            {/* Top Monospace Metadata & Visual Chips (Pill Contours) */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3.5 py-1 bg-terra/10 border border-terra/30 rounded-full">
                ● RYT-500 LED
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold px-3.5 py-1 bg-travertine border border-hairline rounded-full">
                THIRUVANMIYUR, ECR
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-moss font-semibold px-3.5 py-1 bg-moss/10 border border-moss/30 rounded-full hidden sm:inline-block">
                MAX 8 MATS / BATCH
              </span>
            </div>

            {/* Display Headline - Punchier Weight & Visual Balance */}
            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal sm:font-medium text-espresso leading-[1.05] tracking-tight">
              Breathe. Balance.{' '}
              <span className="italic font-semibold text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Elevate.
              </span>
            </h1>

            {/* Editorial Lead Paragraph - Shorter, crisper, higher contrast */}
            <p className="mt-6 text-base sm:text-lg text-espresso/90 leading-relaxed font-sans font-medium max-w-[56ch]">
              An intimate East Coast Road sanctuary led personally by founder Anupriya. Where
              classical floor Hatha meets gravity-defying Aerial silks and clinical Yoga Therapy—structured
              through weekly anatomical themes, never random routines.
            </p>

            {/* Dual Action CTA Buttons + Quick Visual Trigger */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenDrawer({ source: 'trial' })}
                className="btn-terra py-3.5 px-6 font-bold shadow-sm"
              >
                <span>Book your first class free</span>
                <span className="text-sm">↗</span>
              </button>
              <button
                type="button"
                onClick={handleScrollToSchedule}
                className="btn-outline py-3.5 px-6 font-bold"
              >
                <span>Explore timetable</span>
                <span>↓</span>
              </button>
            </div>

            {/* Playful Mini Visual Thumbnail Switcher */}
            <div className="mt-8 pt-6 border-t border-hairline/80">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold">
                  TAP TO PREVIEW STUDIO DISCIPLINES:
                </span>
                <span className="font-mono text-[10px] text-terra font-bold">
                  {activePhoto + 1} / {heroPhotos.length}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {heroPhotos.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    className={`relative overflow-hidden border p-1 text-left transition-all cursor-pointer rounded-xl ${
                      activePhoto === index
                        ? 'border-terra bg-travertine/60 ring-2 ring-terra/50 shadow-xs'
                        : 'border-hairline bg-linen hover:border-espresso'
                    }`}
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-travertine rounded-lg">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover object-center filter grayscale-[15%]"
                      />
                    </div>
                    <div className="mt-1.5 px-1 pb-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-espresso font-bold block truncate">
                        {item.badge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Ledger Strip - Softened 2xl Rounded Container */}
          <div className="mt-10 pt-6 border-t border-hairline grid grid-cols-3 divide-x divide-hairline bg-travertine/40 p-5 border border-hairline rounded-2xl shadow-xs">
            <div className="pr-3 sm:pr-4">
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-espresso leading-none">
                10+ <span className="text-terra text-xl">yrs</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1.5">
                Personal Sadhana
              </div>
            </div>
            <div className="px-3 sm:px-4">
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-espresso leading-none">
                6+ <span className="text-terra text-xl">yrs</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1.5">
                Aerial &amp; Therapy
              </div>
            </div>
            <div className="pl-3 sm:pl-4">
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-espresso leading-none">
                8 <span className="text-terra text-xl">mats</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1.5">
                Max Batch Intimacy
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Large Interactive Visual Hero Image */}
        <div className="lg:col-span-5 bg-travertine relative flex flex-col justify-between p-4 sm:p-6 lg:p-8">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full w-full overflow-hidden group rounded-2xl border border-hairline shadow-md">
            <img
              src={heroPhotos[activePhoto].src}
              alt={heroPhotos[activePhoto].title}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              loading="eager"
            />
            {/* Visual studio badge watermark */}
            <div className="absolute top-4 right-4 bg-linen/95 backdrop-blur-xs border border-hairline px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-espresso font-bold shadow-sm rounded-full">
              {heroPhotos[activePhoto].badge}
            </div>

            {/* Playful Next Slide Floating Trigger */}
            <button
              type="button"
              onClick={() => setActivePhoto((prev) => (prev + 1) % heroPhotos.length)}
              className="absolute bottom-6 right-4 bg-bark/85 text-linen hover:bg-terra transition-colors px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 border border-linen/30 cursor-pointer rounded-full shadow-md"
            >
              <span>Next Frame</span>
              <span>→</span>
            </button>
          </div>

          {/* Bottom architectural caption bar */}
          <div className="bg-linen border border-hairline py-3 px-5 flex items-center justify-between rounded-xl mt-3 shadow-xs">
            <span className="font-mono text-[11px] uppercase tracking-wider text-espresso font-semibold">
              {heroPhotos[activePhoto].caption}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-terra font-bold">
              ECR STUDIO
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
