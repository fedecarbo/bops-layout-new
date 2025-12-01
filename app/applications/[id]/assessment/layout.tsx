'use client'

import { AssessmentProvider } from './AssessmentContext'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return <AssessmentProvider>{children}</AssessmentProvider>
}
