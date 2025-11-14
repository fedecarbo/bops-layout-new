---
group: Application UI
category: Forms
element: Toggles
variant: With right label
tech: React
tailwind: v4.1
deps: []
tags:
  - toggle
  - switch
  - form-control
  - checkbox
  - animated
  - label
  - inline-description
a11y:
  - aria-labelledby linking label to input
  - aria-describedby linking description to input
  - keyboard navigation support
  - focus-visible outline
notes: |
  Toggle with label and inline description on the right side. Uses flex layout with gap-3
  for spacing. Label and description appear inline on same line using label and span elements.
  Connected via aria-labelledby and aria-describedby for proper accessibility.
---

```tsx
export default function Example() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
        <input
          id="annual-billing"
          name="annual-billing"
          type="checkbox"
          aria-labelledby="annual-billing-label"
          aria-describedby="annual-billing-description"
          className="absolute inset-0 appearance-none focus:outline-hidden"
        />
      </div>

      <div className="text-sm">
        <label id="annual-billing-label" className="font-medium text-gray-900">
          Annual billing
        </label>{' '}
        <span id="annual-billing-description" className="text-gray-500">
          (Save 10%)
        </span>
      </div>
    </div>
  )
}
```
