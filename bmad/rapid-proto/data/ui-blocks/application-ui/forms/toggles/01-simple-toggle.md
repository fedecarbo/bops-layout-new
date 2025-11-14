---
group: Application UI
category: Forms
element: Toggles
variant: Simple toggle
tech: React
tailwind: v4.1
deps: []
tags:
  - toggle
  - switch
  - form-control
  - checkbox
  - animated
a11y:
  - aria-label on checkbox input
  - keyboard navigation support
  - focus-visible outline
notes: |
  Simple toggle switch using checkbox input with custom styling. Uses has-checked pseudo-class
  for background color change and translate transform on toggle knob. Smooth transitions with
  duration-200 ease-in-out. Absolute positioned checkbox provides full clickable area.
---

```tsx
export default function Example() {
  return (
    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
      <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
      <input
        name="setting"
        type="checkbox"
        aria-label="Use setting"
        className="absolute inset-0 appearance-none focus:outline-hidden"
      />
    </div>
  )
}
```
