---
group: Application UI
category: Headings
element: Card Headings
variant: With action
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - card
  - action
  - button
  - responsive
a11y:
  - semantic heading hierarchy
  - keyboard accessible button
notes: |
  Card heading with primary action button aligned to the right.
  Uses negative margin technique (-mt-2 -ml-4) with positive margins on children
  to create consistent spacing for wrapping items. Layout wraps on mobile
  (flex-wrap) and stays inline on desktop (flex-nowrap). Button marked with
  shrink-0 to prevent compression.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 px-4 py-5 sm:px-6">
      <div className="-mt-2 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-2 ml-4">
          <h3 className="text-base font-semibold text-white">Job Postings</h3>
        </div>
        <div className="mt-2 ml-4 shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}
```
