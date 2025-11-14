---
group: Application UI
category: Headings
element: Section Headings
variant: With action
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - section
  - action
  - button
  - responsive
a11y:
  - semantic heading hierarchy
  - keyboard accessible button
notes: |
  Section heading with single primary action button.
  Responsive layout stacks on mobile and aligns horizontally on desktop
  using sm:flex with justify-between. Button positioned to the right on
  desktop with sm:ml-4. Primary button uses solid indigo background with
  proper hover and focus-visible states.
---

```tsx
export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-white">Job Postings</h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Create new job
        </button>
      </div>
    </div>
  )
}
```
