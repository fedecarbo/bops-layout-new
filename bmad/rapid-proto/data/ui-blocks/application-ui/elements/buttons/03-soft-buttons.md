---
group: Application UI
category: Elements
element: Buttons
variant: Soft buttons
tech: React
tailwind: v4.1
deps: []
tags:
  - button
  - soft
  - tinted
  - multiple-sizes
a11y:
  - keyboard focus indicators
notes: |
  Soft-styled buttons using light indigo background with darker indigo text. Creates a subtle, tinted appearance. Hover state darkens the background. Useful for less prominent actions that still relate to primary branding.
---

```tsx
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-sm bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-sm bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100"
      >
        Button text
      </button>
    </>
  )
}
```
