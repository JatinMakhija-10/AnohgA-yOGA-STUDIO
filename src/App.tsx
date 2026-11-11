import { useState, useEffect } from 'react'
import type { DrawerContext } from './types'
import { Ticker } from './components/Ticker'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer'
import { LegalModal, type LegalModalType } from './components/LegalModal'
import { Toast } from './components/Toast'
import { Footer } from './components/Footer'

import { Hero } from './sections/Hero'
import { Disciplines } from './sections/Disciplines'
import { Schedule } from './sections/Schedule'
import { Pricing } from './sections/Pricing'
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
      // Only open if the drawer isn't already active and user hasn't opened legal modal
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
    <div className="min-h-screen bg-linen text-espresso font-sans selection:bg-travertine selection:text-terra relative">
      {/* Tactile paper grain overlay */}
      <div id="grain" aria-hidden="true" />

      {/* Top Editorial Ticker Bar */}
      <Ticker onOpenDrawer={handleOpenDrawer} />

      {/* Sticky Header with Architectural Branding */}
      <Header onOpenDrawer={handleOpenDrawer} />

      {/* Main Architectural Sections */}
      <main>
        {/* Section A: Asymmetric Hero */}
        <Hero onOpenDrawer={handleOpenDrawer} />

        {/* Section B: Methodology & 6 Disciplines */}
        <Disciplines onOpenDrawer={handleOpenDrawer} />

        {/* Section C: Timetable & Workshops */}
        <Schedule onOpenDrawer={handleOpenDrawer} onToast={showToast} />

        {/* Section D: Pricing Ledger & FAQ */}
        <Pricing onSelectPlan={setSelectedPlan} />

        {/* Section E: Visual Archive */}
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
