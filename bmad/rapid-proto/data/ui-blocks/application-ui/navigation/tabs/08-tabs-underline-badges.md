---
group: Application UI
category: Navigation
element: Tabs
variant: Tabs with underline and badges
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags: [navigation, tabs, badges, responsive, counts]
a11y:
  - "Uses <nav aria-label='Tabs'>"
  - "aria-current for active tab"
  - "aria-label on select element"
  - "aria-hidden on chevron icon"
notes: |
  Tabs with optional count badges.
  Badges hidden on mobile (md:inline-block).
  Active tab badges use brand colors (indigo-500/20 bg).
  Tabs use whitespace-nowrap to prevent text wrapping.
---

```tsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'Applied', href: '#', count: '52', current: false },
  { name: 'Phone Screening', href: '#', count: '6', current: false },
  { name: 'Interview', href: '#', count: '4', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-gray-100 outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
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
        <div className="border-b border-white/10">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href="#"
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:border-white/20 hover:text-white',
                  'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap',
                )}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/10 text-gray-300',
                      'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block',
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
```
