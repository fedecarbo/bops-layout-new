---
group: Application UI
category: Forms
element: Action Panels
variant: With link
tech: React
tailwind: v4.1
deps: []
tags:
  - action-panel
  - card
  - link
  - call-to-action
a11y:
  - semantic heading structure
  - descriptive link text
  - aria-hidden on decorative arrow
notes: |
  Action panel with text link instead of button. Link styled with indigo color and
  includes right arrow indicator. Arrow uses aria-hidden as it's decorative. Link
  appears below description with hover state color change.
---

```tsx
export default function Example() {
  return (
    <div className="bg-white shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Continuous Integration</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae
            ad.
          </p>
        </div>
        <div className="mt-3 text-sm/6">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Learn more about our CI features
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
```
