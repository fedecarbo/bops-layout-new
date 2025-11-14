# UI Blocks Library - Documentation Instructions

## Project Overview
This is a React component library documented in markdown files. The library is organized for optimal AI consumption, allowing AI assistants like Claude to quickly search, find, and copy component code.

## Current Status

### ✅ Completed Elements

#### Navigation
- **Navbars**: 11 variants (01-11) - 100% complete and optimized
- **Tabs**: 9 variants (01-09) - 100% complete and optimized
- **Pagination**: 3 variants (01-03) - 100% complete
- **Vertical Navigation**: 6 variants (01-06) - 100% complete
- **Sidebar Navigation**: 5 variants (01-05) - 100% complete
- **Breadcrumbs**: 4 variants (01-04) - 100% complete
- **Progress Bars**: 8 variants (01-08) - 100% complete

#### Headings
- **Page Headings**: 9 variants (01-09) - 100% complete
- **Card Headings**: 6 variants (01-06) - 100% complete
- **Section Headings**: 10 variants (01-10) - 100% complete

#### Application Shells
- **Stacked Layouts**: 9 variants (01-09) - 100% complete
- **Sidebar Layouts**: 8 variants (01-08) - 100% complete
- **Multi-Column Layouts**: 6 variants (01-06) - 100% complete

### 📁 Project Structure
```
ui-blocks/
└── application-ui/
    ├── navigation/
    │   ├── navbars/
    │   │   ├── 01-simple-dark-menu-left.md
    │   │   ├── ... (through 11)
    │   │   └── 11-with-search-in-column-layout.md
    │   ├── tabs/
    │   │   ├── 01-tabs-underline.md
    │   │   ├── ... (through 09)
    │   │   ├── 09-simple.md
    │   │   ├── _template.md (reference only)
    │   │   └── index.md
    │   ├── pagination/
    │   │   ├── 01-card-footer-with-page-buttons.md
    │   │   ├── 02-centered-page-numbers.md
    │   │   └── 03-simple-card-footer.md
    │   ├── vertical-navigation/
    │   │   ├── 01-simple.md
    │   │   ├── ... (through 06)
    │   │   └── 06-on-gray.md
    │   ├── sidebar-navigation/
    │   │   ├── 01-light.md
    │   │   ├── ... (through 05)
    │   │   └── 05-brand.md
    │   ├── breadcrumbs/
    │   │   ├── 01-contained.md
    │   │   ├── ... (through 04)
    │   │   └── 04-simple-with-slashes.md
    │   └── progress-bars/
    │       ├── 01-simple.md
    │       ├── ... (through 08)
    │       └── 08-progress-bar.md
    ├── headings/
    │   ├── page-headings/
    │   │   ├── 01-with-actions.md
    │   │   ├── ... (through 09)
    │   │   └── 09-with-logo-meta-and-actions.md
    │   ├── card-headings/
    │   │   ├── 01-simple.md
    │   │   ├── ... (through 06)
    │   │   └── 06-with-avatar-meta-and-dropdown.md
    │   └── section-headings/
    │       ├── 01-simple.md
    │       ├── ... (through 10)
    │       └── 10-with-badge-and-dropdown.md
    └── application-shells/
        ├── stacked-layouts/
        │   ├── 01-with-bottom-border.md
        │   ├── ... (through 09)
        │   └── 09-two-row-navigation-with-overlap.md
        ├── sidebar-layouts/
        │   ├── 01-simple-sidebar.md
        │   ├── ... (through 08)
        │   └── 08-brand-sidebar-with-header.md
        └── multi-column-layouts/
            ├── 01-full-width-three-column.md
            ├── ... (through 06)
            └── 06-full-width-with-narrow-sidebar-and-header.md
```

## Documentation Format

### ✅ Standard Format (see `_template.md`)
All component files use **frontmatter + code only**. Reference the template at `application-ui/navigation/tabs/_template.md`:

```yaml
---
group: Application UI
category: Navigation
element: Navbars
variant: Dark with search
tech: React
tailwind: v4.1
deps:
  - '@headlessui/react'
  - '@heroicons/react/20/solid'
tags:
  - navigation
  - navbar
  - dark
  - search
  - responsive
a11y:
  - nav landmark
  - sr-only labels for icon buttons
  - aria-hidden on decorative icons
notes: |
  Brief technical description of the variant.
  Key features and implementation details.
---

```tsx
// Exact TSX code provided - NEVER modify
import { ... } from '@headlessui/react'

export default function Example() {
  // Component code
}
```
```

## Workflow for Adding New Components

When the user provides new component variants:

1. **Receive Input**: User provides variant name + TSX code
2. **Determine File Number**: Check existing files, use next sequential number
3. **Create Markdown File**: `{number}-{kebab-case-variant-name}.md`
4. **Fill Metadata**:
   - `variant`: Use provided variant name exactly
   - `deps`: Infer from imports (use exact package paths with quotes)
   - `tags`: Infer minimal, relevant tags from code features
   - `a11y`: Infer accessibility features from code (landmarks, ARIA, sr-only)
   - `notes`: Write brief technical notes (styling approach, layout specifics, unique features)
5. **Insert Code**: Copy TSX code **exactly as provided** - DO NOT modify, reformat, or beautify

## Key Rules

### ✅ DO:
- Keep frontmatter clean and consistent
- Use YAML array syntax with proper quoting for deps: `- '@package/name'`
- Infer minimal, searchable tags
- Write concise technical notes
- Preserve user's code exactly
- Use sequential numbering (01, 02, 03...)
- Use kebab-case for filenames

### ❌ DON'T:
- Add headings, element declarations, or preview sections beyond the template
- Add comments in frontmatter
- Add "(optional)" or extra text in deps values
- Modify the provided TSX code in any way
- Reformat imports or code style
- Skip numbers in sequence

## Metadata Guidelines

### `deps` - Dependencies
- List exact import paths with quotes
- Example: `'@heroicons/react/24/outline'` not `@heroicons/react`
- No "(optional)" annotations
- Only list packages actually imported in the code

### `tags` - Feature Tags
Infer from code features:
- Component type: `navigation`, `navbar`, `tabs`, `dropdown`
- Visual style: `dark`, `light`, `pills`, `underline`
- Features: `search`, `mobile-menu`, `profile-dropdown`, `notifications`
- Layout: `responsive`, `two-row`, `grid-layout`, `centered`
- Actions: `cta-button`, `quick-action`

### `a11y` - Accessibility
Infer from code patterns:
- Landmarks: `nav landmark`, `header landmark`
- ARIA: `aria-label`, `aria-current`, `aria-hidden on decorative icons`
- Patterns: `disclosure pattern`, `menu pattern`, `popover pattern`
- Helpers: `sr-only labels`, `keyboard focus indicators`

### `notes` - Technical Notes
Brief description covering:
- Primary styling approach
- Layout specifics (grid, flex, positioning)
- Unique technical features
- Responsive behavior differences
- State management patterns

## Quality Checklist

Before completing a batch of components:
- [ ] Sequential numbering with no gaps
- [ ] All deps have proper quotes
- [ ] No comments in frontmatter
- [ ] Tags are minimal and relevant
- [ ] a11y features accurately describe the code
- [ ] Notes are concise (2-4 sentences)
- [ ] TSX code unchanged from user input
- [ ] Consistent with existing files in same category

## Example Interaction

**User**: "Dark with mega menu

[TSX code snippet]"

**Your Response**:
1. Check existing navbar files (last was 11)
2. Create `12-dark-with-mega-menu.md`
3. Fill frontmatter by analyzing the code
4. Insert exact TSX code
5. Confirm creation with file path

## Next Steps

Continue building the library by:
1. Accepting new component variants from user
2. Following the established format
3. Maintaining consistency with existing files
4. Keeping the library AI-optimized and searchable

---

**Important Note**: Always reference `_template.md` for the current standard format. The template shows the exact structure to follow.
