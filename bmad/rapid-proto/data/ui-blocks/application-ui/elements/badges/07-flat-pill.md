---
group: Application UI
category: Elements
element: Badges
variant: Flat pill
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - pill
  - flat
  - no-border
  - rounded-full
  - color-variants
a11y:
  - semantic span elements
notes: |-
  Pill-shaped flat badges with rounded-full and no border. Uses 100-shade backgrounds for solid color fill. Eight color variants with fully rounded ends for softer appearance.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}
```
