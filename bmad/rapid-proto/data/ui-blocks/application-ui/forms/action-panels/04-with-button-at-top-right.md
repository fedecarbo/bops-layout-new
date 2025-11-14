---
group: Application UI
category: Forms
element: Action Panels
variant: With button at top right
tech: React
tailwind: v4.1
deps: []
tags:
  - action-panel
  - card
  - button
  - responsive
  - horizontal-layout
a11y:
  - semantic heading structure
  - descriptive button text
  - focus-visible states
notes: |
  Action panel with button aligned to top-right, next to heading on larger screens.
  Uses responsive flex layout at top level with items-start for top alignment. Button
  appears below heading on mobile and to the right on desktop.
---

```tsx
export default function Example() {
  return (
    <div className="bg-white shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Manage subscription</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
                repudiandae nam.
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
```
