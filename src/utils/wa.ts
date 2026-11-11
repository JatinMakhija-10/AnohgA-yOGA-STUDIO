// WhatsApp routing utility
const WA_NUMBER = '918122751154'

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export function waBook(name: string, phone: string, day: string, time: string, cls: string) {
  const msg = `Hi Anupriya! I'd like to book a class at Anohga Yoga Studio.\n\nName: ${name}\nPhone: ${phone}\nDay: ${day}\nTime: ${time}\nClass: ${cls}\n\nPlease confirm my slot.`
  return waLink(msg)
}

export function waTrial(name: string, phone: string, discipline = '') {
  const disc = discipline ? `\nPreferred Discipline: ${discipline}` : ''
  const msg = `Hi Anupriya! I'd like to claim my FREE first class at Anohga Yoga Studio.\n\nName: ${name}\nPhone: ${phone}${disc}\n\nPlease confirm a convenient slot.`
  return waLink(msg)
}

export function waPlan(name: string, phone: string, plan: string) {
  const msg = `Hi Anupriya! I'd like to reserve the following plan at Anohga:\n\nName: ${name}\nPhone: ${phone}\nPlan: ${plan}\n\nPlease share payment details.`
  return waLink(msg)
}

export function waWorkshop(name: string, phone: string, workshop: string) {
  const msg = `Hi Anupriya! I'd like to enquire about the ${workshop} at Anohga Yoga Studio.\n\nName: ${name}\nPhone: ${phone}\n\nPlease share details.`
  return waLink(msg)
}

export function waCorporate(fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([k]) => k !== 'website')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  const msg = `Hi Anupriya! Corporate Wellness Enquiry — Anohga Yoga Studio.\n\n${lines}\n\nLooking forward to your proposal.`
  return waLink(msg)
}
