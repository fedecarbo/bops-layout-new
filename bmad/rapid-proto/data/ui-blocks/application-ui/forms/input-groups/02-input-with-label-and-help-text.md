---
group: Application UI
category: Forms
element: Input Groups
variant: Input with label and help text
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - label
  - help-text
  - email
  - form-field
a11y:
  - aria-describedby links input to help text
  - help text has matching id attribute
notes: |
  Input field with label and descriptive help text below. Uses aria-describedby
  to associate help text with input for screen readers. Help text styled in muted gray.
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
          aria-describedby="email-description"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
      <p id="email-description" className="mt-2 text-sm text-gray-500">
        We'll only use this for spam.
      </p>
    </div>
  )
}
```
