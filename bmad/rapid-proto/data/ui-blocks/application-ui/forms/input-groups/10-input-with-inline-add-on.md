---
group: Application UI
category: Forms
element: Input Groups
variant: Input with inline add-on
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - add-on
  - inline
  - url
  - form-field
  - prefix
a11y:
  - add-on text provides visual context
notes: |
  Input with inline leading add-on. Uses flexbox wrapper with focus-within for unified
  focus ring. Input has focus:outline-none, add-on has select-none. More integrated appearance than separate add-on.
---

```tsx
export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-gray-900">
        Company website
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">https://</div>
          <input
            id="company-website"
            name="company-website"
            type="text"
            placeholder="www.example.com"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  )
}
```
