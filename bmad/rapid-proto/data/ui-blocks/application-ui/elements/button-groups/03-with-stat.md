---
group: Application UI
category: Elements
element: Button Groups
variant: With stat
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - button-group
  - icon
  - stat
  - counter
a11y:
  - aria-hidden on decorative icons
  - keyboard focus indicators
notes: |
  Button group combining action button with statistical display. Left button has icon and label, right button shows count. Common pattern for social features like bookmarks, likes, or shares with engagement metrics.
---

```tsx
import { BookmarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
      >
        <BookmarkIcon aria-hidden="true" className="-ml-0.5 size-5 text-gray-400" />
        Bookmark
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
      >
        12k
      </button>
    </span>
  )
}
```
