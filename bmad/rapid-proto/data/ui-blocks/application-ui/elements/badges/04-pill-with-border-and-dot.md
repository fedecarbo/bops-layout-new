---
group: Application UI
category: Elements
element: Badges
variant: Pill with border and dot
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - pill
  - bordered
  - rounded-full
  - status-indicator
  - color-variants
a11y:
  - aria-hidden on decorative SVG dots
notes: |-
  Pill-shaped badges with border and leading status dot. Combines rounded-full shape with neutral gray styling and colored dot indicators. Useful for status indicators with softer visual appearance.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}
```
