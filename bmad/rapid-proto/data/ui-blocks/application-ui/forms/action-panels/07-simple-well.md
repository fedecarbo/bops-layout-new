---
group: Application UI
category: Forms
element: Action Panels
variant: Simple well
tech: React
tailwind: v4.1
deps: []
tags:
  - action-panel
  - well
  - card
  - button
  - secondary
a11y:
  - semantic heading structure
  - descriptive button text
  - focus-visible states
notes: |
  Action panel with gray well background (bg-gray-50) instead of white. Secondary button
  style with white background and gray ring border. Provides visual distinction for
  less critical actions or informational panels.
---

```tsx
export default function Example() {
  return (
    <div className="bg-gray-50 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Need more bandwidth?</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          >
            Contact sales
          </button>
        </div>
      </div>
    </div>
  )
}
```
