---
group: Application UI
category: Layout
element: List Containers
variant: Simple with dividers
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - dividers
  - simple
a11y:
  - role="list" for semantic list markup
notes: |
  Basic list container with horizontal dividers between items. Uses divide-y utility for automatic borders. Vertical padding (py-4) provides spacing. No background or shadow, suitable for minimal designs.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
```
