---
group: Application UI
category: Headings
element: Section Headings
variant: With input group
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - heading
  - section
  - search
  - input
  - button
  - input-group
  - responsive
  - icons
a11y:
  - semantic heading hierarchy
  - aria-label for search input
  - aria-hidden on decorative icons
  - keyboard accessible button
notes: |
  Section heading with search input and sort button as connected input group.
  Search field uses grid overlay technique for icon positioning (col-start-1 row-start-1).
  Input and button share connected styling with rounded-l-md/rounded-r-md and
  matching outlines. Negative margin (-mr-px) removes double border between elements.
  Responsive layout stacks on mobile and aligns horizontally on desktop.
---

```tsx
import { BarsArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input
            id="query"
            name="query"
            type="text"
            placeholder="Search candidates"
            aria-label="Search candidates"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-gray-800/50 py-1.5 pr-3 pl-10 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:pl-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white/10 px-3 py-2 text-sm font-semibold text-white outline-1 -outline-offset-1 outline-gray-700 hover:bg-white/20 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        >
          <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 size-4 text-gray-400" />
          Sort
        </button>
      </div>
    </div>
  )
}
```
