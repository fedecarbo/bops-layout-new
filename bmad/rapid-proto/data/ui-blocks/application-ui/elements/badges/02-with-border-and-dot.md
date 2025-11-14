---
group: Application UI
category: Elements
element: Badges
variant: With border and dot
tech: React
tailwind: v4.1
deps: []
tags:
  - badge
  - status
  - label
  - bordered
  - status-indicator
  - color-variants
a11y:
  - aria-hidden on decorative SVG dots
notes: |-
  Badges with border and leading status dot indicator. Uses SVG circles for colored dots with gap-x-1.5 spacing. Neutral gray border and text with colored dot provides subtle status indication. Seven color variants for different states.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}
```
