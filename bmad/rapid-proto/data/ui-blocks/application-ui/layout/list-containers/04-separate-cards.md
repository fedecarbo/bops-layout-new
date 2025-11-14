---
group: Application UI
category: Layout
element: List Containers
variant: Separate cards
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - card
  - separated
  - stacked
a11y:
  - role="list" for semantic list markup
notes: |
  List with each item as a separate card. Uses space-y-3 for vertical spacing between cards. Each card has its own shadow and rounded corners. Creates more visual separation than divided lists.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
```
