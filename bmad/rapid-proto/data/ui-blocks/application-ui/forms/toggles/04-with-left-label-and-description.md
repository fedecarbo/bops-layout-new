---
group: Application UI
category: Forms
element: Toggles
variant: With left label and description
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
  - description
a11y:
  - aria-labelledby linking label to input
  - aria-describedby linking description to input
  - keyboard navigation support
  - focus-visible outline
notes: |
  Toggle with label and description on the left side. Uses flex justify-between for layout
  with label/description in flex-col and toggle on right. Connected via aria-labelledby and
  aria-describedby for accessibility. Label element uses id for association.
---

```tsx
export default function Example() {
  return (
    <div className="flex items-center justify-between">
      <span className="flex grow flex-col">
        <label id="availability-label" className="text-sm/6 font-medium text-gray-900">
          Available to hire
        </label>
        <span id="availability-description" className="text-sm text-gray-500">
          Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
        </span>
      </span>
      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
        <input
          id="availability"
          name="availability"
          type="checkbox"
          aria-labelledby="availability-label"
          aria-describedby="availability-description"
          className="absolute inset-0 appearance-none focus:outline-hidden"
        />
      </div>
    </div>
  )
}
```
