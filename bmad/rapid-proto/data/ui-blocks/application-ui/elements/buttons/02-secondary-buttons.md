---
group: Application UI
category: Elements
element: Buttons
variant: Secondary buttons
tech: React
tailwind: v4.1
deps: []
tags:
  - button
  - secondary
  - outlined
  - multiple-sizes
a11y:
  - keyboard focus indicators
notes: |
  Secondary button variants with white background and gray ring border. Uses inset-ring utility for border effect. Provides subtle hover state and matches primary button sizing scale.
---

```tsx
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-sm bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-sm bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
    </>
  )
}
```
