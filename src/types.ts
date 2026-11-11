// Shared app-wide types
export type View = 'home' | 'disciplines' | 'schedule' | 'pricing' | 'gallery' | 'corporate' | 'contact'
export type DrawerContext = {
  open: boolean
  day?: string
  time?: string
  cls?: string
  plan?: string
  source?: 'trial' | 'book' | 'plan'
}
export interface PricingPlan {
  group: string
  name: string
  tag?: string
  monthly: number
  quarterly: number
  quarterlySave: number
  note?: string
}
