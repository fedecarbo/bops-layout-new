'use client'

import { AssessmentProvider } from './AssessmentContext'
import { SidebarThemeProvider } from './SidebarThemeContext'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarThemeProvider>
      <AssessmentProvider>{children}</AssessmentProvider>
    </SidebarThemeProvider>
  )
}
