---
group: Application UI
category: Headings
element: Card Headings
variant: With description
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - card
  - description
  - simple
a11y:
  - semantic heading hierarchy
notes: |
  Simple card heading with supporting description text.
  Two-line pattern with title and descriptive paragraph below.
  Uses consistent padding that scales from mobile to desktop (px-4/px-6).
  Clean, straightforward layout without actions or additional elements.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
      <p className="mt-1 text-sm text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
      </p>
    </div>
  )
}
```
