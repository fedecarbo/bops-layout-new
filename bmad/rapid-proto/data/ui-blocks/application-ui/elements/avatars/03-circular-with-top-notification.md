---
group: Application UI
category: Elements
element: Avatars
variant: Circular avatars with top notification
tech: React
tailwind: v4.1
deps: []
tags:
  - avatar
  - profile
  - circular
  - notification-badge
  - status-indicator
  - sizes
a11y:
  - empty alt text for decorative images
notes: |-
  Circular avatars with status badge positioned at top-right corner. Uses relative/absolute positioning with notification dot sized proportionally to avatar. Ring-2 ring-white creates separation from avatar image. Different badge colors show various states (gray, red, green).
---

```tsx
export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-6 rounded-full outline -outline-offset-1 outline-black/5"
        />
        <span className="absolute top-0 right-0 block size-1.5 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-8 rounded-full outline -outline-offset-1 outline-black/5"
        />
        <span className="absolute top-0 right-0 block size-2 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-10 rounded-full outline -outline-offset-1 outline-black/5"
        />
        <span className="absolute top-0 right-0 block size-2.5 rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-12 rounded-full outline -outline-offset-1 outline-black/5"
        />
        <span className="absolute top-0 right-0 block size-3 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-14 rounded-full outline -outline-offset-1 outline-black/5"
        />
        <span className="absolute top-0 right-0 block size-3.5 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-16 rounded-full outline -outline-offset-1 outline-black/5"
        />
        <span className="absolute top-0 right-0 block size-4 rounded-full bg-green-400 ring-2 ring-white" />
      </span>
    </>
  )
}
```
