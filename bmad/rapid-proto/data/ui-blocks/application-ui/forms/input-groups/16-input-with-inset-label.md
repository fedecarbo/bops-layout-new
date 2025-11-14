---
group: Application UI
category: Forms
element: Input Groups
variant: Input with inset label
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - label
  - inset
  - floating
  - form-field
a11y:
  - label properly associated with input via htmlFor/id
notes: |
  Input with inset label positioned inside the border container. Label uses smaller
  text (text-xs) and sits above input. Container has focus-within for unified focus ring.
---

```tsx
export default function Example() {
  return (
    <div className="rounded-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
      />
    </div>
  )
}
```
