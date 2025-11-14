---
group: Application UI
category: Layout
element: Cards
variant: Card with header and footer
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - header
  - footer
  - divided
  - sections
a11y: []
notes: |
  Three-section card with header, body, and footer. Each section has optimized vertical padding: header uses py-5/px-6 on desktop, body uses full p-6, footer uses compact py-4. Dividers create clear visual separation.
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
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
```
