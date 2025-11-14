---
group: Application UI
category: Navigation
element: Breadcrumbs
variant: Simple with slashes
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - breadcrumbs
  - navigation
  - dark
  - simple
  - home-icon
  - slash-separator
a11y:
  - nav landmark with aria-label
  - list structure with role="list"
  - aria-current for current page
  - sr-only label for home icon
  - aria-hidden on decorative slash separators
notes: |
  Simple dark breadcrumb navigation using custom SVG slash separators.
  No background container, uses diagonal slash path with text-gray-600 color.
  Home icon with text-gray-400 and hover states, space-x-4 and ml-4 spacing.
  Clean minimal design with slash dividers instead of chevrons or custom paths.
---

```tsx
import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Example() {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5 shrink-0 text-gray-600">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
```
