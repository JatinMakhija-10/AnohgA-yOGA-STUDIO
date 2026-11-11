import { useState, type FC } from 'react'
import { DAYS, SLOTS, SCHEDULE_NOTES, WORKSHOPS } from '../data'
import { waWorkshop } from '../utils/wa'
import type { DrawerContext } from '../types'

interface ScheduleProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
  onToast: (msg: string) => void
}

type FilterType = 'all' | 'hatha' | 'aerial' | 'prenatal' | 'kids' | 'therapy' | 'online'

export const Schedule: FC<ScheduleProps> = ({ onOpenDrawer, onToast }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'ALL SESSIONS', value: 'all' },
    { label: 'HATHA', value: 'hatha' },
    { label: 'AERIAL SILKS', value: 'aerial' },
    { label: 'PRENATAL', value: 'prenatal' },
    { label: 'KIDS (7–14)', value: 'kids' },
    { label: 'YOGA THERAPY', value: 'therapy' },
    { label: 'ONLINE VIRTUAL', value: 'online' },
  ]

  const handleWorkshopEnquiry = (title: string, waKey: string) => {
    const url = waWorkshop('Practitioner', '', waKey)
    window.open(url, '_blank', 'noopener,noreferrer')
    onToast(`Workshop enquiry prepared for ${title}. Redirecting to WhatsApp...`)
  }

  const isCellHighlighted = (cellType: string) => {
    if (!cellType) return false
    if (activeFilter === 'all') return true
    return cellType.toLowerCase().includes(activeFilter)
  }

  return (
    <section id="schedule" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-16 border-b border-hairline">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
              02
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-umber">
              / TIMETABLE &amp; WORKSHOPS
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-espresso leading-tight tracking-tightest">
            Weekly Studio Schedule &amp;{' '}
            <span className="italic font-normal">Upcoming Intensives</span>
          </h2>
          <p className="mt-4 text-sm text-umber leading-relaxed font-sans max-w-[62ch]">
            Tap any active timetable slot below to pre-populate and reserve your class directly.
            All morning batches are in-studio on ECR; weekend sessions are hosted virtually.
          </p>
        </div>

        {/* ── PART 1: "Beyond the Mat" Special Workshop Letterpress Tickets ── */}
        <div className="p-6 sm:p-10 lg:p-16 border-b border-hairline bg-travertine/30">
          <div className="flex items-center justify-between pb-6 border-b border-hairline mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-umber">
              BEYOND THE MAT · SPECIAL WORKSHOPS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-terra">
              LIMITED TO 10 PRACTITIONERS EACH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS.map((workshop) => (
              <div
                key={workshop.index}
                className="bg-linen border border-hairline p-6 sm:p-8 flex flex-col justify-between relative shadow-sm"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-hairline/60 pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-terra font-semibold">
                      WORKSHOP TICKET {workshop.index}
                    </span>
                    <span className="font-serif text-2xl font-light text-espresso">
                      {workshop.fee}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-umber block">
                      {workshop.date} · {workshop.times}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-espresso mt-2">
                      {workshop.title}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-terra block mt-1">
                      {workshop.subtitle}
                    </span>
                    <p className="mt-4 text-xs font-sans text-umber leading-relaxed">
                      {workshop.desc}
                    </p>
                  </div>
                </div>

                <div className="ticket-perf mt-8 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-umber">
                    Includes printed home sequence
                  </span>
                  <button
                    type="button"
                    onClick={() => handleWorkshopEnquiry(workshop.title, workshop.waKey)}
                    className="btn-outline text-[10px] py-2 px-3"
                  >
                    <span>Enquire Slot</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: Timetable Filter Bar ── */}
        <div className="px-6 sm:px-10 lg:px-16 py-6 border-b border-hairline bg-linen flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber">
              FILTER BY PRACTICE:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                type="button"
                onClick={() => setActiveFilter(btn.value)}
                className={`filter-pill ${activeFilter === btn.value ? 'active' : ''}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── PART 3: Architectural Timetable Matrix ── */}
        <div className="overflow-x-auto border-b border-hairline bg-linen">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-hairline bg-travertine/60">
                <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-umber border-r border-hairline w-28 text-center">
                  TIME
                </th>
                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="p-4 font-mono text-[11px] uppercase tracking-wider text-espresso border-r border-hairline last:border-r-0 text-center"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SLOTS.map((slot, sIdx) => (
                <tr key={sIdx} className="border-b border-hairline last:border-b-0">
                  <td className="p-3.5 font-mono text-[11px] uppercase tracking-wider text-umber bg-travertine/20 border-r border-hairline text-center whitespace-nowrap">
                    {slot.time}
                  </td>
                  {DAYS.map((day, dIdx) => {
                    const cell = slot.cells[dIdx]
                    const cellType = slot.type[dIdx]
                    const highlighted = isCellHighlighted(cellType)

                    if (!cell) {
                      return (
                        <td
                          key={dIdx}
                          className="p-3 text-center border-r border-hairline last:border-r-0 text-hairline font-mono text-xs"
                        >
                          —
                        </td>
                      )
                    }

                    return (
                      <td
                        key={dIdx}
                        onClick={() =>
                          onOpenDrawer({
                            day,
                            time: slot.time,
                            cls: cell,
                            source: 'book',
                          })
                        }
                        className={`p-3 text-center border-r border-hairline last:border-r-0 tt-cell-active transition-all ${
                          highlighted
                            ? 'bg-linen text-espresso hover:bg-travertine font-medium'
                            : 'opacity-30 bg-travertine/10 text-umber'
                        }`}
                        title={`Click to reserve ${cell} on ${day} at ${slot.time}`}
                      >
                        <div className="font-serif text-sm leading-tight text-espresso">
                          {cell}
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-umber/80 block mt-1">
                          Click to Reserve ↗
                        </span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── PART 4: 2×2 Typographic Grid of Schedule Notes ── */}
        <div className="p-6 sm:p-10 lg:p-16 bg-travertine/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {SCHEDULE_NOTES.map((item, idx) => (
              <div key={idx} className="border-l-2 border-terra pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-espresso font-semibold block">
                  {item.label}
                </span>
                <p className="mt-1.5 text-xs text-umber leading-relaxed font-sans">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
