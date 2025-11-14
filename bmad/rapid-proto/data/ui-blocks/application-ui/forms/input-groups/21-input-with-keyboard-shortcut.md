---
group: Application UI
category: Forms
element: Input Groups
variant: Input with keyboard shortcut
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - label
  - keyboard-shortcut
  - search
  - form-field
  - kbd
a11y:
  - label properly associated with input via htmlFor/id
notes: |
  Input with keyboard shortcut badge displayed at trailing edge. Uses flexbox wrapper
  with focus-within for unified focus ring. kbd element styled with border and monospace font.
---

```tsx
export default function Example() {
  return (
    <div>
      <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900">
        Quick search
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="search"
            name="search"
            type="text"
            className="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <div className="flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  )
}
```
