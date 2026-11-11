import { useState, type FC } from 'react'
import { GALLERY } from '../data'

export const Gallery: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'choreo' | 'floor' | 'aerial' | 'kids'>('all')

  const filterTabs = [
    { label: 'ALL MEDIA', val: 'all' },
    { label: 'CHOREO REELS', val: 'choreo' },
    { label: 'FLOOR YOGA', val: 'floor' },
    { label: 'AERIAL YOGA', val: 'aerial' },
    { label: 'KIDS YOGA', val: 'kids' },
  ] as const

  const filteredItems = GALLERY.filter((item) => {
    if (selectedFilter === 'all') return true
    return item.category === selectedFilter
  })

  return (
    <section id="gallery" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-16 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-semibold">
                04
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-umber">
                / VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-espresso leading-tight tracking-tightest">
              Glimpses of Practice &amp;{' '}
              <span className="italic font-normal">Choreography</span>
            </h2>
            <p className="mt-3 text-sm text-umber leading-relaxed font-sans max-w-[50ch]">
              Moments from floor alignment workshops, suspended hammock flows, and student
              progressions on East Coast Road.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.val}
                type="button"
                onClick={() => setSelectedFilter(tab.val)}
                className={`filter-pill ${selectedFilter === tab.val ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="p-6 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <figure
                key={item.idx}
                className="group border border-hairline bg-travertine/20 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-travertine">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[10%]"
                    loading="lazy"
                  />
                  {item.category === 'choreo' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-bark/20 group-hover:bg-bark/40 transition-colors">
                      <div className="w-10 h-10 border border-linen bg-linen/20 backdrop-blur-xs flex items-center justify-center">
                        {/* Minimalist architectural play trigger (inline triangle) */}
                        <svg className="w-4 h-4 text-linen translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <figcaption className="p-3.5 bg-linen border-t border-hairline flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-espresso font-medium">
                    ARCHIVE {item.idx} — {item.label}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-umber">
                    [{item.category}]
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Choreo Highlight Callout Strip */}
        <div className="border-t border-hairline p-6 sm:p-10 bg-travertine/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-terra"></span>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-espresso font-semibold block">
                Instagram Video Series &amp; Choreography Reels
              </span>
              <p className="text-xs text-umber font-sans mt-0.5">
                Watch full silk choreography sequences and posture breakdowns on our studio feed.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918122751154?text=Hi%20Anupriya!%20Could%20you%20share%20your%20Instagram%20handle%20and%20choreo%20reels%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-[10px] py-2 px-4 whitespace-nowrap"
          >
            <span>Request Reel Archive</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
