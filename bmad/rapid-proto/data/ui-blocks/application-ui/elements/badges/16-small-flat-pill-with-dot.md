---
group: Application UI
category: Elements
element: Badges
variant: Small flat pill with dot
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
  - status-indicator
  - color-variants
a11y:
  - aria-hidden on decorative SVG dots
notes: |-
  Compact pill-shaped flat badges with leading status dot. Most space-efficient badge variant with status indication. Combines rounded-full, px-1.5 py-0.5 padding, and colored SVG dots.
---

```tsx
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}
```
