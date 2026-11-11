import type { FC } from 'react'
import type { DrawerContext } from '../types'

interface TickerProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const Ticker: FC<TickerProps> = ({ onOpenDrawer }) => {
  return (
    <div className="bg-bark text-linen border-b border-[#343E34] text-[11px] font-mono tracking-widest uppercase py-2.5 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left transition-colors">
      <div className="flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 bg-terra rounded-full"></span>
        <span>Thiruvanmiyur, ECR Chennai · In-Studio Mon–Sat &amp; Online Weekends</span>
      </div>
      <div>
        <button
          type="button"
          onClick={() => onOpenDrawer({ source: 'trial' })}
          className="hover:text-terra transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-0 text-inherit p-0 font-mono text-[11px] uppercase tracking-widest"
        >
          <span>First Hatha Class Free · Aerial Trial ₹700 (Refundable) — Reserve Slot</span>
          <span className="text-terra">↗</span>
        </button>
      </div>
    </div>
  )
}
