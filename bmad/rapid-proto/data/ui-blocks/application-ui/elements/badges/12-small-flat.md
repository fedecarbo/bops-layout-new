---
group: Application UI
category: Elements
element: Badges
variant: Small flat
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - small
  - compact
  - flat
  - no-border
  - color-variants
a11y:
  - semantic span elements
notes: |-
  Compact flat badges without borders using reduced padding (px-1.5 py-0.5). Uses 100-shade backgrounds for solid colors. Space-efficient design for dense layouts or inline use.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}
```
