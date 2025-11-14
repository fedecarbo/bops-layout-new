---
group: Application UI
category: Layout
element: Containers
variant: Narrow constrained with padded content
tech: React
tailwind: v4.1
deps: []
tags:
  - container
  - responsive
  - nested
  - narrow
  - max-width
  - padding
a11y: []
notes: |
  Two-tier container layout with outer max-w-7xl wrapper and inner max-w-3xl constraint. Creates narrow content column ideal for long-form reading (articles, blog posts). Outer container provides page-level padding.
---

```tsx
export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
    </div>
  )
}
```
