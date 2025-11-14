---
group: Application UI
category: Headings
element: Section Headings
variant: With tabs
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - heading
  - section
  - tabs
  - navigation
  - dropdown
  - responsive
  - icons
a11y:
  - semantic heading hierarchy
  - aria-label for select dropdown
  - aria-current for active tab
  - aria-hidden on decorative icons
notes: |
  Section heading with tab navigation that adapts by device.
  Mobile shows custom-styled select dropdown with chevron icon overlay using grid positioning.
  Desktop displays horizontal underline tabs with active state indication.
  Uses negative bottom margin (-mb-px) on nav to overlap tabs with border.
  Includes classNames helper for dynamic class composition. Responsive switch at sm breakpoint.
---

```tsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'Applied', href: '#', current: false },
  { name: 'Phone Screening', href: '#', current: false },
  { name: 'Interview', href: '#', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Hired', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5 sm:pb-0">
      <h3 className="text-base font-semibold text-white">Candidates</h3>
      <div className="mt-3 sm:mt-4">
        <div className="grid grid-cols-1 sm:hidden">
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            defaultValue={tabs.find((tab) => tab.current).name}
            aria-label="Select a tab"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400"
          />
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:border-white/20 hover:text-white',
                  'border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
```
