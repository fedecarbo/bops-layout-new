---
group: Application UI
category: Layout
element: Cards
variant: Well, edge-to-edge on mobile
tech: React
tailwind: v4.1
deps: []
tags:
  - well
  - card
  - responsive
  - mobile
  - edge-to-edge
  - gray-background
a11y: []
notes: |
  Mobile-optimized well without rounded corners on small screens. Adds rounded-lg on sm+ breakpoints. Combines well styling with edge-to-edge mobile pattern for seamless integration with full-width containers.
---

```tsx
export default function Example() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
```
