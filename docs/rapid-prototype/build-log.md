# Build Log

Essential build context for agent collaboration. Only major features and architectural decisions documented.

---

## Initial Scaffold - 2025-11-14

**Project:** UK back office planning system for processing planning applications
**Stack:** Next.js 16 + TypeScript 5.1+ + Tailwind v4.1 + Catalyst UI + Turbopack
**Environment:** Docker containerized

**Components:** 10 Catalyst UI components (button, input, fieldset, dialog, dropdown, badge, avatar, divider, heading, text)
**Mock Data:** Users, planning applications (UK-specific), utility functions (cn, formatDate, formatCurrency)

---

## Assessment Workflow - 2025-11-14

**Route Structure:**
- `/applications/[id]/assessment` - Overview page
- `/applications/[id]/assessment/tasks/[task-slug]` - Individual task pages (14 tasks)
- `/applications/[id]/assessment/notes` - Notes/comments feed

**Navigation Flow:**
- Home → Application Details → Assessment → Task Pages

**Architecture:**
- **AssessmentLayout:** Shared layout with sidebar, header, breadcrumbs
- **AssessmentContext:** React Context for task completion state management
- **Layout Provider:** Wraps all assessment routes with shared state

**Key Components:**
- Sidebar: Light theme, blue accents (UK Gov Blue #1d70b8), navigation + 14-task checklist
- Sticky header and case summary
- Independent scroll regions (sidebar and main content)
- Scroll position preservation across navigation

**State Management:**
- Task completion toggling (14 tasks)
- Edit/Save state toggle (completed tasks show "Edit" button, incomplete show save buttons)
- Sidebar scroll position persistence

**14 Assessment Tasks:**
1. Pre-application details
2. Proposal description
3. Site map
4. Site constraints
5. Site history
6. Site surroundings
7. Heads of terms
8. Planning advice
9. Summary of advice
10. Policies and guidance
11. CIL
12. List of requirements
13. Pre-application outcome
14. Next steps

## Notes Feature - 2025-11-15

**Route:** `/applications/[id]/assessment/notes`

**Purpose:** Discussion and comments feed for planning application collaboration

**Mock Data:**
- [lib/mock-data/notes.ts](../../../lib/mock-data/notes.ts) - Note schema with author, comment, date
- 7 sample comments for application PA/2024/001
- Helper: `getNotesByApplicationId(applicationId)`

**UI Pattern:** Lists / Feeds / 03-with-multiple-item-types (comments only, light theme)

**Features:**
- Timeline feed with avatar bubbles and connecting lines
- Comment form with textarea and attachments
- Navigation item added to sidebar (DocumentTextIcon)
- Uses AssessmentLayout with `currentPage="notes"`

## Header Consistency - 2025-11-15

**Updated:** Notes page header to match task page headers

**Changes:**
- Added `pageDescription` prop to AssessmentLayout
- Notes page now uses consistent header structure (title + description + divider)
- Non-task pages (Overview, Notes, Meetings, etc.) share same header pattern as tasks without status badge
- Maintains visual consistency across all assessment pages

## Unread Notes Indicators - 2025-11-15

**Feature:** Visual indicators for unread notes in sidebar and notes feed

**Mock Data Updates:**
- Added `isRead: boolean` field to Note schema
- 2 unread notes in sample data for testing
- Helper function: `getUnreadNotesCount(applicationId)` to count unread notes

**Sidebar Indicators:**
- Blue notification badge on Notes nav item showing unread count
- All count badges now use consistent styling: white background with blue border (ring-blue-600/30)

**Notes Feed Visual Indicators:**
- Unread notes show blue avatar background (bg-blue-100) instead of gray
- Animated blue dot indicator on avatar (pulsing animation)
- "NEW" badge next to author name for unread notes
- Unread note text is darker and bold (font-medium) for emphasis
- All indicators automatically hide when note is marked as read

**Navigation Fix:**
- Overview nav item no longer shows as selected when viewing task pages

## Assessment Overview Dashboard - 2025-11-15

**Route:** `/applications/[id]/assessment`

**Purpose:** High-level dashboard showing assessment progress and activity at a glance

**UI Pattern:** Stats (04-with-brand-icon) combined with custom sections

**Dashboard Sections:**

1. **Progress Summary Stats** (4-column grid):
   - Tasks Completed (0/14, 0% complete)
   - Pending Meetings (2 scheduled)
   - Open Requests (5 awaiting response)
   - Recent Notes (7 total, 2 unread)
   - Each stat has blue icon background and descriptive subtitle

2. **Task Progress Bar:**
   - Visual progress indicator with percentage
   - Shows X of 14 tasks completed
   - Green badge showing completion percentage
   - Animated progress bar (transition-all duration-300)

3. **Recent Notes Preview:**
   - Shows 3 most recent notes
   - Displays author avatar, name, timestamp
   - Shows "NEW" badge for unread notes
   - Truncated comment preview (line-clamp-2)
   - "View all →" link to Notes page

4. **Quick Actions:**
   - Add Note (blue icon, links to Notes page)
   - Schedule Meeting (green icon, button placeholder)
   - Card-based layout with hover states

**Features:**
- Real-time task completion calculation from AssessmentContext
- Integration with notes mock data
- Responsive grid layouts (1 col → 2 col → 4 col)
- Consistent page header with description
- All metrics dynamically calculated from actual data

---

## UK Government Design System Button Styling - 2025-11-16

**Component:** [components/catalyst/button.tsx](../../../components/catalyst/button.tsx)

**Purpose:** Update Catalyst Button component to comply with UK Government Design System standards

**Primary Button Styling:**
- Fill color: `#00703c` (UK Gov Green)
- Box shadow: `0 2px 0 #002d18` (dark green shadow)
- Border radius: `0` (sharp corners, no rounding)
- Text: White

**Secondary Button Styling (outline variant):**
- Fill color: `#f3f2f1` (light gray)
- Box shadow: `0 2px 0 #929191` (gray shadow)
- Border radius: `0` (sharp corners, no rounding)
- Text: Dark gray/black

**Implementation Changes:**
- Updated `styles.base` to use `rounded-none` instead of `rounded-lg`
- Modified `styles.solid` to apply UK Gov box shadow (`0 2px 0 var(--btn-shadow,#002d18)`)
- Updated `styles.outline` with light gray background and gray shadow
- Changed all pseudo-elements (`before`, `after`) to use `rounded-none`
- Updated `colors['dark/zinc']` (default primary) to use UK Gov Green

**Button Migration:**
- Replaced native HTML buttons in AssessmentLayout.tsx with Catalyst Button components
- Primary action: `<Button>` (UK Gov Green with shadow)
- Secondary actions: `<Button outline>` (UK Gov Gray with shadow)
- All buttons maintain existing functionality (click handlers, icons, states)

**Usage:**
```tsx
<Button>Save and mark as complete</Button>  // Primary (green)
<Button outline>Save changes</Button>        // Secondary (gray)
<Button outline>Edit</Button>                // Secondary with icon
```

---

## Sidebar Theme System - 2025-11-16

**Files Modified:**
- [app/applications/[id]/assessment/sidebar-themes.ts](../../../app/applications/[id]/assessment/sidebar-themes.ts)
- [app/applications/[id]/assessment/sidebar-themes.css](../../../app/applications/[id]/assessment/sidebar-themes.css)
- [app/applications/[id]/assessment/SidebarThemeContext.tsx](../../../app/applications/[id]/assessment/SidebarThemeContext.tsx)
- [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)
- [app/applications/[id]/assessment/layout.tsx](../../../app/applications/[id]/assessment/layout.tsx)

**Purpose:** Implement 3 comprehensive sidebar themes (Light, Dark, Brand) following Tailwind UI Blocks patterns

**Theme Architecture:**

The theme system uses CSS custom properties for runtime theme switching without layout changes. Each theme defines a complete color palette for all sidebar elements.

**3 Themes Implemented:**

1. **Light Theme** (`theme="light"`)
   - Clean white sidebar with GOV.UK blue accents
   - Background: White (#ffffff)
   - Border: GOV.UK Gray-100 (#cecece)
   - Text: GOV.UK Blue-500 → Blue-600 → Gray-900 (default → hover → active)
   - Icons: GOV.UK Gray-300 → Blue-500 → Gray-900
   - Active states: GOV.UK Gray-50 background
   - Case summary: White background with GOV.UK dark text
   - Uses official GOV.UK Design System colors

2. **Dark Theme** (`theme="dark"`)
   - Dark gray sidebar with GOV.UK colors
   - Background: GOV.UK Gray-900 (#191b1b)
   - Border: White/10 opacity (rgba(255, 255, 255, 0.1))
   - Text: GOV.UK Gray-300 → White (default → hover/active)
   - Icons: GOV.UK Gray-300 → White
   - Active states: White/5 background overlay
   - Case summary: GOV.UK Gray-800 background with white text
   - Checkboxes: GOV.UK Blue-300 border, Blue-400 fill

3. **Brand Theme** (`theme="brand"`)
   - GOV.UK primary blue brand sidebar
   - Background: GOV.UK Blue-500 (#1d70b8) - Primary brand blue
   - Border: White/10 opacity
   - Text: GOV.UK Blue-50 → White (default → hover/active)
   - Icons: GOV.UK Blue-50 → White
   - Active states: GOV.UK Blue-700/30 darkened overlay
   - Case summary: GOV.UK Blue-600 background with white/very light blue text
   - Checkboxes: Inverted design with light blue-100 fill and dark blue-700 check
   - Uses official GOV.UK primary blue throughout for strong brand presence

**Shade Hierarchy Pattern:**

Based on Tailwind UI Blocks analysis:
- **Light sidebars:** White base + gray borders + color accents
- **Dark sidebars:** Gray-900 base + white/10 borders + white overlays for depth
- **Brand sidebars:** Color-800 base + white/10 borders + darker color overlays

**CSS Custom Properties:**

Each theme defines variables for:
- Sidebar: `--sidebar-bg`, `--sidebar-border`, `--sidebar-text-*`, `--sidebar-icon-*`, `--sidebar-bg-hover/active`
- Navigation: `--sidebar-heading`, `--sidebar-divider`
- Checkboxes: `--sidebar-checkbox-complete-*`, `--sidebar-checkbox-incomplete-*`
- Case Summary: `--case-summary-bg`, `--case-summary-border`, `--case-summary-text-*`

**Theme Persistence:**

- Theme preference stored in localStorage (`sidebar-theme-preference`)
- SidebarThemeProvider manages theme state globally
- Theme switcher dropdown in header for easy switching
- Hydration-safe implementation (no flash of wrong theme)

**Integration:**

- SidebarThemeProvider wraps assessment layout in layout.tsx
- Theme switcher component in header allows runtime switching
- All sidebar elements use CSS variables for theming
- Case summary banner also themed to match sidebar

**Usage:**

The theme switcher is automatically available in the assessment header. Users can switch between Light, Dark, and Brand themes, with their preference persisted across sessions.

```tsx
// Theme is automatically applied via CSS variables
<div data-sidebar-theme={theme}>
  <div style={{ backgroundColor: 'var(--sidebar-bg)' }}>
    {/* Sidebar content */}
  </div>
</div>
```

---

## Sidebar Navigation Update - 2025-11-16

**File Modified:** [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)

**Changes:**
- Removed "Documents" navigation item from sidebar
- Added "Preview report" as last navigation item (after Notes)
- Icon: DocumentChartBarIcon
- Updated TypeScript types for `currentPage` prop

**Navigation Order:**
1. Overview
2. Meetings (count: 2)
3. Requests (count: 5)
4. Activity
5. Notes (with unread count)
6. Preview report (new)

---

## Planning Advice Feature - 2025-11-16

**Route:** `/applications/[id]/assessment/tasks/planning-advice`

**Purpose:** Interactive report-writing interface for providing structured planning advice organized by consideration areas

**File Modified:** [app/applications/[id]/assessment/tasks/planning-advice/page.tsx](../../../app/applications/[id]/assessment/tasks/planning-advice/page.tsx)

**Feature Structure:**

The planning advice page uses a hierarchical structure designed for building professional reports:

1. **Considerations** (Top-level sections)
   - Represent different topic areas (e.g., "Design Consideration", "Safety Consideration")
   - Each consideration can contain multiple advice items
   - Divider with Title and Button UI pattern from Tailwind UI Blocks
   - Add/delete functionality for considerations

2. **Advice Items** (Content within each consideration)
   - **Element of Proposal**: The specific aspect being advised on
   - **Policy References**: Relevant policies that apply (e.g., "Policy DES1, DES2")
   - **Status**: Compliance status with color-coded badges
     - Green: "Complies" (bg-green-100)
     - Amber: "Needs Changes" (bg-amber-100)
     - Red: "Does Not Comply" (bg-red-100)
   - **Advice**: Detailed planning guidance (supports multi-line text)

**UI Components Used (from Tailwind UI Blocks):**

- **Card with Dividers**: Each consideration is a card with header/body structure (`divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm`)
  - Card header contains consideration title and delete button
  - Card body contains advice items list
- **Divider with Button** (06-with-button.md): Centered divider with rounded-full "Add Advice" button appears after advice items
- **Description List with Inline Actions** (05-left-aligned-with-inline-actions.md): Display advice items with Edit/Delete actions in 3-column responsive grid
- **Input with Label** (01-input-with-label.md): Text inputs for Element and Policy References fields with Tailwind v4 outline utilities
- **Simple Textarea** (01-simple.md): Multi-line advice input with Tailwind v4 outline utilities
- **Catalyst Button**: UK Gov styled buttons for form submit/cancel actions
- **Color-coded Badges**: Visual status indicators for compliance levels (green/amber/red)

**Functionality:**

- Add/edit/delete considerations (sections)
- Add/edit/delete advice items within each consideration
- Inline editing form appears below the consideration divider
- Form includes validation placeholders and helpful examples
- Cancel/save actions for each advice item
- Confirmation dialogs for deletions

**Design Philosophy:**

The interface is designed to feel like writing a structured report rather than filling out a form. The divider pattern creates clear visual separation between different consideration areas, while the advice items display as professional report cards with definition lists (dt/dd pattern).

**Default State:**

- Starts with 2 example considerations: "Design Consideration" and "Safety Consideration"
- Empty advice lists ready for content
- "Add Consideration" button at bottom to expand sections

**Technical Implementation:**

- Client component with useState for local state management
- TypeScript interfaces for type safety (AdviceItem, Consideration)
- Inline editing mode to reduce page navigation
- Uses native prompt/confirm dialogs for quick interactions (can be enhanced later)

**Future Enhancements:**

- Persist to mock data or backend
- Drag-and-drop reordering of advice items and considerations
- Export to PDF/Word report format
- Template library for common advice patterns
- Rich text editor for advice field

---

## Assessment Blueprint Page - 2025-11-17

**Created by:** Forge (Builder)
**Route:** /assessment-blueprint
**Type:** Static page
**Purpose:** Skeleton/wireframe view showing the architectural structure of the assessment page layout

**Files Created:**
- [app/assessment-blueprint/page.tsx](../../../app/assessment-blueprint/page.tsx)

**Features:**

The blueprint page provides a visual representation of the assessment page architecture as a wireframe/skeleton view. It's designed as a reference page separate from the main journey to help visualize the page structure.

**Layout Visualization:**

1. **Sidebar Section (Blue):**
   - Logo/Branding placeholder
   - Case Summary component outline
   - Navigation items (6 items: Overview, Meetings, Requests, Activity, Notes, Preview report)
   - Task Checklist (14 tasks with checkboxes)
   - Fixed width (w-72), scrollable

2. **Main Content Section (Green):**
   - Page Header with theme switcher
   - Breadcrumbs navigation
   - Dynamic page content area showing 3 page type examples:
     - **Overview Dashboard** (Purple): Stats grid + progress bar + recent notes
     - **Task Pages** (Orange): Task title + status badge + form fields + action buttons
     - **Notes Page** (Teal): Timeline feed + comment form

3. **Supporting Elements:**
   - Component legend with color coding
   - Technical architecture notes (layout type, widths, state management, theme system)
   - Route structure diagram showing all assessment routes
   - Link to actual assessment page for comparison

**Design Approach:**

Uses colored borders and backgrounds to distinguish different layout regions:
- Blue: Sidebar components
- Green: Main content area
- Purple: Overview dashboard elements
- Orange: Task page elements
- Teal: Notes/activity feed elements
- Yellow: Technical notes section

**Purpose:**

This standalone reference page allows developers and stakeholders to:
- Understand the assessment page architecture at a glance
- See how different page types share the same layout structure
- Reference component hierarchy and dimensions
- Understand the route pattern and navigation flow

**Access:** http://localhost:3000/assessment-blueprint

---

## Sidebar Application Info Removal - 2025-11-20

**File Modified:** [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)

**Changes:**
- Removed entire Application Info section from sidebar (both mobile and desktop)
- Removed section displaying:
  - Application reference (e.g., "PA/2024/001")
  - Application address (e.g., "123 High Street, London, SW1A 1AA")
  - "Show description" / "Hide description" toggle
- Removed unused state variable `descriptionExpanded`
- Removed unused import `ChevronDownIcon`

**Result:**
- Cleaner sidebar starting directly with navigation items
- Application info still visible in sticky Case Summary banner at top
- More vertical space for navigation and task list

**Reasoning:** Eliminated redundant information (application reference and address already shown in Case Summary banner above)

---

## Main Content Border Standardization - 2025-11-20

**File Modified:** [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)

**Changes:**
- Updated mobile top bar border from `border-zinc-200` to `border-zinc-100`
- Updated page divider border from `border-zinc-200` to `border-zinc-100`

**Color Values:**
- Previous: `#858686` (gray-200)
- New: `#CECECE` (gray-100)

**Result:**
- Main content borders now match the light sidebar border color
- Softer, lighter borders throughout the application
- Consistent border styling between sidebar and main content areas

**Reasoning:** Standardize all borders to use gray-100 (`#CECECE`) matching the light sidebar theme for visual consistency

**Additional Updates:**
- Updated all "Content coming soon" placeholder borders in 13 task pages from `border-zinc-200` to `border-zinc-100`
- Affected files:
  - pre-application/page.tsx
  - proposal-description/page.tsx
  - site-map/page.tsx
  - site-constraints/page.tsx
  - site-history/page.tsx
  - site-surroundings/page.tsx
  - heads-of-terms/page.tsx
  - summary-of-advice/page.tsx
  - policies-guidance/page.tsx
  - cil/page.tsx
  - list-requirements/page.tsx
  - pre-app-outcome/page.tsx
  - next-steps/page.tsx

---

## Planning Advice Drawer UX Redesign - 2025-11-20

**Created by:** Forge (Builder)
**File Modified:** [app/applications/[id]/assessment/tasks/planning-advice/page.tsx](../../../app/applications/[id]/assessment/tasks/planning-advice/page.tsx)

**Purpose:** Complete UX overhaul replacing inline forms with professional drawer-based interface inspired by Tailwind UI Blocks drawer patterns

**Key Changes:**

1. **Drawer-Based Forms (replaced inline editing)**
   - **Consideration Drawer:** Simple slide-over for adding/editing consideration titles
   - **Advice Drawer:** Rich form for adding/editing advice items
   - Both use Headless UI `Dialog` and `DialogPanel` components
   - Branded indigo header with white text and close button
   - Sticky footer with Cancel/Save UK Gov buttons
   - Smooth slide-in transition (500ms ease-in-out)

2. **Radio Button Status Selector (replaced dropdown)**
   - Visual radio buttons with color-coded styling:
     - ✓ **Complies:** Green border/fill (`border-green-600 bg-green-600`)
     - ⚠ **Needs Changes:** Amber border/fill (`border-amber-600 bg-amber-600`)
     - ✗ **Does Not Comply:** Red border/fill (`border-red-600 bg-red-600`)
   - Each option includes descriptive helper text
   - Native Tailwind v4 radio styling with `appearance-none` and `before:` pseudo-elements

3. **Cleaner Main Page Layout**
   - Removed all inline form elements from main page
   - Cards show only advice items (no embedded forms)
   - Edit pencil icon added to consideration headers
   - Lighter borders (`border-gray-100` instead of `border-gray-200`)
   - Empty state shows full-width dashed "Add Advice" button

4. **Enhanced Drawer Features**
   - **Contextual header text:** "Adding advice to: [Consideration Name]"
   - **Form validation:** Prevents empty consideration titles
   - **Scrollable content:** `h-0 flex-1 overflow-y-auto` pattern for long forms
   - **Proper spacing:** Consistent padding and margins throughout
   - **Accessibility:** Proper labels, ARIA attributes, keyboard navigation

**UI Pattern Reference:**

Based on Tailwind UI Blocks drawer pattern `/overlays/drawers/07-create-project-form-example.md`:
- Branded header (`bg-indigo-700`)
- Scrollable form body
- Sticky footer with action buttons
- `h-0 flex-1` flexbox pattern for proper scrolling

**Form Fields:**

**Consideration Form:**
- Title (text input with placeholder)

**Advice Form:**
- Element of Proposal (text input)
- Policy References (text input)
- Status (radio button group with 3 options)
- Advice (textarea, 5 rows)

**User Flow:**

1. Click "Add Consideration" → Simple drawer opens with title field
2. Click "Add Advice" on any consideration → Rich drawer opens with all fields
3. Click pencil icon on consideration → Edit consideration drawer
4. Click "Edit" on advice item → Pre-filled advice drawer
5. All actions submit via form submit (Enter key supported)
6. ESC key or close button dismisses drawer

**Technical Implementation:**

- Uses conditional rendering: `{(drawerMode === 'add-advice' || drawerMode === 'edit-advice') && <Dialog>...}`
- Drawer mode state: `'add-consideration' | 'edit-consideration' | 'add-advice' | 'edit-advice'`
- Form data isolated in dedicated state objects
- Clean separation between consideration and advice editing logic

**Benefits:**

- ✅ Professional, focused editing experience
- ✅ No UI shifts or layout changes when editing
- ✅ Visual status selection instead of dropdown
- ✅ Better mobile experience (full-screen on small devices)
- ✅ Cleaner main page showing only content
- ✅ Follows Tailwind UI Blocks best practices
- ✅ UK Gov Design System button styling preserved

**Design Consistency:**

- Matches existing assessment page patterns
- Uses project's gray-100 border color (`#CECECE`)
- Maintains UK Gov Green primary buttons
- Consistent with Notes page and other task pages

---

## Typography Scale Adjustments - 2025-11-20

**Created by:** Forge (Builder)
**Purpose:** Adjust text sizes throughout assessment pages to work with updated global typography scale (base = 19px)

**Context:**

After updating global text sizes in [app/globals.css](../../../app/globals.css) where `text-base` changed from 16px to 19px (GOV.UK standard), many UI elements appeared too large and needed adjustment.

**Files Modified:**

- [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)
- [app/applications/[id]/assessment/notes/page.tsx](../../../app/applications/[id]/assessment/notes/page.tsx)
- [app/applications/[id]/assessment/tasks/planning-advice/components/AdviceItemCard.tsx](../../../app/applications/[id]/assessment/tasks/planning-advice/components/AdviceItemCard.tsx)
- 13 task placeholder pages (pre-application, proposal-description, site-map, etc.)

**Changes Made:**

1. **Page Headers** (AssessmentLayout.tsx):
   - Changed from `text-3xl/4xl` (48px/60px) → `text-2xl` (36px)
   - More appropriate size for page titles with new base scale

2. **Case Summary Banner** (AssessmentLayout.tsx):
   - Changed from `text-lg` (24px) → `text-base` (19px)
   - Application reference and address now properly sized

3. **Page Descriptions** (AssessmentLayout.tsx):
   - Changed from `text-lg` (24px) → `text-base` (19px)
   - Task descriptions and page descriptions

4. **Status Badges** (AssessmentLayout.tsx):
   - Changed from `text-lg` (24px) → `text-base` (19px)
   - Badges showing "Not started", "In progress", "Completed"

5. **Last Saved Text** (AssessmentLayout.tsx):
   - Changed from `text-lg` (24px) → `text-base` (19px)
   - Timestamp text below status badges

6. **Planning Advice Elements** (AdviceItemCard.tsx):
   - Changed element headings from `text-xl` (27px) → `text-lg` (24px)
   - Better hierarchy with consideration headers at text-2xl

7. **Section Headers** (notes/page.tsx):
   - Changed "Add a note" from `text-lg` → `text-base` (19px)
   - Consistent with other in-page section headers

8. **Placeholder Text** (13 task pages):
   - Changed "Content coming soon" from `text-lg` → `text-base` (19px)
   - Consistent placeholder styling across all stub pages

**Elements Preserved:**

- **Sidebar navigation:** Already using `text-base` ✓
- **Consideration headers:** Kept at `text-2xl` as major section dividers ✓
- **Stat values:** Dashboard stats kept at `text-4xl` for emphasis ✓
- **Breadcrumbs:** Already using `text-base` ✓
- **Badge sizes in notes:** Already using appropriate `text-xs` for "NEW" badges ✓

**Result:**

All text elements now properly scaled for GOV.UK typography standard (19px base). Visual hierarchy maintained with appropriate size relationships:
- Page titles: `text-2xl` (36px)
- Section headers: `text-lg` (24px) or `text-base` (19px)
- Body text: `text-base` (19px)
- Small labels: `text-sm` (16px)
- Tiny badges: `text-xs` (16px)

---

## Planning Advice Page Reset - 2025-11-21

**Created by:** Forge (Builder)
**Purpose:** Reset Planning Advice task page to simple baseline, removing all custom components and complex state management

**Changes:**

1. **Simplified page.tsx:**
   - Replaced complex PlanningAdviceClient with simple TaskPageWrapper pattern
   - Now matches other task pages (site-history, site-map, etc.)
   - Uses standard task layout with taskId=8

2. **Files Removed:**
   - `PlanningAdviceClient.tsx` - Complex client component with localStorage state
   - `components/` directory - All custom components:
     - ConsiderationsList.tsx
     - ConsiderationDrawer.tsx
     - AdviceDrawer.tsx
     - AdviceItemCard.tsx
     - EmptyState.tsx
     - DeleteConfirmDialog.tsx
   - `types.ts` - Custom TypeScript type definitions

**Result:**

Planning Advice page is now a clean slate using the simple task page pattern. Ready to be rebuilt with new requirements. All custom drawer-based UX and consideration/advice structure removed.

**File Structure:**
```
app/applications/[id]/assessment/tasks/planning-advice/
└── page.tsx (simple server component)
```

---

## Button Typography Standardization - 2025-11-21

**Created by:** Forge (Builder)
**Purpose:** Standardize all button text to use `text-base` and `font-normal` throughout the project

**Files Modified:**

1. [components/catalyst/button.tsx](../../../components/catalyst/button.tsx)
   - Changed base button styles from `text-lg font-normal` to `text-base font-normal`
   - All Catalyst Button components now use consistent typography

2. [app/applications/[id]/assessment/SidebarThemeSwitcher.tsx](../../../app/applications/[id]/assessment/SidebarThemeSwitcher.tsx)
   - MenuButton: Changed from `text-sm font-bold` to `text-base font-normal`
   - Theme selection buttons: Changed from `text-sm` to `text-base font-normal`

3. [app/applications/[id]/page.tsx](../../../app/applications/[id]/page.tsx)
   - "Go to Assessment" link button: Changed from `text-base font-bold` to `text-base font-normal`

4. [app/applications/[id]/assessment/notes/NotesPageClient.tsx](../../../app/applications/[id]/assessment/notes/NotesPageClient.tsx)
   - "Post note" submit button: Changed from `text-base font-bold` to `text-base font-normal`

**Result:**

All buttons and button-styled elements across the project now consistently use:
- **Text size:** `text-base` (19px at GOV.UK scale)
- **Font weight:** `font-normal` (regular/400 weight)

This creates a more subtle, professional appearance aligned with GOV.UK Design System principles where buttons use regular weight text rather than bold.

**Coverage:**

- ✅ Catalyst Button component (base styles)
- ✅ Theme switcher dropdown buttons
- ✅ Navigation link buttons
- ✅ Form submit buttons
- ✅ All button variants (primary, outline, plain)

---

## Light Theme Color Update - 2025-11-21

**Created by:** Forge (Builder)
**File Modified:** [app/applications/[id]/assessment/sidebar-themes.css](../../../app/applications/[id]/assessment/sidebar-themes.css)

**Purpose:** Update Light theme sidebar and case summary to use blue background and borders instead of white/gray

**Color Changes:**

**Sidebar:**
- Background: Changed from `#ffffff` (white) → `var(--color-blue-50)` (#f4f8fb - very light blue)
- Border: Changed from `var(--color-gray-100)` (#CECECE) → `var(--color-blue-200)` (#8eb8dc - medium light blue)
- Divider: Changed from `var(--color-gray-100)` → `var(--color-blue-200)`

**Case Summary:**
- Background: Changed from `#ffffff` (white) → `var(--color-blue-50)` (#f4f8fb)
- Border: Changed from `var(--color-gray-100)` → `var(--color-blue-200)` (#8eb8dc)
- Divider: Changed from `var(--color-gray-200)` → `var(--color-blue-200)` (#8eb8dc)

**Result:**

The Light theme now uses a subtle blue color scheme throughout the sidebar and case summary banner, creating a softer, more cohesive appearance with GOV.UK blue branding. The blue-50 background provides a very light blue tint, while blue-200 borders add clear visual definition.

**Visual Impact:**
- Sidebar has soft blue background instead of stark white
- All borders and dividers use matching blue-200 color
- Text and icon colors remain unchanged (blue-500, blue-600 for links/hover)
- Case summary banner matches sidebar styling
- Other themes (Dark, Brand) remain unchanged

**Additional Updates:**
- Hover background: Changed from `var(--color-gray-50)` → `var(--color-blue-100)` (#d2e2f1)
- Active background: Changed from `var(--color-gray-50)` → `var(--color-blue-500)` (#1d70b8 - GOV.UK primary blue)
- Active text color: Changed from `var(--color-gray-900)` → `#ffffff` (white for contrast)
- Icon default color: Changed from `var(--color-gray-300)` → `var(--color-blue-100)` (#d2e2f1)
- Icon hover color: Remains `var(--color-blue-500)`
- Icon active color: Changed from `var(--color-gray-900)` → `#ffffff` (white for contrast)
- Navigation items now show:
  - Default: blue-100 icons with blue-500 text
  - Hover: blue-500 icons with blue-600 text on blue-100 background
  - Active: white icons and text on blue-500 background (strong visual indicator)
- Task checklist checkboxes:
  - Incomplete border: Changed from `var(--color-gray-200)` → `var(--color-blue-200)` (#8eb8dc)
  - Complete border: Remains blue-400
  - Complete background: Remains blue-500 with white checkmark
- Creates a cohesive blue color palette with clear active state distinction

---

## Blue-700 Color Update - 2025-11-21

**Created by:** Forge (Builder)
**File Modified:** [app/globals.css](../../../app/globals.css)

**Purpose:** Update blue-700 to GOV.UK Dark Blue (#003078)

**Color Change:**

```css
--color-blue-700: #003078  (was #0e4d88)
```

**Impact:**

This darker blue-700 is now available for use throughout the application where a deeper blue shade is needed.

**Additional Update:**

Updated Light theme sidebar navigation hover text color to use blue-700:

```css
--sidebar-text-hover: var(--color-blue-700)  (was var(--color-blue-600))
```

Navigation items now show darker blue (#003078) text on hover instead of blue-600, providing stronger contrast and emphasis on hover states.

---

## Sidebar Navigation Border Radius Removal - 2025-11-21

**Created by:** Forge (Builder)
**File Modified:** [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)

**Purpose:** Remove border radius from sidebar navigation items and status badges

**Changes:**

All sidebar navigation items and badges updated from `rounded-md` to `rounded-none`:
- Navigation links (4 instances)
- Task checklist items (2 instances)
- Status badges (1 instance)

**Result:**

All sidebar navigation elements now have sharp corners matching GOV.UK Design System standards, creating a consistent visual language throughout the interface with no rounded corners on any interactive elements.

---

## Navigation Icon Color Update - 2025-11-21

**Created by:** Forge (Builder)
**File Modified:** [app/applications/[id]/assessment/sidebar-themes.css](../../../app/applications/[id]/assessment/sidebar-themes.css)

**Purpose:** Make navigation icons darker and more visible in Light theme

**Changes:**

```css
--sidebar-icon-default: var(--color-blue-500)  (was var(--color-blue-100))
--sidebar-icon-hover: var(--color-blue-700)    (was var(--color-blue-500))
```

**Result:**

Navigation icons (Overview, Meetings, Requests, Activity, Notes, Preview report) are now much more visible:
- **Default state**: Icons now use blue-500 (#1d70b8) instead of light blue-100, matching the text color for better consistency
- **Hover state**: Icons darken to blue-700 (#003078), matching the hover text color
- **Active state**: Icons remain white on blue-500 background

The darker default icons provide better visual hierarchy and make navigation items easier to scan.

---

## Active Task Checkbox Styling - 2025-11-21

**Created by:** Forge (Builder)
**Files Modified:**
- [app/applications/[id]/assessment/sidebar-themes.css](../../../app/applications/[id]/assessment/sidebar-themes.css)
- [app/applications/[id]/assessment/AssessmentLayout.tsx](../../../app/applications/[id]/assessment/AssessmentLayout.tsx)

**Purpose:** Invert completed checkbox colors when the task is active (currently selected)

**Changes:**

Added new CSS variables for active completed checkboxes:
```css
--sidebar-checkbox-active-complete-border: #ffffff
--sidebar-checkbox-active-complete-bg: #ffffff
--sidebar-checkbox-active-complete-check: var(--color-blue-500)
```

Updated checkbox rendering logic to use inverted colors when a task is both completed AND currently active.

**Result:**

When viewing a completed task (active state with blue-500 background):
- **Checkbox border**: White (instead of blue-400)
- **Checkbox fill**: White (instead of blue-500)
- **Checkmark**: Blue-500 (instead of white)

This creates a clear visual inversion that makes completed tasks stand out when they're currently active, while maintaining the standard blue checkbox for completed tasks that are not selected.

**Visual States:**
- Incomplete task (not active): Transparent checkbox with blue-200 border
- Incomplete task (active): Transparent checkbox with blue-200 border on blue background
- Completed task (not active): Blue-500 checkbox with white checkmark
- **Completed task (active)**: White checkbox with blue-500 checkmark on blue background ✨

---
