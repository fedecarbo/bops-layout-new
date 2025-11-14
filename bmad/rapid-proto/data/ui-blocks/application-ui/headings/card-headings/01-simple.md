---
group: Application UI
category: Headings
element: Card Headings
variant: Simple
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - card
  - simple
  - border
a11y:
  - semantic heading hierarchy
notes: |
  Minimal card heading with bottom border separator.
  Uses consistent padding that scales from mobile to desktop (px-4/px-6).
  Border uses semi-transparent white for dark theme compatibility.
  Clean, unadorned heading style suitable for card containers.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
    </div>
  )
}
```
