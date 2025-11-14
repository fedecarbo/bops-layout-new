---
group: Application UI
category: Forms
element: Input Groups
variant: Input with inline leading and trailing add-ons
tech: React
tailwind: v4.1
deps: []
tags:
  - input
  - add-on
  - inline
  - price
  - currency
  - form-field
a11y:
  - aria-describedby links input to trailing add-on
notes: |
  Input with inline add-ons on both sides. Uses flexbox with focus-within for unified
  focus ring. Both add-ons styled with select-none, input has min-w-0 and grow.
---

```tsx
export default function Example() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            aria-describedby="price-currency"
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <div id="price-currency" className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
            USD
          </div>
        </div>
      </div>
    </div>
  )
}
```
