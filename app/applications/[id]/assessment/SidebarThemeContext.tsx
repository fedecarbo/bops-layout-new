'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { SidebarTheme, DEFAULT_SIDEBAR_THEME } from './sidebar-themes'

interface SidebarThemeContextType {
  theme: SidebarTheme
  setTheme: (theme: SidebarTheme) => void
}

const SidebarThemeContext = createContext<SidebarThemeContextType | undefined>(
  undefined
)

const STORAGE_KEY = 'sidebar-theme-preference'

export function SidebarThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setThemeState] = useState<SidebarTheme>(DEFAULT_SIDEBAR_THEME)
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY) as SidebarTheme | null
    if (stored && (stored === 'light' || stored === 'dark' || stored === 'brand')) {
      setThemeState(stored)
    }
  }, [])

  // Save theme to localStorage when it changes
  const setTheme = (newTheme: SidebarTheme) => {
    setThemeState(newTheme)
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, newTheme)
    }
  }

  // Prevent hydration mismatch by using default theme until mounted
  const value = {
    theme: mounted ? theme : DEFAULT_SIDEBAR_THEME,
    setTheme,
  }

  return (
    <SidebarThemeContext.Provider value={value}>
      {children}
    </SidebarThemeContext.Provider>
  )
}

export function useSidebarTheme() {
  const context = useContext(SidebarThemeContext)
  if (context === undefined) {
    throw new Error('useSidebarTheme must be used within a SidebarThemeProvider')
  }
  return context
}
