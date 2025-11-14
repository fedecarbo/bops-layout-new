---
group: Application UI
category: Navigation
element: Progress Bars
variant: Simple
tech: React
tailwind: v4.1
deps: []
tags:
  - progress
  - steps
  - navigation
  - dark
  - responsive
  - multi-step
a11y:
  - nav landmark with aria-label
  - list structure with role="list"
  - aria-current for current step
notes: |
  Dark multi-step progress indicator with responsive layout switching.
  Mobile uses left border (border-l-4), desktop uses top border (md:border-t-4 md:border-l-0).
  Complete steps use border-indigo-500, current step uses indigo-500, upcoming use border-white/10.
  Three states with conditional rendering: complete (hover effects), current (aria-current), upcoming.
---

```tsx
const steps = [
  { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === 'complete' ? (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-indigo-500 py-2 pl-4 hover:border-indigo-400 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
              >
                <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300">{step.id}</span>
                <span className="text-sm font-medium text-white">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a
                href={step.href}
                aria-current="step"
                className="flex flex-col border-l-4 border-indigo-500 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
              >
                <span className="text-sm font-medium text-indigo-400">{step.id}</span>
                <span className="text-sm font-medium text-white">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-white/10 py-2 pl-4 hover:border-white/20 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
              >
                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300">{step.id}</span>
                <span className="text-sm font-medium text-white">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```
