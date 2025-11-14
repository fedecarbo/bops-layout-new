# Catalyst UI Essentials

**Purpose:** Critical knowledge for working with Catalyst UI components in Next.js projects. This guide ensures agents use components correctly from the start, following established patterns and best practices.

**Version:** Catalyst UI v1.0+ (Tailwind CSS v4 compatible)
**Target:** Projects using the Catalyst UI component library from BMAD rapid-proto module

---

## Table of Contents

1. [What is Catalyst UI?](#what-is-catalyst-ui)
2. [Component Location & Import Patterns](#component-location--import-patterns)
3. [Core Architecture](#core-architecture)
4. [Essential Dependencies](#essential-dependencies)
5. [Common Component Patterns](#common-component-patterns)
6. [Form Components](#form-components)
7. [Layout Components](#layout-components)
8. [Feedback Components](#feedback-components)
9. [Styling Patterns](#styling-patterns)
10. [Accessibility Features](#accessibility-features)
11. [Context7 Integration](#context7-integration)
12. [Quick Reference](#quick-reference)

---

## What is Catalyst UI?

**Catalyst UI** is a modern application UI kit built by the Tailwind CSS team:

- Built on **Headless UI** (for accessibility and behavior)
- Styled with **Tailwind CSS v4+**
- Uses **Framer Motion** (via `motion`) for animations
- Uses **clsx** for conditional class management
- Designed for **React/Next.js** applications

### Key Characteristics

1. **Copy-paste components** - Not an npm package, components live in your project
2. **Headless UI foundation** - Accessibility and keyboard navigation built-in
3. **Tailwind v4 styling** - Uses modern CSS variables and `@theme`
4. **Type-safe** - Full TypeScript support
5. **Composable** - Small, focused components that work together

---

## Component Location & Import Patterns

### Location in BMAD Module

Catalyst UI components are stored in:

```
{module_root}/data/catalyst-ui-kit/
├── typescript/          # TypeScript components (recommended)
├── javascript/          # JavaScript versions
└── demo/               # Demo applications (reference only)
```

### Correct Import Patterns

**In a scaffolded project, copy components to your project:**

```typescript
// ✅ CORRECT: Import from your project's component directory
import { Button } from '@/components/button'
import { Input, InputGroup } from '@/components/input'
import { Field, Label, Description } from '@/components/fieldset'
```

**NEVER import directly from the BMAD module data folder:**

```typescript
// ❌ WRONG: Don't import from BMAD data folder
import { Button } from '../../../bmad/rapid-proto/data/catalyst-ui-kit/typescript/button'
```

### Project Setup Pattern

When scaffolding a new project:

1. Create `src/components/` directory
2. Copy needed components from `{module_root}/data/catalyst-ui-kit/typescript/` to `src/components/`
3. Import from `@/components/*` (using Next.js path alias)

---

## Core Architecture

### Headless UI Wrapper Pattern

All Catalyst components wrap **Headless UI** components:

```typescript
import * as Headless from '@headlessui/react'

// Catalyst Button wraps Headless.Button
export const Button = forwardRef(function Button(props, ref) {
  return <Headless.Button {...props} ref={ref} />
})
```

**Why this matters:**
- Components have built-in accessibility (ARIA attributes)
- Keyboard navigation works automatically
- State management is handled by Headless UI
- Props come from Headless UI types

### Component Composition Pattern

Catalyst uses **compound components** that work together:

```typescript
// ✅ CORRECT: Components designed to nest
<Field>
  <Label>Email</Label>
  <Input type="email" name="email" />
  <Description>We'll never share your email.</Description>
</Field>
```

### Data Attributes for Styling

Catalyst uses `data-*` attributes for state-based styling:

```typescript
// Component uses data attributes for state
'data-hover:bg-zinc-950/5'        // Hover state
'data-active:bg-zinc-950/10'      // Active/pressed state
'data-disabled:opacity-50'        // Disabled state
'data-focus:outline-2'            // Focus state
'data-invalid:border-red-500'    // Invalid state
```

---

## Essential Dependencies

### Required Packages

```json
{
  "dependencies": {
    "@headlessui/react": "^2.0.0",
    "motion": "^11.0.0",
    "clsx": "^2.1.0",
    "tailwindcss": "^4.0.0"
  }
}
```

### Installation Command

```bash
npm install @headlessui/react motion clsx tailwindcss@latest
```

**Note:** Catalyst requires **Tailwind CSS v4+**. See `tailwind-v4/essentials.md` for setup.

---

## Common Component Patterns

### Button Component

**Available Variants:**

1. **Solid (default)** - Filled button with color
2. **Outline** - Border only, transparent background
3. **Plain** - No border, minimal styling

**Usage:**

```tsx
import { Button } from '@/components/button'

// Solid button with color
<Button color="indigo">Save Changes</Button>

// Outline button
<Button outline>Cancel</Button>

// Plain button
<Button plain>Reset</Button>

// As a link (if href provided)
<Button href="/dashboard">Go to Dashboard</Button>
```

**Available Colors:**

`dark/zinc` (default), `light`, `dark/white`, `dark`, `white`, `zinc`, `indigo`, `cyan`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `sky`, `blue`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

**Important Features:**

- Automatically renders as `<Link>` if `href` prop provided
- Includes `TouchTarget` for 44×44px hit area on mobile
- Uses `forwardRef` for ref forwarding
- Supports all Headless UI Button props

---

### Input Component

**Input Types Supported:**

`email`, `number`, `password`, `search`, `tel`, `text`, `url`, `date`, `datetime-local`, `month`, `time`, `week`

**Basic Usage:**

```tsx
import { Input } from '@/components/input'
import { Field, Label } from '@/components/fieldset'

<Field>
  <Label>Email Address</Label>
  <Input type="email" name="email" />
</Field>
```

**With Icons (using InputGroup):**

```tsx
import { Input, InputGroup } from '@/components/input'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

<InputGroup>
  <MagnifyingGlassIcon data-slot="icon" />
  <Input name="search" placeholder="Search..." />
</InputGroup>
```

**Key Features:**

- Includes focus ring on desktop (`:focus-within`)
- Invalid state styling with `data-invalid`
- Disabled state with `data-disabled`
- Dark mode support built-in
- Date input styling for WebKit browsers

---

### Select Component

**Usage:**

```tsx
import { Select } from '@/components/select'
import { Field, Label } from '@/components/fieldset'

<Field>
  <Label>Country</Label>
  <Select name="country">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
  </Select>
</Field>
```

**Features:**

- Native `<select>` element (not custom dropdown)
- Custom arrow icon
- Matches Input styling
- Works with forms naturally

---

### Checkbox & Radio Components

**Checkbox Usage:**

```tsx
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/checkbox'
import { Label, Description } from '@/components/fieldset'

<CheckboxGroup>
  <CheckboxField>
    <Checkbox name="notifications" value="email" />
    <Label>Email notifications</Label>
    <Description>Receive updates via email</Description>
  </CheckboxField>
</CheckboxGroup>
```

**Radio Usage:**

```tsx
import { Radio, RadioField, RadioGroup } from '@/components/radio'
import { Label } from '@/components/fieldset'

<RadioGroup name="plan">
  <RadioField>
    <Radio value="free" />
    <Label>Free Plan</Label>
  </RadioField>
  <RadioField>
    <Radio value="pro" />
    <Label>Pro Plan</Label>
  </RadioField>
</RadioGroup>
```

**Key Features:**

- Custom styled (not native controls)
- Accessible (ARIA labels, keyboard nav)
- Group components for layout
- Description support

---

### Switch Component

**Usage:**

```tsx
import { Switch, SwitchField } from '@/components/switch'
import { Label, Description } from '@/components/fieldset'

<SwitchField>
  <Label>Enable notifications</Label>
  <Description>Receive push notifications on your device</Description>
  <Switch name="notifications" />
</SwitchField>
```

**Features:**

- Toggle on/off (boolean state)
- Animated transition
- Accessible (space to toggle, focus ring)
- Optional label and description

---

## Form Components

### Fieldset Structure

**Complete Form Pattern:**

```tsx
import { Fieldset, Legend, FieldGroup, Field, Label, Description } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

<form>
  <Fieldset>
    <Legend>Personal Information</Legend>
    <FieldGroup>
      <Field>
        <Label>Full Name</Label>
        <Input name="name" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" />
        <Description>We'll never share your email.</Description>
      </Field>
      <Button type="submit">Save</Button>
    </FieldGroup>
  </Fieldset>
</form>
```

**Component Hierarchy:**

```
Fieldset (semantic grouping)
├── Legend (section title)
└── FieldGroup (spacing container)
    ├── Field (individual input wrapper)
    │   ├── Label
    │   ├── Input/Select/Checkbox/etc
    │   └── Description (optional)
    └── Button (submit)
```

### Error Handling Pattern

```tsx
import { Field, Label, ErrorMessage } from '@/components/fieldset'
import { Input } from '@/components/input'

<Field>
  <Label>Email</Label>
  <Input
    type="email"
    name="email"
    invalid={!!errors.email}  // Triggers red border
  />
  {errors.email && (
    <ErrorMessage>{errors.email}</ErrorMessage>
  )}
</Field>
```

---

## Layout Components

### Sidebar Layout

**Usage:**

```tsx
import { SidebarLayout, Sidebar, SidebarHeader, SidebarBody, SidebarFooter } from '@/components/sidebar-layout'
import { Navbar, NavbarItem } from '@/components/navbar'

<SidebarLayout>
  <Sidebar>
    <SidebarHeader>
      {/* Logo */}
    </SidebarHeader>
    <SidebarBody>
      <Navbar>
        <NavbarItem href="/">Dashboard</NavbarItem>
        <NavbarItem href="/settings">Settings</NavbarItem>
      </Navbar>
    </SidebarBody>
    <SidebarFooter>
      {/* User menu */}
    </SidebarFooter>
  </Sidebar>

  <main>
    {/* Page content */}
  </main>
</SidebarLayout>
```

### Stacked Layout

**Usage:**

```tsx
import { StackedLayout } from '@/components/stacked-layout'
import { Navbar, NavbarItem } from '@/components/navbar'

<StackedLayout>
  <Navbar>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/about">About</NavbarItem>
  </Navbar>

  <main>
    {/* Page content */}
  </main>
</StackedLayout>
```

**Pattern Notes:**

- Layouts are **top-level components** (used in `layout.tsx`)
- Handle responsive behavior automatically
- Include mobile menu logic
- Integrate with Navbar component

---

## Feedback Components

### Alert Component

**Usage:**

```tsx
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/alert'
import { Button } from '@/components/button'

<Alert>
  <AlertTitle>Payment successful</AlertTitle>
  <AlertDescription>
    Your payment has been processed successfully.
  </AlertDescription>
  <AlertActions>
    <Button plain>Dismiss</Button>
  </AlertActions>
</Alert>
```

### Dialog Component

**Usage:**

```tsx
import { Dialog, DialogTitle, DialogDescription, DialogBody, DialogActions } from '@/components/dialog'
import { Button } from '@/components/button'

const [isOpen, setIsOpen] = useState(false)

<Dialog open={isOpen} onClose={setIsOpen}>
  <DialogTitle>Confirm deletion</DialogTitle>
  <DialogDescription>
    Are you sure you want to delete this item?
  </DialogDescription>
  <DialogBody>
    {/* Additional content */}
  </DialogBody>
  <DialogActions>
    <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button color="red" onClick={handleDelete}>Delete</Button>
  </DialogActions>
</Dialog>
```

**Size Options:** `xs`, `sm`, `md`, `lg` (default), `xl`, `2xl`, `3xl`, `4xl`, `5xl`

```tsx
<Dialog size="sm" open={isOpen} onClose={setIsOpen}>
  {/* Small dialog */}
</Dialog>
```

---

## Styling Patterns

### Using clsx for Conditional Styles

Catalyst uses `clsx` for combining class names:

```tsx
import clsx from 'clsx'

<div className={clsx(
  'base-class',
  condition && 'conditional-class',
  { 'class-if-true': someBoolean }
)}>
```

### Extending Component Styles

**Pattern 1: Add className prop**

```tsx
// Using built-in className support
<Button className="mt-4 w-full">
  Submit
</Button>
```

**Pattern 2: Wrap with styled div**

```tsx
<div className="custom-wrapper">
  <Button>Click me</Button>
</div>
```

**Pattern 3: Modify component file (if needed)**

Copy the component file and adjust the `styles` object.

### Dark Mode Patterns

Catalyst components have dark mode built-in:

```tsx
// Example from Button component
'text-zinc-950 dark:text-white'
'bg-white dark:bg-zinc-800'
'border-zinc-950/10 dark:border-white/10'
```

**No special setup needed** - works automatically with Next.js dark mode.

---

## Accessibility Features

### Built-in ARIA Support

Catalyst inherits ARIA attributes from Headless UI:

- **Buttons:** `role="button"`, `aria-disabled`
- **Dialogs:** `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`
- **Inputs:** `aria-invalid`, `aria-describedby` (for descriptions/errors)
- **Checkboxes/Radios:** `role="checkbox"`, `aria-checked`

### Keyboard Navigation

All interactive components support keyboard:

- **Button:** Enter/Space to activate
- **Dialog:** Escape to close, Tab trapping
- **Select:** Arrow keys, type to search
- **Checkbox/Radio:** Space to toggle, Arrow keys in groups

### Focus Management

- Visible focus rings (`:focus-visible`)
- Focus trapping in modals
- Focus restoration after dialog close

### Screen Reader Support

- Semantic HTML (button, input, label)
- ARIA labels where needed
- Error announcements with `aria-live`

---

## Context7 Integration

### Fetching Official Catalyst Documentation

Use Context7 MCP to get latest docs during development:

```typescript
// Fetch Catalyst UI documentation
const docs = await mcp__context7__get_library_docs({
  context7CompatibleLibraryID: '/tailwindlabs/catalyst',
  topic: 'button component',
  tokens: 5000
})
```

**Recommended Library IDs:**

| Library | Context7 ID | Trust Score | Use Case |
|---------|------------|-------------|----------|
| Catalyst UI | `/tailwindlabs/catalyst` | 10/10 | Component API reference |
| Headless UI | `/tailwindlabs/headlessui.com` | 10/10 | Underlying behavior/props |
| Tailwind CSS | `/tailwindlabs/tailwindcss.com` | 10/10 | Styling reference |

**When to use Context7:**

- Confirming component prop types
- Checking for new components/features
- Verifying accessibility patterns
- Understanding Headless UI behavior

---

## Quick Reference

### Component Import Cheatsheet

```tsx
// Buttons
import { Button } from '@/components/button'

// Inputs
import { Input, InputGroup } from '@/components/input'
import { Textarea } from '@/components/textarea'
import { Select } from '@/components/select'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/checkbox'
import { Radio, RadioField, RadioGroup } from '@/components/radio'
import { Switch, SwitchField } from '@/components/switch'

// Forms
import { Fieldset, Legend, FieldGroup, Field, Label, Description, ErrorMessage } from '@/components/fieldset'

// Feedback
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/alert'
import { Dialog, DialogTitle, DialogDescription, DialogBody, DialogActions } from '@/components/dialog'

// Layout
import { SidebarLayout, Sidebar, SidebarHeader, SidebarBody, SidebarFooter } from '@/components/sidebar-layout'
import { StackedLayout } from '@/components/stacked-layout'
import { Navbar, NavbarItem } from '@/components/navbar'

// Data Display
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '@/components/table'
import { Badge } from '@/components/badge'
import { Avatar } from '@/components/avatar'
import { Divider } from '@/components/divider'

// Typography
import { Heading, Subheading } from '@/components/heading'
import { Text, TextLink } from '@/components/text'
import { Link } from '@/components/link'
```

### Common Pattern Checklist

When using Catalyst components:

- [ ] Install dependencies: `@headlessui/react`, `motion`, `clsx`
- [ ] Copy needed components from `{module_root}/data/catalyst-ui-kit/typescript/`
- [ ] Import from `@/components/*` (not BMAD data folder)
- [ ] Use compound components (Field + Label + Input)
- [ ] Use proper form structure (Fieldset > FieldGroup > Field)
- [ ] Add `data-slot="icon"` to icons in InputGroup
- [ ] Use `forwardRef` when wrapping components
- [ ] Test keyboard navigation
- [ ] Test dark mode appearance
- [ ] Verify accessibility with screen reader

### Styling Guidelines

- **Extend styles:** Use `className` prop, don't modify component files
- **Colors:** Use Catalyst's color variants, not arbitrary Tailwind colors
- **Spacing:** Use Tailwind spacing utilities (`mt-4`, `gap-3`)
- **Dark mode:** Trust built-in dark mode, don't add custom
- **Data attributes:** Use `data-*` for state styling, not pseudo-classes

---

## Summary

**Catalyst UI Core Principles:**

1. **Headless UI foundation** - Accessibility and behavior handled
2. **Tailwind CSS v4 styling** - Modern CSS variables and utilities
3. **Copy-paste components** - Copy from BMAD data folder to your project
4. **Compound components** - Small pieces that compose together
5. **Type-safe** - Full TypeScript support
6. **Accessible by default** - ARIA, keyboard, focus management built-in

**Critical Rules:**

- ✅ Copy components to your project, import from `@/components/*`
- ✅ Use compound components together (Field + Label + Input)
- ✅ Use `data-slot="icon"` for icons
- ✅ Trust built-in dark mode styling
- ✅ Use Context7 for latest official docs
- ❌ Don't import from BMAD data folder
- ❌ Don't modify component files unless absolutely necessary
- ❌ Don't fight Headless UI behavior (work with it)

Follow these patterns and Catalyst components will work correctly from the start.
