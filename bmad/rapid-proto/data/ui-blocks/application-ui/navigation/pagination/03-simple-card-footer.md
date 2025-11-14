---
group: Application UI
category: Navigation
element: Pagination
variant: Simple card footer
tech: React
tailwind: v4.1
deps: []
tags:
  - pagination
  - navigation
  - dark
  - simple
  - card-footer
  - minimal
a11y:
  - nav landmark with aria-label
notes: |
  Minimal dark-themed pagination for card footers with just Previous/Next buttons.
  Desktop shows result count on left, mobile stretches buttons across full width.
  Uses bg-white/10 with inset-ring borders and hover state transitions.
  No page numbers, ideal for simple sequential navigation.
---

```tsx
const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Example() {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-300">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">20</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          Next
        </a>
      </div>
    </nav>
  )
}
```
