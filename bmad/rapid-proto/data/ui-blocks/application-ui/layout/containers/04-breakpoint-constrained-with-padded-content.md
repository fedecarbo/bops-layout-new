---
group: Application UI
category: Layout
element: Containers
variant: Constrained to breakpoint with padded content
tech: React
tailwind: v4.1
deps: []
tags:
  - container
  - responsive
  - breakpoint
  - padding
  - mobile-padding
a11y: []
notes: |
  Responsive container with padding at all breakpoints using Tailwind's container class. Max-width adjusts per breakpoint (sm, md, lg, xl, 2xl). Provides consistent padding that scales with screen size.
---

```tsx
export default function Example() {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
```
