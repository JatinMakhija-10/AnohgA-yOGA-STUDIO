import { useState, useEffect } from 'react'
import type { DrawerContext } from './types'
import { Ticker } from './components/Ticker'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer'
import { LegalModal, type LegalModalType } from './components/LegalModal'
import { Toast } from './components/Toast'
import { Footer } from './components/Footer'
import { ClassMatcher } from './components/ClassMatcher'
import { TrustBlueprint } from './components/TrustBlueprint'
import { StickyConversionBar } from './components/StickyConversionBar'

import { Hero } from './sections/Hero'
import { Disciplines } from './sections/Disciplines'
import { Schedule } from './sections/Schedule'
import { Pricing } from './sections/Pricing'
import { Testimonials } from './sections/Testimonials'
import { Gallery } from './sections/Gallery'
import { Corporate } from './sections/Corporate'
import { Forms } from './sections/Forms'
import { PLAN_NAMES } from './data'

export function App() {
  // Drawer state
  const [drawerContext, setDrawerContext] = useState<DrawerContext>({
    open: false,
    source: 'trial',
  })

  // Selected plan for booking
  const [selectedPlan, setSelectedPlan] = useState<string>(PLAN_NAMES[0])

  // Legal modal state
  const [legalModal, setLegalModal] = useState<LegalModalType>(null)

  // Toast state
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: '',
  })

  // Show toast notification with automatic dismissal
  const showToast = (message: string) => {
    setToast({ show: true, message })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 4000)
  }

  // Open drawer helper
  const handleOpenDrawer = (ctx?: Partial<DrawerContext>) => {
    setDrawerContext((prev) => ({
      ...prev,
      ...ctx,
      open: true,
    }))
  }

  // Close drawer helper
  const handleCloseDrawer = () => {
    setDrawerContext((prev) => ({
      ...prev,
      open: false,
    }))
  }

  // Auto-open drawer after 30 seconds of browsing (as specified)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDrawerContext((current) => {
        if (!current.open) {
          return {
            open: true,
            source: 'trial',
          }
        }
        return current
      })
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-linen text-espresso font-sans selection:bg-travertine selection:text-terra relative pb-16 lg:pb-0">
      {/* Tactile paper grain overlay */}
      <div id="grain" aria-hidden="true" />

      {/* Top Editorial Ticker Bar */}
      <Ticker onOpenDrawer={handleOpenDrawer} />

      {/* Sticky Header with Architectural Branding */}
      <Header onOpenDrawer={handleOpenDrawer} />

      {/* Main Architectural Sections */}
      <main>
        {/* Section A: Asymmetric Hero with Visual Switcher */}
        <Hero onOpenDrawer={handleOpenDrawer} />

        {/* Section B: Methodology & 6 Disciplines Showcase Cards */}
        <Disciplines onOpenDrawer={handleOpenDrawer} />

        {/* High-Converting 15-Second Class Matcher Quiz */}
        <ClassMatcher onOpenDrawer={handleOpenDrawer} onToast={showToast} />

        {/* Section C: Timetable & Workshops (with Day Cards & Table Toggle) */}
        <Schedule onOpenDrawer={handleOpenDrawer} onToast={showToast} />

        {/* Trust Architecture: Aerial Rigging & Safety Blueprint */}
        <TrustBlueprint />

        {/* Section D: Pricing Ledger & Live Custom Package Calculator */}
        <Pricing onSelectPlan={setSelectedPlan} onToast={showToast} />

        {/* Social Proof: Real Practitioner Transformations & Reviews */}
        <Testimonials />

        {/* Section E: Visual Archive with Lightbox Modal */}
        <Gallery />

        {/* Section F: Corporate Wellness (Dark Bark Contrast) */}
        <Corporate onToast={showToast} />

        {/* Section G: Direct Dispatch Forms */}
        <Forms
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
          onToast={showToast}
        />
      </main>

      {/* Studio Architectural Footer */}
      <Footer onOpenLegal={setLegalModal} />

      {/* Floating Mobile Sticky Conversion Bar */}
      <StickyConversionBar onOpenDrawer={handleOpenDrawer} />

      {/* Right-Hand Architectural Slide-Over Drawer */}
      <Drawer
        context={drawerContext}
        onClose={handleCloseDrawer}
        onToast={showToast}
      />

      {/* Legal Policies Modal */}
      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />

      {/* Understated Editorial Toast Banner */}
      <Toast
        show={toast.show}
        message={toast.message}
      />
    </div>
  )
}

export default App
