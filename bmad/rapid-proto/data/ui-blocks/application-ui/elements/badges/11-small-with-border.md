---
group: Application UI
category: Elements
element: Badges
variant: Small with border
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - small
  - compact
  - bordered
  - color-variants
a11y:
  - semantic span elements
notes: |-
  Compact badges with reduced padding (px-1.5 py-0.5 vs standard px-2 py-1). Maintains text-xs sizing with subtle inset-ring borders. Eight color variants optimized for space-constrained layouts.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 inset-ring inset-ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700 inset-ring inset-ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-1.5 py-0.5 text-xs font-medium text-pink-700 inset-ring inset-ring-pink-700/10">
        Badge
      </span>
    </>
  )
}
```
