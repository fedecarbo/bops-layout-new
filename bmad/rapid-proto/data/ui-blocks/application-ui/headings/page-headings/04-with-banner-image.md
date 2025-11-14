---
group: Application UI
category: Headings
element: Page Headings
variant: With banner image
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - heading
  - profile
  - banner
  - avatar
  - actions
  - buttons
  - responsive
  - icons
a11y:
  - aria-hidden on decorative icons
  - semantic heading hierarchy
  - empty alt for decorative images
notes: |
  Profile page heading with full-width banner image and overlapping avatar.
  Avatar positioned with negative margin to overlap banner.
  Responsive layout adjusts heading visibility across breakpoints (hidden on sm, visible on md).
  Dark theme styling with ring borders on avatar and action buttons with icons.
---

```tsx
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export default function Example() {
  return (
    <div>
      <img alt="" src={profile.backgroundImage} className="h-32 w-full object-cover lg:h-48" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              alt=""
              src={profile.avatar}
              className="size-24 rounded-full ring-4 ring-gray-900 outline -outline-offset-1 outline-white/10 sm:size-32"
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-white">{profile.name}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
              >
                <EnvelopeIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-gray-300" />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
              >
                <PhoneIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-gray-300" />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-white">{profile.name}</h1>
        </div>
      </div>
    </div>
  )
}
```
