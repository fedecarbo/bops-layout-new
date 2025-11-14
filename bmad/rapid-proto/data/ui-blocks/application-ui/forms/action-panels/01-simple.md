---
group: Application UI
category: Forms
element: Action Panels
variant: Simple
tech: React
tailwind: v4.1
deps: []
tags:
  - action-panel
  - card
  - button
  - call-to-action
a11y:
  - semantic heading structure
  - descriptive button text
  - focus-visible states
notes: |
  Simple action panel card with heading, description text, and primary action button.
  White background with shadow-sm and responsive rounded corners. Button below
  description with indigo primary color scheme and focus-visible outline.
---

```tsx
export default function Example() {
  return (
    <div className="bg-white shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Manage subscription</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae
            nam.
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Change plan
          </button>
        </div>
      </div>
    </div>
  )
}
```
