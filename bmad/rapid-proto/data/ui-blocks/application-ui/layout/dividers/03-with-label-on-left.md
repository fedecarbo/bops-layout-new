---
group: Application UI
category: Layout
element: Dividers
variant: With label on left
tech: React
tailwind: v4.1
deps: []
tags:
  - divider
  - separator
  - label
  - left-aligned
a11y:
  - aria-hidden on decorative lines
notes: |
  Horizontal divider with left-aligned text label. Label uses pr-2 for spacing from the line. More compact than centered variant, useful for section headers or list groupings.
---

```tsx
export default function Example() {
  return (
    <div className="flex items-center">
      <div className="relative flex justify-start">
        <span className="bg-white pr-2 text-sm text-gray-500">Continue</span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
```
