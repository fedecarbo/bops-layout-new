---
group: Application UI
category: Forms
element: Select Menus
variant: Simple native
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - select
  - dropdown
  - native
  - form-field
a11y:
  - label associated with select via htmlFor/id
  - aria-hidden on decorative chevron icon
notes: |
  Native HTML select with custom chevron icon overlay. Uses CSS Grid to position
  chevron over select. appearance-none removes native dropdown arrow. focus-visible for keyboard-only focus ring.
---

```tsx
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <>
      <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
        Location
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          id="location"
          name="location"
          defaultValue="Canada"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </>
  )
}
```
