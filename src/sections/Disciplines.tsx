import { useState, type FC } from 'react'
import { DISCIPLINES } from '../data'
import type { DrawerContext } from '../types'

interface DisciplinesProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const Disciplines: FC<DisciplinesProps> = ({ onOpenDrawer }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="disciplines" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left 4-Column Sticky Header */}
        <div className="lg:col-span-4 p-6 sm:p-10 lg:p-16 lg:sticky lg:top-20 self-start border-b lg:border-b-0 lg:border-r border-hairline">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
              01
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-umber">
              / METHODOLOGY
            </span>
          </div>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-espresso leading-tight tracking-tightest">
            Structured Weekly Themes.{' '}
            <span className="italic font-normal">Never Random Postures.</span>
          </h2>

          <p className="mt-6 text-sm text-umber leading-relaxed font-sans max-w-[42ch]">
            Each week centres on a deliberate physiological or energetic focus—backbending for spinal
            decompression, hip opening, twisting for visceral detox, or inversions for the endocrine
            system. Your practice builds progressively over months.
          </p>

          <div className="mt-10 pt-6 border-t border-hairline">
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber block">
              Teaching Integrity
            </span>
            <p className="mt-2 text-xs text-espresso font-sans">
              Batches are strictly capped at 8–10 practitioners to guarantee hands-on anatomical
              attention and safe aerial rigging.
            </p>
          </div>
        </div>

        {/* Right 8-Column Stacked Architectural List */}
        <div className="lg:col-span-8 divide-y divide-hairline">
          {DISCIPLINES.map((discipline, index) => {
            const isExpanded = expandedIndex === index
            return (
              <article
                key={discipline.name}
                className={`p-6 sm:p-10 transition-colors ${
                  isExpanded ? 'bg-travertine/40' : 'bg-transparent hover:bg-travertine/20'
                }`}
              >
                <div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-serif text-xl sm:text-2xl text-terra font-normal w-8 shrink-0">
                      {discipline.roman}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-espresso group-hover:text-terra transition-colors leading-snug">
                        {discipline.name}
                      </h3>
                      {/* Monospace tags */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {discipline.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border border-hairline bg-linen text-umber"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean +/- toggle trigger */}
                  <div className="text-espresso p-1.5 border border-hairline bg-linen shrink-0 mt-1">
                    <span className="font-mono text-sm leading-none block w-3 text-center">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pl-12 sm:pl-14 pt-4 border-t border-hairline/60">
                    <p className="text-sm text-umber leading-relaxed font-sans max-w-[62ch]">
                      {discipline.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          onOpenDrawer({
                            cls: discipline.name,
                            source: 'book',
                          })
                        }
                        className="btn-terra text-[10px] py-2 px-4"
                      >
                        <span>Reserve this discipline</span>
                        <span>↗</span>
                      </button>
                      <a
                        href="#schedule"
                        className="font-mono text-[10px] uppercase tracking-wider text-umber hover:text-espresso underline"
                      >
                        Check slot times in timetable
                      </a>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
