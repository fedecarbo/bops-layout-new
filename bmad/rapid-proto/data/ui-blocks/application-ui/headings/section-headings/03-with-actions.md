---
group: Application UI
category: Headings
element: Section Headings
variant: With actions
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - section
  - actions
  - buttons
  - responsive
a11y:
  - semantic heading hierarchy
  - keyboard accessible buttons
notes: |
  Section heading with secondary and primary action buttons.
  Responsive layout stacks on mobile and aligns horizontally on desktop
  using sm:flex. Action buttons positioned to the right on desktop with
  sm:ml-4. Secondary button uses semi-transparent background, primary uses
  solid indigo with proper focus states.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          Share
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Create
        </button>
      </div>
    </div>
  )
}
```
