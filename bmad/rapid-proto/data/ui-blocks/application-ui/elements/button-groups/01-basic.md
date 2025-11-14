---
group: Application UI
category: Elements
element: Button Groups
variant: Basic
tech: React
tailwind: v4.1
deps: []
tags:
  - button-group
  - segmented
  - inline
a11y:
  - keyboard focus indicators
  - focus z-index for overlap
notes: |
  Basic segmented button group with three connected buttons. Uses negative margin (-ml-px) to collapse borders between buttons. Rounded corners applied to first and last buttons only. Focus z-index ensures focused button appears above neighbors.
---

```tsx
export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Years
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Months
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Days
      </button>
    </span>
  )
}
```
