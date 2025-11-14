---
group: Application UI
category: Layout
element: Cards
variant: Card, edge-to-edge on mobile
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - responsive
  - mobile
  - edge-to-edge
a11y: []
notes: |
  Mobile-optimized card that removes rounded corners on small screens for edge-to-edge appearance. Adds rounded-lg on sm+ breakpoints. Use with full-width mobile container for seamless integration.
---

```tsx
export default function Example() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
```
