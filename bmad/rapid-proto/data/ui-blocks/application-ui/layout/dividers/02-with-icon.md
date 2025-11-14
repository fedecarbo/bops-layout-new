---
group: Application UI
category: Layout
element: Dividers
variant: With icon
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - divider
  - separator
  - icon
  - centered
a11y:
  - aria-hidden on decorative lines and icons
notes: |
  Horizontal divider with centered icon instead of text. Icon wrapped in span with white background to overlay the border. Useful for visual breaks or add/expand sections.
---

```tsx
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500">
          <PlusIcon aria-hidden="true" className="size-5 text-gray-500" />
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
```
