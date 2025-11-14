---
group: Application UI
category: Elements
element: Buttons
variant: Rounded secondary buttons
tech: React
tailwind: v4.1
deps: []
tags:
  - button
  - secondary
  - rounded
  - pill
  - outlined
  - multiple-sizes
a11y:
  - keyboard focus indicators
notes: |
  Fully rounded secondary buttons with white background and gray ring border. Combines pill shape with subtle outlined styling. Padding increased to accommodate rounded-full appearance.
---

```tsx
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
    </>
  )
}
```
