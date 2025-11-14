---
group: Application UI
category: Data Display
element: Stats
variant: Simple
tech: React
tailwind: v4.1
deps: []
tags:
  - stats
  - data-display
  - dark
  - grid-layout
  - metrics
  - simple
  - responsive
a11y:
  - semantic paragraph elements for stat labels and values
notes: |
  Clean stats grid with optional unit labels displayed inline with values.
  Uses gap-px technique with bg-white/10 on grid container to create visual dividers.
  Large 4xl values with tracking-tight for emphasis, optional unit text in smaller gray.
  Responsive grid: 1 column on mobile, 2 on sm, 4 on lg breakpoints.
---

```tsx
const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-sm/6 font-medium text-gray-400">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```
