---
group: Application UI
category: Navigation
element: Breadcrumbs
variant: Full-width bar
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - breadcrumbs
  - navigation
  - dark
  - full-width
  - home-icon
  - separator
  - responsive
a11y:
  - nav landmark with aria-label
  - list structure with role="list"
  - aria-current for current page
  - sr-only label for home icon
  - aria-hidden on decorative separator icons
notes: |
  Full-width dark breadcrumb bar with bg-gray-800/50 and bottom border.
  Content constrained to max-w-(--breakpoint-xl) with responsive padding (px-4/sm:px-6/lg:px-8).
  Home icon as first item, SVG chevron separators with text-white/10 color.
  Same interaction patterns as contained variant but spans full viewport width.
---

```tsx
import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Example() {
  return (
    <nav aria-label="Breadcrumb" className="flex border-b border-white/10 bg-gray-800/50">
      <ol role="list" className="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="h-full w-6 shrink-0 text-white/10"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
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
