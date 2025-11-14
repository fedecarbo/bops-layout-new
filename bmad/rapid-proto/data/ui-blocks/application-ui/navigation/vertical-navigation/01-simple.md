---
group: Application UI
category: Navigation
element: Vertical Navigation
variant: Simple
tech: React
tailwind: v4.1
deps: []
tags:
  - vertical-navigation
  - sidebar
  - navigation
  - dark
  - simple
a11y:
  - nav landmark with aria-label
  - list structure with role="list"
notes: |
  Minimal dark-themed vertical navigation for sidebars with active state highlighting.
  Uses bg-white/5 for current item and hover states with smooth transitions.
  Clean spacing with -mx-2 negative margin and space-y-1 vertical rhythm.
  Includes classNames utility for conditional styling based on current state.
---

```tsx
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
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
                'group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold',
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```
