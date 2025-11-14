---
group: Application UI
category: Elements
element: Badges
variant: Flat with dot
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - flat
  - no-border
  - status-indicator
  - color-variants
a11y:
  - aria-hidden on decorative SVG dots
notes: |-
  Flat badges with leading status dot indicator. Combines solid background colors with SVG circle dots. Gap-x-1.5 provides consistent spacing between dot and text. Eight color variants with matching dot colors.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}
```
