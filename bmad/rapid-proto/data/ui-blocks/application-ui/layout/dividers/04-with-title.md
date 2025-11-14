---
group: Application UI
category: Layout
element: Dividers
variant: With title
tech: React
tailwind: v4.1
deps: []
tags:
  - divider
  - separator
  - title
  - centered
  - heading
a11y:
  - aria-hidden on decorative lines
notes: |
  Divider with centered section title using larger, bold text. Uses base font size and semibold weight for emphasis. Common pattern for major section breaks or category headers.
---

```tsx
export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-base font-semibold text-gray-900">Projects</span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
```
