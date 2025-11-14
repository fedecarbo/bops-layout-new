---
group: Application UI
category: Feedback
element: Alerts
variant: With dismiss button
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - alert
  - success
  - feedback
  - dismissible
  - button
a11y:
  - aria-hidden on decorative icons
  - sr-only label for dismiss button
  - keyboard focus indicators
notes: |
  Success-style alert with green color scheme and dismiss button. Uses ml-auto
  for right-aligned close button. Includes focus ring for accessibility.
---

```tsx
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50 focus-visible:outline-hidden"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
```
