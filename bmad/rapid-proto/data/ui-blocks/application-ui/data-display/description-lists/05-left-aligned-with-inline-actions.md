---
group: Application UI
category: Data Display
element: Description Lists
variant: Left-aligned with inline actions
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - description-list
  - data-display
  - dark
  - inline-actions
  - editable
  - attachments
  - responsive
a11y:
  - semantic dl/dt/dd elements
  - aria-hidden on decorative icons
  - role="list" on attachment list
  - aria-hidden on visual separator
notes: |
  Editable description list with inline action buttons for each field.
  Uses flexbox layout with grow/shrink utilities to position Update buttons inline with values.
  Attachment items feature multiple actions (Update/Remove) separated by a visual divider.
  Responsive: stacks on mobile, 3-column grid on sm+ breakpoints with inline actions aligned to the right.
---

```tsx
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-400">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-white">Full name</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="grow">Margot Foster</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-white">Application for</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="grow">Backend Developer</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-white">Email address</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="grow">margotfoster@example.com</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-white">Salary expectation</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="grow">$120,000</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-white">About</dt>
            <dd className="mt-1 flex text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="grow">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-white">Attachments</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-white/5 rounded-md border border-white/10">
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-white">resume_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                    >
                      Update
                    </button>
                    <span aria-hidden="true" className="text-gray-600">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-gray-400 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-white">coverletter_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-indigo-400 hover:text-indigo-300"
                    >
                      Update
                    </button>
                    <span aria-hidden="true" className="text-gray-600">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-gray-400 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </>
  )
}
```
