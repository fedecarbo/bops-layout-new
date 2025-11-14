---
group: Application UI
category: Forms
element: Input Groups
variant: Input with leading icon and trailing button
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - input
  - icon
  - button
  - search
  - form-field
  - action
a11y:
  - aria-hidden on decorative icons
  - button with descriptive text
notes: |
  Input with leading icon and trailing action button. Uses flexbox with -mr-px on input
  grid wrapper for seamless border connection. Button has focus:relative for proper focus ring layering.
---

```tsx
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="query" className="block text-sm/6 font-medium text-gray-900">
        Search candidates
      </label>
      <div className="mt-2 flex">
        <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input
            id="query"
            name="query"
            type="text"
            placeholder="John Smith"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <UsersIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 size-4 text-gray-400" />
          Sort
        </button>
      </div>
    </div>
  )
}
```
