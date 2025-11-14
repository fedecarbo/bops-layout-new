---
group: Application UI
category: Layout
element: Media Objects
variant: Basic responsive
tech: React
tailwind: v4.1
deps: []
tags:
  - media-object
  - responsive
  - mobile
  - stacked
  - image-text
a11y:
  - aria-hidden on decorative images
notes: |
  Responsive media object that stacks vertically on mobile and horizontally on sm+. Uses sm:flex to enable flex layout on larger screens. Adjusts margins from mb-4 on mobile to mr-4 on desktop.
---

```tsx
export default function Example() {
  return (
    <div className="sm:flex">
      <div className="mb-4 shrink-0 sm:mr-4 sm:mb-0">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="size-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900">Lorem ipsum</h4>
        <p className="mt-1 text-gray-500">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}
```
