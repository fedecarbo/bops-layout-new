---
group: Application UI
category: Layout
element: Dividers
variant: With title on left
tech: React
tailwind: v4.1
deps: []
tags:
  - divider
  - separator
  - title
  - left-aligned
  - heading
a11y:
  - aria-hidden on decorative lines
notes: |
  Left-aligned section title with divider line extending to the right. Bold text with pr-3 spacing. Ideal for sidebar sections, settings groups, or left-heavy layouts.
---

```tsx
export default function Example() {
  return (
    <div className="flex items-center">
      <div className="relative flex justify-start">
        <span className="bg-white pr-3 text-base font-semibold text-gray-900">Projects</span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
```
