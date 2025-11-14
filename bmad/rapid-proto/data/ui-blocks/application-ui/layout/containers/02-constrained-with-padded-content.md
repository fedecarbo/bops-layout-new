---
group: Application UI
category: Layout
element: Containers
variant: Constrained with padded content
tech: React
tailwind: v4.1
deps: []
tags:
  - container
  - responsive
  - max-width
  - padding
  - mobile-padding
a11y: []
notes: |
  Standard responsive container with padding at all breakpoints. Uses px-4 on mobile, increasing to px-6 on sm and px-8 on lg. Max-width of 7xl keeps content centered and readable on large screens.
---

```tsx
export default function Example() {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
```
