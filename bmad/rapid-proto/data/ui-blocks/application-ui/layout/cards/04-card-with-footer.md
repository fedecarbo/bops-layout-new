---
group: Application UI
category: Layout
element: Cards
variant: Card with footer
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - footer
  - divided
  - sections
a11y: []
notes: |
  Card with body and footer sections divided by horizontal border. Footer uses reduced vertical padding (py-4) at all sizes for compact action area. Common pattern for cards with action buttons.
---

```tsx
export default function Example() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
```
