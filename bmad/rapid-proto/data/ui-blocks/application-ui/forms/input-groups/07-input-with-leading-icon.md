---
group: Application UI
category: Forms
element: Input Groups
variant: Input with leading icon
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - input
  - icon
  - email
  - form-field
  - leading-icon
a11y:
  - aria-hidden on decorative icon
  - pointer-events-none prevents icon interaction
notes: |
  Input with leading icon using CSS Grid overlay technique. Icon positioned at start
  with pl-10/sm:pl-9 padding on input to accommodate icon space.
---

```tsx
import { EnvelopeIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        Email
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
        />
        <EnvelopeIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
        />
      </div>
    </div>
  )
}
```
