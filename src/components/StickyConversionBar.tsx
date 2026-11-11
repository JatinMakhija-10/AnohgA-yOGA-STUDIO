import type { FC } from 'react'
import type { DrawerContext } from '../types'

interface StickyConversionBarProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const StickyConversionBar: FC<StickyConversionBarProps> = ({ onOpenDrawer }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-linen/95 backdrop-blur-md border-t-2 border-hairline p-3 sm:p-4 lg:hidden shadow-lg transition-transform">
      <div className="max-w-[500px] mx-auto flex items-center justify-between gap-3">
        {/* Status indicator */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-moss rounded-full animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-espresso font-bold">
              Anupriya Online
            </span>
          </div>
          <span className="font-mono text-[9px] text-umber font-semibold">
            First Class Free · No Lock-In
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/918122751154?text=Hi%20Anupriya!%20I'd%20like%20to%20enquire%20about%20a%20class%20at%20Anohga%20Yoga%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-travertine border border-hairline text-espresso hover:text-terra font-mono text-xs font-bold"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            WA ↗
          </a>
          <button
            type="button"
            onClick={() => onOpenDrawer({ source: 'trial' })}
            className="btn-terra py-2.5 px-4 font-bold text-xs whitespace-nowrap shadow-sm"
          >
            <span>Claim Free Class</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}
