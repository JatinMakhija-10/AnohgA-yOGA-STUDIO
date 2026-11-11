import { useState, type FC } from 'react'
import { waLink } from '../utils/wa'
import type { DrawerContext } from '../types'

interface ClassMatcherProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
  onToast: (msg: string) => void
}

export const ClassMatcher: FC<ClassMatcherProps> = ({ onOpenDrawer, onToast }) => {
  const [step, setStep] = useState<number>(1)
  const [goal, setGoal] = useState<string>('')
  const [experience, setExperience] = useState<string>('')
  const [timing, setTiming] = useState<string>('')

  const handleSelectGoal = (val: string) => {
    setGoal(val)
    setStep(2)
  }

  const handleSelectExperience = (val: string) => {
    setExperience(val)
    setStep(3)
  }

  const handleSelectTiming = (val: string) => {
    setTiming(val)
    setStep(4)
  }

  const resetQuiz = () => {
    setStep(1)
    setGoal('')
    setExperience('')
    setTiming('')
  }

  // Derive personalized recommendation
  const getRecommendation = () => {
    if (goal.includes('Spine') || goal.includes('Neck')) {
      return {
        title: 'Private Yoga Therapy & Spinal Hatha',
        subtitle: 'CLINICAL POSTURE CORRECTION',
        image: '/images/yoga_therapy.jpg',
        why: 'Targets chronic spinal compression and workstation neck fatigue with hands-on adjustments and props.',
        bestFor: 'Weekdays 9:30 AM or 07:30 AM Hatha batches',
        tuition: 'First Hatha Class Free · Therapy ₹4,800/mo',
        classKey: 'Private Yoga Therapy',
      }
    }
    if (goal.includes('Aerial') || goal.includes('Core')) {
      return {
        title: 'Aerial Yoga Silks & Combo Pack',
        subtitle: 'GRAVITY-DEFYING DECOMPRESSION',
        image: '/images/hero_aerial.jpg',
        why: 'Zero-compression spinal traction combined with core balance. Silk hammocks support your full body weight.',
        bestFor: 'Tue & Thu 06:00 AM / 07:30 AM / 06:00 PM',
        tuition: 'Drop-In Trial ₹700 (Refunded on Monthly)',
        classKey: 'Aerial Yoga (Silk Hammock)',
      }
    }
    if (goal.includes('Children')) {
      return {
        title: 'Kids Hatha + Aerial (Ages 7–14)',
        subtitle: 'PLAYFUL BALANCE & AGILITY',
        image: '/images/kids_aerial.jpg',
        why: 'Builds foundational posture balance and body awareness through joyful silk suspension and floor mudras.',
        bestFor: 'Tuesdays & Thursdays at 5:00 PM',
        tuition: '8 Classes/mo · ₹2,000/mo',
        classKey: 'Kids Hatha + Aerial',
      }
    }
    return {
      title: 'Classical Hatha Yoga & Mudras',
      subtitle: 'PROGRESSIVE WEEKLY THEMES',
      image: '/images/hatha_floor.jpg',
      why: 'Grounding floor practice focusing on pranayama, mudras, and intentional anatomical progression.',
      bestFor: 'Mon–Fri 06:00 AM, 07:30 AM or 10:30 AM',
      tuition: '100% Free First Class · ₹1,800/mo (3 days/wk)',
      classKey: 'Hatha Yoga & Mudras',
    }
  }

  const rec = getRecommendation()

  const handleWhatsAppBooking = () => {
    const msg = `Hi Anupriya! I took your studio class matcher quiz:\n\nPrimary Focus: ${goal}\nExperience Level: ${experience}\nPreferred Time: ${timing}\n\nRecommended Practice: ${rec.title}\n\nCould we arrange a trial slot?`
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
    onToast('Matched recommendation prepared. Opening WhatsApp...')
  }

  return (
    <section className="border-b border-hairline bg-travertine/25 p-6 sm:p-10 lg:p-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-hairline mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-full">
                RECOMMENDATION ENGINE
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-espresso font-semibold">
                / 15-SECOND CLASS FINDER
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-espresso leading-tight tracking-tight">
              Unsure Where to Start?{' '}
              <span className="italic text-terra underline decoration-terra/30 decoration-wavy underline-offset-8">
                Find Your Practice
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso/90 leading-relaxed font-sans font-medium max-w-[58ch]">
              Answer 3 quick questions to receive Anupriya&apos;s tailored studio recommendation.
            </p>
          </div>

          {step < 4 && (
            <div className="font-mono text-xs font-bold text-espresso bg-linen px-4 py-2 border border-hairline self-start lg:self-auto rounded-full shadow-xs">
              STEP {step} OF 3
            </div>
          )}
        </div>

        {/* Step 1: Goal */}
        {step === 1 && (
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-umber font-bold block mb-4">
              QUESTION 1: WHAT BRINGS YOU TO ANOHGA YOGA STUDIO?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: 'Alleviate Spine, Neck & Back Stiffness',
                  sub: 'Desk posture relief, cervical stiffness, therapeutic traction',
                  badge: 'SPINAL RELIEF',
                },
                {
                  label: 'Aerial Suspension & Core Strength',
                  sub: 'Zero-compression silk inversions, cocooning, flight',
                  badge: 'AERIAL SILKS',
                },
                {
                  label: 'Grounding Hatha, Breath & Flexibility',
                  sub: 'Classical floor postures, mudras, weekly progressive themes',
                  badge: 'CLASSICAL FLOOR',
                },
                {
                  label: "Children's Agility & Balance (Ages 7–14)",
                  sub: 'Playful silk hammock climbing and body confidence',
                  badge: 'KIDS BATCH',
                },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSelectGoal(item.label)}
                  className="p-5 border border-hairline bg-linen hover:border-terra hover:shadow-md text-left transition-all cursor-pointer group flex flex-col justify-between rounded-2xl"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-terra font-bold px-3 py-0.5 bg-terra/10 border border-terra/20 inline-block mb-3 rounded-full">
                      {item.badge}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-espresso group-hover:text-terra transition-colors leading-snug">
                      {item.label}
                    </h4>
                    <p className="mt-2 text-xs text-espresso/80 font-sans font-medium leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-terra font-bold mt-4 block">
                    Select ↗
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Experience */}
        {step === 2 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-umber font-bold">
                QUESTION 2: WHAT IS YOUR CURRENT YOGA EXPERIENCE?
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="font-mono text-xs text-terra font-bold underline cursor-pointer"
              >
                ← Back
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Complete Beginner',
                  sub: 'Never stepped on a yoga mat or touched aerial silks. Need ground-up guidance.',
                },
                {
                  label: 'Some Floor Experience, New to Silks',
                  sub: 'Comfortable with basic Hatha postures, excited to try zero-gravity hammocks.',
                },
                {
                  label: 'Regular Practitioner',
                  sub: 'Consistent practice history; looking for anatomical depth and progression.',
                },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSelectExperience(item.label)}
                  className="p-6 border border-hairline bg-linen hover:border-terra hover:shadow-md text-left transition-all cursor-pointer group flex flex-col justify-between rounded-2xl"
                >
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-espresso group-hover:text-terra transition-colors">
                      {item.label}
                    </h4>
                    <p className="mt-2 text-xs text-espresso/80 font-sans font-medium leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-terra font-bold mt-6 block">
                    Choose Experience ↗
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Timing */}
        {step === 3 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-umber font-bold">
                QUESTION 3: WHAT PRACTICE TIME SUITS YOUR ROUTINE?
              </span>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-mono text-xs text-terra font-bold underline cursor-pointer"
              >
                ← Back
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                {
                  label: 'Early Morning (6:00 – 7:30 AM)',
                  sub: 'Start your day with coastal fresh air before work.',
                },
                {
                  label: 'Mid-Morning (09:30 – 10:30 AM)',
                  sub: 'Clinical one-on-one therapy & calm late morning Hatha.',
                },
                {
                  label: 'Sunset Evening (05:00 – 07:00 PM)',
                  sub: 'Post-work unwind, Kids Aerial & evening floor sessions.',
                },
                {
                  label: 'Weekend Online (10:00 AM)',
                  sub: 'Join remotely via Google Meet from home.',
                },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSelectTiming(item.label)}
                  className="p-5 border border-hairline bg-linen hover:border-terra hover:shadow-md text-left transition-all cursor-pointer group flex flex-col justify-between rounded-2xl"
                >
                  <div>
                    <h4 className="font-serif text-xl font-bold text-espresso group-hover:text-terra transition-colors">
                      {item.label}
                    </h4>
                    <p className="mt-2 text-xs text-espresso/80 font-sans font-medium leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-terra font-bold mt-4 block">
                    See My Match ↗
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Result Card */}
        {step === 4 && (
          <div className="border border-terra/60 bg-linen p-8 sm:p-10 shadow-lg rounded-3xl">
            <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold">
                ✓ YOUR MATCHED PRACTICE RECOMMENDATION
              </span>
              <button
                type="button"
                onClick={resetQuiz}
                className="font-mono text-xs text-espresso hover:text-terra font-bold underline cursor-pointer"
              >
                Restart Class Finder
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 aspect-[16/11] overflow-hidden border border-hairline bg-travertine rounded-2xl shadow-sm">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-umber font-bold">
                    {rec.subtitle}
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-1 leading-snug">
                    {rec.title}
                  </h4>
                  <p className="mt-3 text-sm text-espresso font-medium leading-relaxed">
                    {rec.why}
                  </p>

                  <div className="mt-4 p-4 bg-travertine/40 border border-hairline font-mono text-xs space-y-1.5 text-espresso rounded-xl">
                    <div>
                      <span className="text-umber font-semibold">Optimal Schedule:</span>{' '}
                      <span className="font-bold">{rec.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-umber font-semibold">Tuition:</span>{' '}
                      <span className="font-bold text-terra">{rec.tuition}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="btn-terra py-3.5 px-6 font-bold text-xs shadow-md"
                  >
                    <span>Claim Matched Slot on WhatsApp</span>
                    <span>↗</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenDrawer({
                        cls: rec.classKey,
                        source: 'trial',
                      })
                    }
                    className="btn-outline py-3.5 px-6 font-bold text-xs"
                  >
                    <span>Book via Drawer Form</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
