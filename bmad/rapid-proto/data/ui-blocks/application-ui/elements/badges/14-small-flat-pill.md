---
group: Application UI
category: Elements
element: Badges
variant: Small flat pill
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - small
  - compact
  - pill
  - flat
  - no-border
  - rounded-full
  - color-variants
a11y:
  - semantic span elements
notes: |-
  Compact pill-shaped flat badges with minimal padding and no borders. Combines rounded-full with px-1.5 py-0.5 and 100-shade backgrounds. Most space-efficient pill badge variant.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}
```
