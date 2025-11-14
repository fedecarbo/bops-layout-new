---
group: Application UI
category: Headings
element: Section Headings
variant: With label
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - section
  - label
  - metadata
  - responsive
a11y:
  - semantic heading hierarchy
notes: |
  Section heading with inline label/context text.
  Uses negative margin technique (-mt-2 -ml-2) with positive margins on children
  for consistent spacing with wrapping. Heading and label aligned on baseline
  (items-baseline) for visual harmony. Label text uses truncate to prevent overflow.
  Clean two-element pattern for contextual section headings.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5">
      <div className="-mt-2 -ml-2 flex flex-wrap items-baseline">
        <h3 className="mt-2 ml-2 text-base font-semibold text-white">Job Postings</h3>
        <p className="mt-1 ml-2 truncate text-sm text-gray-400">in Engineering</p>
      </div>
    </div>
  )
}
```
