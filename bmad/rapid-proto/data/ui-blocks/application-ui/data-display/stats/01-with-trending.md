---
group: Application UI
category: Data Display
element: Stats
variant: With trending
tech: React
tailwind: v4.1
deps: []
tags:
  - stats
  - data-display
  - dark
  - grid-layout
  - metrics
  - trending
  - responsive
a11y:
  - semantic dl/dt/dd elements
notes: |
  Grid-based stats display with trend indicators and conditional styling.
  Uses gap-px with contrasting backgrounds to create visual dividers between stat cards.
  Trend percentage changes color based on changeType (negative shows rose-400, positive shows gray-300).
  Responsive grid: 1 column on mobile, 2 on sm, 4 on lg breakpoints.
---

```tsx
const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-gray-900 px-4 py-10 sm:px-6 xl:px-8"
        >
          <dt className="text-sm/6 font-medium text-gray-400">{stat.name}</dt>
          <dd
            className={classNames(
              stat.changeType === 'negative' ? 'text-rose-400' : 'text-gray-300',
              'text-xs font-medium',
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-white">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
```
