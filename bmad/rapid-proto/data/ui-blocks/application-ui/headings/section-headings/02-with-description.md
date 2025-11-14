---
group: Application UI
category: Headings
element: Section Headings
variant: With description
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - section
  - description
  - border
a11y:
  - semantic heading hierarchy
notes: |
  Section heading with supporting description text.
  Two-line pattern with title and descriptive paragraph below.
  Description uses max-w-4xl constraint for optimal reading length.
  Bottom padding (pb-5) positions border beneath content block.
  Clean layout for introducing content sections with context.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-400">
        Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
        Fringilla egestas justo massa purus sagittis malesuada.
      </p>
    </div>
  )
}
```
