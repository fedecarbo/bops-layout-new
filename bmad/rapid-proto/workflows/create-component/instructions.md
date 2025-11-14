# Create Component Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/rapid-proto/workflows/create-component/workflow.yaml</critical>
<critical>BEFORE creating components, load {project-root}/bmad/tech-kb/tailwind-v4/essentials.md for correct Tailwind v4.1 patterns</critical>
<critical>BEFORE creating or working with Catalyst UI components, load {project-root}/bmad/tech-kb/catalyst-ui/essentials.md for correct component patterns and usage</critical>
<critical>ALWAYS read context files to understand project state before creating components</critical>

<workflow>

<step n="1" goal="Load project context and understand current state">

<action>Load context files to understand what exists</action>
<action>Read: {project-root}/docs/rapid-prototype/project-brief.md</action>
<action>Read: {project-root}/docs/rapid-prototype/build-log.md</action>
<action>Read: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Scan existing components directory</action>
<action>List files in: {project-root}/components/catalyst/</action>
<action>List files in: {project-root}/components/shared/</action>

<action>Note: Understanding existing components prevents duplicates and ensures consistency</action>

</step>

<step n="2" goal="Gather component requirements">

<ask response="component_name">What's the name of the component? (e.g., "StatsCard", "UserAvatar", "DashboardHeader")</ask>
<action>Convert to kebab-case for filename: {{component_name}} → {{filename}}.tsx</action>

<ask response="component_purpose">What does this component do? (one sentence)</ask>

<ask response="component_type">What type of component?
a) UI - Based on Catalyst UI patterns (buttons, inputs, dialogs)
b) Shared - Custom reusable component (cards, layouts, utilities)
c) Feature - Feature-specific component (dashboard-specific, booking-specific)
</ask>

<action>Set component path based on type:</action>
<check if="component_type == 'ui' or component_type == 'a'">
  <action>Set: component_path = {project-root}/components/catalyst/{{filename}}.tsx</action>
  <action>Note: UI components extend or use Catalyst patterns</action>
</check>
<check if="component_type == 'shared' or component_type == 'b'">
  <action>Set: component_path = {project-root}/components/shared/{{filename}}.tsx</action>
  <action>Note: Shared components are custom but reusable</action>
</check>
<check if="component_type == 'feature' or component_type == 'c'">
  <ask response="feature_name">Which feature? (e.g., "dashboard", "booking")</ask>
  <action>Set: component_path = {project-root}/components/{{feature_name}}/{{filename}}.tsx</action>
  <action>Create directory if needed: {project-root}/components/{{feature_name}}/</action>
</check>

<ask response="has_props" optional="true">Does the component accept props? (y/n, default: y)</ask>
<check if="has_props == 'y' or has_props == ''">
  <ask response="props_description">Describe the props (e.g., "user object with name and avatar", "title string and count number")</ask>
</check>

<ask response="uses_state" optional="true">Does it need internal state? (y/n, default: n)</ask>

<ask response="needs_mock_data" optional="true">Should I create mock data for this component? (y/n, default: n)</ask>

</step>

<step n="3" goal="Search UI Blocks library for existing components">

<action>Check if a similar component exists in UI Blocks library</action>
<action>Read: {project-root}/bmad/tech-kb/tailwind-ui-blocks/catalog.md</action>

<action>Search catalog based on component description</action>
<check if="component_purpose mentions 'button' or 'dropdown' or 'badge' or 'avatar'">
  <action>Search category: Elements</action>
</check>
<check if="component_purpose mentions 'table' or 'list' or 'stat' or 'calendar'">
  <action>Search category: Data Display or Lists</action>
</check>
<check if="component_purpose mentions 'form' or 'input' or 'select' or 'checkbox'">
  <action>Search category: Forms</action>
</check>
<check if="component_purpose mentions 'modal' or 'alert' or 'notification'">
  <action>Search category: Overlays or Feedback</action>
</check>

<ask response="found_similar">Did you find similar components in the UI Blocks library? (y/n)</ask>

<check if="found_similar == 'y'">
  <ask response="use_as_reference">Would you like to:
a) Use the UI Block component directly (copy code)
b) Use it as reference (customize from it)
c) Build custom component instead
  </ask>

  <check if="use_as_reference == 'a'">
    <action>Execute select-ui-block workflow</action>
    <action>Call workflow: {project-root}/bmad/rapid-proto/workflows/select-ui-block/workflow.yaml</action>
    <action>Input: "{{component_purpose}}"</action>
    <action>User selects component from UI Blocks</action>
    <action>Copy selected component code to {{component_path}}</action>
    <action>Adapt to project structure (update imports, adjust styling if needed)</action>
    <action>Skip to step 6 (documentation)</action>
  </check>

  <check if="use_as_reference == 'b'">
    <action>Execute select-ui-block workflow for reference</action>
    <action>Use UI Block component patterns and structure as guide</action>
    <action>Proceed to step 4 with reference in mind</action>
  </check>
</check>

<check if="found_similar != 'y' or use_as_reference == 'c'">
  <action>Proceed to create custom component from scratch</action>
</check>

</step>

<step n="4" goal="Create component file with TypeScript and Catalyst patterns">

<action>Generate component code following best practices:</action>

<critical>Component structure rules:
- Use TypeScript with strict typing
- Import only needed Catalyst components
- Use Tailwind v4.1 utility classes (correct shadow/ring scales)
- Export interface for props (if any)
- Add JSDoc comment for documentation
- Use 'use client' directive if interactive (state, events, hooks)
</critical>

<action>Create component file at: {{component_path}}</action>

<action>Template structure:</action>

```typescript
{{if uses_state or interactive}}
'use client'
{{endif}}

import { {{catalyst_imports}} } from '@headlessui/react'
import { clsx } from 'clsx'
{{if has_props}}

/**
 * {{component_purpose}}
 */
interface {{component_name}}Props {
  // Define props based on {{props_description}}
}

export function {{component_name}}({ /* props */ }: {{component_name}}Props) {
  {{if uses_state}}
  // State management
  {{endif}}

  return (
    <div className="{{tailwind_classes}}">
      {/* Component JSX */}
    </div>
  )
}
{{else}}
export function {{component_name}}() {
  return (
    <div className="{{tailwind_classes}}">
      {/* Component JSX */}
    </div>
  )
}
{{endif}}
```

<action>Write actual implementation based on component requirements</action>

<action>Ensure Tailwind v4.1 compliance:</action>
- Use correct shadow scale (shadow-xs, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl)
- Use explicit ring widths (ring-1, ring-2, ring-3) not bare "ring"
- Use @theme variables if customizing colors
- Reference Catalyst patterns for UI components

</step>

<step n="5" goal="Create mock data if requested">

<check if="needs_mock_data == 'y'">
  <action>Create mock data file: {project-root}/lib/mock-data/{{filename}}.ts</action>

  <action>Generate type-safe mock data structure</action>

  <action>Template:</action>

```typescript
// Mock data for {{component_name}}
// Generated by Forge (Builder)

export interface {{component_name}}Data {
  // Define data structure based on component needs
}

export const mock{{component_name}}Data: {{component_name}}Data[] = [
  // Sample data entries
]
```

  <action>Export from central mock data index</action>
  <action>Add to: {project-root}/lib/mock-data/index.ts</action>
  <action>Add line: export * from './{{filename}}';</action>

</check>

</step>

<step n="6" goal="Create component usage example">

<action>Generate usage example for documentation</action>

<action>Example code:</action>

```typescript
// Example usage of {{component_name}}

import { {{component_name}} } from '@/components/{{component_type}}/{{filename}}'
{{if needs_mock_data}}
import { mock{{component_name}}Data } from '@/lib/mock-data'
{{endif}}

export default function ExamplePage() {
  return (
    <div>
      <{{component_name}} {{if has_props}}{{example_props}}{{endif}} />
    </div>
  )
}
```

<action>Store example for build log documentation</action>

</step>

<step n="7" goal="Document component creation in build log">

<action>Load current build log: {project-root}/docs/rapid-prototype/build-log.md</action>

<action>Append entry:</action>

```markdown
## {{date}} - {{component_name}} Component

- **Created by:** Forge (Builder)
- **Type:** {{component_type}} component
- **Location:** {{component_path}}
- **Purpose:** {{component_purpose}}
{{if has_props}}
- **Props:** {{props_description}}
{{endif}}
{{if uses_state}}
- **State:** Uses internal state management
{{endif}}
{{if needs_mock_data}}
- **Mock Data:** Created in lib/mock-data/{{filename}}.ts
{{endif}}

**Usage Example:**
```typescript
{{usage_example}}
```

**Files Created/Modified:**
- {{component_path}}
{{if needs_mock_data}}
- lib/mock-data/{{filename}}.ts
- lib/mock-data/index.ts (updated)
{{endif}}

---
```

<action>Save updated build log</action>

</step>

<step n="8" goal="Update context summary">

<action>Load: {project-root}/docs/rapid-prototype/context-summary.md</action>

<action>Update "What's Been Built" section</action>
<action>Add: "- {{component_name}} component ({{component_type}})"</action>

<action>Update "Recent Activity" section</action>
<action>Add: "- {{date}}: Created {{component_name}} component"</action>

<action>Save updated context summary</action>

</step>

<step n="9" goal="Validate component">

<action>Load validation checklist: {installed_path}/checklist.md</action>
<action>Run through checklist items</action>

<check if="validation_issues_found">
  <action>Fix issues immediately</action>
  <action>Re-validate</action>
</check>

<action>Confirm component is ready:</action>
- ✅ TypeScript strict mode compliant
- ✅ Proper prop types (if applicable)
- ✅ Tailwind v4.1 classes correct
- ✅ Follows Catalyst patterns (if UI component)
- ✅ Documented in build log
- ✅ Context summary updated

</step>

<step n="10" goal="Provide completion summary and next steps">

<action>Display summary:</action>

```
✅ Component Created: {{component_name}}

📁 Location: {{component_path}}
🎯 Purpose: {{component_purpose}}
📦 Type: {{component_type}}
{{if needs_mock_data}}
📊 Mock Data: lib/mock-data/{{filename}}.ts
{{endif}}

📋 Documentation Updated:
- build-log.md
- context-summary.md
```

<action>Suggest next steps:</action>

**Next Steps:**

1. **Use the component in a page:**
   ```typescript
   import { {{component_name}} } from '@/components/{{component_type}}/{{filename}}'
   ```

2. **Test the component:**
   - Add to existing page for visual testing
   - Verify Tailwind styles render correctly
   - Check TypeScript types work as expected

3. **Consider:**
   {{if !needs_mock_data and has_props}}
   - Create mock data with `*mock-data` command
   {{endif}}
   - Add more variants if needed
   - Refine styling with Sentinel (*refactor)

**Component ready to use!** 🚀

</step>

</workflow>
