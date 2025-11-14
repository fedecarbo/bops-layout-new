---
group: Application UI
category: Forms
element: Input Groups
variant: Input with hidden label
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - email
  - form-field
  - minimal
a11y:
  - aria-label provides accessible name without visual label
notes: |
  Minimal input without visible label. Uses aria-label for accessibility while
  maintaining clean visual appearance. Suitable for search bars or inline forms.
---

```tsx
export default function Example() {
  return (
    <div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        aria-label="Email"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  )
}
```
