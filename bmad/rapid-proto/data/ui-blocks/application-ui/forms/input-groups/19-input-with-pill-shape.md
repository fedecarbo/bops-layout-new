---
group: Application UI
category: Forms
element: Input Groups
variant: Input with pill shape
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - label
  - pill
  - rounded-full
  - form-field
a11y:
  - label properly associated with input via htmlFor/id
notes: |
  Input with fully rounded pill shape using rounded-full. Label has matching left
  padding (pl-4) to align with input padding. Modern, soft appearance.
---

```tsx
export default function Example() {
  return (
    <div>
      <label htmlFor="name" className="ml-px block pl-4 text-sm/6 font-medium text-gray-900">
        Name
      </label>
      <div className="mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full rounded-full bg-white px-4 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
```
