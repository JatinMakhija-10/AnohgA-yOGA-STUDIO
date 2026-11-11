import type { FC } from 'react'
import type { LegalModalType } from './LegalModal'

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void
}

export const Footer: FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-travertine/70 border-t border-hairline pt-16 pb-12 text-espresso transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Main 4-column architectural footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-hairline">
          {/* Brand & Studio Philosophy (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.16em] uppercase leading-none font-bold">
                ANOHGA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso font-bold block mt-1.5">
                Yoga Studio · ECR Thiruvanmiyur, Chennai
              </span>
              <p className="mt-5 text-xs sm:text-sm text-espresso/90 font-medium leading-relaxed max-w-[38ch]">
                An intimate sanctuary dedicated to deliberate, anatomically grounded practice.
                Led personally by founder Anupriya (RYT-500), bringing 10+ years of personal sadhana
                and 6+ years of specialized teaching across classical Hatha, suspended Aerial silks,
                and restorative Yoga Therapy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-hairline/60">
              <span className="font-mono text-[10px] uppercase tracking-wider text-umber block">
                Direct WhatsApp Dispatch
              </span>
              <a
                href="https://wa.me/918122751154"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-terra hover:text-terra-hover transition-colors font-medium mt-1 inline-block"
              >
                +91 81227 51154 ↗
              </a>
            </div>
          </div>

          {/* Location & Access (Cols 5-7) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-umber block mb-3">
              Location &amp; Access
            </span>
            <div className="text-xs text-espresso space-y-1.5 font-sans leading-relaxed">
              <p className="font-medium">2nd Floor, Shop 109/38,</p>
              <p>East Coast Road (ECR),</p>
              <p>Thiruvanmiyur, Chennai – 600 041</p>
              <p className="font-mono text-[11px] text-umber pt-2">
                Landmark: Above AU Small Finance Bank &amp; Muthoot Finance
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-hairline/60">
              <span className="font-mono text-[10px] uppercase tracking-wider text-umber block mb-1">
                Electronic Mail
              </span>
              <a
                href="mailto:Anohgayoga@gmail.com"
                className="font-mono text-xs text-espresso hover:text-terra transition-colors"
              >
                Anohgayoga@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Index Links (Cols 8-9) */}
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-umber block mb-3">
              Studio Index
            </span>
            <ul className="space-y-2 text-xs font-sans list-none p-0 m-0">
              <li>
                <a href="#disciplines" className="text-umber hover:text-terra transition-colors no-underline">
                  Methodology &amp; Disciplines
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-umber hover:text-terra transition-colors no-underline">
                  Timetable &amp; Workshops
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-umber hover:text-terra transition-colors no-underline">
                  Pricing &amp; Memberships
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-umber hover:text-terra transition-colors no-underline">
                  Visual Archive
                </a>
              </li>
              <li>
                <a href="#corporate" className="text-umber hover:text-terra transition-colors no-underline">
                  Corporate Wellness
                </a>
              </li>
              <li>
                <a href="#contact" className="text-umber hover:text-terra transition-colors no-underline">
                  Reserve a Class
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Practice Rules (Cols 10-12) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-umber block mb-3">
              Practice Hours
            </span>
            <div className="space-y-2 text-xs font-mono text-umber">
              <div className="flex justify-between border-b border-hairline/40 pb-1">
                <span>Mon – Fri Morning</span>
                <span className="text-espresso">06:00 – 11:30 AM</span>
              </div>
              <div className="flex justify-between border-b border-hairline/40 pb-1">
                <span>Mon – Fri Evening</span>
                <span className="text-espresso">05:00 – 07:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-hairline/40 pb-1">
                <span>Saturday Studio</span>
                <span className="text-espresso">06:00 – 08:30 AM</span>
              </div>
              <div className="flex justify-between border-b border-hairline/40 pb-1">
                <span>Sat &amp; Sun Virtual</span>
                <span className="text-espresso">10:00 – 11:15 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday Studio</span>
                <span className="text-umber">Rest / Private</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal Documents & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] text-umber">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-espresso transition-colors underline cursor-pointer bg-transparent border-0 p-0 text-inherit font-mono"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-espresso transition-colors underline cursor-pointer bg-transparent border-0 p-0 text-inherit font-mono"
            >
              Terms of Practice
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('refund')}
              className="hover:text-espresso transition-colors underline cursor-pointer bg-transparent border-0 p-0 text-inherit font-mono"
            >
              Refund Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('medical')}
              className="hover:text-espresso transition-colors underline cursor-pointer bg-transparent border-0 p-0 text-inherit font-mono"
            >
              Medical Disclaimer
            </button>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-wider text-umber">
            © {new Date().getFullYear()} Anohga Yoga Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
