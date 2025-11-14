---
group: Application UI
category: Layout
element: Media Objects
variant: Wide responsive
tech: React
tailwind: v4.1
deps: []
tags:
  - media-object
  - responsive
  - mobile
  - full-width
  - image-text
a11y:
  - aria-hidden on decorative images
notes: |
  Responsive media object with full-width media on mobile. Media spans full width (w-full) on mobile, then constrains to w-32 on sm+. Height remains fixed at h-32. Ideal for featured images or hero media.
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
          className="h-32 w-full border border-gray-300 bg-white text-gray-300 sm:w-32"
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
