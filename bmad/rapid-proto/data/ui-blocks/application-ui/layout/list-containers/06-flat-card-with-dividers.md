---
group: Application UI
category: Layout
element: List Containers
variant: Flat card with dividers
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - card
  - dividers
  - border
  - flat
a11y:
  - role="list" for semantic list markup
notes: |
  Flat card design using border instead of shadow for subtle elevation. Border and dividers use matching gray-300 color for consistency. Alternative to shadowed cards for cleaner, flatter design aesthetic.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
```
