---
group: Application UI
category: Feedback
element: Alerts
variant: With accent border
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - alert
  - warning
  - feedback
  - border
  - link
a11y:
  - aria-hidden on decorative icons
notes: |
  Warning-style alert with yellow color scheme and left accent border. Features
  inline link for call-to-action. Border-l-4 provides visual emphasis.
---

```tsx
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="size-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            You have no credits left.{' '}
            <a href="#" className="font-medium text-yellow-700 underline hover:text-yellow-600">
              Upgrade your account to add more credits.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
```
