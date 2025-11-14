---
group: Application UI
category: Layout
element: Media Objects
variant: Aligned to center
tech: React
tailwind: v4.1
deps: []
tags:
  - media-object
  - flex
  - centered
  - image-text
a11y:
  - aria-hidden on decorative images
notes: |
  Media object with vertically centered media element. Uses self-center on the media container to align with the center of the content area. Useful when you want the icon/image to align with the middle of the text.
---

```tsx
export default function Example() {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0 self-center">
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
