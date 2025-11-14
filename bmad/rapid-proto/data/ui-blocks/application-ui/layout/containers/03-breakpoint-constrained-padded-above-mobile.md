---
group: Application UI
category: Layout
element: Containers
variant: Full-width on mobile, constrained to breakpoint with padded content above mobile
tech: React
tailwind: v4.1
deps: []
tags:
  - container
  - responsive
  - breakpoint
  - padding
a11y: []
notes: |
  Uses Tailwind's container class for responsive max-width based on current breakpoint. Full-width on mobile, then adds horizontal padding on sm+ breakpoints. Container automatically adjusts max-width per breakpoint.
---

```tsx
export default function Example() {
  return <div className="container mx-auto sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
```
