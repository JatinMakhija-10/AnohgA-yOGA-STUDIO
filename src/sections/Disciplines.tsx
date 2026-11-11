import { useState, type FC } from 'react'
import { DISCIPLINES } from '../data'
import type { DrawerContext } from '../types'

interface DisciplinesProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const Disciplines: FC<DisciplinesProps> = ({ onOpenDrawer }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | null>(null)

  return (
    <section id="disciplines" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header with Bold Contrast & Visual Stats */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-hairline flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
                01
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / DISCIPLINES &amp; METHODOLOGY
              </span>
            </div>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-espresso leading-tight tracking-tight">
              Six Pathways to{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Alignment &amp; Flight
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-espresso/90 leading-relaxed font-sans font-medium max-w-[58ch]">
              Every session centres on deliberate anatomical themes—backbending for spinal
              decompression, hip opening, visceral twist detox, or suspended silk inversions.
            </p>
          </div>

          {/* Quick Studio Visual Badges (Organic Pills) */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 font-mono text-xs text-espresso font-semibold">
            <span className="px-3.5 py-1.5 bg-travertine border border-hairline rounded-full">
              ✓ CAPPED AT 8 PRACTITIONERS
            </span>
            <span className="px-3.5 py-1.5 bg-travertine border border-hairline rounded-full">
              ✓ 100% PERSONAL TEACHING
            </span>
            <span className="px-3.5 py-1.5 bg-travertine border border-hairline rounded-full">
              ✓ IN-STUDIO + VIRTUAL STREAMS
            </span>
          </div>
        </div>

        {/* 6 Rich Visual Image Cards Grid - Generous Rounded Curves */}
        <div className="p-6 sm:p-10 lg:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 bg-travertine/10 border-b border-hairline">
          {DISCIPLINES.map((discipline, index) => {
            const isModalOpen = selectedDiscipline === index

            return (
              <div
                key={discipline.name}
                className="group flex flex-col justify-between bg-linen hover:bg-travertine/30 transition-all border border-hairline/80 hover:border-espresso rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Photo Container with Visual Watermark & Circular Roman Stamp */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-travertine border-b border-hairline rounded-t-2xl">
                    <img
                      src={discipline.image}
                      alt={discipline.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/20 to-transparent pointer-events-none" />

                    {/* Top Circular Roman Stamp */}
                    <div className="absolute top-3.5 left-3.5 bg-linen/95 w-9 h-9 flex items-center justify-center font-serif text-base font-bold text-terra border border-hairline rounded-full shadow-xs">
                      {discipline.roman}
                    </div>

                    {/* Top Discipline Category Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-bark/85 text-linen px-3 py-1 font-mono text-[9px] uppercase tracking-wider font-semibold border border-linen/20 rounded-full shadow-xs">
                      {discipline.badge}
                    </div>

                    {/* Title over photo */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5">
                      <h3 className="font-serif text-2xl font-semibold text-linen leading-snug drop-shadow-sm">
                        {discipline.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content & Tags */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-espresso/90 font-sans font-medium leading-relaxed line-clamp-3">
                      {discipline.desc}
                    </p>

                    {/* Visual Monospace Tags - Pill Shaped */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {discipline.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 bg-travertine text-espresso border border-hairline font-bold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="p-6 pt-0 mt-2 flex items-center justify-between gap-3 border-t border-hairline/60">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenDrawer({
                        cls: discipline.name,
                        source: 'book',
                      })
                    }
                    className="btn-terra text-[10px] py-2 px-3.5 font-bold w-full justify-center"
                  >
                    <span>Reserve Practice</span>
                    <span>↗</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDiscipline(isModalOpen ? null : index)}
                    className="btn-outline text-[10px] py-2 px-3 font-semibold whitespace-nowrap"
                    title="View details"
                  >
                    <span>{isModalOpen ? 'Hide' : 'Info'}</span>
                  </button>
                </div>

                {/* Inline Expandable Details Panel if user clicks Info */}
                {isModalOpen && (
                  <div className="p-6 pt-3 bg-travertine/50 border-t border-hairline text-xs font-sans text-espresso font-medium leading-relaxed rounded-b-2xl">
                    <p>{discipline.desc}</p>
                    <div className="mt-3 font-mono text-[10px] text-terra font-bold">
                      ✓ Conducted at ECR Studio · Equipment &amp; Silks Sanitized Before Every Class
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Visual Studio Equipment & Atmosphere Banner Strip */}
        <div className="p-6 sm:p-10 bg-travertine/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-hairline">
          <div className="px-2">
            <span className="font-serif text-2xl font-bold text-espresso block">100% Cotton</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1 block">
              Tested Aerial Silks
            </span>
          </div>
          <div className="px-2">
            <span className="font-serif text-2xl font-bold text-espresso block">Natural Air</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1 block">
              Cross-Ventilated ECR Breeze
            </span>
          </div>
          <div className="px-2">
            <span className="font-serif text-2xl font-bold text-espresso block">Non-Slip</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1 block">
              Cork &amp; Rubber Mats
            </span>
          </div>
          <div className="px-2">
            <span className="font-serif text-2xl font-bold text-espresso block">2-Hr Slot</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold mt-1 block">
              WhatsApp Confirmation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
