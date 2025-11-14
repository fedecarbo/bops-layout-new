---
group: Application UI
category: Elements
element: Avatars
variant: Circular avatars
tech: React
tailwind: v4.1
deps: []
tags:
  - avatar
  - profile
  - circular
  - sizes
a11y:
  - empty alt text for decorative images
notes: |-
  Five size variants of circular avatars using rounded-full with subtle outline styling. Sizes range from size-6 to size-14 using Tailwind's size utilities. Outline with -outline-offset-1 provides subtle edge definition.
---

```tsx
export default function Example() {
  return (
    <>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-6 rounded-full outline -outline-offset-1 outline-black/5"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-8 rounded-full outline -outline-offset-1 outline-black/5"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-10 rounded-full outline -outline-offset-1 outline-black/5"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-12 rounded-full outline -outline-offset-1 outline-black/5"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-14 rounded-full outline -outline-offset-1 outline-black/5"
      />
    </>
  )
}
```
