# Tailwind UI Blocks - Essential Knowledge

## Overview

The Tailwind UI Blocks library is a comprehensive collection of **347 production-ready React components** built with Tailwind CSS v4.1 and Headless UI. This library provides high-quality, accessible, and professionally designed UI components for rapid application development.

**Location:** `{module_root}/data/ui-blocks/application-ui/`

**Technology Stack:**
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4.1
- **Components:** Headless UI (`@headlessui/react`)
- **Icons:** Heroicons (`@heroicons/react`)

---

## Library Structure

### 10 Main Categories

1. **Application Shells** (23 components)
   - Stacked Layouts, Sidebar Layouts, Multi-Column Layouts
   - Full page layouts with navigation, headers, and content areas

2. **Navigation** (46 components)
   - Navbars, Tabs, Pagination, Vertical Navigation, Sidebar Navigation, Breadcrumbs, Progress Bars
   - Complete navigation patterns for all application types

3. **Headings** (25 components)
   - Page Headings, Card Headings, Section Headings
   - Title sections with actions, metadata, and controls

4. **Forms** (74 components)
   - Input Groups, Form Layouts, Action Panels, Checkboxes, Radio Groups, Select Menus, Comboboxes, Toggles, Textareas, Sign-in/Registration
   - Comprehensive form patterns for all input types

5. **Elements** (45 components)
   - Buttons, Avatars, Badges, Button Groups, Dropdowns
   - Core UI building blocks

6. **Data Display** (19 components)
   - Tables, Description Lists, Stats, Calendars, Panels
   - Components for presenting information

7. **Lists** (44 components)
   - Feeds, Grid Lists, Stacked Lists
   - Various list patterns for different content types

8. **Layout** (38 components)
   - Containers, Columns, Dividers, Media Objects, List Containers, Panels
   - Structural components for page composition

9. **Overlays** (21 components)
   - Modals, Slide-overs, Notifications
   - Floating/overlay UI patterns

10. **Feedback** (12 components)
    - Alerts, Empty States, Skeletons
    - User feedback and state indicators

---

## How to Use UI Blocks

### 1. Finding the Right Component

**By Category:** Browse the catalog by category to explore all available variants
```
forms/input-groups/ → 21 different input field patterns
navigation/navbars/ → 11 navbar variations
application-shells/sidebar-layouts/ → 8 complete layouts
```

**By Tag:** Search the catalog using tags for specific features
```
Tag: "dark" → 74 dark-themed components
Tag: "responsive" → 146 mobile-friendly components
Tag: "search" → Components with search functionality
```

**By Use Case:** Check the catalog's "Use Case Recommendations" section
```
Dashboard Layout → Recommended components listed
Login Page → Pre-selected form components
Data Tables → Complete pattern with filters and pagination
```

### 2. Reading Component Files

Each component file follows this structure:

```markdown
---
group: Application UI
category: Navigation
element: Navbars
variant: Dark with search
tech: React
tailwind: v4.1
deps:
  - '@headlessui/react'
  - '@heroicons/react/24/outline'
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
  Technical description and implementation notes
---

```tsx
// Production-ready React/TSX code
import { ... } from '@headlessui/react'

export default function Example() {
  // Component implementation
}
```
```

**Important:** The code in these files is **production-ready and should be used exactly as provided**. Do not modify imports, structure, or patterns unless adapting to specific project needs.

### 3. Component Dependencies

**Standard Dependencies (most components):**
```json
{
  "@headlessui/react": "^2.0.0",
  "@heroicons/react": "^2.1.0",
  "tailwindcss": "^4.1.0"
}
```

**Installation:**
```bash
npm install @headlessui/react @heroicons/react
```

### 4. Tailwind CSS v4.1 Configuration

All components are designed for Tailwind CSS v4.1 with:
- Modern CSS variable-based theming
- Dark mode support via class or media query
- Proper color palette (gray, indigo, red, green, yellow, blue)
- Responsive breakpoints (sm, md, lg, xl, 2xl)

---

## Common Patterns

### Application Shells

**When to use:** Starting a new application or major section

**Recommended approach:**
1. Choose layout type: Stacked (top navbar) or Sidebar (left nav)
2. Pick variant based on features needed (search, notifications, user menu)
3. Use as base template for entire application
4. Replace content area with page-specific components

**Example flow:**
```
application-shells/sidebar-layouts/01-simple-sidebar.md
  ↓ Provides: Full page structure with navigation
  ↓ Content area: Replace with your page components
  ↓ Customizable: Logo, navigation items, user info
```

### Navigation Components

**When to use:** Adding navigation within a page or section

**Component selection:**
- **Navbars:** Top-level application navigation
- **Tabs:** Content switching within a page
- **Vertical Navigation:** Sidebar or column navigation
- **Breadcrumbs:** Hierarchical navigation trails
- **Pagination:** Multi-page data navigation

**Combination example:**
```
Navbar (top) + Tabs (page section) + Pagination (bottom)
```

### Form Patterns

**When to use:** Building any user input interface

**Best practices:**
1. Start with **form-layouts** for overall structure
2. Use **input-groups** for labeled fields with validation states
3. Add **action-panels** for form actions (save, cancel, delete)
4. Include proper **checkboxes**, **radio-groups**, or **toggles** for options
5. Use **select-menus** or **comboboxes** for dropdown selections

**Complete form example:**
```
forms/form-layouts/01-two-column.md
  ↓ Contains: Grid structure for form

forms/input-groups/XX-with-validation.md
  ↓ Contains: Text inputs with error states

forms/action-panels/XX-well-with-actions.md
  ↓ Contains: Save/Cancel buttons
```

### Data Display

**When to use:** Showing structured information

**Component selection:**
- **Tables:** Tabular data with sorting, selection, actions
- **Stats:** Metrics and KPI displays
- **Description Lists:** Key-value pair information (user profiles, settings)
- **Panels:** Grouped related information
- **Calendars:** Date-based information

---

## Accessibility Features

All components include proper accessibility:

### Semantic HTML
- `<nav>` for navigation
- `<main>` for main content
- `<header>` for page/section headers
- `<button>` for interactive elements

### ARIA Attributes
- `aria-label` for context
- `aria-current` for active states
- `aria-hidden` for decorative elements
- `role` attributes where needed

### Screen Reader Support
- `.sr-only` class for screen reader-only labels
- Descriptive text for icon buttons
- Proper focus management

### Keyboard Navigation
- Tab order follows visual order
- Focus indicators visible
- Keyboard shortcuts where appropriate
- Escape to close modals/menus

---

## Component Composition Strategy

### Building Pages with UI Blocks

**Step 1: Choose Application Shell**
Pick the overall layout structure (sidebar vs stacked)

**Step 2: Add Section Headings**
Use page-headings or section-headings for titles and actions

**Step 3: Compose Content Areas**
Mix and match:
- Lists (feeds, grid lists, stacked lists)
- Data Display (tables, stats, panels)
- Forms (as needed)

**Step 4: Add Interactive Elements**
Include buttons, dropdowns, modals for user actions

**Example Dashboard Composition:**
```
1. application-shells/sidebar-layouts/02-simple-dark-sidebar
   ↓ Base layout with navigation

2. headings/page-headings/01-with-actions
   ↓ "Dashboard" title with "New Report" button

3. data-display/stats/01-simple
   ↓ Key metrics cards

4. lists/feeds/01-with-icon-on-panel
   ↓ Recent activity feed

5. data-display/tables/01-simple
   ↓ Recent transactions table
```

### Building Features with UI Blocks

**Feature: User Authentication**
```
forms/sign-in-and-registration/01-simple.md
  + Optional: headings/page-headings for branding
  + Optional: feedback/alerts for error messages
```

**Feature: Settings Page**
```
headings/page-headings/01-with-actions.md (Settings title)
  + forms/form-layouts/02-two-column-cards.md
  + forms/toggles/XX-with-description.md (feature flags)
  + forms/action-panels/XX-well-with-actions.md (save/cancel)
```

**Feature: Data Table with Filters**
```
headings/section-headings/XX-with-action.md (Table title + "Export" button)
  + forms/input-groups/XX-with-leading-icon.md (search field)
  + data-display/tables/XX-with-selection.md
  + navigation/pagination/01-card-footer-with-page-buttons.md
```

---

## Component Customization Guidelines

### ⚠️ CRITICAL: Placeholder Content Replacement

**ALL UI Blocks contain example/placeholder data that MUST be replaced with project-specific content.**

**Common Placeholders to Replace:**

1. **User Information:**
   ```tsx
   // UI Block placeholder
   const user = {
     name: 'Tom Cook',
     email: 'tom@example.com',
     imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e...'
   }

   // Replace with real data
   const user = {
     name: currentUser.name,
     email: currentUser.email,
     imageUrl: currentUser.avatar || '/default-avatar.png'
   }
   ```

2. **Navigation Items:**
   ```tsx
   // UI Block placeholder
   const navigation = [
     { name: 'Dashboard', href: '#', current: true },
     { name: 'Team', href: '#', current: false },
     { name: 'Projects', href: '#', current: false },
     { name: 'Calendar', href: '#', current: false },
   ]

   // Replace with actual routes
   const navigation = [
     { name: 'Dashboard', href: '/dashboard', current: pathname === '/dashboard' },
     { name: 'Analytics', href: '/analytics', current: pathname === '/analytics' },
     { name: 'Reports', href: '/reports', current: pathname === '/reports' },
   ]
   ```

3. **Stats/Metrics:**
   ```tsx
   // UI Block placeholder
   const stats = [
     { name: 'Total Subscribers', stat: '71,897' },
     { name: 'Avg. Open Rate', stat: '58.16%' },
     { name: 'Avg. Click Rate', stat: '24.57%' },
   ]

   // Replace with real data
   const stats = [
     { name: 'Active Users', stat: dashboardData.activeUsers.toLocaleString() },
     { name: 'Revenue', stat: `$${dashboardData.revenue.toLocaleString()}` },
     { name: 'Growth', stat: `${dashboardData.growth}%` },
   ]
   ```

4. **Table Data:**
   ```tsx
   // UI Block placeholder
   const people = [
     { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com' },
     { id: 2, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com' },
   ]

   // Replace with data source
   const people = users // from API/mock data
   // or
   const people = await fetchUsers()
   ```

5. **Form Fields:**
   ```tsx
   // UI Block may have generic fields
   <Input name="email" type="email" />
   <Input name="password" type="password" />

   // Ensure they match your data model
   <Input name="userEmail" type="email" value={formData.userEmail} onChange={handleChange} />
   <Input name="userPassword" type="password" value={formData.userPassword} onChange={handleChange} />
   ```

6. **Links and Actions:**
   ```tsx
   // UI Block placeholder
   <a href="#">View all</a>
   <button onClick={() => {}}>Submit</button>

   // Replace with real handlers
   <a href="/users">View all users</a>
   <button onClick={handleSubmit}>Submit</button>
   ```

7. **Image URLs:**
   ```tsx
   // UI Block uses Unsplash placeholders
   imageUrl: 'https://images.unsplash.com/photo-...'

   // Replace with project images
   imageUrl: user.profileImage || '/images/default-avatar.png'
   ```

### When Using UI Blocks:

**✅ DO:**
- **ALWAYS replace placeholder content before using in production**
- Customize data (navigation items, user info, content)
- Connect to mock data files or API endpoints
- Adjust colors to match brand (indigo → your-brand-color)
- Combine multiple components into pages
- Add business logic and state management
- Update hrefs from `#` to actual routes

**⚠️ CUSTOMIZE CAREFULLY:**
- Modify layout structure (maintain accessibility)
- Change icon sets (ensure proper imports)
- Adjust spacing (maintain visual hierarchy)

**❌ AVOID:**
- Removing accessibility attributes
- Breaking responsive behavior
- Leaving placeholder data like "Tom Cook" in production
- Using `href="#"` for real navigation
- Hardcoding values that should be dynamic
- Over-engineering simple components

---

## Integration with Catalyst UI

Many UI Blocks can be enhanced with Catalyst UI components:

**Form Inputs:**
- Use Catalyst's `<Input>`, `<Textarea>`, `<Select>` components
- Maintain UI Block layout and structure
- Swap native inputs for Catalyst equivalents

**Buttons:**
- Replace with Catalyst `<Button>` for consistent styling
- Keep button placement and actions from UI Blocks

**Layout Containers:**
- UI Blocks provide page structure
- Catalyst provides form and input polish

**Best Practice:**
```tsx
// UI Block provides structure
<form className="space-y-6"> {/* From UI Block */}

  {/* Catalyst provides polished inputs */}
  <Field>
    <Label>Email</Label>
    <Input name="email" type="email" /> {/* Catalyst component */}
  </Field>

  {/* UI Block provides action panel */}
  <div className="flex justify-end gap-3"> {/* From UI Block */}
    <Button type="submit">Save</Button> {/* Catalyst component */}
  </div>
</form>
```

---

## Common Use Cases (Quick Reference)

### Authentication
- **Login:** `forms/sign-in-and-registration/01-simple.md`
- **Registration:** `forms/sign-in-and-registration/XX-split-screen.md`
- **Password Reset:** Combine form-layouts + input-groups

### Dashboards
- **Layout:** `application-shells/sidebar-layouts/`
- **Metrics:** `data-display/stats/`
- **Activity Feed:** `lists/feeds/`
- **Data Tables:** `data-display/tables/`

### Settings Pages
- **Structure:** `forms/form-layouts/02-two-column-cards.md`
- **Toggles:** `forms/toggles/`
- **Profile:** `data-display/description-lists/`
- **Actions:** `forms/action-panels/`

### E-commerce
- **Product Grid:** `lists/grid-lists/`
- **Product Details:** `layout/panels/` + `elements/buttons/`
- **Cart:** `lists/stacked-lists/` + `data-display/stats/`
- **Checkout:** `forms/form-layouts/` multi-step

### Admin Panels
- **Layout:** `application-shells/sidebar-layouts/`
- **Data Tables:** `data-display/tables/XX-with-selection.md`
- **Filters:** `forms/input-groups/` + `forms/select-menus/`
- **Batch Actions:** `elements/button-groups/`

### Content Management
- **Article Editor:** `forms/textareas/` + `forms/action-panels/`
- **Media Library:** `lists/grid-lists/`
- **Categories:** `navigation/vertical-navigation/`

---

## Performance Considerations

### Component Size
- Most components are lightweight (< 5KB)
- Application Shells are larger (20-30KB) - use one per app
- Import only needed components

### Dependencies
- **@headlessui/react:** ~50KB (tree-shakeable)
- **@heroicons/react:** Import individual icons to reduce bundle size
- Use dynamic imports for large modals/overlays

### Best Practices
```tsx
// ✅ Good: Import specific icons
import { BellIcon, UserIcon } from '@heroicons/react/24/outline'

// ❌ Bad: Import entire icon set
import * as Icons from '@heroicons/react/24/outline'

// ✅ Good: Dynamic import for modals
const Modal = lazy(() => import('./components/Modal'))

// ✅ Good: Use Application Shell once
<AppShell>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</AppShell>
```

---

## Troubleshooting

### Common Issues

**Issue: Component styles not applying**
- Verify Tailwind CSS v4.1 is installed and configured
- Check that Tailwind config includes component paths
- Ensure dark mode is configured if using dark variants

**Issue: Icons not rendering**
- Verify @heroicons/react is installed
- Check import paths match icon sizes (16/20/24)
- Ensure icon components are properly imported

**Issue: Headless UI components not working**
- Verify @headlessui/react version (2.0+)
- Check for React 18+ compatibility
- Ensure proper component structure (Menu > MenuButton > MenuItems)

**Issue: Responsive behavior broken**
- Don't remove responsive prefixes (sm:, md:, lg:)
- Maintain breakpoint order in classNames
- Test on multiple viewport sizes

### Getting Help

1. **Check catalog.md** for similar components
2. **Review component notes** in frontmatter
3. **Verify dependencies** are correctly installed
4. **Test in isolation** before integrating
5. **Reference Headless UI docs** for complex interactions

---

## Best Practices for Rapid Development

### 1. Start with Complete Examples
Use Application Shells as foundation, not individual components

### 2. Combine, Don't Reinvent
Mix existing components rather than building from scratch

### 3. Maintain Structure
Keep layout, accessibility, and responsive patterns intact

### 4. Customize Data, Not Code
Replace mock data with real data, keep component structure

### 5. Use Catalog Effectively
Search by tags and use cases, not just browsing categories

### 6. Test Accessibility
Verify keyboard navigation, screen reader support, ARIA attributes

### 7. Follow Composition Patterns
Layer components hierarchically: Shell → Headings → Content → Actions

---

## Quick Start Workflow

**For Agents Building Pages:**

1. **Identify page type** (dashboard, settings, login, etc.)
2. **Search catalog** by use case or category
3. **Select Application Shell** (if building full page)
4. **Choose Section Headings** for page structure
5. **Pick Content Components** (forms, lists, tables, etc.)
6. **Add Interactive Elements** (buttons, dropdowns, modals)
7. **Compose components** maintaining accessibility
8. **Replace mock data** with real data
9. **Test responsive behavior**
10. **Verify accessibility**

**Example Decision Tree:**
```
Building a page?
  ↓ Yes
  Start with Application Shell
    ↓ Sidebar or Stacked?
    Choose shell variant
      ↓ Need forms?
      Add form layouts + input groups
        ↓ Need data display?
        Add tables or lists
          ↓ Need actions?
          Add buttons/dropdowns
            ↓ Done!
            Test & verify
```

---

## Summary

The Tailwind UI Blocks library provides **347 production-ready components** organized into **10 categories**. Use the **catalog.md** file to search and discover components by category, tag, or use case. Components are built with React, Tailwind CSS v4.1, Headless UI, and Heroicons, following accessibility best practices and responsive design patterns.

**Key Principle:** Compose components, don't recreate them. The library provides building blocks for rapid, high-quality application development.
