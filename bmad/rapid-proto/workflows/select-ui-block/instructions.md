# Select UI Block Workflow - Instructions

## Purpose

This workflow helps agents intelligently discover and select production-ready UI components from the Tailwind UI Blocks library (347 components) based on user requirements. Instead of building components from scratch, agents can find, evaluate, and select pre-built, accessible components that match the user's needs.

---

## Workflow Overview

**Input:** User's description of what they want to build
**Output:** Selected component(s) with production-ready code
**Duration:** 2-5 minutes
**Complexity:** Low

---

## Step-by-Step Instructions

### Step 1: Understand Requirements

**Goal:** Analyze the user's request to identify what type of component(s) they need

**Actions:**
1. Parse the user's request for keywords and intent
2. Identify the component type needed:
   - **Layout/Structure:** Application shell, container, grid
   - **Navigation:** Navbar, tabs, sidebar, breadcrumbs
   - **Forms:** Input fields, buttons, form layouts, sign-in pages
   - **Data Display:** Tables, lists, stats, calendars
   - **Feedback:** Alerts, modals, notifications
   - **Other:** Specific UI elements

3. Extract style preferences if mentioned:
   - Dark/light theme
   - Modern/minimal/detailed
   - Responsive requirements
   - Specific features (search, dropdown, etc.)

4. Determine scope:
   - **Single component:** "I need a navbar"
   - **Page layout:** "I need a dashboard page"
   - **Feature set:** "I need a login flow"

**Example Analysis:**

| User Request | Component Type | Category | Style Hints |
|-------------|----------------|----------|-------------|
| "Build a login page" | Sign-in form | Forms | Simple, clean |
| "Dashboard with sidebar" | Application shell | Application Shells | Sidebar layout, dark theme |
| "Data table with filters" | Table + inputs | Data Display + Forms | Responsive, search |
| "User profile page" | Page heading + form | Headings + Forms | Two-column layout |

---

### Step 2: Load UI Blocks Knowledge

**Goal:** Load the necessary knowledge base files for component search

**Actions:**
1. Load the UI Blocks catalog:
   ```
   Read: {project-root}/bmad/tech-kb/tailwind-ui-blocks/catalog.md
   ```

2. Load essentials for context:
   ```
   Read: {project-root}/bmad/tech-kb/tailwind-ui-blocks/essentials.md
   ```

3. Note the ui-blocks location from config:
   ```
   UI Blocks Path: {module_root}/data/ui-blocks/application-ui/
   ```

**What to Extract from Catalog:**
- Category structure (10 main categories)
- Tag index (389 unique tags)
- Use case recommendations (12 common scenarios)
- Component counts by category

---

### Step 3: Search Components

**Goal:** Find 3-5 best matching components from the library

**Search Strategy (in order of priority):**

#### A. Use Case Match (Recommended First)
Check the "Use Case Recommendations" section in catalog.md for pre-curated matches:

**Example Use Cases:**
- "Dashboard Layout" → Sidebar layouts, stacked layouts, stats, navbars
- "Login/Authentication Page" → Sign-in and registration forms
- "Data Table with Filters" → Tables, section headings, input groups, pagination
- "User Profile Page" → Page headings, description lists, form layouts
- "Settings Page" → Form layouts, toggles, action panels
- "Admin Panel" → Sidebar layouts, tables, badges

If user request matches a use case, retrieve recommended components.

#### B. Category Search
Based on component type identified in Step 1, search within specific categories:

**Category Mapping:**
- Layout needs → `application-shells/`, `layout/`
- Navigation → `navigation/`
- Forms/Input → `forms/`
- Data presentation → `data-display/`, `lists/`
- User feedback → `feedback/`, `overlays/`
- UI elements → `elements/`, `headings/`

**Search Method:**
1. Go to relevant category section in catalog
2. Review available elements within category
3. Read variant descriptions
4. Check tags for feature match

#### C. Tag Search
If specific features are mentioned, search by tags:

**Common Tag Searches:**
- Style: `dark`, `light`, `modern`, `simple`
- Layout: `responsive`, `grid-layout`, `two-column`, `stacked`
- Features: `search`, `dropdown`, `avatar`, `notifications`, `profile`
- Interaction: `mobile-menu`, `tabs`, `pagination`, `modal`

**Search Method:**
1. Go to "Tag Index" section in catalog
2. Find tag (e.g., `### dark`)
3. Review list of components with that tag
4. Cross-reference with other tags if needed

#### D. Keyword Search
Search catalog.md for keywords from user request:
- Component names: "navbar", "table", "modal", "form"
- Features: "login", "dashboard", "profile", "settings"
- Patterns: "split-screen", "sidebar", "card-footer"

---

### Step 4: Present Options

**Goal:** Show user 3-5 best matching components with enough detail to choose

**Presentation Format:**

```markdown
## Found {N} Matching Components for "{User Request}"

### Option 1: {Category} / {Element} / {Variant}
**Location:** `{path-to-component.md}`
**Tags:** {tag1}, {tag2}, {tag3}
**Dependencies:** {deps}
**Description:** {Brief description from catalog or frontmatter}
**Best for:** {When to use this variant}

### Option 2: {Category} / {Element} / {Variant}
...

### Option 3: {Category} / {Element} / {Variant}
...

---

**Which component would you like to use?** (Enter number 1-{N}, or ask for more options)

**Alternative:** If none of these match, I can:
- Search with different criteria
- Combine multiple components
- Search for related components
```

**Selection Criteria (for ranking options):**
1. **Relevance:** How well it matches user's stated need
2. **Completeness:** Does it include most/all required features?
3. **Simplicity:** Prefer simpler variants unless complexity needed
4. **Common use:** Prefer frequently-used patterns (01-03 variants often simplest)
5. **Style match:** Match dark/light preference if stated

**Example:**

User request: "I need a login page"

```markdown
## Found 4 Matching Components for "Login Page"

### Option 1: Forms / Sign-in and Registration / Simple
**Location:** `forms/sign-in-and-registration/01-simple.md`
**Tags:** authentication, sign-in, form, responsive
**Dependencies:** @heroicons/react
**Description:** Clean, centered login form with email, password, remember me checkbox, and forgot password link
**Best for:** Standard login pages, straightforward authentication

### Option 2: Forms / Sign-in and Registration / Simple Card
**Location:** `forms/sign-in-and-registration/04-simple-card.md`
**Tags:** authentication, sign-in, card, elevated
**Description:** Login form in elevated card with shadow, logo at top
**Best for:** Login pages that need visual separation from background

### Option 3: Forms / Sign-in and Registration / Split Screen
**Location:** `forms/sign-in-and-registration/03-split-screen.md`
**Tags:** authentication, sign-in, split-screen, image
**Description:** Two-column layout with form on left, brand image/content on right
**Best for:** Marketing-focused login pages, brand showcasing

---

**Which component would you like to use?** (Enter 1-3, or ask for more options)
```

---

### Step 5: Retrieve Code

**Goal:** Load the selected component's file and extract production code

**Actions:**

1. **User selects option** (e.g., "Option 2" or "2" or "simple card")

2. **Read component file:**
   ```
   Read: {module_root}/data/ui-blocks/application-ui/{path-from-catalog}
   ```

3. **Extract metadata from frontmatter:**
   - Variant name
   - Category and element
   - Tags
   - Dependencies
   - Accessibility notes
   - Technical notes

4. **Extract code block:**
   - Get the entire TSX code section
   - Preserve exact formatting
   - Include all imports

5. **Identify related components** (optional):
   - Check catalog for complementary components
   - Example: Selected navbar → suggest matching footer, sidebar
   - Example: Selected table → suggest pagination, filters

---

### Step 6: Deliver Component

**Goal:** Provide component code and clear usage instructions

**Delivery Format:**

```markdown
## Selected Component: {Variant Name}

**Category:** {Category} / {Element}
**File:** `{file-path}`

### Component Code

```tsx
{EXACT CODE FROM FILE - DO NOT MODIFY}
```
```

### Dependencies Required

```json
{
  "{package}": "{version}",
  ...
}
```

**Installation:**
```bash
npm install {list of packages}
```

### Usage Instructions

1. **Copy the code** above into your project (e.g., `components/LoginForm.tsx`)

2. **Install dependencies** if not already installed

3. **⚠️ CRITICAL: Replace placeholder content:**

   **UI Blocks contain example data that MUST be replaced:**

   - **User data:** Replace "Tom Cook", "tom@example.com", placeholder avatars
   - **Navigation items:** Replace ["Dashboard", "Team", "Projects"] with actual routes
   - **Mock stats:** Replace example numbers with real data or variables
   - **Table data:** Replace sample rows with actual data source
   - **Form fields:** Update field names, labels, validation to match requirements
   - **Links/Actions:** Connect to real routes and handlers

   **Example replacements:**
   ```tsx
   // ❌ BEFORE (UI Block placeholder):
   const user = {
     name: 'Tom Cook',
     email: 'tom@example.com',
     imageUrl: 'https://images.unsplash.com/...'
   }

   // ✅ AFTER (Project-specific):
   const user = {
     name: userData.name,
     email: userData.email,
     imageUrl: userData.avatar || '/default-avatar.png'
   }
   ```

   ```tsx
   // ❌ BEFORE (UI Block placeholder):
   const navigation = [
     { name: 'Dashboard', href: '#', current: true },
     { name: 'Team', href: '#', current: false },
   ]

   // ✅ AFTER (Project-specific):
   const navigation = [
     { name: 'Dashboard', href: '/dashboard', current: pathname === '/dashboard' },
     { name: 'Analytics', href: '/analytics', current: pathname === '/analytics' },
   ]
   ```

4. **Connect to data sources:**
   - Import mock data files if available
   - Connect to API endpoints
   - Use project state management

5. **Customize styling (optional):**
   - Change `indigo` to your brand color
   - Adjust spacing as needed
   - Maintain accessibility attributes

### Accessibility Features
{List a11y notes from frontmatter}

### Technical Notes
{Notes from frontmatter}

---

### Related Components You Might Need

{If applicable, suggest complementary components}

Example: "Since you're building a login page, you might also need:"
- Error alert component: `feedback/alerts/XX-error.md`
- Loading state: `feedback/skeletons/XX-form.md`

---

**Need another component?** Let me know what else you need for this page/feature.
```

**Post-Delivery Actions:**

1. **Confirm component delivered:** ✅ Component code provided
2. **Offer assistance:** Ask if user needs help integrating or customizing
3. **Suggest next steps:** Recommend related components or next workflow
4. **Update context:** If called from another workflow, return control with component data

---

## Decision Trees

### When User Request is Ambiguous

```
User: "I need a form"
  ↓
Ask clarifying questions:
  - What type of form? (Login, settings, multi-step, contact, etc.)
  - What fields do you need? (Email, password, address, etc.)
  - What style? (Card, full-page, inline, modal)
  ↓
Refined request: "Login form with email and password"
  ↓
Proceed with search
```

### When No Exact Match Found

```
Search returns 0 perfect matches
  ↓
Strategy:
  1. Broaden search (remove strict filters)
  2. Search related categories
  3. Suggest combining multiple components
  4. Offer to build custom component

Example:
  User: "I need a chat interface"
  No chat-specific component exists
  ↓
  Suggest combination:
    - Feed component (for messages)
    - Input group (for message input)
    - Avatar component (for user images)
    - Panel (for layout)
```

### When Multiple Components Needed

```
User: "Build a settings page"
  ↓
Recognize this needs multiple components:
  1. Page heading (title + actions)
  2. Form layout (structure)
  3. Input groups (individual settings)
  4. Toggles (feature flags)
  5. Action panel (save/cancel buttons)
  ↓
Option A: Present as "Use Case" with all components
Option B: Run workflow multiple times for each component
Option C: Suggest starting with form layout, then adding pieces
  ↓
Recommended: Option A (present complete solution)
```

---

## Integration with Other Workflows

### Called FROM create-page Workflow

```yaml
# create-page calls select-ui-block for layout
create-page:
  step: "Choose application shell"
  ↓ calls select-ui-block
  input: "application shell for {page-type}"
  ↓ returns selected component
  create-page: Uses component code as page foundation
```

### Called FROM create-component Workflow

```yaml
# create-component calls select-ui-block for reference
create-component:
  step: "Find similar components"
  ↓ calls select-ui-block
  input: "component similar to {user-description}"
  ↓ returns selected component
  create-component: Uses as reference/starting point
```

### Called FROM build-feature Workflow

```yaml
# build-feature calls select-ui-block multiple times
build-feature:
  step: "Assemble UI components"
  ↓ calls select-ui-block for layout
  ↓ calls select-ui-block for form
  ↓ calls select-ui-block for actions
  ↓ returns all components
  build-feature: Composes into complete feature
```

---

## Best Practices

### DO:
✅ Search use cases first (fastest, most accurate)
✅ Present 3-5 options (not too few, not overwhelming)
✅ Include component descriptions (help user decide)
✅ Deliver exact code (don't modify Tailwind UI code)
✅ Suggest related components (complete the solution)
✅ Clarify ambiguous requests (better results)

### DON'T:
❌ Modify component code before delivery (give original)
❌ Present too many options (>5 is overwhelming)
❌ Skip metadata (deps, tags, notes are important)
❌ Assume user's intent (ask if unclear)
❌ Forget accessibility notes (critical information)
❌ Ignore related components (missed opportunities)

---

## Common Patterns

### Pattern: Building Complete Pages

User wants a full page → Multi-component approach

**Steps:**
1. Start with Application Shell (layout foundation)
2. Add Page Heading (title section)
3. Add main content components (table, form, list, etc.)
4. Add action elements (buttons, modals, dropdowns)

**Workflow:**
```
select-ui-block → Application Shell
  ↓ User selects sidebar layout
select-ui-block → Page Heading
  ↓ User selects with actions variant
select-ui-block → {Main Content}
  ↓ User selects based on page purpose
Deliver: Complete page structure with all components
```

### Pattern: Finding Alternatives

User doesn't like first options → Refine search

**Steps:**
1. Ask what user didn't like about options
2. Identify new constraints (simpler, darker, with feature X)
3. Re-search with updated filters
4. Present new options

**Example:**
```
First search: Presented 3 navbar variants
User: "Too complex, I want something simpler"
  ↓
Re-search: Filter for "simple" tag, prefer 01-03 variants
  ↓
Present: Simpler navbar options
```

### Pattern: Combining Components

User needs functionality not in single component → Composition

**Steps:**
1. Identify individual pieces needed
2. Find component for each piece
3. Explain how to combine them
4. Provide integration guidance

**Example:**
```
User: "Data table with search and export button"
  ↓
Components needed:
  1. Section heading (with export button)
  2. Input group (search field)
  3. Table (data display)
  4. Pagination (if multi-page)
  ↓
Deliver all 4 components with assembly instructions
```

---

## Troubleshooting

### Issue: Catalog search returns no results

**Solutions:**
1. Broaden search terms (more general keywords)
2. Search different category
3. Check tag index manually
4. Look at use case recommendations
5. Suggest combining multiple simpler components

### Issue: Component found but doesn't match user's mental model

**Solutions:**
1. Show component anyway (user might change mind seeing it)
2. Explain what the component does (may be what they need)
3. Offer alternatives
4. Suggest modifications to match their vision

### Issue: User wants customization beyond component scope

**Solutions:**
1. Deliver base component first
2. Explain what customizations are needed
3. Offer to help with customization after delivery
4. Suggest related components that might help

---

## Success Criteria

**Workflow is successful when:**
- ✅ User receives component code that matches their request
- ✅ All dependencies identified and communicated
- ✅ Component is production-ready and usable
- ✅ User understands how to integrate it
- ✅ Related components suggested for complete solution

**Workflow quality indicators:**
- ⭐ Found match in < 3 searches
- ⭐ User selected one of presented options (didn't need refinement)
- ⭐ Component required minimal/no modification
- ⭐ Suggested related components user actually needed
- ⭐ User able to integrate component successfully

---

## Example Workflow Execution

### Example 1: Simple Request

**User:** "I need a navbar"

**Step 1 - Understand:**
- Component type: Navigation
- Category: navigation/navbars
- No specific style mentioned

**Step 2 - Load Knowledge:**
- Catalog loaded, found navigation category with 11 navbar variants

**Step 3 - Search:**
- Category search: navigation/navbars
- Found 11 variants

**Step 4 - Present:**
Showed options:
1. Simple dark menu left (most common)
2. Dark with search (if search needed)
3. With tabs (if tabs needed)

**Step 5 - Retrieve:**
User selected #1
- Read file: navigation/navbars/01-simple-dark-menu-left.md
- Extracted code and metadata

**Step 6 - Deliver:**
- Provided TSX code
- Listed dependencies: @headlessui/react, @heroicons/react
- Suggested footer component to match

**Result:** ✅ User has working navbar in < 3 minutes

---

### Example 2: Complex Request

**User:** "Build me a dashboard page with a sidebar, stats at the top, and a table of recent orders"

**Step 1 - Understand:**
- Component type: Multiple (page layout + data display)
- Scope: Complete page
- Components needed:
  1. Application shell with sidebar
  2. Stats display
  3. Data table

**Step 2 - Load Knowledge:**
- Catalog loaded
- Use case match: "Dashboard Layout"

**Step 3 - Search:**
- Use case search found recommended components:
  - Application shells → sidebar layouts
  - Data display → stats
  - Data display → tables

**Step 4 - Present:**
Grouped by purpose:
- **Layout:** 3 sidebar layout options
- **Stats:** 2 stats display options
- **Table:** 2 table options

**Step 5 - Retrieve (3 times):**
User selected:
1. Sidebar layout: simple-dark-sidebar
2. Stats: simple stats (4-up cards)
3. Table: with striped rows

**Step 6 - Deliver:**
- Provided all 3 components
- Explained assembly: Shell wraps stats + table
- Listed all dependencies
- Suggested pagination component for table

**Result:** ✅ User has complete dashboard structure in < 10 minutes

---

## Summary

This workflow transforms component discovery from manual browsing into intelligent, guided selection. By leveraging the catalog's use case recommendations, tag index, and category structure, agents can quickly find and deliver the perfect component(s) for any user request.

**Key Success Factors:**
1. Start with use case matching (fastest path)
2. Present meaningful options (not just first results)
3. Deliver exact code (production-ready)
4. Think beyond single component (suggest related)
5. Clarify when needed (better results)
