---
group: Application UI
category: Layout
element: List Containers
variant: Card with dividers, full-width on mobile
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - card
  - dividers
  - responsive
  - mobile
  - edge-to-edge
a11y:
  - role="list" for semantic list markup
notes: |
  Mobile-optimized list card without rounded corners on small screens. Responsive padding adjusts from px-4 on mobile to px-6 on sm+. Adds rounded-md on sm+ for desktop appearance.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
```
