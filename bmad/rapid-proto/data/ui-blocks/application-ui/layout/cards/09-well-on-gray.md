---
group: Application UI
category: Layout
element: Cards
variant: Well on gray
tech: React
tailwind: v4.1
deps: []
tags:
  - well
  - card
  - gray-background
  - inset
  - contrast
a11y: []
notes: |
  Darker well using bg-gray-200 for use on gray backgrounds. Provides more contrast than bg-gray-50 when placed on gray-100 or similar backgrounds. Creates clear visual separation in gray-themed layouts.
---

```tsx
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-200">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
```
