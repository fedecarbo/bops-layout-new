---
group: Application UI
category: Forms
element: Toggles
variant: Short toggle
tech: React
tailwind: v4.1
deps: []
tags:
  - toggle
  - switch
  - form-control
  - checkbox
  - animated
  - compact
a11y:
  - aria-label on checkbox input
  - keyboard navigation support
  - focus-visible outline
notes: |
  Compact toggle variant with shorter track and bordered knob. Uses absolute positioning
  for both background track and toggle knob span elements. Toggle knob has border and
  shadow for elevated appearance. Same has-checked animation pattern as simple toggle.
---

```tsx
export default function Example() {
  return (
    <div className="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-indigo-600 has-focus-visible:outline-2">
      <span className="absolute mx-auto h-4 w-9 rounded-full bg-gray-200 inset-ring inset-ring-gray-900/5 transition-colors duration-200 ease-in-out group-has-checked:bg-indigo-600" />
      <span className="absolute left-0 size-5 rounded-full border border-gray-300 bg-white shadow-xs transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
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
