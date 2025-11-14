---
group: Application UI
category: Forms
element: Input Groups
variant: Input with validation error
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/16/solid'
tags:
  - input
  - validation
  - error
  - email
  - form-field
  - icon
a11y:
  - aria-invalid marks invalid state
  - aria-describedby links to error message
  - aria-hidden on decorative icon
notes: |
  Error state input with validation icon overlay. Uses CSS Grid with col-start-1/row-start-1
  to position icon over input. Red color scheme for error styling throughout.
---

```tsx
import { ExclamationCircleIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        Email
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          defaultValue="adamwathan"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid="true"
          aria-describedby="email-error"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9 sm:text-sm/6"
        />
        <ExclamationCircleIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
        />
      </div>
      <p id="email-error" className="mt-2 text-sm text-red-600">
        Not a valid email address.
      </p>
    </div>
  )
}
```
