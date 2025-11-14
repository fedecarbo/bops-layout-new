---
group: Application UI
category: Layout
element: Cards
variant: Well
tech: React
tailwind: v4.1
deps: []
tags:
  - well
  - card
  - gray-background
  - inset
a11y: []
notes: |
  Well component using light gray background (bg-gray-50) without shadow for subtle, inset appearance. Creates visual depth through color rather than elevation. Useful for secondary content or nested sections.
---

```tsx
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-50">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
```
