import type { ReactNode, FC } from 'react'

export type LegalModalType = 'privacy' | 'terms' | 'refund' | 'medical' | null

interface LegalModalProps {
  type: LegalModalType
  onClose: () => void
}

export const LegalModal: FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null

  const contentMap: Record<string, { title: string; subtitle: string; body: ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'LAST REVISED · OCTOBER 2026',
      body: (
        <div className="space-y-4 text-xs font-sans text-umber leading-relaxed">
          <p>
            Anohga Yoga Studio operates an intimate in-studio and virtual practice located on East
            Coast Road, Thiruvanmiyur, Chennai. We respect your personal privacy and collect only the
            information strictly necessary to coordinate class schedules and ensure student safety.
          </p>
          <p>
            Information collected through direct WhatsApp messages or booking forms (such as your
            name, phone number, and physical contraindications) remains confidential. We do not sell,
            license, or share your contact data with third-party advertising networks.
          </p>
          <p>
            If you wish to update or erase your contact records from our studio ledger, please notify
            founder Anupriya directly via WhatsApp at +91 81227 51154.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Studio Terms of Practice',
      subtitle: 'STANDARDS OF ATTENDANCE & CONDUCT',
      body: (
        <div className="space-y-4 text-xs font-sans text-umber leading-relaxed">
          <p>
            <strong>1. Punctuality &amp; Shavasana:</strong> Out of respect for fellow practitioners,
            please arrive 5 to 10 minutes prior to scheduled start times. Doors close 5 minutes after
            class begins to preserve the silence and focus of the space.
          </p>
          <p>
            <strong>2. Studio Attire &amp; Silks:</strong> For Aerial Yoga sessions, form-fitting cotton
            attire covering the underarms and knee creases is mandatory. All jewelry, zippers, rings,
            and hairpins must be removed prior to stepping onto the silks to prevent fabric snags.
          </p>
          <p>
            <strong>3. Etiquette:</strong> Please keep footwear on the exterior racks and switch mobile
            devices to silent upon entering the studio foyer.
          </p>
        </div>
      ),
    },
    refund: {
      title: 'Refund & Missed Class Policy',
      subtitle: 'TRANSPARENT LEDGER GUIDELINES',
      body: (
        <div className="space-y-4 text-xs font-sans text-umber leading-relaxed">
          <p>
            <strong>Monthly Memberships:</strong> Fees are settled at the beginning of each billing
            cycle. Because batch capacities are kept strictly intimate (maximum 8–10 students), monthly
            memberships are non-refundable once the cycle commences.
          </p>
          <p>
            <strong>Missed Class Rollovers:</strong> Missed sessions may be made up in alternative
            slots within the same calendar month, subject to prior notice and slot availability. Credits
            do not roll forward into subsequent months.
          </p>
          <p>
            <strong>Aerial Drop-In Trial:</strong> The single trial fee of ₹700 is fully creditable
            against your first monthly package when enrolled within 7 days of the trial session.
          </p>
        </div>
      ),
    },
    medical: {
      title: 'Medical & Physical Disclaimer',
      subtitle: 'ANATOMICAL INTEGRITY & RESPONSIBILITY',
      body: (
        <div className="space-y-4 text-xs font-sans text-umber leading-relaxed">
          <p>
            Yoga is a physical and therapeutic discipline. Prior to initiating an Aerial, Hatha, or
            Therapeutic regimen, consult your physician if you have cardiovascular conditions, extreme
            blood pressure variations, glaucoma, recent surgery, or spinal herniations.
          </p>
          <p>
            <strong>Inversions &amp; Aerial Silks:</strong> Inverted silk postures are contraindicated
            for students experiencing detached retinas, untreated hypertension, or inner ear vertigo.
          </p>
          <p>
            Students must disclose pregnancies, acute musculoskeletal injuries, or medical conditions
            to Anupriya prior to commencement of any class. Prenatal students may only attend designated
            prenatal batches with physician clearance.
          </p>
        </div>
      ),
    },
  }

  const current = contentMap[type] || contentMap.privacy

  return (
    <div
      className="modal-backdrop open"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-hairline pb-4">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-umber block">
              {current.subtitle}
            </span>
            <h3 className="font-serif text-2xl font-normal text-espresso mt-1">
              {current.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-espresso hover:text-terra transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="square"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mt-6">{current.body}</div>

        <div className="mt-8 pt-4 border-t border-hairline flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-outline text-[11px] py-2 px-5"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  )
}
