---
group: Application UI
category: Layout
element: Cards
variant: Card with header
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - header
  - divided
  - sections
a11y: []
notes: |
  Two-section card with header and body separated by divider. Header uses less vertical padding on desktop (py-5 vs p-6) for visual hierarchy. Divide-y utility creates horizontal borders between sections.
---

```tsx
export default function Example() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
```
