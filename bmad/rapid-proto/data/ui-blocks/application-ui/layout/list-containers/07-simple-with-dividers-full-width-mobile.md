---
group: Application UI
category: Layout
element: List Containers
variant: Simple with dividers, full-width on mobile
tech: React
tailwind: v4.1
deps: []
tags:
  - list
  - dividers
  - responsive
  - mobile
  - simple
a11y:
  - role="list" for semantic list markup
notes: |
  Simple divided list with responsive padding. Adds horizontal padding (px-4) on mobile, removes it (px-0) on sm+ breakpoints. Useful when list is within a padded container on desktop but needs edge-to-edge spacing on mobile.
---

```tsx
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
```
