# Tailwind UI Blocks - Troubleshooting Guide

## Common Issues and Solutions

### Installation & Setup

#### Issue: Components not rendering correctly

**Symptoms:**
- Components appear unstyled
- Layout broken
- Missing spacing/colors

**Solutions:**

1. **Verify Tailwind CSS v4.1 installation**
```bash
npm list tailwindcss
# Should show v4.1.x or higher
```

2. **Check Tailwind configuration includes component paths**
```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  // ... rest of config
}
```

3. **Ensure Tailwind directives are imported**
```css
/* globals.css or main.css */
@import "tailwindcss";
```

4. **Rebuild Tailwind**
```bash
npm run dev
# or
npm run build
```

---

#### Issue: Icons not displaying

**Symptoms:**
- Empty spaces where icons should be
- Console errors about icon imports
- Missing icon components

**Solutions:**

1. **Install Heroicons**
```bash
npm install @heroicons/react
```

2. **Verify correct import paths**
```tsx
// ✅ Correct: Import from specific size
import { BellIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/20/solid'

// ❌ Wrong: Incorrect size path
import { BellIcon } from '@heroicons/react/outline' // v1 syntax
```

3. **Match icon sizes to component needs**
- **16/solid:** Small UI icons (menu indicators, form decorations)
- **20/solid:** Medium icons (buttons, badges)
- **24/outline:** Large icons (navigation, headers)
- **24/solid:** Large filled icons (active states)

4. **Check for naming conflicts**
```tsx
// If you have naming conflicts
import { BellIcon as BellOutline } from '@heroicons/react/24/outline'
import { BellIcon as BellSolid } from '@heroicons/react/24/solid'
```

---

#### Issue: Headless UI components not working

**Symptoms:**
- Dropdowns not opening
- Modals not displaying
- Transitions broken
- Console errors about Headless UI

**Solutions:**

1. **Install Headless UI v2.0+**
```bash
npm install @headlessui/react
```

2. **Verify React version (18+)**
```bash
npm list react
# Should be 18.0.0 or higher
```

3. **Check component structure**
```tsx
// ✅ Correct: Proper nesting
<Menu>
  <MenuButton>Options</MenuButton>
  <MenuItems>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
  </MenuItems>
</Menu>

// ❌ Wrong: Missing wrapper or incorrect nesting
<MenuButton>Options</MenuButton>
<MenuItems>
  <MenuItem>Edit</MenuItem>
</MenuItems>
```

4. **Update to v2 syntax if migrating from v1**
```tsx
// v1 (old)
<Menu.Button>Options</Menu.Button>

// v2 (new)
<MenuButton>Options</MenuButton>
```

---

### Styling Issues

#### Issue: Dark mode not working

**Symptoms:**
- Dark themed components appear light
- Dark mode classes not applying
- Inconsistent theming

**Solutions:**

1. **Enable dark mode in Tailwind config**
```js
// tailwind.config.js
export default {
  darkMode: 'class', // or 'media'
  // ... rest of config
}
```

2. **Add dark class to HTML root (for class strategy)**
```html
<html class="dark">
  <body>
    <!-- Your app -->
  </body>
</html>
```

3. **Toggle dark mode programmatically**
```tsx
// Add to root layout or app
useEffect(() => {
  if (darkModeEnabled) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [darkModeEnabled])
```

4. **Verify dark mode classes exist**
```tsx
// Components should have dark: variants
className="bg-white dark:bg-gray-900"
```

---

#### Issue: Custom colors not applying

**Symptoms:**
- Brand colors not showing
- Color classes not working
- Default indigo colors remain

**Solutions:**

1. **Extend Tailwind theme in config**
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... rest of scale
          900: '#0c4a6e',
        },
      },
    },
  },
}
```

2. **Replace color classes in components**
```tsx
// Find and replace throughout component
// Before:
className="bg-indigo-600 hover:bg-indigo-500"

// After:
className="bg-brand-600 hover:bg-brand-500"
```

3. **Use CSS variables for dynamic theming (Tailwind v4)**
```css
@theme {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
}
```

```tsx
className="bg-[--color-primary] hover:bg-[--color-primary-hover]"
```

---

#### Issue: Responsive breakpoints not working

**Symptoms:**
- Mobile menu not showing/hiding
- Desktop layout showing on mobile
- Breakpoint classes not applying

**Solutions:**

1. **Don't remove responsive prefixes**
```tsx
// ✅ Keep responsive classes
className="hidden sm:block"
className="sm:flex sm:space-x-8"

// ❌ Don't remove them
className="block" // Will always show
```

2. **Maintain breakpoint order**
```tsx
// ✅ Correct order: base → sm → md → lg
className="block sm:hidden md:flex lg:grid"

// ❌ Wrong order
className="lg:grid sm:hidden md:flex block"
```

3. **Test at actual breakpoints**
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

4. **Verify viewport meta tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

---

### Placeholder Content Issues

#### Issue: Production site shows placeholder data like "Tom Cook" or "Dashboard/Team/Projects"

**Symptoms:**
- Example user names appear in production
- Navigation shows generic items like "Dashboard", "Team", "Projects"
- Placeholder stats showing incorrect numbers
- Links pointing to `#` instead of real routes
- Unsplash placeholder images

**Solutions:**

1. **Identify all placeholder content in the component**
```tsx
// Search for these common placeholders:
- "Tom Cook", "Lindsay Walton", "Courtney Henry" (user names)
- "Dashboard", "Team", "Projects", "Calendar" (navigation)
- href="#" (placeholder links)
- "https://images.unsplash.com/" (placeholder images)
- Hard-coded numbers in stats (71,897, 58.16%, etc.)
```

2. **Replace user data with real data**
```tsx
// ✅ Correct: Use actual data
const user = {
  name: session?.user?.name || 'Guest',
  email: session?.user?.email || '',
  imageUrl: session?.user?.image || '/default-avatar.png'
}

// Import mock data if no real data yet
import { mockUsers } from '@/lib/mock-data/users'
const user = mockUsers[0]
```

3. **Replace navigation with actual routes**
```tsx
// ✅ Correct: Use real routes from your app
const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: pathname === '/dashboard' },
  { name: 'Analytics', href: '/analytics', current: pathname === '/analytics' },
  { name: 'Settings', href: '/settings', current: pathname === '/settings' },
]
```

4. **Connect stats to data source**
```tsx
// ✅ Correct: Use real or mock data
import { getDashboardStats } from '@/lib/data'

const stats = await getDashboardStats()
// or use mock data
import { mockStats } from '@/lib/mock-data/stats'
```

5. **Update all href="#" links**
```tsx
// ❌ Wrong
<a href="#">View profile</a>

// ✅ Correct
<a href="/profile">View profile</a>
<Link href="/profile">View profile</Link>
```

6. **Replace placeholder images**
```tsx
// ❌ Wrong
imageUrl: 'https://images.unsplash.com/photo-1472099645785-...'

// ✅ Correct
imageUrl: user.avatar || '/images/default-avatar.png'
```

7. **Create a replacement checklist**
Before considering a UI Block component "done":
- [ ] All user names replaced with real/mock data
- [ ] Navigation items match actual routes
- [ ] All href="#" replaced with real paths
- [ ] Stats/metrics connected to data source
- [ ] Table data from API or mock files
- [ ] Form fields match data model
- [ ] Images point to project assets
- [ ] Event handlers properly connected

---

### Component Behavior Issues

#### Issue: Modals/Slide-overs not closing

**Symptoms:**
- Modal stays open after clicking backdrop
- Close button doesn't work
- Escape key doesn't close

**Solutions:**

1. **Verify Dialog/Modal state management**
```tsx
const [isOpen, setIsOpen] = useState(false)

<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
  {/* Modal content */}
</Dialog>
```

2. **Check backdrop click handling**
```tsx
// Headless UI handles this automatically
// Just ensure onClose is properly set
<Dialog onClose={setIsOpen}>
  <DialogBackdrop /> {/* Clicking this calls onClose */}
  <DialogPanel>
    {/* Modal content */}
  </DialogPanel>
</Dialog>
```

3. **Verify close button implementation**
```tsx
<button
  type="button"
  onClick={() => setIsOpen(false)} // Must update state
>
  <XMarkIcon className="h-6 w-6" />
</button>
```

---

#### Issue: Dropdown menus positioning incorrectly

**Symptoms:**
- Dropdown appears in wrong location
- Menu cut off by container
- Positioning jumps on scroll

**Solutions:**

1. **Use correct Menu structure**
```tsx
<Menu as="div" className="relative"> {/* relative is key */}
  <MenuButton>Options</MenuButton>

  <MenuItems className="absolute right-0 z-10 mt-2"> {/* absolute positioning */}
    {/* Items */}
  </MenuItems>
</Menu>
```

2. **Ensure proper z-index**
```tsx
className="absolute right-0 z-10 mt-2" // z-10 or higher
```

3. **Check for overflow hidden on parents**
```tsx
// Parent containers should not have overflow-hidden
// if you need dropdown to escape bounds

// ❌ Will clip dropdown
<div className="overflow-hidden">
  <Menu>...</Menu>
</div>

// ✅ Use overflow-auto or remove
<div className="overflow-auto">
  <Menu>...</Menu>
</div>
```

4. **Use portal for complex layouts**
```tsx
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { createPortal } from 'react-dom'

<Menu>
  <MenuButton>Options</MenuButton>
  {createPortal(
    <MenuItems>{/* Items */}</MenuItems>,
    document.body
  )}
</Menu>
```

---

#### Issue: Forms not submitting

**Symptoms:**
- Submit button clicks don't work
- Form doesn't trigger onSubmit
- Validation not running

**Solutions:**

1. **Ensure button type is correct**
```tsx
// ✅ Correct
<button type="submit">Save</button>

// ❌ Wrong
<button type="button">Save</button> // Won't submit form
<button>Save</button> // Defaults to 'submit' but be explicit
```

2. **Add onSubmit handler to form**
```tsx
<form onSubmit={handleSubmit}>
  {/* Form fields */}
  <button type="submit">Save</button>
</form>
```

3. **Prevent default if handling with JS**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Your submission logic
}
```

4. **Check for disabled state**
```tsx
// Button disabled = won't submit
<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Saving...' : 'Save'}
</button>
```

---

### Accessibility Issues

#### Issue: Screen readers not announcing properly

**Symptoms:**
- Screen reader skips content
- Buttons not announced correctly
- Navigation unclear

**Solutions:**

1. **Verify landmark elements**
```tsx
// ✅ Use semantic HTML
<nav aria-label="Main navigation">
<main>
<header>

// ❌ Avoid generic divs for major sections
<div> // Screen readers won't identify purpose
```

2. **Add ARIA labels to icon buttons**
```tsx
// ✅ Correct
<button aria-label="View notifications">
  <span className="sr-only">View notifications</span>
  <BellIcon className="h-6 w-6" />
</button>

// ❌ Missing label
<button>
  <BellIcon className="h-6 w-6" />
</button>
```

3. **Use aria-current for active states**
```tsx
<a
  href="/dashboard"
  aria-current={isActive ? 'page' : undefined}
  className={isActive ? 'active-styles' : 'inactive-styles'}
>
  Dashboard
</a>
```

4. **Don't remove sr-only classes**
```tsx
// ✅ Keep screen reader text
<span className="sr-only">Open user menu</span>

// ❌ Don't remove it
// <span className="sr-only">Open user menu</span>
```

---

#### Issue: Keyboard navigation not working

**Symptoms:**
- Tab key doesn't move focus
- Enter/Space don't activate buttons
- Focus indicators invisible

**Solutions:**

1. **Use interactive elements**
```tsx
// ✅ Use button for clickable elements
<button onClick={handleClick}>Click me</button>

// ❌ Don't use div
<div onClick={handleClick}>Click me</div> // Not keyboard accessible
```

2. **Ensure focus outlines visible**
```tsx
// ✅ Use focus-visible for keyboard focus
className="focus-visible:outline-2 focus-visible:outline-indigo-500"

// ❌ Don't remove all outlines
className="outline-none" // Bad for accessibility
```

3. **Verify tab order**
```tsx
// Tab order should follow visual order
// Don't use tabIndex > 0 unless absolutely necessary

// ✅ Natural tab order
<button>First</button>
<button>Second</button>

// ❌ Confusing tab order
<button tabIndex={2}>First</button>
<button tabIndex={1}>Second</button>
```

4. **Handle keyboard events for custom interactions**
```tsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }}
>
  Custom button
</div>
```

---

### TypeScript Issues

#### Issue: Type errors with Headless UI components

**Symptoms:**
- TypeScript errors on Menu, Dialog, etc.
- Props type mismatches
- Generic type errors

**Solutions:**

1. **Ensure @headlessui/react has types**
```bash
# Types are included in package, verify installation
npm install @headlessui/react
```

2. **Use correct prop types**
```tsx
// ✅ Correct typing
import { Dialog } from '@headlessui/react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {children}
    </Dialog>
  )
}
```

3. **Add type to event handlers**
```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // ...
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
}
```

4. **Use proper generics for select/combobox**
```tsx
const [selected, setSelected] = useState<Person | null>(null)

<Combobox value={selected} onChange={setSelected}>
  {/* Options */}
</Combobox>
```

---

#### Issue: classNames function type errors

**Symptoms:**
- Type error on classNames utility
- Arguments type mismatch

**Solutions:**

1. **Add proper typing to classNames**
```tsx
function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}
```

2. **Or use clsx library**
```bash
npm install clsx
```

```tsx
import clsx from 'clsx'

className={clsx(
  'base-class',
  isActive && 'active-class',
  isDisabled && 'disabled-class'
)}
```

---

### Performance Issues

#### Issue: Large bundle size

**Symptoms:**
- Slow initial load
- Large JavaScript bundles
- All Heroicons included

**Solutions:**

1. **Import icons individually**
```tsx
// ✅ Tree-shakeable
import { BellIcon, UserIcon } from '@heroicons/react/24/outline'

// ❌ Imports entire set
import * as Icons from '@heroicons/react/24/outline'
```

2. **Use dynamic imports for modals/overlays**
```tsx
import { lazy, Suspense } from 'react'

const Modal = lazy(() => import('./components/Modal'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {showModal && <Modal />}
    </Suspense>
  )
}
```

3. **Split application shell from routes**
```tsx
// Load shell immediately, lazy load route components
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings = lazy(() => import('./pages/Settings'))
```

---

#### Issue: Re-rendering performance

**Symptoms:**
- Slow interactions
- Laggy dropdowns/modals
- High CPU usage

**Solutions:**

1. **Memoize expensive components**
```tsx
import { memo } from 'react'

const ExpensiveList = memo(({ items }) => {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
})
```

2. **Use useCallback for handlers**
```tsx
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies])
```

3. **Optimize list rendering**
```tsx
// Use virtualization for long lists
import { FixedSizeList } from 'react-window'

<FixedSizeList
  height={600}
  itemCount={items.length}
  itemSize={50}
>
  {Row}
</FixedSizeList>
```

---

### Integration Issues

#### Issue: Conflicts with existing components

**Symptoms:**
- Style conflicts
- Naming collisions
- Behavior inconsistencies

**Solutions:**

1. **Use unique naming**
```tsx
// Rename imported components if conflicts exist
import { Button as TailwindButton } from './ui-blocks/elements/buttons'
import { Button as AppButton } from './components/Button'
```

2. **Scope Tailwind classes**
```tsx
// Use @layer in CSS
@layer components {
  .ui-block-button {
    /* Styles specific to UI blocks */
  }
}
```

3. **Create wrapper components**
```tsx
// Wrap UI block components with your app's API
export function AppModal({ title, children, ...props }) {
  return (
    <UIBlockModal {...props}>
      <UIBlockHeader>{title}</UIBlockHeader>
      {children}
    </UIBlockModal>
  )
}
```

---

#### Issue: Mixing Catalyst UI with UI Blocks

**Symptoms:**
- Inconsistent styling
- Component incompatibilities
- Double wrappers

**Solutions:**

1. **Use UI Blocks for layout, Catalyst for inputs**
```tsx
import { Input, Button } from 'catalyst-ui'
import { FormLayout } from './ui-blocks/forms/form-layouts'

<FormLayout> {/* UI Block structure */}
  <Input name="email" /> {/* Catalyst input */}
  <Button>Submit</Button> {/* Catalyst button */}
</FormLayout>
```

2. **Extract layout from UI Blocks**
```tsx
// Keep className structure from UI Block
// Use Catalyst components for interactive elements
<div className="space-y-6"> {/* From UI Block */}
  <Field> {/* Catalyst */}
    <Label>Email</Label>
    <Input type="email" />
  </Field>
</div>
```

3. **Maintain consistent color scheme**
```tsx
// Use same color palette in both
// Tailwind config should define brand colors
// Both Catalyst and UI Blocks use those colors
```

---

### Build & Deployment Issues

#### Issue: Build fails with Tailwind errors

**Symptoms:**
- "Unknown at-rule @tailwind" errors
- PostCSS configuration errors
- Build process hangs

**Solutions:**

1. **Verify PostCSS configuration**
```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

2. **Update to Tailwind v4.1 syntax**
```css
/* v4.1 uses @import instead of @tailwind */
@import "tailwindcss";
```

3. **Clear build cache**
```bash
rm -rf .next
rm -rf node_modules/.cache
npm run build
```

---

#### Issue: Production build larger than expected

**Symptoms:**
- Large CSS file
- Unused styles included
- All components bundled

**Solutions:**

1. **Verify content paths in Tailwind config**
```js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Don't include ui-blocks source if not used
  ],
}
```

2. **Purge unused CSS**
```js
// Tailwind v4 does this automatically
// Ensure you're using production build
NODE_ENV=production npm run build
```

3. **Use PurgeCSS if needed**
```bash
npm install @fullhuman/postcss-purgecss
```

---

## Getting Help

### Before Asking for Help:

1. **Check this troubleshooting guide**
2. **Review component notes in frontmatter**
3. **Verify all dependencies are installed**
4. **Test component in isolation**
5. **Check browser console for errors**

### Resources:

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Headless UI Docs:** https://headlessui.com
- **Heroicons:** https://heroicons.com
- **Component Catalog:** `{module_root}/tech-kb/tailwind-ui-blocks/catalog.md`
- **Essentials Guide:** `{module_root}/tech-kb/tailwind-ui-blocks/essentials.md`

### Debugging Checklist:

- [ ] Dependencies installed and correct versions
- [ ] Tailwind CSS v4.1+ configured
- [ ] Import paths correct
- [ ] Dark mode configured (if using dark components)
- [ ] Responsive breakpoints not removed
- [ ] Accessibility attributes intact
- [ ] Browser console checked for errors
- [ ] Component tested in isolation
- [ ] Build process successful

---

## Quick Reference: Common Fixes

| Issue | Quick Fix |
|-------|-----------|
| Styles not applying | Rebuild Tailwind, check config paths |
| Icons missing | `npm install @heroicons/react` |
| Dropdown broken | Check Headless UI v2 installed |
| Dark mode not working | Add `darkMode: 'class'` to config |
| Mobile menu not showing | Don't remove `sm:` responsive classes |
| Modal won't close | Verify `onClose` handler set |
| Form won't submit | Button `type="submit"` |
| TypeScript errors | Add proper type annotations |
| Large bundle | Import icons individually |
| Build fails | Check PostCSS config, use `@import` |

---

Remember: The UI Blocks are designed to work out of the box. If something isn't working, it's usually a configuration or dependency issue, not a problem with the component itself. Most issues can be resolved by verifying installations and following the examples exactly as provided.
