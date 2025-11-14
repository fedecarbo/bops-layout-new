---
group: Application UI
category: Layout
element: List Containers
variant: Separate cards, full-width on mobile
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - card
  - separated
  - responsive
  - mobile
  - edge-to-edge
a11y:
  - role="list" for semantic list markup
notes: |
  Separated card list optimized for mobile. Cards are edge-to-edge on small screens, adding rounded-md and increased padding on sm+. Maintains space-y-3 vertical spacing at all breakpoints.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-6">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
```
