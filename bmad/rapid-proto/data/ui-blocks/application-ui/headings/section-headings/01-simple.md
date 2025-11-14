---
group: Application UI
category: Headings
element: Section Headings
variant: Simple
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - section
  - simple
  - border
a11y:
  - semantic heading hierarchy
notes: |
  Minimal section heading with bottom border separator.
  Uses bottom padding (pb-5) instead of vertical padding to position
  border directly beneath heading. Border uses semi-transparent white
  for dark theme compatibility. Clean, unadorned style for content sections.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
    </div>
  )
}
```
