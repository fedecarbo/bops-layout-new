---
group: Application UI
category: Elements
element: Button Groups
variant: Icon only
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - button-group
  - icon-only
  - navigation
  - pagination
a11y:
  - sr-only labels for icon buttons
  - aria-hidden on decorative icons
  - keyboard focus indicators
notes: |
  Icon-only button group for navigation controls (previous/next). Uses sr-only labels for accessibility. Common pattern for pagination or carousel navigation. Compact design with square padding.
---

```tsx
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon aria-hidden="true" className="size-5" />
      </button>
    </span>
  )
}
```
