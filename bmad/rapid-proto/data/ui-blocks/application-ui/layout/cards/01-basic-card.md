---
group: Application UI
category: Layout
element: Cards
variant: Basic card
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - container
  - shadow
  - rounded
a11y: []
notes: |
  Simple card with rounded corners, white background, and subtle shadow. Responsive padding increases from px-4 py-5 on mobile to p-6 on sm+ breakpoints. Foundation for content grouping.
---

```tsx
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
```
