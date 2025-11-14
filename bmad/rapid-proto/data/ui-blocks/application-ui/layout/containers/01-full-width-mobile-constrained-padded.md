---
group: Application UI
category: Layout
element: Containers
variant: Full-width on mobile, constrained with padded content above
tech: React
tailwind: v4.1
deps: []
tags:
  - container
  - responsive
  - max-width
  - padding
a11y: []
notes: |
  Responsive container that's full-width on mobile, then adds horizontal padding on sm+ breakpoints. Constrained to max-w-7xl with centered alignment. No padding on mobile for edge-to-edge content.
---

```tsx
export default function Example() {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
```
