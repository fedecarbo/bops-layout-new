// Sidebar Theme Definitions
// Supports multiple color schemes for the sidebar while keeping layout/content unchanged

export type SidebarTheme = 'light' | 'dark' | 'brand'

export interface ThemeColors {
  name: string
  description: string
  colors: {
    // Background and borders
    background: string
    border: string

    // Navigation text
    textDefault: string
    textHover: string
    textActive: string

    // Navigation backgrounds
    bgHover: string
    bgActive: string

    // Icons
    iconDefault: string
    iconHover: string
    iconActive: string

    // Section headings
    heading: string

    // Dividers
    divider: string

    // Checkboxes
    checkboxCompleteBorder: string
    checkboxCompleteBg: string
    checkboxCompleteCheck: string
    checkboxIncompleteBorder: string
    checkboxIncompleteBg: string

    // Case summary (top banner below header)
    caseSummaryBg: string
    caseSummaryBorder: string
    caseSummaryTextPrimary: string
    caseSummaryTextSecondary: string
    caseSummaryDivider: string
  }
}

export const sidebarThemes: Record<SidebarTheme, ThemeColors> = {
  light: {
    name: 'Light',
    description: 'Clean white sidebar with GOV.UK blue accents',
    colors: {
      // Background and borders
      background: '#ffffff', // white
      border: '#cecece', // GOV.UK gray-100

      // Navigation text - GOV.UK blue progression
      textDefault: '#1d70b8', // GOV.UK blue-500 (Primary blue)
      textHover: '#155fa1', // GOV.UK blue-600
      textActive: '#191b1b', // GOV.UK gray-900

      // Navigation backgrounds - subtle gray
      bgHover: '#f3f3f3', // GOV.UK gray-50
      bgActive: '#f3f3f3', // GOV.UK gray-50

      // Icons - gray default, blue on interaction
      iconDefault: '#6c6d6d', // GOV.UK gray-300
      iconHover: '#1d70b8', // GOV.UK blue-500
      iconActive: '#191b1b', // GOV.UK gray-900

      // Section headings
      heading: '#6c6d6d', // GOV.UK gray-300

      // Dividers
      divider: '#cecece', // GOV.UK gray-100

      // Checkboxes - GOV.UK blue accent for completed
      checkboxCompleteBorder: '#3d7ebc', // GOV.UK blue-400
      checkboxCompleteBg: '#1d70b8', // GOV.UK blue-500 (Primary)
      checkboxCompleteCheck: '#ffffff', // white checkmark
      checkboxIncompleteBorder: '#858686', // GOV.UK gray-200
      checkboxIncompleteBg: 'transparent',

      // Case summary
      caseSummaryBg: '#ffffff', // white background
      caseSummaryBorder: '#cecece', // GOV.UK gray-100
      caseSummaryTextPrimary: '#191b1b', // GOV.UK gray-900
      caseSummaryTextSecondary: '#434444', // GOV.UK gray-500
      caseSummaryDivider: '#858686', // GOV.UK gray-200
    },
  },

  dark: {
    name: 'Dark',
    description: 'Dark gray sidebar with GOV.UK colors',
    colors: {
      // Background and borders - GOV.UK dark gray
      background: '#191b1b', // GOV.UK gray-900
      border: 'rgba(255, 255, 255, 0.1)', // white/10 - subtle light border

      // Navigation text - lighter gray to white progression for better visibility
      textDefault: '#cecece', // GOV.UK gray-100 - lighter default text
      textHover: '#ffffff', // white - bright on hover
      textActive: '#ffffff', // white - bright when active

      // Navigation backgrounds - white overlays for depth
      bgHover: 'rgba(255, 255, 255, 0.05)', // white/5 - very subtle hover
      bgActive: 'rgba(255, 255, 255, 0.05)', // white/5 - same for active

      // Icons - match text colors
      iconDefault: '#cecece', // GOV.UK gray-100 - lighter icons
      iconHover: '#ffffff', // white - bright on hover
      iconActive: '#ffffff', // white - bright when active

      // Section headings
      heading: '#cecece', // GOV.UK gray-100

      // Dividers
      divider: 'rgba(255, 255, 255, 0.1)', // white/10 - matches border

      // Checkboxes - GOV.UK blue accent for completed
      checkboxCompleteBorder: '#5694ca', // GOV.UK blue-300
      checkboxCompleteBg: '#3d7ebc', // GOV.UK blue-400
      checkboxCompleteCheck: '#ffffff', // white checkmark
      checkboxIncompleteBorder: 'rgba(255, 255, 255, 0.2)', // white/20 - visible on dark
      checkboxIncompleteBg: 'transparent',

      // Case summary - slightly lighter than sidebar
      caseSummaryBg: '#262626', // GOV.UK gray-800
      caseSummaryBorder: 'rgba(255, 255, 255, 0.1)', // white/10 border
      caseSummaryTextPrimary: '#ffffff', // white - primary text
      caseSummaryTextSecondary: '#cecece', // GOV.UK gray-100
      caseSummaryDivider: 'rgba(255, 255, 255, 0.2)', // white/20 - divider
    },
  },

  brand: {
    name: 'Brand',
    description: 'GOV.UK primary blue brand sidebar',
    colors: {
      // Background and borders - GOV.UK primary blue
      background: '#1d70b8', // GOV.UK blue-500 (Primary brand blue)
      border: 'rgba(255, 255, 255, 0.1)', // white/10 - subtle light border

      // Navigation text - very light blue to white progression
      textDefault: '#f4f8fb', // GOV.UK blue-50 - very light blue for readability
      textHover: '#ffffff', // white - bright on hover
      textActive: '#ffffff', // white - bright when active

      // Navigation backgrounds - darker blue overlays
      bgHover: 'rgba(14, 77, 136, 0.3)', // GOV.UK blue-700/30 - darkened blue hover
      bgActive: 'rgba(14, 77, 136, 0.3)', // GOV.UK blue-700/30 - same for active

      // Icons - match text colors for consistency
      iconDefault: '#f4f8fb', // GOV.UK blue-50 - very light blue icons
      iconHover: '#ffffff', // white - bright on hover
      iconActive: '#ffffff', // white - bright when active

      // Section headings
      heading: '#f4f8fb', // GOV.UK blue-50

      // Dividers
      divider: 'rgba(255, 255, 255, 0.15)', // white/15 - subtle divider

      // Checkboxes - lighter GOV.UK blue for completed (inverted)
      checkboxCompleteBorder: '#8eb8dc', // GOV.UK blue-200 - light border
      checkboxCompleteBg: '#d2e2f1', // GOV.UK blue-100 - light fill
      checkboxCompleteCheck: '#0e4d88', // GOV.UK blue-700 - dark check for contrast
      checkboxIncompleteBorder: 'rgba(255, 255, 255, 0.3)', // white/30 - visible on blue
      checkboxIncompleteBg: 'transparent',

      // Case summary - slightly darker GOV.UK blue for contrast
      caseSummaryBg: '#155fa1', // GOV.UK blue-600 - one shade darker
      caseSummaryBorder: 'rgba(255, 255, 255, 0.1)', // white/10 border
      caseSummaryTextPrimary: '#ffffff', // white - primary text
      caseSummaryTextSecondary: '#f4f8fb', // GOV.UK blue-50 - very light secondary
      caseSummaryDivider: 'rgba(255, 255, 255, 0.2)', // white/20 - divider
    },
  },
}

export const DEFAULT_SIDEBAR_THEME: SidebarTheme = 'light'
