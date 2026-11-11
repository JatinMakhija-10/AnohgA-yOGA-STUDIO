import { useState, type FC } from 'react'
import { waLink } from '../utils/wa'

interface TuitionCalculatorProps {
  onToast: (msg: string) => void
}

export const TuitionCalculator: FC<TuitionCalculatorProps> = ({ onToast }) => {
  const [hathaDays, setHathaDays] = useState<number>(3)
  const [aerialDays, setAerialDays] = useState<number>(1)
  const [isQuarterly, setIsQuarterly] = useState<boolean>(true)

  // Calculate pricing based on matrix
  const getCalculation = () => {
    let monthlyBase = 0
    let quarterlyBase = 0
    let savings = 0
    let comboName = ''

    if (hathaDays === 3 && aerialDays === 0) {
      monthlyBase = 1800
      quarterlyBase = 5000
      savings = 400
      comboName = '3 Hatha Sessions / Week (12 classes/mo)'
    } else if (hathaDays === 4 && aerialDays === 0) {
      monthlyBase = 2200
      quarterlyBase = 6000
      savings = 600
      comboName = '4 Hatha Sessions / Week (16 classes/mo)'
    } else if (hathaDays === 0 && aerialDays === 1) {
      monthlyBase = 2000
      quarterlyBase = 5400
      savings = 600
      comboName = '1 Aerial Silk Session / Week (4 classes/mo)'
    } else if (hathaDays === 0 && aerialDays === 2) {
      monthlyBase = 3800
      quarterlyBase = 10000
      savings = 1400
      comboName = '2 Aerial Silk Sessions / Week (8 classes/mo)'
    } else if (hathaDays === 3 && aerialDays === 1) {
      monthlyBase = 3500
      quarterlyBase = 9500
      savings = 1000
      comboName = 'Combo: 3 Hatha + 1 Aerial / Week (16 sessions/mo)'
    } else if (hathaDays === 4 && aerialDays === 1) {
      monthlyBase = 3900
      quarterlyBase = 10500
      savings = 1200
      comboName = 'Combo: 4 Hatha + 1 Aerial / Week (20 sessions/mo)'
    } else if (hathaDays === 3 && aerialDays === 2) {
      monthlyBase = 5200
      quarterlyBase = 14000
      savings = 1600
      comboName = 'Combo: 3 Hatha + 2 Aerial / Week (20 sessions/mo)'
    } else {
      // Fallback custom calculation
      monthlyBase = hathaDays * 600 + aerialDays * 1800
      quarterlyBase = Math.round(monthlyBase * 3 * 0.9)
      savings = monthlyBase * 3 - quarterlyBase
      comboName = `Custom Combo: ${hathaDays} Hatha + ${aerialDays} Aerial / Week`
    }

    return {
      monthly: monthlyBase,
      quarterly: quarterlyBase,
      savings,
      name: comboName,
      totalClassesPerMonth: (hathaDays + aerialDays) * 4,
    }
  }

  const calc = getCalculation()
  const displayPrice = isQuarterly ? calc.quarterly : calc.monthly
  const displayPeriod = isQuarterly ? 'for 3 Months (Quarterly)' : 'per Month'

  const handleReserve = () => {
    const cycle = isQuarterly ? 'Quarterly (3-Month)' : 'Monthly'
    const msg = `Hi Anupriya! I customized my package using the studio tuition calculator:\n\nPackage: ${calc.name}\nCadence: ${cycle}\nTuition: ₹${displayPrice.toLocaleString('en-IN')}\n\nCould you please confirm slot availability and UPI details?`
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
    onToast('Custom package details prepared. Redirecting to WhatsApp...')
  }

  return (
    <div className="bg-linen border border-hairline/80 p-8 sm:p-10 my-8 shadow-sm rounded-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-hairline mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/30 rounded-md inline-block mb-2">
            CUSTOM PACKAGE CALCULATOR
          </span>
          <h4 className="font-serif text-3xl font-bold text-espresso mt-1">
            Build Your Weekly Cadence
          </h4>
          <p className="text-xs sm:text-sm text-espresso/80 font-sans font-medium mt-1">
            Blend classical floor Hatha with suspended Aerial silks to match your schedule.
          </p>
        </div>

        {/* Cadence switch */}
        <div className="flex items-center gap-1.5 border border-hairline p-1 bg-travertine self-start md:self-auto font-mono text-xs rounded-md shadow-inner">
          <button
            type="button"
            onClick={() => setIsQuarterly(false)}
            className={`px-4 py-1.5 font-bold cursor-pointer transition-all rounded-md ${
              !isQuarterly ? 'bg-espresso text-linen shadow-xs' : 'text-umber hover:text-espresso'
            }`}
          >
            MONTHLY
          </button>
          <button
            type="button"
            onClick={() => setIsQuarterly(true)}
            className={`px-4 py-1.5 font-bold cursor-pointer transition-all rounded-md ${
              isQuarterly ? 'bg-terra text-linen shadow-xs' : 'text-umber hover:text-espresso'
            }`}
          >
            QUARTERLY (SAVE ₹)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Hatha selector */}
          <div>
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-espresso font-bold">
              <span>FLOOR HATHA SESSIONS PER WEEK:</span>
              <span className="text-terra text-sm">{hathaDays} DAYS/WK</span>
            </div>
            <div className="grid grid-cols-4 gap-2 font-mono text-xs font-bold">
              {[0, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setHathaDays(num)}
                  className={`py-2.5 border transition-all cursor-pointer rounded-md ${
                    hathaDays === num
                      ? 'bg-espresso text-linen border-espresso shadow-xs'
                      : 'bg-travertine/40 text-espresso border-hairline hover:bg-travertine'
                  }`}
                >
                  {num === 0 ? 'None' : `${num} Days`}
                </button>
              ))}
            </div>
          </div>

          {/* Aerial selector */}
          <div>
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-espresso font-bold">
              <span>AERIAL SILK SESSIONS PER WEEK:</span>
              <span className="text-terra text-sm">{aerialDays} DAY{aerialDays === 1 ? '' : 'S'}/WK</span>
            </div>
            <div className="grid grid-cols-3 gap-2 font-mono text-xs font-bold">
              {[0, 1, 2].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setAerialDays(num)}
                  className={`py-2.5 border transition-all cursor-pointer rounded-md ${
                    aerialDays === num
                      ? 'bg-espresso text-linen border-espresso shadow-xs'
                      : 'bg-travertine/40 text-espresso border-hairline hover:bg-travertine'
                  }`}
                >
                  {num === 0 ? 'None' : `${num} Day${num > 1 ? 's' : ''}`}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-travertine/40 border border-hairline font-mono text-[11px] text-espresso font-semibold flex items-center justify-between rounded-md">
            <span>SELECTED: {calc.name}</span>
            <span className="text-terra font-bold">~{calc.totalClassesPerMonth} classes/mo</span>
          </div>
        </div>

        {/* Price Output & CTA */}
        <div className="lg:col-span-5 bg-travertine/60 border border-hairline p-6 sm:p-8 flex flex-col justify-between rounded-lg shadow-sm">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-bold block">
              TOTAL ESTIMATED TUITION
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-espresso leading-none">
                ₹{displayPrice.toLocaleString('en-IN')}
              </span>
              <span className="font-mono text-xs text-umber font-semibold">
                {displayPeriod}
              </span>
            </div>

            {isQuarterly && calc.savings > 0 && (
              <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-moss font-bold bg-moss/10 px-3 py-1 border border-moss/20 rounded-md">
                <span>✓ Includes ₹{calc.savings.toLocaleString('en-IN')} upfront quarterly savings</span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleReserve}
            className="btn-terra w-full justify-center py-3.5 font-bold text-xs mt-6 shadow-sm"
          >
            <span>Lock In This Package on WhatsApp</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}
