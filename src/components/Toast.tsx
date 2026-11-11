import type { FC } from 'react'

interface ToastProps {
  message: string
  show: boolean
}

export const Toast: FC<ToastProps> = ({ message, show }) => {
  return (
    <div
      className={`toast ${show ? 'show' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
        <span>{message}</span>
      </div>
    </div>
  )
}
