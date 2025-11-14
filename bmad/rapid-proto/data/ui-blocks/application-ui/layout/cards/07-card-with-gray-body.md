---
group: Application UI
category: Layout
element: Cards
variant: Card with gray body
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - header
  - gray-background
  - sections
a11y: []
notes: |
  Inverted card design with white header and gray body (bg-gray-50). Header uses reduced desktop padding (py-5). Useful for emphasizing header content or creating visual hierarchy with form sections.
---

```tsx
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
```
