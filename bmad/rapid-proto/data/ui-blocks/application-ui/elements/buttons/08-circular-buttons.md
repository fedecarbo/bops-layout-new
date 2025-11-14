---
group: Application UI
category: Elements
element: Buttons
variant: Circular buttons
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - button
  - circular
  - icon-only
  - fab
  - multiple-sizes
a11y:
  - aria-hidden on decorative icons
  - keyboard focus indicators
  - focus-visible outline
notes: |
  Icon-only circular buttons (floating action button style). Uses equal padding on all sides with rounded-full to create perfect circles. Common for add/create actions or compact toolbars.
---

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1.5 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-2 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
    </>
  )
}
```
