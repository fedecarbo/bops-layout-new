---
group: Application UI
category: Navigation
element: Progress Bars
variant: Progress bar
tech: React
tailwind: v4.1
deps: []
tags:
  - progress
  - bar
  - navigation
  - dark
  - percentage
  - steps
  - horizontal
  - responsive
a11y:
  - sr-only heading for status
  - aria-hidden on decorative progress bar
notes: |
  Dark horizontal progress bar with percentage-based fill and step labels.
  Bar uses rounded-full bg-white/10 container with indigo-500 fill (h-2).
  Step labels in grid-cols-4 below bar (hidden on mobile, sm:grid on desktop).
  Active/complete steps shown in text-indigo-400, upcoming in text-gray-400.
  Inline style for width percentage, status text above bar.
---

```tsx
export default function Example() {
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-white">Migrating MySQL database...</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-white/10">
          <div style={{ width: '37.5%' }} className="h-2 rounded-full bg-indigo-500" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-400 sm:grid">
          <div className="text-indigo-400">Copying files</div>
          <div className="text-center text-indigo-400">Migrating database</div>
          <div className="text-center">Compiling assets</div>
          <div className="text-right">Deployed</div>
        </div>
      </div>
    </div>
  )
}
```
