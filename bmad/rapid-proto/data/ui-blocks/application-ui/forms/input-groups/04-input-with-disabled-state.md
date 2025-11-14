---
group: Application UI
category: Forms
element: Input Groups
variant: Input with disabled state
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - disabled
  - email
  - form-field
a11y:
  - disabled attribute prevents interaction
  - cursor-not-allowed provides visual feedback
notes: |
  Disabled input field with muted styling. Uses disabled: variants for background,
  text color, and cursor styling. Maintains visual hierarchy while indicating unavailable state.
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
          defaultValue="you@example.com"
          id="email"
          name="email"
          type="email"
          disabled
          placeholder="you@example.com"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
```
