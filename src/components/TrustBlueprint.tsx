import type { FC } from 'react'

export const TrustBlueprint: FC = () => {
  return (
    <div className="border-t border-b border-hairline bg-bark text-linen p-6 sm:p-10 lg:p-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#343E34] mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-2 py-0.5 bg-terra/20 border border-terra/30">
              TRUST ARCHITECTURE &amp; RIGGING SAFETY
            </span>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-linen tracking-tight">
              Engineered for Zero Fear &amp; Total Flight
            </h3>
            <p className="mt-2 text-sm text-linen/80 font-sans font-medium max-w-[56ch]">
              Every aerial hammock point is engineered to industrial climbing standards so you can
              invert, suspend, and cocoon in absolute confidence.
            </p>
          </div>

          <div className="font-mono text-xs text-terra font-bold px-3 py-1.5 border border-terra/40 bg-terra/10 self-start lg:self-auto">
            ● 100% PERSONAL SPOTTING BY ANUPRIYA
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 border border-[#343E34] bg-white/5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-terra font-bold block mb-2">01 / LOAD SPEC</span>
              <h4 className="font-serif text-2xl font-bold text-linen">500 kg Rated</h4>
              <p className="mt-2 text-xs font-sans text-linen/70 leading-relaxed">
                Industrial dual-anchor ceiling plates with high-tensile mountaineering carabiners.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-linen/50 mt-4 block">
              Tested quarterly
            </span>
          </div>

          <div className="p-5 border border-[#343E34] bg-white/5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-terra font-bold block mb-2">02 / FABRIC</span>
              <h4 className="font-serif text-2xl font-bold text-linen">Skin-Grade Silks</h4>
              <p className="mt-2 text-xs font-sans text-linen/70 leading-relaxed">
                Premium low-stretch tricot nylon blend that gives gentle supportive traction without friction burn.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-linen/50 mt-4 block">
              Sanitized after each batch
            </span>
          </div>

          <div className="p-5 border border-[#343E34] bg-white/5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-terra font-bold block mb-2">03 / INTIMACY</span>
              <h4 className="font-serif text-2xl font-bold text-linen">Max 8 Hammocks</h4>
              <p className="mt-2 text-xs font-sans text-linen/70 leading-relaxed">
                Strict batch capping guarantees Anupriya assists and spots your first inversions by hand.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-linen/50 mt-4 block">
              Never overcrowded
            </span>
          </div>

          <div className="p-5 border border-[#343E34] bg-white/5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-terra font-bold block mb-2">04 / HEALTH CHECK</span>
              <h4 className="font-serif text-2xl font-bold text-linen">Pre-Class Intake</h4>
              <p className="mt-2 text-xs font-sans text-linen/70 leading-relaxed">
                Blood pressure, spinal injury, and glaucoma contraindications are vetted before flight.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-linen/50 mt-4 block">
              Clinical safety first
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
