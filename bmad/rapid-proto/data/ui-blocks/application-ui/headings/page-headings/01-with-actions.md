---
group: Application UI
category: Headings
element: Page Headings
variant: With actions
tech: React
tailwind: v4.1
deps: []
tags:
  - heading
  - page-title
  - actions
  - buttons
  - responsive
a11y:
  - semantic heading hierarchy
  - keyboard accessible buttons
notes: |
  Responsive page heading with primary and secondary action buttons.
  Uses flexbox layout that stacks on mobile and aligns horizontally on tablet+.
  Features dark theme styling with semi-transparent button backgrounds and
  proper focus states for accessibility.
---

```tsx
export default function Example() {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Publish
        </button>
      </div>
    </div>
  )
}
```
