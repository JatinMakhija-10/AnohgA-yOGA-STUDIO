import type { FC } from 'react'
import type { LegalModalType } from './LegalModal'

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void
}

export const Footer: FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-linen pt-16 sm:pt-20 pb-16 text-espresso transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Main Architectural Pavilion Card */}
        <div className="bg-travertine/40 border border-hairline/80 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10">
            {/* Brand & Studio Philosophy (Cols 1-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl sm:text-4xl tracking-[0.16em] uppercase leading-none font-bold">
                  ANOHGA
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-terra font-bold block mt-2">
                  Yoga Studio · ECR Thiruvanmiyur, Chennai
                </span>
                <p className="mt-4 text-xs sm:text-sm text-espresso/90 font-medium leading-relaxed max-w-[38ch]">
                  An intimate sanctuary dedicated to deliberate, anatomically grounded practice.
                  Led personally by founder Anupriya (RYT-500), bringing 10+ years of personal sadhana
                  and 6+ years of specialized teaching across classical Hatha, suspended Aerial silks,
                  and restorative Yoga Therapy.
                </p>
              </div>

              <div className="mt-6 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-bold block mb-2">
                  Direct WhatsApp Dispatch
                </span>
                <a
                  href="https://wa.me/918122751154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-terra py-2.5 px-5 font-bold text-xs rounded-full shadow-xs hover:shadow-md inline-flex items-center gap-2"
                >
                  <span>Chat with Anupriya</span>
                  <span>+91 81227 51154 ↗</span>
                </a>
              </div>
            </div>

            {/* Location & Access (Cols 5-7) */}
            <div className="lg:col-span-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/20 rounded-full inline-block mb-4">
                LOCATION &amp; ACCESS
              </span>
              <div className="text-xs text-espresso space-y-2 font-sans leading-relaxed">
                <p className="font-bold text-sm">2nd Floor, Shop 109/38,</p>
                <p>East Coast Road (ECR),</p>
                <p>Thiruvanmiyur, Chennai – 600 041</p>
                <p className="font-mono text-[11px] text-umber pt-1">
                  Landmark: Above AU Small Finance Bank &amp; Muthoot Finance
                </p>
              </div>

              <div className="mt-6 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-umber font-bold block mb-1.5">
                  Electronic Mail
                </span>
                <a
                  href="mailto:Anohgayoga@gmail.com"
                  className="font-mono text-xs text-espresso hover:text-terra font-bold transition-colors inline-block px-3 py-1.5 bg-linen/80 rounded-full border border-hairline/60"
                >
                  Anohgayoga@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Index Links (Cols 8-9) */}
            <div className="lg:col-span-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/20 rounded-full inline-block mb-4">
                STUDIO INDEX
              </span>
              <ul className="space-y-2.5 text-xs font-sans list-none p-0 m-0">
                <li>
                  <a href="#disciplines" className="text-espresso/90 hover:text-terra font-medium transition-colors no-underline flex items-center justify-between group">
                    <span>Disciplines</span>
                    <span className="opacity-0 group-hover:opacity-100 text-terra transition-opacity">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="text-espresso/90 hover:text-terra font-medium transition-colors no-underline flex items-center justify-between group">
                    <span>Timetable</span>
                    <span className="opacity-0 group-hover:opacity-100 text-terra transition-opacity">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-espresso/90 hover:text-terra font-medium transition-colors no-underline flex items-center justify-between group">
                    <span>Pricing Ledger</span>
                    <span className="opacity-0 group-hover:opacity-100 text-terra transition-opacity">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-espresso/90 hover:text-terra font-medium transition-colors no-underline flex items-center justify-between group">
                    <span>Visual Archive</span>
                    <span className="opacity-0 group-hover:opacity-100 text-terra transition-opacity">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#corporate" className="text-espresso/90 hover:text-terra font-medium transition-colors no-underline flex items-center justify-between group">
                    <span>Corporate Wellness</span>
                    <span className="opacity-0 group-hover:opacity-100 text-terra transition-opacity">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-espresso/90 hover:text-terra font-medium transition-colors no-underline flex items-center justify-between group">
                    <span>Reserve a Class</span>
                    <span className="opacity-0 group-hover:opacity-100 text-terra transition-opacity">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Operating Hours (Cols 10-12) */}
            <div className="lg:col-span-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-terra font-bold px-3 py-1 bg-terra/10 border border-terra/20 rounded-full inline-block mb-4">
                PRACTICE HOURS
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-linen/80 border border-hairline/60">
                  <span className="font-semibold text-espresso">Mon – Fri Morning</span>
                  <span className="font-bold text-terra">06:00 – 11:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-linen/80 border border-hairline/60">
                  <span className="font-semibold text-espresso">Mon – Fri Evening</span>
                  <span className="font-bold text-terra">05:00 – 07:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-linen/80 border border-hairline/60">
                  <span className="font-semibold text-espresso">Saturday Studio</span>
                  <span className="font-bold text-terra">06:00 – 08:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-linen/80 border border-hairline/60">
                  <span className="font-semibold text-espresso">Sat &amp; Sun Virtual</span>
                  <span className="font-bold text-terra">10:00 – 11:15 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-linen/40 border border-hairline/40">
                  <span className="text-umber">Sunday Studio</span>
                  <span className="text-umber font-semibold">Rest / Private</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Legal Documents & Copyright */}
          <div className="pt-8 border-t border-hairline/70 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-umber">
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="px-3 py-1 bg-linen/70 hover:bg-linen border border-hairline/60 rounded-full transition-colors cursor-pointer text-espresso font-semibold"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="px-3 py-1 bg-linen/70 hover:bg-linen border border-hairline/60 rounded-full transition-colors cursor-pointer text-espresso font-semibold"
              >
                Terms of Practice
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('refund')}
                className="px-3 py-1 bg-linen/70 hover:bg-linen border border-hairline/60 rounded-full transition-colors cursor-pointer text-espresso font-semibold"
              >
                Refund Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('medical')}
                className="px-3 py-1 bg-linen/70 hover:bg-linen border border-hairline/60 rounded-full transition-colors cursor-pointer text-espresso font-semibold"
              >
                Medical Disclaimer
              </button>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-wider text-umber font-semibold">
              © {new Date().getFullYear()} Anohga Yoga Studio · All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
