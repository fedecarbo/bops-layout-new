'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, SwatchIcon } from '@heroicons/react/20/solid'
import { useSidebarTheme } from './SidebarThemeContext'
import { sidebarThemes, SidebarTheme } from './sidebar-themes'

export function SidebarThemeSwitcher() {
  const { theme, setTheme } = useSidebarTheme()
  const currentTheme = sidebarThemes[theme]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <SwatchIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
        {currentTheme.name}
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {(Object.keys(sidebarThemes) as SidebarTheme[]).map((themeKey) => {
            const themeConfig = sidebarThemes[themeKey]
            const isActive = theme === themeKey

            return (
              <MenuItem key={themeKey}>
                <button
                  onClick={() => setTheme(themeKey)}
                  className={`${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                  } group flex w-full items-start px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                >
                  <div className="flex-1">
                    <div className="font-medium">{themeConfig.name}</div>
                    <div className="text-xs text-gray-500">
                      {themeConfig.description}
                    </div>
                    <div className="mt-2 flex gap-2">
                      <div
                        className="h-6 w-6 rounded border border-gray-300 shadow-sm"
                        style={{ backgroundColor: themeConfig.colors.background }}
                        title="Background"
                      />
                      <div
                        className="h-6 w-6 rounded border border-gray-300 shadow-sm"
                        style={{ backgroundColor: themeConfig.colors.border }}
                        title="Border"
                      />
                      <div
                        className="h-6 w-6 rounded border border-gray-300 shadow-sm"
                        style={{ backgroundColor: themeConfig.colors.textDefault }}
                        title="Primary text"
                      />
                    </div>
                  </div>
                  {isActive && (
                    <div className="ml-2 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-brand-blue"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </MenuItem>
            )
          })}
        </div>
      </MenuItems>
    </Menu>
  )
}
