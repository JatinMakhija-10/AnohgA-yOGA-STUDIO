import { useState, type FC } from 'react'
import { GALLERY } from '../data'

export const Gallery: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'choreo' | 'floor' | 'aerial' | 'kids'>('all')
  const [activeModalImage, setActiveModalImage] = useState<typeof GALLERY[0] | null>(null)

  const filterTabs = [
    { label: 'ALL MEDIA', val: 'all', count: GALLERY.length },
    { label: 'CHOREO REELS', val: 'choreo', count: GALLERY.filter(i => i.category === 'choreo').length },
    { label: 'FLOOR YOGA', val: 'floor', count: GALLERY.filter(i => i.category === 'floor').length },
    { label: 'AERIAL YOGA', val: 'aerial', count: GALLERY.filter(i => i.category === 'aerial').length },
    { label: 'KIDS YOGA', val: 'kids', count: GALLERY.filter(i => i.category === 'kids').length },
  ] as const

  const filteredItems = GALLERY.filter((item) => {
    if (selectedFilter === 'all') return true
    return item.category === selectedFilter
  })

  return (
    <section id="gallery" className="border-b border-hairline bg-linen scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="p-6 sm:p-10 lg:p-14 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
                04
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-espresso leading-tight tracking-tight">
              Moments of Stillness &amp;{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Silk Choreography
              </span>
            </h2>
            <p className="mt-3 text-base text-espresso/90 font-sans font-medium max-w-[54ch]">
              Floor alignment progressions, suspended aerial hammock flows, and student milestones
              captured inside our Thiruvanmiyur studio.
            </p>
          </div>

          {/* Filter Pills with Counts */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.val}
                type="button"
                onClick={() => setSelectedFilter(tab.val)}
                className={`filter-pill font-bold flex items-center gap-1.5 cursor-pointer ${
                  selectedFilter === tab.val ? 'active' : ''
                }`}
              >
                <span>{tab.label}</span>
                <span className="opacity-70 text-[10px]">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Photo Grid with Click-to-Enlarge */}
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <figure
                key={item.idx}
                onClick={() => setActiveModalImage(item)}
                className="group border border-hairline/80 bg-linen overflow-hidden flex flex-col justify-between hover:border-espresso transition-all shadow-sm hover:shadow-md cursor-pointer rounded-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-travertine rounded-t-2xl">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {item.category === 'choreo' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-linen bg-bark/60 backdrop-blur-xs flex items-center justify-center group-hover:scale-110 transition-transform rounded-full shadow-md">
                        {/* Architectural play trigger */}
                        <svg className="w-5 h-5 text-linen translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-linen/95 backdrop-blur-xs px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-espresso font-bold border border-hairline rounded-full shadow-xs">
                    {item.category}
                  </div>

                  {/* Caption overlaid on photo */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-terra font-bold block">
                      ARCHIVE {item.idx}
                    </span>
                    <span className="font-serif text-xl font-bold text-linen block drop-shadow-sm">
                      {item.label}
                    </span>
                  </div>
                </div>

                <figcaption className="p-3 bg-travertine/40 border-t border-hairline flex items-center justify-between text-espresso font-mono text-[10px]">
                  <span className="font-bold">ANOHGA STUDIO CHENNAI</span>
                  <span className="text-terra font-bold">CLICK TO ENLARGE ↗</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Choreo Reel & Instagram Visual Callout Strip */}
        <div className="border-t border-hairline p-6 sm:p-10 bg-travertine/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 border-2 border-terra bg-terra/10 flex items-center justify-center shrink-0 rounded-full shadow-xs">
              <span className="font-serif text-lg font-bold text-terra translate-x-0.5">▶</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-espresso block">
                Weekly Posture Breakdowns &amp; Silk Sequences
              </span>
              <p className="text-sm text-espresso/80 font-sans font-medium mt-0.5">
                Watch full silk choreography tutorials and posture alignment drills on our studio reel archive.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918122751154?text=Hi%20Anupriya!%20Could%20you%20share%20your%20Instagram%20handle%20and%20choreo%20reels%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terra py-3 px-5 font-bold whitespace-nowrap"
          >
            <span>Request Video Archive on WhatsApp</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-bark/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="bg-linen border border-hairline max-w-2xl w-full p-4 relative rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-hairline mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                ARCHIVE {activeModalImage.idx} · {activeModalImage.label}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="p-1 font-mono text-sm text-espresso hover:text-terra font-bold cursor-pointer"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="aspect-[4/3] overflow-hidden bg-travertine border border-hairline rounded-xl">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.label}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-mono text-espresso font-semibold">
              <span>Category: {activeModalImage.category.toUpperCase()}</span>
              <span className="text-terra font-bold">ANOHGA YOGA STUDIO · ECR</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
