// All static data: timetable, pricing, disciplines, workshops, FAQ
import type { PricingPlan } from './types'

// ── Disciplines ──────────────────────────────────────────────────
export const DISCIPLINES = [
  {
    roman: 'I.',
    name: 'Hatha Yoga & Mudras',
    badge: 'CLASSICAL FLOOR',
    image: '/images/hatha_floor.jpg',
    desc: 'Classical floor postures, conscious breath regulation, and mudras. Available in-studio and via hybrid virtual stream. Each week centres on a deliberate physiological theme: backbending for spinal decompression, hip opening, twisting for visceral detox, or inversions for the endocrine system.',
    tags: ['IN-STUDIO', 'VIRTUAL HYBRID', 'ALL LEVELS'],
  },
  {
    roman: 'II.',
    name: 'Aerial Yoga (Silk Hammock)',
    badge: 'GRAVITY DEFENSE',
    image: '/images/hero_aerial.jpg',
    desc: 'Zero-compression spinal traction, core stabilization, graceful inversions, and restorative cocooning. The silk hammock supports the full weight of the body — appropriate for every level, including beginners. Trial: ₹700 / class (refunded on monthly sign-up).',
    tags: ['IN-STUDIO ONLY', 'TRIAL ₹700', 'MAX 8 SILKS'],
  },
  {
    roman: 'III.',
    name: 'Private Yoga Therapy',
    badge: '1-ON-1 CLINICAL',
    image: '/images/yoga_therapy.jpg',
    desc: 'One-on-one clinical sessions on weekdays at 9:30 AM, tailored for spinal recovery, chronic pain, hormonal health, and therapeutic rehabilitation. Prescribed individually — not a group class.',
    tags: ['BY APPOINTMENT', 'WEEKDAYS 9:30 AM', 'POST-SURGERY'],
  },
  {
    roman: 'IV.',
    name: 'Prenatal Yoga',
    badge: 'MATERNAL CARE',
    image: '/images/prenatal_yoga.jpg',
    desc: 'Gentle maternal mobility, pelvic floor resilience, and calming pranayama designed for every trimester. Mondays, Wednesdays and Fridays at 5:00 PM.',
    tags: ['MON / WED / FRI 5 PM', 'ALL TRIMESTERS', 'PELVIC HEALTH'],
  },
  {
    roman: 'V.',
    name: 'Kids Hatha + Aerial (Ages 7–14)',
    badge: 'PLAY & BALANCE',
    image: '/images/kids_aerial.jpg',
    desc: 'Playful silk suspension and foundational floor balance for young explorers. Builds strength, attention, and body confidence through movement. Tuesdays and Thursdays at 5:00 PM.',
    tags: ['TUE / THU 5 PM', 'AGES 7–14', 'PLAYFUL SILKS'],
  },
  {
    roman: 'VI.',
    name: 'Weekend Online Hatha',
    badge: 'REMOTE 360°',
    image: '/images/weekend_online.jpg',
    desc: 'Complete 360° floor practice — Asana, Pranayama, Meditation — live on Google Meet or Zoom. Saturdays and Sundays at 10:00 AM. Equipment-free; a mat and quiet corner are enough.',
    tags: ['SAT & SUN 10 AM', 'GOOGLE MEET / ZOOM', 'EQUIPMENT FREE'],
  },
]

// ── Timetable ────────────────────────────────────────────────────
export const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export type SlotDef = {
  time: string
  cells: (string | null)[]  // index matches DAYS
  type: string[]             // filter tags per cell
}

export const SLOTS: SlotDef[] = [
  {
    time: '06:00 AM',
    cells: [null, 'Hatha / Virtual', 'Aerial', 'Hatha / Virtual', 'Aerial', 'Hatha / Virtual', null],
    type: [     '',  'hatha online',   'aerial',  'hatha online',   'aerial',  'hatha online',   ''],
  },
  {
    time: '07:30 AM',
    cells: ['Hatha', 'Aerial', 'Hatha', 'Aerial', 'Hatha', 'Aerial', null],
    type: ['hatha',  'aerial',  'hatha',  'aerial',  'hatha',  'aerial', ''],
  },
  {
    time: '09:30 AM',
    cells: ['Private Therapy', 'Private Therapy', 'Private Therapy', 'Private Therapy', 'Private Therapy', null, null],
    type: ['therapy',         'therapy',          'therapy',          'therapy',          'therapy',         '',   ''],
  },
  {
    time: '10:00 AM',
    cells: [null, null, null, null, null, 'Online Hatha', 'Online Hatha'],
    type: ['',    '',    '',    '',    '',   'online',       'online'],
  },
  {
    time: '10:30 AM',
    cells: ['Hatha', 'Hatha', null, 'Hatha', 'Hatha', null, null],
    type: ['hatha',  'hatha',  '',   'hatha',  'hatha',  '',   ''],
  },
  {
    time: '05:00 PM',
    cells: ['Prenatal', 'Hatha+Aerial Kids', 'Prenatal', 'Hatha+Aerial Kids', 'Prenatal', null, null],
    type: ['prenatal',  'kids',               'prenatal',  'kids',               'prenatal',  '',   ''],
  },
  {
    time: '06:00 PM',
    cells: ['Hatha', 'Aerial', 'Hatha', 'Aerial', 'Hatha', null, null],
    type: ['hatha',  'aerial',  'hatha',  'aerial',  'hatha',  '',   ''],
  },
]

export const SCHEDULE_NOTES = [
  { label: 'PRIVATE THERAPY', note: 'Strictly by appointment. Contact Anupriya on WhatsApp to schedule your first consultation. Weekdays, 9:30 AM only.' },
  { label: 'WEEKEND ONLINE', note: 'Saturday & Sunday, 10:00 AM. Full 360° practice: Asana, Pranayama, and Meditation via Google Meet or Zoom. No equipment required.' },
  { label: 'HATHA / VIRTUAL HYBRID', note: 'Select Hatha sessions at 06:00 AM and some 10:30 AM slots are simultaneously streamed online. Same class, joined remotely.' },
  { label: 'BEGINNER HATHA', note: 'All Hatha classes welcome beginners. No prior yoga experience necessary — Anupriya structures progressions from the ground up.' },
]

// ── Workshops ────────────────────────────────────────────────────
export const WORKSHOPS = [
  {
    index: '01',
    date: 'MON 28 SEP 2026',
    times: '6:15 AM (Online) · 10:30 AM & 6:00 PM (Studio)',
    title: 'Yoga for Spinal Health',
    subtitle: '3-Day Intensive',
    fee: '₹499',
    image: '/images/spinal_workshop.jpg',
    desc: 'Asanas, mudras, and targeted breathing for posture correction, lower back pain, and cervical neck stiffness.',
    waKey: 'Yoga for Spinal Health Workshop (28 Sep 2026)',
    seatsLeft: '4 slots remaining',
  },
  {
    index: '02',
    date: 'MON 12 OCT 2026',
    times: '6:15 AM · 10:30 AM & 6:00 PM',
    title: 'Hormonal Balance Workshop',
    subtitle: "Women's Wellness",
    fee: '₹499',
    image: '/images/hormonal_workshop.jpg',
    desc: "Dedicated therapeutic practice supporting PCOS/PCOD, thyroid symptoms, irregular or painful periods, PMS mood fluctuations, menopause, and sleep fatigue. Covers pelvic circulation asanas, pranayama, and home sequences.",
    waKey: "Hormonal Balance Workshop (12 Oct 2026)",
    seatsLeft: '3 slots remaining',
  },
]

// ── Pricing ──────────────────────────────────────────────────────
export const PRICING: PricingPlan[] = [
  // Hatha & Kids
  { group: 'Hatha & Kids', name: 'Hatha Yoga · 3 days/week (12 classes/mo)', monthly: 1800, quarterly: 5000, quarterlySave: 400 },
  { group: 'Hatha & Kids', name: 'Hatha Yoga · 4 days/week (16 classes/mo)', monthly: 2200, quarterly: 6000, quarterlySave: 600 },
  { group: 'Hatha & Kids', name: 'Hatha + Aerial Kids (8 classes, Tue/Thu 5 PM)', monthly: 2000, quarterly: 5700, quarterlySave: 300 },
  // Aerial
  { group: 'Aerial Yoga', name: 'Aerial Yoga · 1 day/week (4 classes/mo)', monthly: 2000, quarterly: 5400, quarterlySave: 600 },
  { group: 'Aerial Yoga', name: 'Aerial Yoga · 2 days/week (8 classes/mo)', monthly: 3800, quarterly: 10000, quarterlySave: 1400 },
  { group: 'Aerial Yoga', name: 'Aerial Drop-In Trial (single class)', monthly: 700, quarterly: 700, quarterlySave: 0, note: 'No commitment. Refunded if you sign up monthly within the same week.' },
  // Combo
  { group: 'Combo Packs', name: '3 Hatha + 1 Aerial — Blend floor & aerial', tag: 'MOST POPULAR', monthly: 3500, quarterly: 9500, quarterlySave: 1000 },
  { group: 'Combo Packs', name: '4 Hatha + 1 Aerial — Strong foundation + silk', tag: 'MOST POPULAR', monthly: 3900, quarterly: 10500, quarterlySave: 1200 },
  { group: 'Combo Packs', name: '3 Hatha + 2 Aerial — 5 sessions/wk complete practice', tag: 'BEST VALUE', monthly: 5200, quarterly: 14000, quarterlySave: 1600 },
  // Specialised
  { group: 'Specialised', name: 'Weekend Online Hatha (Sat & Sun 10 AM, 8 classes/mo)', monthly: 1800, quarterly: 5000, quarterlySave: 400 },
  { group: 'Specialised', name: 'Prenatal Yoga (Mon/Wed/Fri 5 PM, 8 classes/mo)', monthly: 4000, quarterly: 10500, quarterlySave: 1500 },
  { group: 'Specialised', name: 'Private Yoga Therapy (8 sessions/mo, Weekdays 9:30 AM)', monthly: 4800, quarterly: 12500, quarterlySave: 1900 },
]

export const PLAN_NAMES = PRICING.map(p => `${p.name} — ₹${p.monthly}/mo`)

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ = [
  {
    q: 'How does payment work, and can I cancel?',
    a: 'Payment is by UPI transfer or cash on your first class. The default membership is month-to-month — no long contract. If you choose the 3-month rate, it is paid upfront and is non-refundable once your practice begins. Within a month, your schedule is flexible: message Anupriya to rearrange individual sessions.',
  },
  {
    q: 'Do your classes follow a set plan or change each week?',
    a: 'Every week centres on a deliberate physiological or energetic focus — backbending for spinal decompression, hip opening, twisting for visceral detox, or inversions for the endocrine system. Your practice builds progressively over months, not randomly week to week.',
  },
  {
    q: 'Can I switch to a different package mid-month?',
    a: 'Yes. Message Anupriya on WhatsApp and she will adjust your plan. Changes take effect from the following month. There is no switching fee.',
  },
  {
    q: 'What happens if I miss a class?',
    a: 'Missed-class credits roll within the same calendar month. They do not carry over into the next month. If you know you will be away, let Anupriya know and she can often reschedule your slot within the same week.',
  },
  {
    q: 'Is there a trial for Aerial Yoga?',
    a: 'Yes. A single Aerial drop-in class is ₹700. If you sign up for a monthly Aerial plan within the same week, that ₹700 is fully refunded against your first month.',
  },
  {
    q: 'Is there a trial for Hatha or floor classes?',
    a: 'Your first Hatha class is completely free. No deposit, no commitment. Drop in, meet Anupriya, experience the studio, and decide afterwards. Message her directly on WhatsApp (+91 81227 51154) to fix a time.',
  },
]

// ── Gallery items ─────────────────────────────────────────────────
export const GALLERY = [
  { idx: '01', label: 'SILK INVERSION', category: 'aerial', src: '/images/hero_aerial.jpg' },
  { idx: '02', label: 'PRANAYAMA & MUDRA', category: 'floor', src: '/images/hatha_floor.jpg' },
  { idx: '03', label: 'HAMMOCK COCOON', category: 'aerial', src: '/images/hormonal_workshop.jpg' },
  { idx: '04', label: 'KIDS AERIAL SESSION', category: 'kids', src: '/images/kids_aerial.jpg' },
  { idx: '05', label: 'SPINAL DECOMPRESSION', category: 'floor', src: '/images/spinal_workshop.jpg' },
  { idx: '06', label: 'ONE-ON-ONE THERAPY', category: 'aerial', src: '/images/yoga_therapy.jpg' },
  { idx: '07', label: 'PRENATAL ALIGNMENT', category: 'floor', src: '/images/prenatal_yoga.jpg' },
  { idx: '08', label: 'WEEKEND ONLINE SANCTUARY', category: 'choreo', src: '/images/weekend_online.jpg' },
  { idx: '09', label: 'CHOREO REEL — SILK FLOW', category: 'choreo', src: '/images/hero_aerial.jpg' },
]
