---
group: Application UI
category: Headings
element: Page Headings
variant: With filters and action
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - heading
  - page-title
  - filters
  - tabs
  - action
  - button
  - responsive
  - icons
a11y:
  - aria-hidden on decorative icons
  - semantic heading hierarchy
notes: |
  Compact page heading with inline filter tabs and primary action button.
  Uses flexible wrapping layout where filters reorder on mobile (order-last/order-0).
  Filter tabs styled as text links with active state indication (indigo-400 vs gray-300).
  Border separator appears on tablet+ breakpoints. Primary action button auto-aligns
  right using ml-auto.
---

```tsx
import { PlusSmallIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 className="text-base/7 font-semibold text-white">Cashflow</h1>
        <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-0 sm:w-auto sm:border-l sm:border-white/15 sm:pl-6 sm:text-sm/7">
          <a href="#" className="text-indigo-400">
            Last 7 days
          </a>
          <a href="#" className="text-gray-300">
            Last 30 days
          </a>
          <a href="#" className="text-gray-300">
            All-time
          </a>
        </div>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
          New invoice
        </a>
      </div>
    </div>
  )
}
```
