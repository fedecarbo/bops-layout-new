# Catalyst UI Troubleshooting

**Purpose:** Common mistakes, errors, and fixes when working with Catalyst UI components. Prevents debugging time by catching issues early.

**Version:** Catalyst UI v1.0+ (Tailwind CSS v4 compatible)

---

## Table of Contents

1. [Installation & Dependency Issues](#installation--dependency-issues)
2. [Import & Path Issues](#import--path-issues)
3. [Component Behavior Issues](#component-behavior-issues)
4. [Styling Issues](#styling-issues)
5. [Form & Validation Issues](#form--validation-issues)
6. [TypeScript Type Errors](#typescript-type-errors)
7. [Dark Mode Issues](#dark-mode-issues)
8. [Accessibility Issues](#accessibility-issues)
9. [Build & Compilation Errors](#build--compilation-errors)

---

## Installation & Dependency Issues

### ❌ Error: "Cannot find module '@headlessui/react'"

**Problem:** Missing Headless UI dependency

**Fix:**

```bash
npm install @headlessui/react
```

**Prevention:** Always install all three core dependencies:

```bash
npm install @headlessui/react motion clsx
```

---

### ❌ Error: "clsx is not a function"

**Problem:** Missing or incorrect `clsx` import

**Fix:**

```tsx
// ✅ CORRECT
import clsx from 'clsx'

// ❌ WRONG
import { clsx } from 'clsx'  // Named import doesn't exist
```

**Note:** `clsx` is a default export, not named export.

---

### ❌ Warning: "Tailwind classes not applying"

**Problem:** Using Catalyst with Tailwind v3 instead of v4

**Symptom:** Classes like `bg-(--btn-bg)` don't work

**Fix:** Upgrade to Tailwind CSS v4:

```bash
npm install tailwindcss@latest @tailwindcss/postcss@latest
```

**See:** `{tech-kb}/tailwind-v4/essentials.md` for full v4 setup

---

### ❌ Error: "motion is not defined"

**Problem:** Missing Framer Motion (motion) dependency

**Fix:**

```bash
npm install motion
```

**Note:** Catalyst uses `motion` (not `framer-motion`). They're different packages.

---

## Import & Path Issues

### ❌ Error: "Module not found: Can't resolve '@/components/button'"

**Problem:** Component not copied to project or path alias not configured

**Fix Option 1: Copy component**

```bash
# Copy from BMAD data folder to your project
cp {module_root}/data/catalyst-ui-kit/typescript/button.tsx src/components/
```

**Fix Option 2: Configure path alias**

In `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

### ❌ Error: Importing from BMAD data folder directly

**Problem:**

```tsx
// ❌ WRONG
import { Button } from '../../../bmad/rapid-proto/data/catalyst-ui-kit/typescript/button'
```

**Fix:**

1. Copy component to your project
2. Import from project location:

```tsx
// ✅ CORRECT
import { Button } from '@/components/button'
```

**Why:** Components should be project-local, not imported from external module data folders.

---

### ❌ Error: "Cannot find module './link'"

**Problem:** Component has dependencies on other Catalyst components

**Example:** `Button` imports `Link`, but `Link` not copied to project

**Fix:** Copy all dependent components:

```bash
# Button depends on Link
cp {module_root}/data/catalyst-ui-kit/typescript/link.tsx src/components/
cp {module_root}/data/catalyst-ui-kit/typescript/button.tsx src/components/
```

**Common dependencies:**

- `Button` → `Link`
- `Dialog` → `Text`
- Most components → None (self-contained)

---

## Component Behavior Issues

### ❌ Issue: Button doesn't navigate when href provided

**Problem:** Using `<a>` or wrong component with href

**Symptom:**

```tsx
// ❌ Doesn't work as link
<Button href="/dashboard">Dashboard</Button>  // But Link not imported in Button
```

**Fix:** Ensure `Link` component is copied and imported in `button.tsx`:

```tsx
// In button.tsx
import { Link } from './link'

// Component logic handles href automatically
return typeof props.href === 'string' ? (
  <Link {...props} className={classes} ref={ref}>
    {children}
  </Link>
) : (
  <Headless.Button {...props} className={classes} ref={ref}>
    {children}
  </Headless.Button>
)
```

---

### ❌ Issue: Dialog doesn't close when clicking backdrop

**Problem:** Not providing `onClose` handler or `open` state

**Symptom:**

```tsx
// ❌ WRONG: Missing state management
<Dialog>
  <DialogTitle>Hello</DialogTitle>
</Dialog>
```

**Fix:**

```tsx
// ✅ CORRECT: Controlled component
const [isOpen, setIsOpen] = useState(false)

<Dialog open={isOpen} onClose={setIsOpen}>
  <DialogTitle>Hello</DialogTitle>
</Dialog>
```

**Rule:** Dialog is a **controlled component** - must manage `open` state.

---

### ❌ Issue: InputGroup icon not positioned correctly

**Problem:** Missing `data-slot="icon"` attribute

**Symptom:**

```tsx
// ❌ WRONG: Icon not recognized
<InputGroup>
  <MagnifyingGlassIcon />  {/* Missing data-slot */}
  <Input name="search" />
</InputGroup>
```

**Fix:**

```tsx
// ✅ CORRECT: Add data-slot="icon"
<InputGroup>
  <MagnifyingGlassIcon data-slot="icon" />
  <Input name="search" />
</InputGroup>
```

**Why:** InputGroup uses `data-slot="icon"` selector for positioning.

---

### ❌ Issue: Switch doesn't toggle

**Problem:** Using as uncontrolled component without `defaultChecked` or controlled without state

**Fix Option 1: Uncontrolled (form-managed)**

```tsx
// ✅ CORRECT: Uncontrolled with defaultChecked
<Switch name="notifications" defaultChecked={false} />
```

**Fix Option 2: Controlled (state-managed)**

```tsx
// ✅ CORRECT: Controlled with state
const [enabled, setEnabled] = useState(false)
<Switch checked={enabled} onChange={setEnabled} />
```

---

### ❌ Issue: Select dropdown arrow missing or misaligned

**Problem:** Custom SVG or styling conflict

**Fix:** Ensure you're using the component as-is without modifications. If custom styling needed:

```tsx
<Select className="custom-class" name="country">
  <option>...</option>
</Select>
```

**Note:** Select component has custom arrow built-in. Don't add your own.

---

## Styling Issues

### ❌ Issue: Custom Tailwind classes not applying

**Problem:** Tailwind not detecting component classes

**Symptom:**

```tsx
<Button className="mt-8 w-full">Submit</Button>
// Classes don't apply
```

**Fix:** Check `postcss.config.mjs` uses `@tailwindcss/postcss`:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},  // ✅ Correct plugin
  },
}
```

**See:** `{tech-kb}/tailwind-v4/essentials.md#correct-v41-setup`

---

### ❌ Issue: Component looks broken, no styles

**Problem:** Missing `globals.css` import or incorrect Tailwind import

**Fix 1: Check globals.css**

```css
/* globals.css should contain: */
@import "tailwindcss";
```

**Fix 2: Import in layout**

```tsx
// app/layout.tsx
import "./globals.css";  // ✅ Must import CSS
```

---

### ❌ Issue: `bg-(--btn-bg)` syntax error in IDE

**Problem:** IDE doesn't recognize Tailwind v4 CSS variable syntax

**Symptom:** Red underline on `bg-(--btn-bg)`

**Fix:** This is a false positive. Syntax is correct for Tailwind v4.

**To suppress:**

- Update IDE Tailwind extension to v4-compatible version
- Ignore warning (classes will work at runtime)

**Explanation:** Tailwind v4 uses `bg-(--var)` syntax (parentheses, not brackets).

---

### ❌ Issue: Button color not applying

**Problem:** Using invalid color name or conflicting props

**Symptom:**

```tsx
// ❌ WRONG: Invalid color
<Button color="blue-500">Click</Button>

// ❌ WRONG: Conflicting props
<Button color="indigo" outline>Click</Button>
```

**Fix:**

```tsx
// ✅ CORRECT: Valid color name
<Button color="blue">Click</Button>

// ✅ CORRECT: One variant at a time
<Button color="indigo">Solid Button</Button>
<Button outline>Outline Button</Button>
```

**Valid colors:** See `essentials.md#button-component` for full list

---

### ❌ Issue: Dark mode styles not working

**Problem:** Dark mode not configured in Next.js or Tailwind

**Fix:**

Check `tailwind.config.js` (if present):

```javascript
export default {
  darkMode: 'media',  // or 'class'
}
```

Or rely on default (automatic dark mode detection works in v4).

**Note:** Catalyst components have dark mode built-in. No special configuration needed.

---

## Form & Validation Issues

### ❌ Issue: Form validation errors not showing

**Problem:** Using `invalid` prop incorrectly or missing `ErrorMessage`

**Symptom:**

```tsx
// ❌ WRONG: invalid is string, should be boolean
<Input invalid="true" />

// ❌ WRONG: No ErrorMessage component
<Input invalid={true} />
```

**Fix:**

```tsx
// ✅ CORRECT: Boolean prop + ErrorMessage
<Field>
  <Label>Email</Label>
  <Input
    type="email"
    name="email"
    invalid={!!errors.email}  // Boolean
  />
  {errors.email && (
    <ErrorMessage>{errors.email}</ErrorMessage>
  )}
</Field>
```

---

### ❌ Issue: Field layout broken (label/input spacing)

**Problem:** Not using proper Field structure

**Symptom:**

```tsx
// ❌ WRONG: Missing Field wrapper
<Label>Email</Label>
<Input type="email" name="email" />
```

**Fix:**

```tsx
// ✅ CORRECT: Wrap in Field
<Field>
  <Label>Email</Label>
  <Input type="email" name="email" />
</Field>
```

**Rule:** Always wrap label + input in `<Field>` for proper spacing.

---

### ❌ Issue: Checkbox/Radio not aligned with label

**Problem:** Not using `CheckboxField` / `RadioField` wrapper

**Fix:**

```tsx
// ❌ WRONG
<Checkbox name="agree" />
<Label>I agree</Label>

// ✅ CORRECT
<CheckboxField>
  <Checkbox name="agree" />
  <Label>I agree</Label>
</CheckboxField>
```

---

### ❌ Issue: Form submission not working

**Problem:** Button missing `type="submit"` or form not handled

**Fix:**

```tsx
<form onSubmit={handleSubmit}>
  <FieldGroup>
    {/* fields */}
    <Button type="submit">Save</Button>  {/* ✅ type="submit" */}
  </FieldGroup>
</form>
```

**Note:** Button defaults to `type="button"`, must explicitly set `type="submit"`.

---

## TypeScript Type Errors

### ❌ Error: "Type '{ children: ...; }' is not assignable to type 'ButtonProps'"

**Problem:** Passing incompatible prop combination

**Example:**

```tsx
// ❌ WRONG: Can't use color + outline together
<Button color="indigo" outline>Click</Button>
```

**Fix:**

```tsx
// ✅ CORRECT: One variant at a time
<Button color="indigo">Solid Button</Button>
<Button outline>Outline Button</Button>
<Button plain>Plain Button</Button>
```

**Explanation:** Button uses discriminated union types:

```typescript
type ButtonProps =
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true }
```

---

### ❌ Error: "Property 'ref' does not exist"

**Problem:** Using ref without `forwardRef` wrapper

**Fix:** Catalyst components use `forwardRef`, ensure you're passing ref correctly:

```tsx
const buttonRef = useRef<HTMLButtonElement>(null)

// ✅ CORRECT
<Button ref={buttonRef}>Click</Button>
```

**Note:** If creating custom wrapper, use `forwardRef`:

```tsx
const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <Button ref={ref} {...props} />
  }
)
```

---

### ❌ Error: "Type 'string' is not assignable to type 'DateType'"

**Problem:** Using unsupported input type

**Fix:** Use supported types only:

```tsx
// ✅ CORRECT: Supported types
<Input type="email" />
<Input type="text" />
<Input type="date" />

// ❌ WRONG: Unsupported type
<Input type="file" />  // Not in type definition
```

**Supported types:** `email`, `number`, `password`, `search`, `tel`, `text`, `url`, `date`, `datetime-local`, `month`, `time`, `week`

---

## Dark Mode Issues

### ❌ Issue: Component looks wrong in dark mode

**Problem:** Custom styles overriding built-in dark mode

**Symptom:**

```tsx
// ❌ WRONG: Overriding dark mode
<Button className="bg-white text-black">
  Submit
</Button>
```

**Fix:** Use color variants, not custom background:

```tsx
// ✅ CORRECT: Use built-in colors
<Button color="white">Submit</Button>
```

**Rule:** Trust Catalyst's dark mode. Avoid custom `bg-*`, `text-*` classes on components.

---

### ❌ Issue: Dark mode not detected

**Problem:** System preference not working

**Fix:** Check if `prefers-color-scheme` is set in browser/OS.

**Force dark mode for testing:**

```tsx
// In globals.css (temporary testing only)
:root {
  color-scheme: dark;
}
```

**Or use class-based dark mode:**

```tsx
// In layout.tsx
<html className="dark">
  {children}
</html>
```

---

## Accessibility Issues

### ❌ Issue: Focus ring not visible

**Problem:** Custom styling removing focus indicator

**Fix:** Don't override focus styles:

```tsx
// ❌ WRONG
<Button className="focus:outline-none">Submit</Button>

// ✅ CORRECT: Let component handle focus
<Button>Submit</Button>
```

**Note:** Catalyst uses `focus-within:ring-2` on inputs, `data-focus:outline-2` on buttons.

---

### ❌ Issue: Screen reader not announcing errors

**Problem:** Missing `aria-describedby` connection

**Fix:** Headless UI handles this automatically IF you use `Description` / `ErrorMessage` inside `Field`:

```tsx
// ✅ CORRECT: Auto-connected via Field
<Field>
  <Label>Email</Label>
  <Input type="email" name="email" invalid={!!error} />
  {error && <ErrorMessage>{error}</ErrorMessage>}
</Field>
```

**Don't manually add `aria-describedby`** - Headless UI does it.

---

### ❌ Issue: Dialog not trapping focus

**Problem:** Custom dialog implementation instead of using Catalyst's Dialog

**Fix:** Use Catalyst Dialog component as-is - focus trapping is built-in via Headless UI.

---

## Build & Compilation Errors

### ❌ Error: "Unexpected token 'export'"

**Problem:** Using ESM syntax in CommonJS context

**Fix:** Ensure `package.json` has `"type": "module"` OR use `.mjs` extensions:

```json
{
  "type": "module"
}
```

Or rename config files:

```
postcss.config.js → postcss.config.mjs
```

---

### ❌ Error: "Cannot use import statement outside a module"

**Problem:** Component file using `import` in CommonJS project

**Fix:** Use TypeScript/Next.js project (supports ESM by default).

**Or:** Configure Babel/webpack for ESM.

---

### ❌ Warning: "'Button' cannot be used as a JSX component"

**Problem:** TypeScript version mismatch or conflicting React types

**Fix:**

```bash
# Update TypeScript and React types
npm install -D typescript@latest @types/react@latest @types/react-dom@latest
```

---

### ❌ Error: "Module parse failed: Unexpected token"

**Problem:** Webpack/Next.js not configured for `.tsx` files

**Fix:** Ensure `next.config.js` includes:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No special config needed - Next.js supports .tsx by default
}
export default nextConfig
```

If still failing, check file extension is `.tsx` (not `.ts`).

---

## Prevention Checklist

Before using Catalyst components, verify:

- [ ] **Dependencies installed:** `@headlessui/react`, `motion`, `clsx`
- [ ] **Tailwind v4 configured:** See `tailwind-v4/essentials.md`
- [ ] **Components copied:** From `{module_root}/data/catalyst-ui-kit/typescript/` to project
- [ ] **Path alias set:** `@/*` → `./src/*` in `tsconfig.json`
- [ ] **Import from project:** Use `@/components/*`, not BMAD data folder
- [ ] **Use compound components:** Field + Label + Input together
- [ ] **Add data-slot="icon":** For icons in InputGroup
- [ ] **Provide state for Dialog:** Use `open` and `onClose` props
- [ ] **Use color variants:** Not custom `bg-*` classes
- [ ] **Test keyboard nav:** Tab, Enter, Space, Escape
- [ ] **Test dark mode:** Toggle system preference

---

## Quick Fixes Summary

| Issue | Quick Fix |
|-------|-----------|
| Module not found | Copy component to project, check path alias |
| clsx error | `import clsx from 'clsx'` (default export) |
| Styles not applying | Check Tailwind v4 setup, import `globals.css` |
| Dialog won't close | Add `open={state}` and `onClose={setState}` |
| Icon misaligned | Add `data-slot="icon"` attribute |
| Button not linking | Ensure `Link` component copied and imported |
| Form spacing wrong | Wrap inputs in `<Field>` component |
| Dark mode broken | Don't override `bg-*`/`text-*`, use color variants |
| Focus ring missing | Don't use `focus:outline-none` |
| TypeScript error | Check prop combinations (color/outline/plain are exclusive) |

---

## Getting Help

If issue persists after checking this guide:

1. **Check official docs:** Use Context7 to fetch latest Catalyst docs
2. **Check Headless UI docs:** Many behaviors come from Headless UI
3. **Check Tailwind v4 setup:** See `{tech-kb}/tailwind-v4/troubleshooting.md`
4. **Review essentials:** See `{tech-kb}/catalyst-ui/essentials.md`

**Context7 query example:**

```typescript
const docs = await mcp__context7__get_library_docs({
  context7CompatibleLibraryID: '/tailwindlabs/catalyst',
  topic: 'button not working',
  tokens: 5000
})
```

---

## Common Anti-Patterns

**❌ DON'T:**

- Import from BMAD data folder directly
- Mix color/outline/plain props on Button
- Override dark mode with custom `bg-*` classes
- Remove focus styles (`focus:outline-none`)
- Use `<input>` instead of `<Input>` component
- Forget `data-slot="icon"` on icons
- Manually add ARIA attributes (Headless UI handles it)
- Modify component source files (extend via props instead)

**✅ DO:**

- Copy components to your project
- Use one Button variant at a time
- Trust built-in dark mode
- Keep focus indicators visible
- Use Catalyst components for forms
- Add `data-slot="icon"` to InputGroup icons
- Use compound components (Field + Label + Input)
- Extend styling via `className` prop

Follow these guidelines and most issues will be prevented before they occur.
