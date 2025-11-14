---
group: Application UI
category: Forms
element: Input Groups
variant: Input with label
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - label
  - email
  - form-field
a11y:
  - label associated with input via htmlFor/id
  - semantic input type
notes: |
  Simple input field with top-aligned label. Uses Tailwind v4 outline utilities
  for focus states. Responsive text sizing with sm:text-sm/6 modifier.
---

```tsx
export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        Email
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
```
