---
group: Application UI
category: Forms
element: Action Panels
variant: With toggle
tech: React
tailwind: v4.1
deps: []
tags:
  - action-panel
  - card
  - toggle
  - switch
  - responsive
a11y:
  - semantic heading structure
  - aria-label on toggle input
  - aria-describedby linking description to toggle
  - focus-visible states
notes: |
  Action panel with toggle switch instead of button. Toggle positioned to the right
  of description on larger screens. Uses responsive flex layout. Toggle connected to
  description via aria-describedby for context.
---

```tsx
export default function Example() {
  return (
    <div className="bg-white shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Renew subscription automatically</h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <p id="renew-subscription-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex
              maiores nostrum.
            </p>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
            <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
              <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
              <input
                name="renew-subscription"
                type="checkbox"
                aria-label="Renew subscription automatically"
                aria-describedby="renew-subscription-description"
                className="absolute inset-0 appearance-none focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```
