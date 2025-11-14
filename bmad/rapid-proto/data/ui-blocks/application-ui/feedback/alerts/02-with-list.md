---
group: Application UI
category: Feedback
element: Alerts
variant: With list
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - alert
  - error
  - feedback
  - validation
  - list
a11y:
  - aria-hidden on decorative icons
  - role="list" for error list
notes: |
  Error-style alert with red color scheme. Displays multiple validation errors
  in a bulleted list format. Ideal for form validation feedback.
---

```tsx
import { XCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">There were 2 errors with your submission</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              <li>Your password must be at least 8 characters</li>
              <li>Your password must include at least one pro wrestling finishing move</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
```
