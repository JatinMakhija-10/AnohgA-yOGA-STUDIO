import type { FC } from 'react'

export const Testimonials: FC = () => {
  const reviews = [
    {
      name: 'Karthik Narayanan',
      role: 'Principal Software Engineer, OMR Chennai',
      tenure: 'Practicing 9 Months at Anohga',
      discipline: 'Aerial Silks + Hatha Combo',
      quote:
        'Ten years of hunching over dual monitors left me with constant cervical neck spasms. Normal gym stretching didn’t touch it. Suspended silk traction at Anohga literally decompressed my spine in the first two weeks. I can sit pain-free through a 10-hour workday now.',
      outcome: 'Zero cervical spasms · Restored spinal alignment',
    },
    {
      name: 'Dr. Meera Vasudevan',
      role: 'Consultant Dermatologist, Adyar',
      tenure: 'Practicing 14 Months at Anohga',
      discipline: 'Private Yoga Therapy & Spinal Health',
      quote:
        'Anupriya’s anatomical depth is rare. Most yoga classes throw random complex poses at you. Her weekly thematic focus—backbends one week, pelvic detox the next—has completely eliminated my postpartum sacroiliac joint pain. The 8-student cap guarantees you never feel overlooked.',
      outcome: 'Resolved SI joint pain · Postpartum core stability',
    },
    {
      name: 'Sneha & Arjun (Parent & Child)',
      role: 'Design Director, ECR & Son (Age 9)',
      tenure: 'Practicing 6 Months at Anohga',
      discipline: 'Kids Hatha + Aerial Batch',
      quote:
        'My son was hyperactive and struggling with physical balance. The Tuesday/Thursday kids aerial batch transformed his posture and attention span. He loves swinging in the silks, and Anupriya’s patience makes safety absolute.',
      outcome: 'Improved motor balance & calm focus',
    },
    {
      name: 'Aishwarya Ramanathan',
      role: 'Product Lead, Remote Tech Firm',
      tenure: 'Practicing 11 Months at Anohga',
      discipline: 'Weekend Online Hatha + Studio Aerial',
      quote:
        'I started with the ₹700 Aerial trial terrified I would fall or look silly. Within 30 minutes, Anupriya had me doing an inverted butterfly cocoon. It is the single most restorative hour of my entire week. Worth every rupee.',
      outcome: 'Overcame fear of inversions on day 1',
    },
  ]

  return (
    <section className="border-b border-hairline bg-travertine/15 py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-hairline mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
                PRACTITIONER EXPERIENCES
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / VERIFIED TRANSFORMATIONS
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
              Real Outcomes From the{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Mat and Silks
              </span>
            </h3>
            <p className="mt-3 text-base text-espresso/90 font-sans font-medium max-w-[56ch]">
              How practitioners along East Coast Road and OMR overcome physical stiffness,
              rediscover spinal freedom, and build sustainable sadhana.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-espresso font-bold bg-linen px-4 py-2 border border-hairline self-start md:self-auto rounded-full shadow-xs">
            <span className="w-2 h-2 bg-moss rounded-full"></span>
            <span>100% PERSONALIZED FEEDBACK</span>
          </div>
        </div>

        {/* 4 Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-linen border border-hairline/80 p-6 sm:p-8 flex flex-col justify-between hover:border-espresso transition-all shadow-sm rounded-2xl overflow-hidden"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-start justify-between border-b border-hairline/60 pb-4 mb-4">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-espresso">
                      {rev.name}
                    </h4>
                    <span className="font-mono text-[11px] text-umber font-semibold block mt-0.5">
                      {rev.role}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-terra font-bold px-3 py-0.5 bg-terra/10 border border-terra/20 rounded-full">
                    {rev.discipline}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm font-sans text-espresso font-medium leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Outcome Strip */}
              <div className="mt-6 pt-4 border-t border-hairline bg-travertine/20 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 px-6 sm:px-8 flex items-center justify-between font-mono text-[11px]">
                <span className="text-moss font-bold">
                  ✓ {rev.outcome}
                </span>
                <span className="text-umber font-semibold">
                  {rev.tenure}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
