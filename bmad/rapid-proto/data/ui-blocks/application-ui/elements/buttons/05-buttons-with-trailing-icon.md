---
group: Application UI
category: Elements
element: Buttons
variant: Buttons with trailing icon
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - button
  - icon
  - trailing-icon
  - multiple-sizes
a11y:
  - aria-hidden on decorative icons
  - keyboard focus indicators
  - focus-visible outline
notes: |
  Primary buttons with trailing icons. Uses negative right margin (-mr-0.5) for optical alignment. Common pattern for action buttons that suggest forward movement or external links.
---

```tsx
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 size-5" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 size-5" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 size-5" />
      </button>
    </>
  )
}
```
