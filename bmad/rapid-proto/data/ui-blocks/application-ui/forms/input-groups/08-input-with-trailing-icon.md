---
group: Application UI
category: Forms
element: Input Groups
variant: Input with trailing icon
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - input
  - icon
  - form-field
  - trailing-icon
  - help
a11y:
  - aria-hidden on decorative icon
  - pointer-events-none prevents icon interaction
notes: |
  Input with trailing icon using CSS Grid and justify-self-end. Icon positioned at end
  with pr-10/sm:pr-9 padding on input. Useful for help icons or status indicators.
---

```tsx
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="account-number" className="block text-sm/6 font-medium text-gray-900">
        Account number
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="account-number"
          name="account-number"
          type="text"
          placeholder="000-00-0000"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6"
        />
        <QuestionMarkCircleIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4"
        />
      </div>
    </div>
  )
}
```
