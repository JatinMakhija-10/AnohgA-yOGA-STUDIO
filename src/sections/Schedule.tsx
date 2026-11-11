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
  const [selectedDayTab, setSelectedDayTab] = useState<string>('MON')
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'ALL PRACTICES', value: 'all' },
    { label: 'HATHA FLOOR', value: 'hatha' },
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

  // Find classes for selected day tab in card view
  const dayIndex = DAYS.indexOf(selectedDayTab)
  const dayClasses = SLOTS.map((slot) => {
    const cell = slot.cells[dayIndex]
    const type = slot.type[dayIndex]
    return {
      time: slot.time,
      cls: cell,
      type: type,
      highlighted: isCellHighlighted(type),
    }
  }).filter((item) => item.cls !== null)

  return (
    <section id="schedule" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-2 py-0.5 bg-terra/10 border border-terra/30">
                02
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / TIMETABLE &amp; WORKSHOPS
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-espresso leading-tight tracking-tight">
              Weekly Timetable &amp;{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Special Workshops
              </span>
            </h2>
            <p className="mt-4 text-base text-espresso/90 font-sans font-medium max-w-[62ch]">
              Select any session below to instantly book your spot. Morning and evening batches are
              conducted at the ECR studio; weekend batches stream online.
            </p>
          </div>

          {/* Quick View Mode Switcher: Cards vs Table (Organic Pill Contours) */}
          <div className="flex items-center gap-1.5 bg-travertine/80 p-1 border border-hairline self-start md:self-auto font-mono text-xs rounded-full shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 font-bold transition-all cursor-pointer rounded-full ${
                viewMode === 'cards'
                  ? 'bg-espresso text-linen shadow-sm'
                  : 'text-umber hover:text-espresso'
              }`}
            >
              DAY CARDS VIEW
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 font-bold transition-all cursor-pointer rounded-full ${
                viewMode === 'table'
                  ? 'bg-espresso text-linen shadow-sm'
                  : 'text-umber hover:text-espresso'
              }`}
            >
              FULL GRID TABLE
            </button>
          </div>
        </div>

        {/* ── PART 1: Visual "Beyond the Mat" Workshop Tickets with Photography ── */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-hairline bg-travertine/30">
          <div className="flex items-center justify-between pb-4 border-b border-hairline mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-terra rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-bold">
                BEYOND THE MAT · UPCOMING IMMERSIONS
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
              STRICTLY 10 SEATS EACH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS.map((workshop) => (
              <div
                key={workshop.index}
                className="bg-linen border border-hairline/80 overflow-hidden flex flex-col justify-between group hover:border-espresso transition-all shadow-md rounded-2xl"
              >
                <div>
                  {/* Photo Header with Visual Badges */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-travertine border-b border-hairline rounded-t-2xl">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 bg-linen/95 backdrop-blur-xs px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest text-terra font-bold border border-hairline rounded-full shadow-xs">
                      WORKSHOP {workshop.index}
                    </div>

                    <div className="absolute top-3.5 right-3.5 bg-terra text-linen px-4 py-1 font-mono text-xs font-bold shadow-md rounded-full">
                      {workshop.fee}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-linen/90 font-bold block">
                        {workshop.date}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-linen mt-0.5 leading-snug drop-shadow-sm">
                        {workshop.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-travertine font-semibold block mt-0.5">
                        {workshop.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-umber font-semibold border-b border-hairline/60 pb-3 mb-3">
                      <span>⏰ {workshop.times}</span>
                      <span className="text-terra font-bold">· {workshop.seatsLeft}</span>
                    </div>

                    <p className="text-sm font-sans text-espresso font-medium leading-relaxed">
                      {workshop.desc}
                    </p>
                  </div>
                </div>

                {/* Ticket Perforation Bottom Bar */}
                <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-dashed border-hairline pt-4 bg-travertine/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-espresso font-semibold">
                    ✓ Includes printed anatomical sequences
                  </span>
                  <button
                    type="button"
                    onClick={() => handleWorkshopEnquiry(workshop.title, workshop.waKey)}
                    className="btn-terra text-[10px] py-2 px-4 font-bold whitespace-nowrap"
                  >
                    <span>Reserve Workshop Seat</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: Timetable Filter Bar ── */}
        <div className="px-6 sm:px-10 lg:px-14 py-5 border-b border-hairline bg-linen flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold">
              FILTER BY DISCIPLINE:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                type="button"
                onClick={() => setActiveFilter(btn.value)}
                className={`filter-pill font-bold ${activeFilter === btn.value ? 'active' : ''}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── PART 3: View Mode Content ── */}
        {viewMode === 'cards' ? (
          /* ── Day Cards View (Visual, playful, interactive) ── */
          <div className="p-6 sm:p-10 lg:p-14 bg-linen">
            {/* Day Selector Tabs (Organic Pill Contours) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-hairline mb-8">
              {DAYS.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDayTab(day)}
                  className={`font-mono text-xs font-bold px-5 py-2.5 border transition-all cursor-pointer whitespace-nowrap rounded-full ${
                    selectedDayTab === day
                      ? 'bg-espresso text-linen border-espresso shadow-sm'
                      : 'bg-travertine/50 text-espresso border-hairline hover:bg-travertine'
                  }`}
                >
                  {day} SCHEDULE
                </button>
              ))}
            </div>

            {/* Visual Class Cards for the selected day */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayClasses.map((item, idx) => (
                <div
                  key={idx}
                  className={`border p-6 flex flex-col justify-between transition-all rounded-2xl ${
                    item.highlighted
                      ? 'bg-travertine/25 border-hairline hover:border-espresso shadow-xs'
                      : 'opacity-40 bg-travertine/5 border-hairline/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-espresso font-bold bg-linen px-3 py-1 border border-hairline rounded-full">
                        ⏰ {item.time}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-terra font-bold">
                        {selectedDayTab}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-espresso">
                      {item.cls}
                    </h4>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold">
                        In-Studio / ECR Thiruvanmiyur
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline/60 flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-umber font-semibold">
                      Max 8 slots
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenDrawer({
                          day: selectedDayTab,
                          time: item.time,
                          cls: item.cls || '',
                          source: 'book',
                        })
                      }
                      className="btn-terra text-[10px] py-2 px-3 font-bold"
                    >
                      <span>Reserve Slot</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ── Full Grid Timetable View ── */
          <div className="overflow-x-auto border-b border-hairline bg-linen">
            <table className="w-full min-w-[780px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-hairline bg-travertine/80">
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-espresso border-r border-hairline w-32 text-center font-bold">
                    TIME SLOT
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="p-4 font-mono text-xs uppercase tracking-wider text-espresso border-r border-hairline last:border-r-0 text-center font-bold"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SLOTS.map((slot, sIdx) => (
                  <tr key={sIdx} className="border-b border-hairline last:border-b-0">
                    <td className="p-3.5 font-mono text-xs uppercase tracking-wider text-espresso bg-travertine/40 border-r border-hairline text-center whitespace-nowrap font-bold">
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
                            className="p-3 text-center border-r border-hairline last:border-r-0 text-hairline font-mono text-sm"
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
                              ? 'bg-linen text-espresso hover:bg-travertine font-semibold'
                              : 'opacity-30 bg-travertine/10 text-umber'
                          }`}
                          title={`Click to reserve ${cell} on ${day} at ${slot.time}`}
                        >
                          <div className="font-serif text-base font-bold leading-tight text-espresso">
                            {cell}
                          </div>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-terra font-bold block mt-1">
                            Book Slot ↗
                          </span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── PART 4: 2×2 Typographic Grid of Schedule Notes ── */}
        <div className="p-6 sm:p-10 lg:p-14 bg-travertine/30 border-t border-hairline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SCHEDULE_NOTES.map((item, idx) => (
              <div key={idx} className="border-l-4 border-terra pl-5 bg-linen p-5 border border-hairline rounded-2xl shadow-xs">
                <span className="font-mono text-xs uppercase tracking-widest text-espresso font-bold block">
                  {item.label}
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-espresso/90 leading-relaxed font-sans font-medium">
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
