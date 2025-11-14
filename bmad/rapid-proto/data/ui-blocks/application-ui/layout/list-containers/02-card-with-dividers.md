---
group: Application UI
category: Layout
element: List Containers
variant: Card with dividers
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - card
  - dividers
  - shadow
a11y:
  - role="list" for semantic list markup
notes: |
  List wrapped in card container with shadow and rounded corners. Dividers separate items within the card. Horizontal padding (px-6) keeps content from card edges. Common pattern for contained lists.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-sm">
      <ul role="list" className="divide-y divide-gray-200">
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
