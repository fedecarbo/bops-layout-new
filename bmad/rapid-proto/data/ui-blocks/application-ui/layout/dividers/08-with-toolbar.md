---
group: Application UI
category: Layout
element: Dividers
variant: With toolbar
tech: React
tailwind: v4.1
deps:
  - '@heroicons/react/20/solid'
tags:
  - divider
  - separator
  - toolbar
  - button-group
  - actions
a11y:
  - sr-only labels for icon buttons
  - aria-hidden on decorative lines and icons
  - keyboard focus indicators
  - focus z-index for overlap
notes: |
  Divider with centered button group toolbar. Uses icon-only buttons in a segmented group with negative spacing (-space-x-px). Common for inline editing tools or contextual actions between content sections.
---

```tsx
import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md shadow-xs">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon aria-hidden="true" className="size-5" />
          </button>
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
```
