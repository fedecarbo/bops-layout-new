---
group: Application UI
category: Layout
element: Cards
variant: Card with gray footer
tech: React
tailwind: v4.1
deps: []
tags:
  - card
  - footer
  - gray-background
  - sections
a11y: []
notes: |
  Card with white body and gray footer (bg-gray-50) for visual distinction. No divider needed as background color provides separation. Common for cards with secondary actions or metadata in footer.
---

```tsx
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
```
