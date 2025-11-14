---
group: Application UI
category: Navigation
element: Vertical Navigation
variant: With icons
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/24/outline'
tags:
  - vertical-navigation
  - sidebar
  - navigation
  - dark
  - icons
a11y:
  - nav landmark with aria-label
  - list structure with role="list"
  - aria-hidden on decorative icons
notes: |
  Dark vertical navigation with icons and text labels, no badges.
  Icons use size-6 with shrink-0, transitioning from gray-500 to white on hover/active.
  Active state applies bg-white/5 background with white text and icon.
  Clean gap-x-3 spacing between icons and labels with group hover states.
---

```tsx
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-white/5 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
              )}
            >
              <item.icon
                aria-hidden="true"
                className={classNames(
                  item.current ? 'text-white' : 'text-gray-500 group-hover:text-white',
                  'size-6 shrink-0',
                )}
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```
