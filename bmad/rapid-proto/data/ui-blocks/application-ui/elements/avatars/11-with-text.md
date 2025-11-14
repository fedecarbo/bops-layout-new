---
group: Application UI
category: Elements
element: Avatars
variant: With text
tech: React
tailwind: v4.1
deps: []
tags:
  - avatar
  - profile
  - circular
  - user-info
  - link
  - hover
a11y:
  - empty alt text for decorative image
  - interactive link element
notes: |-
  Avatar combined with user name and action text in horizontal layout. Uses flex items-center for vertical alignment. Group hover pattern changes text colors on interaction. Shrink-0 prevents avatar from compressing.
---

```tsx
export default function Example() {
  return (
    <a href="#" className="group block shrink-0">
      <div className="flex items-center">
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block size-9 rounded-full outline -outline-offset-1 outline-black/5"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
        </div>
      </div>
    </a>
  )
}
```
