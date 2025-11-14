---
group: Application UI
category: Forms
element: Input Groups
variant: Input with overlapping label
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - label
  - overlapping
  - floating
  - form-field
a11y:
  - label properly associated with input via htmlFor/id
notes: |
  Input with label positioned to overlap the top border. Uses absolute positioning
  with negative top offset and white background to create cutout effect in border.
---

```tsx
export default function Example() {
  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  )
}
```
