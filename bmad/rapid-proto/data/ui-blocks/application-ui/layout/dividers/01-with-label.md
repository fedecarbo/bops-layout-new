---
group: Application UI
category: Layout
element: Dividers
variant: With label
tech: React
tailwind: v4.1
deps: []
tags:
  - divider
  - separator
  - label
  - centered
a11y:
  - aria-hidden on decorative lines
notes: |
  Horizontal divider with centered text label. Uses flex with full-width borders on each side and white background on label to overlay the line. Common for form sections or authentication flows.
---

```tsx
export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500">Continue</span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
```
