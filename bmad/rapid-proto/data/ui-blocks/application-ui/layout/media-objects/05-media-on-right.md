---
group: Application UI
category: Layout
element: Media Objects
variant: Media on right
tech: React
tailwind: v4.1
deps: []
tags:
  - media-object
  - flex
  - reversed
  - image-text
a11y:
  - aria-hidden on decorative images
notes: |
  Reversed media object with content on left and media on right. Changes margin from mr-4 to ml-4. Useful for alternating layouts or when visual hierarchy requires right-aligned media.
---

```tsx
export default function Example() {
  return (
    <div className="flex">
      <div>
        <h4 className="text-lg font-bold text-gray-900">Lorem ipsum</h4>
        <p className="mt-1 text-gray-500">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
      <div className="ml-4 shrink-0">
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
    </div>
  )
}
```
